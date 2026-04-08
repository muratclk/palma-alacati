"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, ChevronDown, MessageCircle } from "lucide-react";
import { hotelInfo } from "@/lib/data";

const slideImages = [
  "/images/hotel/325f6644.jpg",
  "/images/hotel/6a4c7b08.jpg",
  "/images/hotel/bar.jpg",
];

export default function Hero() {
  const t = useTranslations("hero");
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: slideImages[0], title: t("slide1Title"), subtitle: t("slide1Subtitle") },
    { image: slideImages[1], title: t("slide2Title"), subtitle: t("slide2Subtitle") },
    { image: slideImages[2], title: t("slide3Title"), subtitle: t("slide3Subtitle") },
  ];

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo, slides.length]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo, slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <div className="overflow-hidden py-2">
            <h1
              key={current}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.15] tracking-wide animate-[fadeInUp_0.8s_ease-out]"
              style={{ whiteSpace: "pre-line", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              {slides[current].title}
            </h1>
          </div>
          <div className="overflow-hidden mt-6">
            <p
              key={`sub-${current}`}
              className="text-white/90 text-lg md:text-xl tracking-wide font-light animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}
            >
              {slides[current].subtitle}
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10 animate-[fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(t("whatsappMessage"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-stone hover:bg-stone-dark text-white text-sm tracking-[0.15em] uppercase font-medium transition-all rounded-lg shadow-2xl"
            >
              {t("whatsappCta")}
            </a>
          </div>
        </div>
      </div>

      {/* Slide navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-stone-light"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
        aria-label={t("prev")}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
        aria-label={t("next")}
      >
        <ChevronRight size={20} />
      </button>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-white/40" />
      </div>

      {/* Keyframe */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
