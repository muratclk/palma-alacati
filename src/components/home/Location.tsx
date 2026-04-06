"use client";

import { MapPin, Clock, Car, Plane } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { hotelInfo } from "@/lib/data";

export default function Location() {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel text="Konum" />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            Bize <span className="text-sage italic">Ulasin</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden bg-cream-dark min-h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.8!2d${hotelInfo.coordinates.lng}!3d${hotelInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE2JzU3LjQiTiAyNsKwMjInMzUuMCJF!5e0!3m2!1str!2str!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Palma Alacati konum haritasi"
              />
            </div>
          </ScrollReveal>

          {/* Info cards */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-4 h-full flex flex-col justify-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal text-sm">Adres</h3>
                    <p className="text-warm-gray text-sm mt-1">{hotelInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal text-sm">
                      Giris / Cikis
                    </h3>
                    <p className="text-warm-gray text-sm mt-1">
                      Check-in: {hotelInfo.checkIn} &middot; Check-out:{" "}
                      {hotelInfo.checkOut}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-aegean/10 flex items-center justify-center flex-shrink-0">
                    <Car size={18} className="text-aegean" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal text-sm">
                      Aracla Ulasim
                    </h3>
                    <p className="text-warm-gray text-sm mt-1">
                      Izmir merkezden yaklasik 1 saat (80 km). Cesme otoyolunu
                      kullanarak kolayca ulasabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-aegean/10 flex items-center justify-center flex-shrink-0">
                    <Plane size={18} className="text-aegean" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal text-sm">
                      Havayolu ile
                    </h3>
                    <p className="text-warm-gray text-sm mt-1">
                      Izmir Adnan Menderes Havalimani&apos;ndan yaklasik 80 km.
                      Transfer hizmeti mevcuttur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
