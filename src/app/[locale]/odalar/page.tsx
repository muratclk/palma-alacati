import type { Metadata } from "next";
import { Users, Maximize, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { rooms } from "@/lib/data";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("roomsTitle"),
    description: t("roomsDescription"),
    alternates: {
      canonical: `https://palmaalacati.com/${locale}/odalar`,
      languages: {
        tr: "https://palmaalacati.com/tr/odalar",
        en: "https://palmaalacati.com/en/odalar",
      },
    },
  };
}

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rooms" });
  const dataT = await getTranslations({ locale, namespace: "data" });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: t("allRooms"), url: "https://palmaalacati.com" },
    { name: t("label"), url: "https://palmaalacati.com/odalar" },
  ]);

  const getDescription = (slug: string) => {
    const keyMap: Record<string, string> = {
      pietra: "roomPietraDesc",
      acqua: "roomAcquaDesc",
      terra: "roomTerraDesc",
      priva: "roomPrivaDesc",
      aria: "roomAriaDesc",
      curva: "roomCurvaDesc",
      luce: "roomLuceDesc",
    };
    return dataT(keyMap[slug] || "roomPietraDesc");
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel/4001fb51.jpg"
            alt="Palma Alaçatı odalar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel text={t("accommodationLabel")} className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            {t("heading")}
          </h1>
          <p className="text-white/70 mt-4 text-lg max-w-xl mx-auto">
            {t("roomsSubtitle")}
          </p>
        </div>
      </section>

      {/* Rooms list */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <ScrollReveal key={room.slug}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <Link
                    href={`/odalar/${room.slug}`}
                    className="group block relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[4/5]"
                  >
                    <img
                      src={room.image}
                      alt={locale === "en" ? room.nameEn : room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </Link>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 text-sm text-warm-gray mb-4">
                      <span className="flex items-center gap-1.5">
                        <Maximize size={14} />
                        {room.size} m&sup2;
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={14} />
                        {room.capacity} {t("person")}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                      {locale === "en" ? room.nameEn : room.name}
                    </h2>
                    <p className="mt-4 text-warm-gray leading-relaxed">
                      {getDescription(room.slug)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {room.amenities.slice(0, 5).map((a) => (
                        <span
                          key={a}
                          className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full"
                        >
                          {dataT(a)}
                        </span>
                      ))}
                      {room.amenities.length > 5 && (
                        <span className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full">
                          +{room.amenities.length - 5}
                        </span>
                      )}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-heading text-2xl text-stone">
                        {room.price
                          ? `${room.price} TL`
                          : t("callForPriceShort")}
                        {room.price && (
                          <span className="text-warm-gray text-sm font-sans">
                            {" "}{t("pricePerNight")}
                          </span>
                        )}
                      </span>
                      <Link
                        href={`/odalar/${room.slug}`}
                        className="inline-flex items-center gap-2 text-stone text-sm tracking-[0.1em] uppercase font-medium hover:gap-3 transition-all"
                      >
                        {t("detail")}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
                {index < rooms.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
