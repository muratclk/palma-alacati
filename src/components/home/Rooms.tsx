"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ArrowRight, Users, Maximize } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { rooms } from "@/lib/data";

export default function Rooms() {
  const t = useTranslations("rooms");
  const dataT = useTranslations("data");
  const locale = useLocale();
  const featuredRooms = rooms.filter((r) => r.featured);

  const getShortDesc = (slug: string) => {
    const keyMap: Record<string, string> = {
      "pietra": "roomPietraShort",
      "acqua": "roomAcquaShort",
      "terra": "roomTerraShort",
      "priva": "roomPrivaShort",
      "aria": "roomAriaShort",
      "curva": "roomCurvaShort",
      "luce": "roomLuceShort",
    };
    return dataT(keyMap[slug] || "roomPietraShort");
  };

  return (
    <section className="py-24 md:py-32 bg-cream-dark/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel text={t("label")} />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            {t("heading")}
          </h2>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-base md:text-lg">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRooms.map((room, index) => (
            <ScrollReveal key={room.slug} delay={index * 0.15}>
              <Link href={`/odalar/${room.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    index === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[3/4]"
                  }`}
                >
                  <img
                    src={room.image}
                    alt={locale === "en" ? room.nameEn : room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-white/70 text-xs">
                        <Maximize size={12} />
                        {room.size} m&sup2;
                      </span>
                      <span className="flex items-center gap-1 text-white/70 text-xs">
                        <Users size={12} />
                        {room.capacity} {t("person")}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-white">
                      {locale === "en" ? room.nameEn : room.name}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {getShortDesc(room.slug)}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-stone-light text-sm">
                        {room.price ? `${room.price} TL ${t("pricePerNight")}` : t("callForPrice")}
                      </span>
                      <span className="inline-flex items-center gap-1 text-white/60 text-xs uppercase tracking-wider group-hover:text-stone-light transition-colors">
                        {t("explore")}
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link
            href="/odalar"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-stone text-stone text-sm tracking-[0.15em] uppercase font-medium hover:bg-stone hover:text-white transition-all duration-300"
          >
            {t("viewAll")}
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
