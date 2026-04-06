"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hotel/922ba4ad.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-stone-light text-sm tracking-[0.3em] uppercase">
            Palma Alacati
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-4 leading-[1.15]">
            Unutulmaz Bir Tatil
            <br />
            <span className="text-stone-light italic">Sizi Bekliyor</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
            Alacati&apos;nin buyuleyici atmosferinde, size ozel bir deneyim icin
            hemen rezervasyon yapin.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="px-10 py-4 bg-stone text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-stone-dark transition-colors"
            >
              Rezervasyon Yap
            </Link>
            <Link
              href="/odalar"
              className="px-10 py-4 border border-white/40 text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors"
            >
              Odalari Incele
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
