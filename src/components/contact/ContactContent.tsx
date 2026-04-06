"use client";

import { Phone, Mail, MapPin, Clock, Camera } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { hotelInfo, faqItems } from "@/lib/data";

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel/922ba4ad.jpg"
            alt="Palma Alacati iletisim"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel text="Bize Ulasin" className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Iletisim
          </h1>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Phone, title: "Telefon", value: hotelInfo.phone, href: `tel:${hotelInfo.phone}` },
              { icon: Mail, title: "E-posta", value: hotelInfo.email, href: `mailto:${hotelInfo.email}` },
              { icon: MapPin, title: "Adres", value: hotelInfo.address, href: "#map" },
              { icon: Clock, title: "Giris / Cikis", value: `Check-in: ${hotelInfo.checkIn} / Check-out: ${hotelInfo.checkOut}`, href: undefined },
            ].map((card) => (
              <ScrollReveal key={card.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center h-full hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 mx-auto rounded-full bg-sage/10 flex items-center justify-center mb-4">
                    <card.icon size={22} className="text-sage" />
                  </div>
                  <h3 className="font-medium text-charcoal">{card.title}</h3>
                  {card.href ? (
                    <a href={card.href} className="text-warm-gray text-sm mt-2 block hover:text-stone transition-colors">{card.value}</a>
                  ) : (
                    <p className="text-warm-gray text-sm mt-2">{card.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <SectionLabel text="Rezervasyon" />
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4 mb-8">
                Rezervasyon <span className="text-stone italic">Formu</span>
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-charcoal mb-1.5">Ad Soyad</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-sage transition-colors" placeholder="Adiniz Soyadiniz" />
                  </div>
                  <div>
                    <label className="block text-sm text-charcoal mb-1.5">Telefon</label>
                    <input type="tel" className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-sage transition-colors" placeholder="+90 5XX XXX XX XX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-charcoal mb-1.5">E-posta</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-sage transition-colors" placeholder="ornek@email.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-charcoal mb-1.5">Giris Tarihi</label>
                    <input type="date" className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-sage transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-charcoal mb-1.5">Cikis Tarihi</label>
                    <input type="date" className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-sage transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-charcoal mb-1.5">Oda Tercihi</label>
                  <select className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-sage transition-colors appearance-none">
                    <option value="">Oda Seciniz</option>
                    <option value="grand-suite">Grand Suite</option>
                    <option value="deluxe-suite">Deluxe Suite</option>
                    <option value="cati-kati-suite">Cati Kati Suite</option>
                    <option value="superior-oda">Superior Oda</option>
                    <option value="bahce-oda">Bahce Oda</option>
                    <option value="standart-oda">Standart Oda</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-charcoal mb-1.5">Mesajiniz</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:border-sage transition-colors resize-none" placeholder="Ozel istekleriniz varsa belirtiniz..." />
                </div>
                <button type="submit" className="w-full py-3.5 bg-stone text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-stone-dark transition-colors rounded-lg">
                  Rezervasyon Talebi Gonder
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div id="map" className="h-full min-h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.8!2d${hotelInfo.coordinates.lng}!3d${hotelInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE2JzU3LjQiTiAyNsKwMjInMzUuMCJF!5e0!3m2!1str!2str!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 500 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Palma Alacati konum"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-cream-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text="SSS" />
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4">
              Sık Sorulan <span className="text-stone italic">Sorular</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <details className="group bg-white rounded-xl border border-border overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-charcoal font-medium text-sm hover:text-stone transition-colors list-none">
                    {item.question}
                    <span className="ml-4 flex-shrink-0 text-warm-gray group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-warm-gray text-sm leading-relaxed">{item.answer}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-sage text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-white">Hizli Iletisim</h2>
          <p className="text-white/70 mt-2">WhatsApp uzerinden aninda cevap alin</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-sage text-sm tracking-[0.15em] uppercase font-medium rounded-lg hover:bg-cream transition-colors">
              WhatsApp ile Yazin
            </a>
            <a href={`https://instagram.com/${hotelInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 border border-white/40 text-white text-sm tracking-[0.15em] uppercase font-medium rounded-lg hover:bg-white/10 transition-colors">
              <Camera size={16} />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
