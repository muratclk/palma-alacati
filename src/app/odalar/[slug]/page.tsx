import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Users,
  Maximize,
  Eye,
  BedDouble,
  Check,
  ArrowLeft,
  Phone,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { rooms } from "@/lib/data";
import { generateRoomJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: `${room.name} - Odalar`,
    description: `${room.name} - ${room.description.slice(0, 160)}`,
    alternates: { canonical: `https://palmaalacati.com/odalar/${room.slug}` },
    openGraph: {
      images: [{ url: room.image, width: 800, height: 600, alt: room.name }],
    },
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  const roomJsonLd = generateRoomJsonLd(room);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Ana Sayfa", url: "https://palmaalacati.com" },
    { name: "Odalar", url: "https://palmaalacati.com/odalar" },
    { name: room.name, url: `https://palmaalacati.com/odalar/${room.slug}` },
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
            alt={room.name}
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
            Tum Odalar
          </Link>
          <h1 className="font-heading text-5xl md:text-6xl text-white">
            {room.name}
          </h1>
          <div className="flex items-center gap-6 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Maximize size={14} />
              {room.size} m&sup2;
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} />
              {room.capacity} Kisi
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={14} />
              {room.view}
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={14} />
              {room.bedType}
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
                  Oda Hakkinda
                </h2>
                <p className="mt-4 text-warm-gray leading-relaxed text-lg">
                  {room.description}
                </p>
              </ScrollReveal>

              {/* Gallery grid */}
              <ScrollReveal className="mt-12">
                <h3 className="font-heading text-2xl text-charcoal mb-6">
                  Galeri
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.gallery.map((img, i) => (
                    <div
                      key={i}
                      className={`overflow-hidden rounded-xl ${
                        i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${room.name} - ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right sidebar - Details & Booking */}
            <div>
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border sticky top-28">
                  <div className="text-center border-b border-border pb-6 mb-6">
                    <span className="font-heading text-4xl text-stone">
                      {room.price} TL
                    </span>
                    <span className="text-warm-gray text-sm block mt-1">
                      / gece (kahvalti dahil)
                    </span>
                  </div>

                  {/* Room details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">Alan</span>
                      <span className="text-charcoal font-medium">
                        {room.size} m&sup2;
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">Kapasite</span>
                      <span className="text-charcoal font-medium">
                        {room.capacity} Kisi
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">Yatak</span>
                      <span className="text-charcoal font-medium">
                        {room.bedType}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-warm-gray">Manzara</span>
                      <span className="text-charcoal font-medium">
                        {room.view}
                      </span>
                    </div>
                  </div>

                  <a
                    href="tel:+902327160000"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-stone text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-stone-dark transition-colors rounded-lg"
                  >
                    <Phone size={16} />
                    Rezervasyon Yap
                  </a>

                  {/* Amenities */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium text-charcoal mb-3">
                      Oda Olanaklari
                    </h4>
                    <div className="space-y-2">
                      {room.amenities.map((a) => (
                        <div
                          key={a}
                          className="flex items-center gap-2 text-sm text-warm-gray"
                        >
                          <Check size={14} className="text-sage flex-shrink-0" />
                          {a}
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
            <SectionLabel text="Diger Odalar" />
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4">
              Diger Odalarimiz
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRooms.map((r) => (
              <ScrollReveal key={r.slug}>
                <Link
                  href={`/odalar/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-2xl text-white">
                        {r.name}
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
