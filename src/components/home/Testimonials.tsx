"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hotel/4ed14e72.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <SectionLabel text="Misafir Yorumlari" className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-4">
            Misafirlerimiz <span className="text-stone-light italic">Ne Diyor?</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 relative">
          <Quote size={48} className="text-stone/30 mx-auto mb-8" />

          <div className="min-h-[200px] flex items-center justify-center">
            <div
              key={current}
              className="animate-[fadeIn_0.6s_ease-out]"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-stone-light text-stone-light"
                  />
                ))}
              </div>

              <blockquote className="font-heading text-xl md:text-2xl text-white/90 leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              <div className="mt-8">
                <p className="text-white font-medium">{testimonials[current].name}</p>
                <p className="text-warm-gray text-sm">
                  {testimonials[current].location} &middot;{" "}
                  {testimonials[current].room}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
              aria-label="Onceki yorum"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-stone-light"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Yorum ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
              aria-label="Sonraki yorum"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
