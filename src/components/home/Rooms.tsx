"use client";

import Link from "next/link";
import { ArrowRight, Users, Maximize } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { rooms } from "@/lib/data";

export default function Rooms() {
  const featuredRooms = rooms.filter((r) => r.featured);

  return (
    <section className="py-24 md:py-32 bg-cream-dark/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel text="Odalar" />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            Daireler &amp; Suitler
          </h2>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-base md:text-lg">
            Her biri kendine özgü tasarımı ve özel mutfağı ile 5 özel dairemizde
            Alacati&apos;nin huzurunu yaşayın.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRooms.map((room, index) => (
            <ScrollReveal key={room.slug} delay={index * 0.15}>
              <Link href={`/odalar/${room.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    index === 0 ? "md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full" : "aspect-[3/2]"
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
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
                        {room.capacity} Kişi
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-white">
                      {room.name}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {room.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-stone-light text-sm">
                        {room.price ? `${room.price} TL / gece` : "Fiyat için arayın"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-white/60 text-xs uppercase tracking-wider group-hover:text-stone-light transition-colors">
                        İncele
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
            Tüm Odaları Gör
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
