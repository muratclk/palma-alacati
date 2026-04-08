"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, ArrowUp, Camera } from "lucide-react";
import { hotelInfo } from "@/lib/data";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const amenitiesT = useTranslations("amenities");

  const footerLinksExplore = [
    { href: "/odalar", labelKey: "rooms" },
    { href: "/galeri", labelKey: "gallery" },
    { href: "/hakkimizda", labelKey: "about" },
    { href: "/iletisim", labelKey: "contact" },
  ] as const;

  const footerLinksServices = [
    { href: "/odalar", label: t("accommodation") },
    { href: "/#amenities", label: amenitiesT("privateKitchen") },
    { href: "/#amenities", label: t("seasonalPool") },
    { href: "/#amenities", label: amenitiesT("freeWifi") },
    { href: "/#amenities", label: amenitiesT("freeParking") },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white/70">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-white tracking-wide">
                {t("newsletterHeading")}
              </h3>
              <p className="mt-2 text-warm-gray text-sm">
                {t("newsletterDesc")}
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="px-5 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/30 text-sm w-full md:w-72 focus:outline-none focus:border-stone transition-colors"
                aria-label={t("emailPlaceholder")}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-stone text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-dark transition-colors whitespace-nowrap"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl text-white tracking-[0.15em]">
                PALMA
              </span>
              <span className="block text-[10px] tracking-[0.4em] uppercase text-stone-light">
                Alaçatı
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-warm-gray">
              {hotelInfo.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={`https://instagram.com/${hotelInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-stone hover:text-stone transition-all"
                aria-label="Instagram"
              >
                <Camera size={16} />
              </a>
            </div>
          </div>

          {/* Links - Explore */}
          <div>
            <h4 className="text-white text-sm tracking-[0.15em] uppercase font-medium mb-6">
              {t("explore")}
            </h4>
            <ul className="space-y-3">
              {footerLinksExplore.map((link) => (
                <li key={link.href + link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-stone-light transition-colors"
                  >
                    {nav(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Services */}
          <div>
            <h4 className="text-white text-sm tracking-[0.15em] uppercase font-medium mb-6">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {footerLinksServices.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-stone-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white text-sm tracking-[0.15em] uppercase font-medium mb-6">
              {t("contactTitle")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${hotelInfo.phone}`}
                  className="flex items-start gap-3 text-sm text-warm-gray hover:text-stone-light transition-colors"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{hotelInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${hotelInfo.email}`}
                  className="flex items-start gap-3 text-sm text-warm-gray hover:text-stone-light transition-colors"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{hotelInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-gray">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{hotelInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} Palma Alaçatı. {t("copyright")}
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-stone hover:text-stone transition-all"
            aria-label={t("scrollToTop")}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
