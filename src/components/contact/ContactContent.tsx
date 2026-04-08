"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, Camera } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { hotelInfo } from "@/lib/data";

export default function ContactContent() {
  const t = useTranslations("contact");
  const faq = useTranslations("faq");

  const faqItems = [
    { question: faq("q1"), answer: faq("a1") },
    { question: faq("q2"), answer: faq("a2") },
    { question: faq("q3"), answer: faq("a3") },
    { question: faq("q4"), answer: faq("a4") },
    { question: faq("q5"), answer: faq("a5") },
    { question: faq("q6"), answer: faq("a6") },
    { question: faq("q8"), answer: faq("a8") },
    { question: faq("q9"), answer: faq("a9") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel/922ba4ad.jpg"
            alt="Palma Alaçatı iletisim"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel text={t("heroLabel")} className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            {t("heroHeading")}
          </h1>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Phone, title: t("phone"), value: hotelInfo.phone, href: `tel:${hotelInfo.phone}` },
              { icon: Mail, title: t("email"), value: hotelInfo.email, href: `mailto:${hotelInfo.email}` },
              { icon: MapPin, title: t("addressTitle"), value: hotelInfo.address, href: "#map" },
              { icon: Clock, title: t("checkInOutTitle"), value: `Check-in: ${hotelInfo.checkIn} / Check-out: ${hotelInfo.checkOut}`, href: undefined },
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

          {/* Map */}
          <ScrollReveal>
            <div id="map" className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.9!2d26.3737438!3d38.2771283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb792ee260ea61%3A0x94ec4f68ba460479!2sPalma%20Ala%C3%A7at%C4%B1!5e0!3m2!1str!2str!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Palma Alaçatı konum"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-cream-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text={t("faqLabel")} />
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4">
              {t("faqHeading1")} <span className="text-stone italic">{t("faqHeading2")}</span>
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
          <h2 className="font-heading text-3xl text-white">{t("whatsappHeading")}</h2>
          <p className="text-white/70 mt-2">{t("whatsappDesc")}</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-sage text-sm tracking-[0.15em] uppercase font-medium rounded-lg hover:bg-cream transition-colors">
              {t("whatsappButton")}
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
