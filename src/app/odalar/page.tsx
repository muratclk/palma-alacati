import type { Metadata } from "next";
import Link from "next/link";
import { Users, Maximize, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { rooms } from "@/lib/data";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Odalar & Suitler",
  description:
    "Palma Alacati'nin ozenle tasarlanmis odalari ve suitleri. Grand Suite, Deluxe Suite, Superior Oda ve daha fazlasi. Alacati'nin en guzel butik otel odalari.",
  alternates: { canonical: "https://palmaalacati.com/odalar" },
};

export default function RoomsPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Ana Sayfa", url: "https://palmaalacati.com" },
    { name: "Odalar", url: "https://palmaalacati.com/odalar" },
  ]);

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
            src="https://placehold.co/1920x800/3D5A47/FAF8F4?text=Odalar"
            alt="Palma Alacati odalar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel text="Konaklama" className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Odalar &amp; Suitler
          </h1>
          <p className="text-white/70 mt-4 text-lg max-w-xl mx-auto">
            Her biri Alacati&apos;nin ruhunu yansitan, ozenle tasarlanmis odalarimiz
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
                    className="group block relative overflow-hidden rounded-2xl aspect-[4/3]"
                  >
                    <img
                      src={room.image}
                      alt={room.name}
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
                        {room.capacity} Kisi
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                      {room.name}
                    </h2>
                    <p className="mt-4 text-warm-gray leading-relaxed">
                      {room.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {room.amenities.slice(0, 5).map((a) => (
                        <span
                          key={a}
                          className="px-3 py-1 bg-sage/10 text-sage text-xs rounded-full"
                        >
                          {a}
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
                        {room.price} TL
                        <span className="text-warm-gray text-sm font-sans">
                          {" "}
                          / gece
                        </span>
                      </span>
                      <Link
                        href={`/odalar/${room.slug}`}
                        className="inline-flex items-center gap-2 text-stone text-sm tracking-[0.1em] uppercase font-medium hover:gap-3 transition-all"
                      >
                        Detay
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
