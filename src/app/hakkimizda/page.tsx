import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description:
    "Palma Alacati'nin hikayesi. Alacati'nin tarihi dokusunda, geleneksel Ege mimarisi ile modern konforu bulusturan butik otel deneyimimizi kesfin.",
  alternates: { canonical: "https://palmaalacati.com/hakkimizda" },
};

const timeline = [
  { year: "2009", title: "Kurulusumuz", description: "Palma Alacati, Alacati'nin tarihi merkezinde kapılarini acti." },
  { year: "2015", title: "Renovasyon", description: "Tum odalar yenilendi, havuz ve SPA alani eklendi." },
  { year: "2020", title: "Surdurulebilirlik", description: "Gunes enerjisi ve organik bahce projeleri hayata gecirildi." },
  { year: "2024", title: "Yeni Donem", description: "Cati kati suite ve restoran konsepti ile yenilenen deneyim." },
];

const values = [
  { title: "Misafirperverlik", description: "Her misafirimizi ailemizin bir parcasi olarak goruyor, sicak ve samimi bir karsilama sunuyoruz." },
  { title: "Surdurulebilirlik", description: "Dogaya saygi ilkemizle, organik malzemeler ve yenilenebilir enerji kullaniyoruz." },
  { title: "Ozgunluk", description: "Alacati'nin tarihi ve kulturel dokusunu koruyarak, otantik bir deneyim yaratiyoruz." },
  { title: "Mukemmellik", description: "Her detayda en yuksek kaliteyi hedefliyor, surekli kendimizi gelistiriyoruz." },
];

export default function AboutPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Ana Sayfa", url: "https://palmaalacati.com" },
    { name: "Hakkimizda", url: "https://palmaalacati.com/hakkimizda" },
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
            src="/images/hotel/9ac599d1.jpg"
            alt="Palma Alacati hakkinda"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative text-center px-4">
          <SectionLabel text="Hikayemiz" className="[&]:text-stone-light [&::before]:bg-stone/50 [&::after]:bg-stone/50" />
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Hakkimizda
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/hotel/81d0ecd4.jpg"
                    alt="Palma Alacati hikayesi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-border">
                  <blockquote className="font-heading text-lg text-charcoal italic max-w-[200px]">
                    &ldquo;Her misafir, ailemizin bir parcasidir.&rdquo;
                  </blockquote>
                  <p className="text-stone text-sm mt-2">-- Palma Ailesi</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <SectionLabel text="Hikayemiz" />
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 leading-[1.15]">
                Ege Ruhunu
                <span className="text-sage italic"> Yasatiyoruz</span>
              </h2>
              <p className="mt-6 text-warm-gray leading-relaxed text-lg">
                Palma Alacati, 2009 yilinda Alacati&apos;nin tarihi merkezinde,
                yuzlerce yillik bir tas evin ozenle restorasyonu ile hayata
                gecti. Amacimiz, Ege&apos;nin essiz yasam kulturunu, modern
                konfor ve kisisellestirilmis hizmet anlayisiyla bulusturmakti.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Bugn 6 ozel odamiz, organik bahcemiz, acik havuzumuz ve
                restoranimiz ile misafirlerimize unutulmaz anlar yasatmaya devam
                ediyoruz. Her detayimizda Alacati&apos;nin sicakligini, dogalligi
                ve zarafetini hissedeceksiniz.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <span className="font-heading text-4xl text-sage">15+</span>
                  <span className="block text-sm text-warm-gray mt-1">Yil Deneyim</span>
                </div>
                <div className="text-center">
                  <span className="font-heading text-4xl text-sage">2000+</span>
                  <span className="block text-sm text-warm-gray mt-1">Mutlu Misafir</span>
                </div>
                <div className="text-center">
                  <span className="font-heading text-4xl text-sage">4.9</span>
                  <span className="block text-sm text-warm-gray mt-1">Ortalama Puan</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-cream-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Yolculugumuz" />
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4">
              Zaman <span className="text-stone italic">Cizelgesi</span>
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.15}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                      <span className="font-heading text-5xl text-stone/30">{item.year}</span>
                      <h3 className="font-heading text-2xl text-charcoal mt-2">{item.title}</h3>
                      <p className="text-warm-gray mt-2">{item.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-stone border-4 border-cream flex-shrink-0 z-10" />
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Degerlerimiz" />
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4">
              Bizi Biz Yapan <span className="text-sage italic">Degerler</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center h-full hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto rounded-full bg-sage/10 flex items-center justify-center mb-4">
                    <span className="font-heading text-2xl text-sage">{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl text-charcoal">{value.title}</h3>
                  <p className="text-warm-gray text-sm mt-3 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
