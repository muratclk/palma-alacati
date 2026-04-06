"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { hotelInfo } from "@/lib/data";

export default function CTA() {
  const t = useTranslations("cta");

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
            {t("heading1")}
            <br />
            <span className="text-stone-light italic">{t("heading2")}</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
            {t("description")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-stone hover:bg-stone-dark text-white text-sm tracking-[0.2em] uppercase font-medium transition-colors"
            >
              <MessageCircle size={18} />
              {t("bookNow")}
            </a>
            <Link
              href="/odalar"
              className="px-10 py-4 border border-white/40 text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors"
            >
              {t("viewRooms")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
