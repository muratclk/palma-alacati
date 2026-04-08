import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateHotelJsonLd } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    metadataBase: new URL("https://palmaalacati.com"),
    title: {
      default: t("homeTitle"),
      template: "%s | Palma Alaçatı",
    },
    description: t("homeDescription"),
    keywords: [
      "alacati apart otel",
      "alacati butik otel",
      "cesme apart otel",
      "alacati konaklama",
      "palma alacati",
      "alacati tatil",
      "alacati kiralik daire",
      "alacati boutique apart hotel",
      "cesme boutique hotel",
      "alacati accommodation",
      "hacimemis alacati",
    ],
    authors: [{ name: "Palma Alaçatı" }],
    creator: "Palma Alaçatı",
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: `https://palmaalacati.com/${locale}`,
      siteName: "Palma Alaçatı",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [
        {
          url: "/images/hotel/325f6644.jpg",
          width: 1200,
          height: 630,
          alt: "Palma Alaçatı Butik Otel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: ["/images/hotel/325f6644.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://palmaalacati.com/${locale}`,
      languages: {
        tr: "https://palmaalacati.com/tr",
        en: "https://palmaalacati.com/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const hotelJsonLd = generateHotelJsonLd();

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)] antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
