import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactContent from "@/components/contact/ContactContent";
import { faqItems } from "@/lib/data";
import { generateBreadcrumbJsonLd, generateFAQJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: `https://palmaalacati.com/${locale}/iletisim`,
      languages: {
        tr: "https://palmaalacati.com/tr/iletisim",
        en: "https://palmaalacati.com/en/iletisim",
      },
    },
  };
}

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Ana Sayfa", url: "https://palmaalacati.com" },
    { name: "İletişim", url: "https://palmaalacati.com/iletisim" },
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
