"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryImages } from "@/lib/data";

function GalleryImage({
  src,
  alt,
  className,
  delay,
}: {
  src: string;
  alt: string;
  className?: string;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay} className={className}>
      <div className="group relative overflow-hidden rounded-2xl h-full cursor-pointer">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <span className="text-white text-xs md:text-sm uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 inline-block">
            {alt}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Gallery() {
  const t = useTranslations("gallery");
  const images = galleryImages.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-cream-dark/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel text={t("label")} />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            {t("heading1")}{" "}
            <span className="text-aegean italic">{t("heading2")}</span>
          </h2>
        </ScrollReveal>

        {/* Desktop: 2 rows bento layout, Mobile: simple 2-col grid */}
        {/* Row 1: hero wide (2/3) + tall portrait (1/3 spanning 2 rows) */}
        {/* Row 2: two squares (1/3 each) under the hero */}
        <div className="hidden md:grid md:grid-cols-3 gap-4" style={{ gridTemplateRows: "280px 280px" }}>
          {/* Large hero - top left, spans 2 cols */}
          <GalleryImage
            src={images[0].src}
            alt={t(images[0].altKey)}
            className="col-span-2 row-span-1"
            delay={0}
          />
          {/* Tall portrait - right, spans 2 rows */}
          <GalleryImage
            src={images[1].src}
            alt={t(images[1].altKey)}
            className="col-span-1 row-span-2"
            delay={0.08}
          />
          {/* Two squares - bottom left */}
          <GalleryImage
            src={images[2].src}
            alt={t(images[2].altKey)}
            className="col-span-1 row-span-1"
            delay={0.16}
          />
          <GalleryImage
            src={images[3].src}
            alt={t(images[3].altKey)}
            className="col-span-1 row-span-1"
            delay={0.24}
          />
        </div>

        {/* Bottom row: wide + small */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mt-4" style={{ gridTemplateRows: "260px" }}>
          <GalleryImage
            src={images[4].src}
            alt={t(images[4].altKey)}
            className="col-span-2"
            delay={0.32}
          />
          <GalleryImage
            src={images[5].src}
            alt={t(images[5].altKey)}
            className="col-span-1"
            delay={0.4}
          />
        </div>

        {/* Mobile: simple 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {images.map((img, i) => (
            <GalleryImage
              key={i}
              src={img.src}
              alt={t(img.altKey)}
              className={i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"}
              delay={i * 0.08}
            />
          ))}
        </div>

        <ScrollReveal className="text-center mt-14">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-stone text-stone text-sm tracking-[0.15em] uppercase font-medium hover:bg-stone hover:text-white transition-all duration-300 rounded-full"
          >
            {t("viewAll")}
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
