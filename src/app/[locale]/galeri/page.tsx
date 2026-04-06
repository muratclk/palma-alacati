"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryImages } from "@/lib/data";
import { X } from "lucide-react";

const categories = [
  { key: "tumu", label: "Tumu" },
  { key: "otel", label: "Otel" },
  { key: "odalar", label: "Odalar" },
  { key: "restoran", label: "Restoran" },
  { key: "spa", label: "SPA" },
  { key: "cevre", label: "Cevre" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("tumu");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "tumu"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel/35f447c1.jpg"
            alt="Palma Alacati galeri"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel text="Fotograf" className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Galeri
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <ScrollReveal className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm tracking-wider uppercase transition-all ${
                  activeCategory === cat.key
                    ? "bg-sage text-white"
                    : "bg-white text-warm-gray border border-border hover:border-sage hover:text-sage"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((img, i) => (
              <ScrollReveal key={`${img.src}-${i}`} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-xl aspect-square w-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.alt}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Kapat"
          >
            <X size={28} />
          </button>
          <img
            src={filteredImages[lightbox].src}
            alt={filteredImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
