import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Users,
  Maximize,
  Eye,
  BedDouble,
  Check,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Lightbox from "@/components/ui/Lightbox";
import { rooms, hotelInfo } from "@/lib/data";
import { generateRoomJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    rooms.map((room) => ({ locale, slug: room.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  const t = await getTranslations({ locale, namespace: "seo" });
  const roomName = locale === "en" ? room.nameEn : room.name;
  return {
    title: `${roomName} ${t("roomDetailSuffix")}`,
    description: `${roomName} - ${room.description.slice(0, 160)}`,
    alternates: {
      canonical: `https://palmaalacati.com/${locale}/odalar/${room.slug}`,
      languages: {
        tr: `https://palmaalacati.com/tr/odalar/${room.slug}`,
        en: `https://palmaalacati.com/en/odalar/${room.slug}`,
      },
    },
    openGraph: {
      images: [{ url: room.image, width: 800, height: 600, alt: roomName }],
    },
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  const t = await getTranslations({ locale, namespace: "rooms" });
  const dataT = await getTranslations({ locale, namespace: "data" });
  const seoT = await getTranslations({ locale, namespace: "seo" });

  const roomName = locale === "en" ? room.nameEn : room.name;

  const getDescription = (s: string) => {
    const keyMap: Record<string, string> = {
      pietra: "roomPietraDesc",
      acqua: "roomAcquaDesc",
      terra: "roomTerraDesc",
      priva: "roomPrivaDesc",
      aria: "roomAriaDesc",
      curva: "roomCurvaDesc",
      luce: "roomLuceDesc",
    };
    return dataT(keyMap[s] || "roomPietraDesc");
  };

  const getBedType = (bedType: string) => {
    if (bedType.includes("+")) return dataT("doublePlusSingleBeds");
    return dataT("doubleBed");
  };

  const getView = (view: string) => {
    if (view.includes("Havuz")) return dataT("poolGardenView");
    return dataT("gardenView");
  };

  const roomJsonLd = generateRoomJsonLd(room);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: seoT("breadcrumbHome"), url: "https://palmaalacati.com" },
    { name: seoT("breadcrumbRooms"), url: "https://palmaalacati.com/odalar" },
    { name: roomName, url: `https://palmaalacati.com/odalar/${room.slug}` },
  ]);

  const otherRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={room.gallery[0] || room.image}
            alt={roomName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href="/odalar"
            className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            {t("allRooms")}
          </Link>
          <h1 className="font-heading text-5xl md:text-6xl text-white">
            {roomName}
          </h1>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Maximize size={14} />
              {room.size} m&sup2;
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} />
              {room.capacity} {t("person")}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={14} />
              {getView(room.view)}
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={14} />
              {getBedType(room.bedType)}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - Description & Gallery */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading text-3xl text-charcoal">
                  {t("aboutRoom")}
                </h2>
                <p className="mt-4 text-warm-gray leading-relaxed text-lg">
                  {getDescription(room.slug)}
                </p>
              </ScrollReveal>

              {/* Gallery grid with Lightbox */}
              <ScrollReveal className="mt-12">
                <Lightbox
                  images={room.gallery}
                  alt={roomName}
                  galleryTitle={t("galleryTitle")}
                />
              </ScrollReveal>
            </div>

            {/* Right sidebar - Details & Booking */}
            <div>
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border sticky top-28">
                  <div className="text-center border-b border-border pb-6 mb-6">
                    {room.price ? (
                      <>
                        <span className="font-heading text-4xl text-stone">
                          {room.price} TL
                        </span>
                        <span className="text-warm-gray text-sm block mt-1">
                          {t("pricePerNight")}
                        </span>
                      </>
                    ) : (
                      <span className="font-heading text-2xl text-stone">
                        {t("callForPriceShort")}
                      </span>
                    )}
                  </div>

                  {/* Room details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">{t("area")}</span>
                      <span className="text-charcoal font-medium">
                        {room.size} m&sup2;
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">{t("capacity")}</span>
                      <span className="text-charcoal font-medium">
                        {room.capacity} {t("person")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">{t("bed")}</span>
                      <span className="text-charcoal font-medium">
                        {getBedType(room.bedType)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">{t("view")}</span>
                      <span className="text-charcoal font-medium">
                        {getView(room.view)}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(locale === "en" ? `Hello, I would like to make a reservation for the ${roomName} room.` : `Merhaba, ${roomName} odası için rezervasyon yapmak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-stone hover:bg-stone-dark text-white text-sm tracking-[0.15em] uppercase font-medium transition-colors rounded-lg"
                  >
                    <MessageCircle size={16} />
                    {t("bookNow")}
                  </a>

                  {/* Amenities */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium text-charcoal mb-3">
                      {t("roomAmenities")}
                    </h4>
                    <div className="space-y-2">
                      {room.amenities.map((a) => (
                        <div
                          key={a}
                          className="flex items-center gap-2 text-sm text-warm-gray"
                        >
                          <Check size={14} className="text-sage flex-shrink-0" />
                          {dataT(a)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other rooms */}
      <section className="py-16 md:py-24 bg-cream-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text={t("otherRoomsLabel")} />
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4">
              {t("otherRoomsHeading")}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRooms.map((r) => (
              <ScrollReveal key={r.slug}>
                <Link
                  href={`/odalar/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                    <img
                      src={r.image}
                      alt={locale === "en" ? r.nameEn : r.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-2xl text-white">
                        {locale === "en" ? r.nameEn : r.name}
                      </h3>
                      <p className="text-white/60 text-sm mt-1">
                        {r.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
