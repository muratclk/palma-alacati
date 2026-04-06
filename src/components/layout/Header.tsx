"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { hotelInfo } from "@/lib/data";

const navLinks = [
  { href: "/", labelKey: "home" },
  { href: "/odalar", labelKey: "rooms" },
  { href: "/galeri", labelKey: "gallery" },
  { href: "/hakkimizda", labelKey: "about" },
  { href: "/iletisim", labelKey: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top info bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="bg-charcoal/90 backdrop-blur-sm text-cream/80 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
            <div className="flex items-center gap-4">
              <a
                href="tel:+902327160000"
                className="flex items-center gap-1.5 hover:text-stone-light transition-colors"
              >
                <Phone size={12} />
                <span>+90 232 716 00 00</span>
              </a>
              <a
                href="mailto:info@palmaalacati.com"
                className="hidden sm:flex items-center gap-1.5 hover:text-stone-light transition-colors"
              >
                <Mail size={12} />
                <span>info@palmaalacati.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-[11px] tracking-wider uppercase">
              <span className="text-stone-light">{t("location")}</span>
              <div className="flex items-center gap-1.5">
                <button onClick={() => switchLocale("tr")} className={locale === "tr" ? "text-white" : "text-white/50"}>TR</button>
                <span className="text-white/30">|</span>
                <button onClick={() => switchLocale("en")} className={locale === "en" ? "text-white" : "text-white/50"}>EN</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-cream/95 backdrop-blur-md shadow-sm"
            : "top-9 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex flex-col items-center">
                <span
                  className={`font-heading text-2xl md:text-3xl tracking-[0.15em] transition-colors duration-300 ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  PALMA
                </span>
                <span
                  className={`text-[10px] tracking-[0.4em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-stone" : "text-stone-light"
                  }`}
                >
                  Alacati
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-[0.08em] uppercase font-medium transition-colors duration-300 py-1
                    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full
                    ${
                      scrolled
                        ? "text-charcoal/70 hover:text-charcoal after:bg-stone"
                        : "text-white/80 hover:text-white after:bg-stone-light"
                    }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>

            {/* Reservation button + mobile toggle */}
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium border transition-all duration-300 ${
                  scrolled
                    ? "border-stone text-stone hover:bg-stone hover:text-white"
                    : "border-white/60 text-white hover:bg-white/10"
                }`}
              >
                <MessageCircle size={14} />
                {t("reservation")}
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 transition-colors ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 bg-charcoal transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-heading tracking-[0.1em] hover:text-stone-light transition-colors"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <a
            href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 px-8 py-3 border border-stone-light text-stone-light text-sm tracking-[0.2em] uppercase hover:bg-stone-light hover:text-charcoal transition-all"
          >
            <MessageCircle size={16} />
            {t("reservation")}
          </a>
          <div className="mt-4 flex items-center gap-1.5">
            <button onClick={() => { switchLocale("tr"); setMobileOpen(false); }} className={locale === "tr" ? "text-white text-lg" : "text-white/50 text-lg"}>TR</button>
            <span className="text-white/30">|</span>
            <button onClick={() => { switchLocale("en"); setMobileOpen(false); }} className={locale === "en" ? "text-white text-lg" : "text-white/50 text-lg"}>EN</button>
          </div>
          <div className="mt-8 text-warm-gray text-sm flex flex-col items-center gap-2">
            <a href="tel:+902327160000" className="hover:text-stone-light transition-colors">
              +90 232 716 00 00
            </a>
            <span>info@palmaalacati.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
