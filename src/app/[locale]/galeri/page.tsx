"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryImages } from "@/lib/data";

const categoryKeys = [
  { key: "all", filter: "all", labelKey: "filterAll" },
  { key: "otel", filter: "otel", labelKey: "filterHotel" },
  { key: "pietra", filter: "pietra", labelKey: "filterPietra" },
  { key: "acqua", filter: "acqua", labelKey: "filterAcqua" },
  { key: "terra", filter: "terra", labelKey: "filterTerra" },
  { key: "priva", filter: "priva", labelKey: "filterPriva" },
  { key: "aria", filter: "aria", labelKey: "filterAria" },
  { key: "curva", filter: "curva", labelKey: "filterCurva" },
  { key: "luce", filter: "luce", labelKey: "filterLuce" },
];

function GalleryLightbox({
  images,
  alts,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  alts: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return createPortal(
    <div
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-wider text-center max-w-md">
        {alts[currentIndex]}
      </div>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-8 z-10 p-3 text-white/50 hover:text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Image */}
      <div
        className="flex items-center justify-center px-16 py-20"
        style={{ width: "100vw", height: "100vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={alts[currentIndex]}
          className="max-w-full max-h-full object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-8 z-10 p-3 text-white/50 hover:text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={40} />
      </button>
    </div>,
    document.body
  );
}

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const lightboxSrcs = filteredImages.map((img) => img.src);
  const lightboxAlts = filteredImages.map((img) => t(img.altKey));

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === 0 ? filteredImages.length - 1 : i - 1
    );
  }, [filteredImages.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === filteredImages.length - 1 ? 0 : i + 1
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel/922ba4ad.jpg"
            alt="Palma Alaçatı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel
            text={t("photoLabel")}
            className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50"
          />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            {t("label")}
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <ScrollReveal className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categoryKeys.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.filter);
                  setLightboxIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all ${
                  activeCategory === cat.filter
                    ? "bg-stone text-white"
                    : "bg-white text-warm-gray border border-border hover:border-stone hover:text-stone"
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </ScrollReveal>

          {/* Photo count */}
          <p className="text-center text-warm-gray text-sm mb-8">
            {filteredImages.length} {t("photoLabel")}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((img, i) => (
              <ScrollReveal key={`${img.src}-${activeCategory}`} delay={Math.min(i * 0.03, 0.3)}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative overflow-hidden rounded-xl aspect-[3/4] w-full focus:outline-none focus:ring-2 focus:ring-stone focus:ring-offset-2"
                >
                  <img
                    src={img.src}
                    alt={t(img.altKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <span className="text-white text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 inline-block">
                      {t(img.altKey)}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with navigation */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={lightboxSrcs}
          alts={lightboxAlts}
          currentIndex={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
