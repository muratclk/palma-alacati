import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateHotelJsonLd } from "@/lib/seo";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://palmaalacati.com"),
  title: {
    default: "Palma Alacati | Butik Apart Otel - Alaçatı, Çeşme",
    template: "%s | Palma Alacati",
  },
  description:
    "Alaçatı Hacımemiş'te 5 özel tasarımlı daire ile butik apart otel deneyimi. Özel mutfak, mevsimlik havuz, ücretsiz WiFi ve otopark. Rezervasyon: 0546 697 65 60",
  keywords: [
    "alaçatı apart otel",
    "alaçatı butik otel",
    "çeşme apart otel",
    "alaçatı konaklama",
    "palma alacati",
    "alaçatı tatil",
    "alaçatı kiralık daire",
    "alacati boutique apart hotel",
    "cesme boutique hotel",
    "alacati accommodation",
    "hacımemiş alaçatı",
  ],
  authors: [{ name: "Palma Alacati" }],
  creator: "Palma Alacati",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://palmaalacati.com",
    siteName: "Palma Alacati",
    title: "Palma Alacati | Butik Apart Otel - Alaçatı, Çeşme",
    description:
      "Alaçatı Hacımemiş'te 5 özel tasarımlı daire ile butik apart otel deneyimi.",
    images: [
      {
        url: "/images/hotel/325f6644.jpg",
        width: 1200,
        height: 630,
        alt: "Palma Alacati Butik Otel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palma Alacati | Butik Apart Otel - Alaçatı, Çeşme",
    description:
      "Alaçatı Hacımemiş'te butik apart otel. 5 özel daire, havuz, ücretsiz WiFi ve otopark.",
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
    canonical: "https://palmaalacati.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hotelJsonLd = generateHotelJsonLd();

  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
