"use client";

import * as LucideIcons from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { amenities } from "@/lib/data";

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/images/hotel/35f447c1.jpg"
                  alt="Palma Alacati bahce ve havuz alani"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-sage text-white rounded-2xl p-6 shadow-lg max-w-[200px]">
                <span className="font-heading text-4xl block leading-none">9+</span>
                <span className="text-xs tracking-wider uppercase mt-2 block text-white/80">
                  Premium Hizmet
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <SectionLabel text="Hizmetler" />
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4 leading-[1.15]">
                Otel{" "}
                <span className="text-sage italic">Olanaklari</span>
              </h2>
              <p className="mt-4 text-warm-gray text-base md:text-lg">
                Konaklamanizi eksiksiz bir deneyime donusturecek
                hizmetlerimiz.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {amenities.map((amenity, i) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const IconComponent = (LucideIcons as any)[amenity.icon] || LucideIcons.Star;
                return (
                  <ScrollReveal key={amenity.title} delay={i * 0.08}>
                    <div className="group text-center p-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all duration-300">
                        <IconComponent size={20} className="text-sage group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-medium text-charcoal text-sm mt-3">
                        {amenity.title}
                      </h3>
                      <p className="text-warm-gray text-xs mt-1 leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
