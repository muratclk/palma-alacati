export const hotelInfo = {
  name: "Palma Alacati",
  fullName: "Palma Alacati Boutique Apart Hotel",
  tagline: "Ege'nin Kalbinde Zarafet",
  description:
    "Alacati'nin Hacimemis Mahallesi'nde, 6 ozel tasarimli evi ile butik apart otel deneyimi. Her evi kendine ozgu ic tasarimi, ozel mutfagi ve bahce manzarasi ile Ege'nin huzurunu yasatin.",
  address: "2055. Sokak No:4, Hacimemis Mahallesi, Alacati, 35930 Cesme/Izmir",
  phone: "+90 546 697 65 60",
  email: "info@palmaalacati.com",
  instagram: "palmaalacati",
  checkIn: "15:00",
  checkOut: "11:00",
  coordinates: { lat: 38.2826, lng: 26.3764 },
  whatsapp: "+905466976560",
  googleRating: 4.9,
  googleReviewCount: 12,
  languages: ["Turkce", "English", "Italiano"],
  registrationNo: "2022-35-1104",
};

export interface Room {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  shortDescription: string;
  size: number;
  capacity: number;
  bedType: string;
  view: string;
  price: string;
  image: string;
  gallery: string[];
  amenities: string[];
  featured: boolean;
}

export const rooms: Room[] = [
  {
    slug: "aegean-suit",
    name: "Aegean Suit",
    nameEn: "Aegean Suite",
    description:
      "Ege esintilerinden ilham alan Aegean Suit, genis oturma alani, ozel mutfak ve zarif banyo ile konforlu bir yasam alani sunar. Dogal tas duvarlar ve modern mobilyalarla donatilanmis bu suit, Alacati'nin otantik atmosferini her detayinda hissettirir.",
    shortDescription: "Genis oturma alani, ozel mutfak, Ege esintili tasarim",
    size: 45,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Bahce Manzarasi",
    price: "",
    image: "/images/rooms/4d06e10d.jpg",
    gallery: [
      "/images/rooms/eb145162.jpg",
      "/images/rooms/e403d0f8.jpg",
      "/images/rooms/e4566d7f.jpg",
      "/images/rooms/dbb69dad.jpg",
      "/images/rooms/438a19c2.jpg",
      "/images/rooms/37e58cd8.jpg",
      "/images/rooms/a8c024c2.jpg",
    ],
    amenities: [
      "Ozel Mutfak",
      "Buzdolabi",
      "Oturma Alani",
      "Klima",
      "Ucretsiz WiFi",
      "Dus",
      "Sac Kurutma Makinesi",
      "Havlu",
      "Utu / Utu Masasi",
      "Ucretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "deluxe-apart-duplex",
    name: "Deluxe Apart Duplex",
    nameEn: "Deluxe Apart Duplex",
    description:
      "Iki katli tasarimi ile Deluxe Apart Duplex, genis yasam alani, ozel mutfak, teras ve ortak havuz kullanimi sunar. Ust katta yatak odasi, alt katta oturma alani ve mutfak bulunan bu daire, uzun konaklamalar icin ideal bir secimdir.",
    shortDescription: "Iki katli, teras, ozel mutfak, havuz kullanimi",
    size: 55,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Teras & Bahce Manzarasi",
    price: "",
    image: "/images/rooms/1fb73ee9.jpg",
    gallery: [
      "/images/rooms/w2875h4032x0y0-31b45ebb.jpg",
      "/images/rooms/9bb06987.jpg",
      "/images/rooms/1841de9d.jpg",
      "/images/rooms/6c726df4.jpg",
    ],
    amenities: [
      "Ozel Teras",
      "Ozel Mutfak",
      "Buzdolabi",
      "Oturma Alani",
      "Ortak Havuz",
      "Klima",
      "Ucretsiz WiFi",
      "Dus",
      "Sac Kurutma Makinesi",
      "Havlu",
      "Utu / Utu Masasi",
      "Ucretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "design-apart",
    name: "Design Apart Daire",
    nameEn: "Design Apartment",
    description:
      "Modern ve siradisi ic tasarimi ile Design Apart Daire, sanatsever misafirler icin ozel olarak dusunulmus bir konaklama mekanidir. Kaliteli yatak takimlari, ozel mutfak ve dikkatle secilmis dekorasyon detaylari ile farkli bir Alacati deneyimi sunar.",
    shortDescription: "Modern tasarim, kaliteli yatak, ozel mutfak",
    size: 35,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Bahce Manzarasi",
    price: "",
    image: "/images/rooms/f29760bf.jpg",
    gallery: [
      "/images/rooms/8a916da6.jpg",
      "/images/rooms/1a21576e.jpg",
      "/images/rooms/5533b0ba.jpg",
    ],
    amenities: [
      "Ozel Mutfak",
      "Buzdolabi",
      "Klima",
      "Ucretsiz WiFi",
      "Kaliteli Yatak Takimi",
      "Dus",
      "Sac Kurutma Makinesi",
      "Havlu",
      "Utu / Utu Masasi",
      "Ucretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "acqua",
    name: "Acqua",
    nameEn: "Acqua",
    description:
      "Su temasından ilham alan Acqua, huzurlu ve ferah atmosferi ile dinlenme arayanlar icin tasarlanmistir. Minimalist ve sik dekorasyonu, ozel mutfagi ve konforlu yatagi ile Alacati'da kendinizi evinizde hissedeceksiniz.",
    shortDescription: "Su temali, huzurlu atmosfer, minimalist tasarim",
    size: 30,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Bahce Manzarasi",
    price: "",
    image: "/images/rooms/eefd6913.jpg",
    gallery: [
      "/images/rooms/8f52d654.jpg",
      "/images/rooms/e0c90e2f.jpg",
      "/images/rooms/91759d1e.jpg",
    ],
    amenities: [
      "Ozel Mutfak",
      "Buzdolabi",
      "Klima",
      "TV",
      "Ucretsiz WiFi",
      "Dus",
      "Sac Kurutma Makinesi",
      "Havlu",
      "Ucretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "curva",
    name: "Curva",
    nameEn: "Curva",
    description:
      "Yumusak hatlari ve sicak renk paleti ile Curva, romantik ve davetkar bir atmosfer sunar. Ozel tasarimli ic mekani, konforlu yatagi ve mutfak olanaklari ile ciftler icin ideal bir Alacati signagidir.",
    shortDescription: "Sicak tonlar, romantik atmosfer, ozel tasarim",
    size: 28,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Bahce Manzarasi",
    price: "",
    image: "/images/rooms/a6fdd4db.jpg",
    gallery: [
      "/images/rooms/bf0358c9.jpg",
      "/images/rooms/255a0a72.jpg",
      "/images/rooms/1205fd3c.jpg",
    ],
    amenities: [
      "Ozel Mutfak",
      "Buzdolabi",
      "Klima",
      "Ucretsiz WiFi",
      "Dus",
      "Sac Kurutma Makinesi",
      "Havlu",
      "Ucretsiz Su",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Benan B.",
    location: "Google",
    text: "Palma Alacati is a beautiful, serene spot that feels like a world of its own. The atmosphere is calm and thoughtfully designed, with lush greenery and elegant details throughout.",
    room: "Aegean Suit",
    rating: 5,
  },
  {
    name: "Ecenur Y.",
    location: "Google",
    text: "Koyicine ve Alacati'nin en hareketli sokaklarina yurume mesafesinde bir vaha! Harika bir deneyimdi.",
    room: "Deluxe Apart Duplex",
    rating: 5,
  },
  {
    name: "Gizem O.",
    location: "Google",
    text: "Alacati'daki en ozel yer. Yillardir Alacati'ya giderim ve her seferinde burada kaliyorum. Islerim olursa otelde konforlu ve keyifli bir ortamda calisabiliyorum.",
    room: "Design Apart",
    rating: 5,
  },
];

export const amenities = [
  {
    icon: "Waves",
    title: "Mevsimlik Acik Havuz",
    description: "Mayis-Ekim aylarinda hizmet veren acik yuzme havuzu",
  },
  {
    icon: "Wifi",
    title: "Ucretsiz WiFi",
    description: "Tum alanlarda 25+ Mbps hizinda ucretsiz internet",
  },
  {
    icon: "Car",
    title: "Ucretsiz Otopark",
    description: "Tesise yakin ucretsiz acik otopark imkani",
  },
  {
    icon: "Utensils",
    title: "Ozel Mutfak",
    description: "Her dairede buzdolabi ve mutfak gerecleri",
  },
  {
    icon: "Wind",
    title: "Klima",
    description: "Tum odalarda bireysel klima kontrolu",
  },
  {
    icon: "TreePine",
    title: "Bahce",
    description: "Yesilliklere cevrili huzurlu bahce alani",
  },
  {
    icon: "Armchair",
    title: "Dis Mekan Oturma",
    description: "Bahcede mobilyali oturma ve dinlenme alanlari",
  },
  {
    icon: "Droplets",
    title: "Ucretsiz Su",
    description: "Tum misafirlerimize ucretsiz sise su ikrami",
  },
  {
    icon: "Languages",
    title: "Cok Dilli Personel",
    description: "Turkce, Ingilizce ve Italyanca destek",
  },
];

export const galleryImages = [
  { src: "/images/hotel/325f6644.jpg", alt: "Palma Alacati dis gorunum", category: "otel" },
  { src: "/images/hotel/6a4c7b08.jpg", alt: "Mevsimlik acik yuzme havuzu", category: "otel" },
  { src: "/images/hotel/35f447c1.jpg", alt: "Otel bahcesi", category: "otel" },
  { src: "/images/hotel/922ba4ad.jpg", alt: "Teras ve veranda", category: "otel" },
  { src: "/images/hotel/9ac599d1.jpg", alt: "Dis mekan gorunum", category: "otel" },
  { src: "/images/rooms/4d06e10d.jpg", alt: "Aegean Suit oturma alani", category: "odalar" },
  { src: "/images/rooms/1fb73ee9.jpg", alt: "Deluxe Apart Duplex oturma alani", category: "odalar" },
  { src: "/images/rooms/8a916da6.jpg", alt: "Yatak odasi", category: "odalar" },
  { src: "/images/rooms/dbb69dad.jpg", alt: "Aegean Suit yatak odasi", category: "odalar" },
  { src: "/images/hotel/4ed14e72.jpg", alt: "Otel dis mekan detay", category: "otel" },
  { src: "/images/hotel/81d0ecd4.jpg", alt: "Otel girisi", category: "otel" },
  { src: "/images/rooms/9bb06987.jpg", alt: "Banyo ve dus", category: "odalar" },
];

export const faqItems = [
  {
    question: "Giris ve cikis saatleri nedir?",
    answer: "Giris (check-in) saati 15:00, cikis (check-out) saati 11:00'dir. Erken giris ve gec cikis talepleri musaitlik durumuna gore ucretsiz olarak sunulmaktadir.",
  },
  {
    question: "Otel havaalanina ne kadar uzaklikta?",
    answer: "Izmir Adnan Menderes Havalimani'na yaklasik 80 km uzakliktayiz.",
  },
  {
    question: "Evcil hayvan kabul ediyor musunuz?",
    answer: "Maalesef tesisimizde evcil hayvan kabul edilmemektedir.",
  },
  {
    question: "Odalarda mutfak var mi?",
    answer: "Evet, tum dairelerimizde buzdolabi, tencere, tabak ve mutfak gerecleri dahil ozel mutfak bulunmaktadir.",
  },
  {
    question: "Havuz ne zaman acik?",
    answer: "Mevsimlik acik havuzumuz Mayis - Ekim aylarinda hizmet vermektedir.",
  },
  {
    question: "Otopark var mi?",
    answer: "Evet, tesise yaklasik 10 metre mesafede ucretsiz acik otopark mevcuttur.",
  },
  {
    question: "Yas siniri var mi?",
    answer: "Check-in yapabilmek icin en az 15 yasinda olmaniz gerekmektedir. 6 yas altindaki cocuklar kabul edilmemektedir.",
  },
  {
    question: "Hangi dillerde hizmet veriyorsunuz?",
    answer: "Personelimiz Turkce, Ingilizce ve Italyanca konusmaktadir.",
  },
  {
    question: "Denize ne kadar uzaklikta?",
    answer: "En yakin plaj yaklasik 4 km mesafededir. Halka acik kum plaji mevcuttur.",
  },
];
