import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Restoran - Ege Mutfagi",
  description:
    "Palma Alacati restoran. Organik ve yerel malzemelerle hazirlanan Ege mutfagi lezzetleri. Acik bufet kahvalti, ogle ve aksam yemegi servisi.",
  alternates: { canonical: "https://palmaalacati.com/restoran" },
};

const menuCategories = [
  {
    title: "Kahvalti",
    time: "08:00 - 11:00",
    description: "Her sabah taze hazirlanan zengin Ege kahvaltisi. Koyde uretilen peynirler, zeytinyagi, taze ekmek, recel cesitleri ve mevsim meyveleri.",
    image: "/images/rooms/1841de9d.jpg",
  },
  {
    title: "Ogle Yemegi",
    time: "12:00 - 15:00",
    description: "Hafif Akdeniz lezzetleri, taze salatalar, zeytinyagli yemekler ve deniz urunleri. Havuz basinda veya restoran terasinda servis edilir.",
    image: "/images/rooms/438a19c2.jpg",
  },
  {
    title: "Aksam Yemegi",
    time: "19:00 - 22:00",
    description: "Sefimizin ozenle hazirladigi ozel menu. Ege'nin en iyi malzemeleriyle hazirlanan, mevsime gore degisen lezzetler. Reservasyon onerilir.",
    image: "/images/rooms/4001fb51.jpg",
  },
];

const specialFeatures = [
  {
    title: "Organik Bahce",
    description: "Restoranımızda kullanilan otlarin ve sebzelerin bir kismi kendi organik bahcemizden toplanmaktadir.",
  },
  {
    title: "Yerel Uretici",
    description: "Peynir, zeytinyagi ve sarkuteri urunlerimiz Alacati ve cevresindeki yerel ureticilerden temin edilmektedir.",
  },
  {
    title: "Sarap Menusu",
    description: "Ege bolgesinin seckin baglarindan ozenle secilmis saraplar, yemeklerinize eslik etmek icin hazir.",
  },
  {
    title: "Ozel Etkinlik",
    description: "Dogum gunu, yildonumu veya ozel geceler icin kisiye ozel menu ve dekorasyon hazirlanabilir.",
  },
];

export default function RestaurantPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Ana Sayfa", url: "https://palmaalacati.com" },
    { name: "Restoran", url: "https://palmaalacati.com/restoran" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rooms/6c726df4.jpg"
            alt="Palma Alacati restoran"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel text="Lezzetler" className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Restoran
          </h1>
          <p className="text-white/70 mt-4 text-lg max-w-xl mx-auto">
            Ege&apos;nin en taze lezzetleri, organik malzemeler ve yerel tarifler
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <SectionLabel text="Ege Mutfagi" />
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4">
              Tabaktan <span className="text-stone italic">Sofralara</span>
            </h2>
            <p className="mt-6 text-warm-gray text-lg leading-relaxed">
              Palma Alacati mutfaginda, Ege&apos;nin zengin gastronomik mirasini
              modern sunumlarla birlestiryoruz. Bahcemizden toplanan taze otlar,
              yerel ureticilerden gelen peynirler ve zeytinyaglari ile hazirlanan
              yemeklerimiz, her lokmasiyla Alacati&apos;nin tadini sunar.
            </p>
          </ScrollReveal>

          {/* Menu categories */}
          <div className="space-y-20">
            {menuCategories.map((cat, i) => (
              <ScrollReveal key={cat.title}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-stone text-sm tracking-[0.2em] uppercase font-medium">
                      {cat.time}
                    </span>
                    <h3 className="font-heading text-3xl md:text-4xl text-charcoal mt-2">
                      {cat.title}
                    </h3>
                    <p className="mt-4 text-warm-gray leading-relaxed text-lg">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special features */}
      <section className="py-24 md:py-32 bg-cream-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Ozellikler" />
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4">
              Bizi Ozel Kilan <span className="text-sage italic">Detaylar</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border h-full hover:shadow-md transition-shadow">
                  <span className="font-heading text-4xl text-sage/20">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl text-charcoal mt-2">
                    {feature.title}
                  </h3>
                  <p className="text-warm-gray text-sm mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel/4ed14e72.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative text-center max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-4xl text-white">
            Rezervasyon Yapin
          </h2>
          <p className="text-white/70 mt-4">
            Aksam yemegi icin onceden rezervasyon yapmanizi oneririz.
          </p>
          <a
            href="tel:+902327160000"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-stone text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-stone-dark transition-colors"
          >
            Hemen Arayin
          </a>
        </div>
      </section>
    </>
  );
}
