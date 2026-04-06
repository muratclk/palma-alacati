import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import { faqItems } from "@/lib/data";
import { generateBreadcrumbJsonLd, generateFAQJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Iletisim & Rezervasyon",
  description:
    "Palma Alacati iletisim bilgileri ve rezervasyon. Telefon, e-posta, adres ve ulasim bilgileri. Alacati, Cesme/Izmir.",
  alternates: { canonical: "https://palmaalacati.com/iletisim" },
};

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Ana Sayfa", url: "https://palmaalacati.com" },
    { name: "Iletisim", url: "https://palmaalacati.com/iletisim" },
  ]);
  const faqJsonLd = generateFAQJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
