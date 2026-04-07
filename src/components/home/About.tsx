"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/hotel/81d0ecd4.jpg"
                  alt="Palma Alacati dis gorunum"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-8 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden border-4 border-cream shadow-xl">
                <img
                  src="/images/hotel/6a4c7b08.jpg"
                  alt="Havuz alani"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-stone text-white rounded-2xl p-5 shadow-lg">
                <span className="font-heading text-3xl block leading-none">15+</span>
                <span className="text-[10px] tracking-wider uppercase mt-1 block text-white/80">
                  {t("yearsExperience")}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <SectionLabel text={t("label")} />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4 leading-[1.15]">
              {t("heading1")}
              <span className="text-stone italic"> {t("heading2")}</span>
            </h2>
            <p className="mt-6 text-warm-gray leading-relaxed text-base md:text-lg">
              {t("description1")}
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed">
              {t("description2")}
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <span className="font-heading text-4xl text-sage">7</span>
                <span className="block text-sm text-warm-gray mt-1">{t("statRooms")}</span>
              </div>
              <div>
                <span className="font-heading text-4xl text-sage">4.9</span>
                <span className="block text-sm text-warm-gray mt-1">
                  {t("statRating")}
                </span>
              </div>
              <div>
                <span className="font-heading text-4xl text-sage">3</span>
                <span className="block text-sm text-warm-gray mt-1">
                  {t("statLanguages")}
                </span>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 mt-8 text-stone text-sm tracking-[0.1em] uppercase font-medium hover:gap-4 transition-all group"
            >
              {t("moreLink")}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
