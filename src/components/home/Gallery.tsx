"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const t = useTranslations("gallery");
  const displayImages = galleryImages.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-cream-dark/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel text={t("label")} />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            {t("heading1")} <span className="text-aegean italic">{t("heading2")}</span>
          </h2>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {displayImages.map((img, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className={`${
                i === 0 ? "row-span-2" : ""
              } ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <div className="group relative overflow-hidden rounded-xl aspect-square h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-aegean text-aegean text-sm tracking-[0.15em] uppercase font-medium hover:bg-aegean hover:text-white transition-all duration-300"
          >
            {t("viewAll")}
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
