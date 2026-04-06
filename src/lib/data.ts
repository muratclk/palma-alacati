export const hotelInfo = {
  name: "Palma Alaçatı",
  fullName: "Palma Alaçatı Boutique Apart Hotel",
  tagline: "Ege'nin Kalbinde Zarafet",
  description:
    "Alaçatı'nın Hacımemiş Mahallesi'nde, 5 özel tasarımlı dairesi ile butik apart otel deneyimi. Her daire kendine özgü iç tasarımı, özel mutfağı ve bahçe manzarası ile Ege'nin huzurunu yaşatır.",
  address: "2055. Sokak No:4, Hacımemiş Mahallesi, Alaçatı, 35930 Çeşme/İzmir",
  phone: "+90 546 697 65 60",
  email: "info@palmaalacati.com",
  instagram: "palmaalacati",
  checkIn: "15:00",
  checkOut: "11:00",
  coordinates: { lat: 38.2771283, lng: 26.3737438 },
  whatsapp: "+905466976560",
  googleRating: 4.9,
  googleReviewCount: 12,
  languages: ["Türkçe", "English", "Italiano"],
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
      "Ege esintilerinden ilham alan Aegean Suit, geniş oturma alanı, özel mutfak ve zarif banyo ile konforlu bir yaşam alanı sunar. Doğal taş duvarlar ve modern mobilyalarla donatılmış bu suit, Alaçatı'nın otantik atmosferini her detayında hissettirir.",
    shortDescription: "Geniş oturma alanı, özel mutfak, Ege esintili tasarım",
    size: 45,
    capacity: 2,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
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
      "Özel Mutfak",
      "Buzdolabı",
      "Oturma Alanı",
      "Klima",
      "Ücretsiz WiFi",
      "Duş",
      "Saç Kurutma Makinesi",
      "Havlu",
      "Ütü / Ütü Masası",
      "Ücretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "deluxe-apart-duplex",
    name: "Deluxe Apart Duplex",
    nameEn: "Deluxe Apart Duplex",
    description:
      "İki katlı tasarımı ile Deluxe Apart Duplex, geniş yaşam alanı, özel mutfak, teras ve ortak havuz kullanımı sunar. Üst katta yatak odası, alt katta oturma alanı ve mutfak bulunan bu daire, uzun konaklamalar için ideal bir seçimdir.",
    shortDescription: "İki katlı, teras, özel mutfak, havuz kullanımı",
    size: 55,
    capacity: 2,
    bedType: "Çift Kişilik Yatak",
    view: "Teras & Bahçe Manzarası",
    price: "",
    image: "/images/rooms/1fb73ee9.jpg",
    gallery: [
      "/images/rooms/w2875h4032x0y0-31b45ebb.jpg",
      "/images/rooms/9bb06987.jpg",
      "/images/rooms/1841de9d.jpg",
      "/images/rooms/6c726df4.jpg",
    ],
    amenities: [
      "Özel Teras",
      "Özel Mutfak",
      "Buzdolabı",
      "Oturma Alanı",
      "Ortak Havuz",
      "Klima",
      "Ücretsiz WiFi",
      "Duş",
      "Saç Kurutma Makinesi",
      "Havlu",
      "Ütü / Ütü Masası",
      "Ücretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "design-apart",
    name: "Design Apart Daire",
    nameEn: "Design Apartment",
    description:
      "Modern ve sıradışı iç tasarımı ile Design Apart Daire, sanatsever misafirler için özel olarak düşünülmüş bir konaklama mekanıdır. Kaliteli yatak takımları, özel mutfak ve dikkatle seçilmiş dekorasyon detayları ile farklı bir Alaçatı deneyimi sunar.",
    shortDescription: "Modern tasarım, kaliteli yatak, özel mutfak",
    size: 35,
    capacity: 2,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/f29760bf.jpg",
    gallery: [
      "/images/rooms/8a916da6.jpg",
      "/images/rooms/1a21576e.jpg",
      "/images/rooms/5533b0ba.jpg",
    ],
    amenities: [
      "Özel Mutfak",
      "Buzdolabı",
      "Klima",
      "Ücretsiz WiFi",
      "Kaliteli Yatak Takımı",
      "Duş",
      "Saç Kurutma Makinesi",
      "Havlu",
      "Ütü / Ütü Masası",
      "Ücretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "acqua",
    name: "Acqua",
    nameEn: "Acqua",
    description:
      "Su temasından ilham alan Acqua, huzurlu ve ferah atmosferi ile dinlenme arayanlar için tasarlanmıştır. Minimalist ve şık dekorasyonu, özel mutfağı ve konforlu yatağı ile Alaçatı'da kendinizi evinizde hissedeceksiniz.",
    shortDescription: "Su temalı, huzurlu atmosfer, minimalist tasarım",
    size: 30,
    capacity: 2,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/eefd6913.jpg",
    gallery: [
      "/images/rooms/8f52d654.jpg",
      "/images/rooms/e0c90e2f.jpg",
      "/images/rooms/91759d1e.jpg",
    ],
    amenities: [
      "Özel Mutfak",
      "Buzdolabı",
      "Klima",
      "TV",
      "Ücretsiz WiFi",
      "Duş",
      "Saç Kurutma Makinesi",
      "Havlu",
      "Ücretsiz Su",
    ],
    featured: true,
  },
  {
    slug: "curva",
    name: "Curva",
    nameEn: "Curva",
    description:
      "Yumuşak hatları ve sıcak renk paleti ile Curva, romantik ve davetkar bir atmosfer sunar. Özel tasarımlı iç mekanı, konforlu yatağı ve mutfak olanakları ile çiftler için ideal bir Alaçatı sığınağıdır.",
    shortDescription: "Sıcak tonlar, romantik atmosfer, özel tasarım",
    size: 28,
    capacity: 2,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/a6fdd4db.jpg",
    gallery: [
      "/images/rooms/bf0358c9.jpg",
      "/images/rooms/255a0a72.jpg",
      "/images/rooms/1205fd3c.jpg",
    ],
    amenities: [
      "Özel Mutfak",
      "Buzdolabı",
      "Klima",
      "Ücretsiz WiFi",
      "Duş",
      "Saç Kurutma Makinesi",
      "Havlu",
      "Ücretsiz Su",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Benan B.",
    location: "Google",
    text: "Palma Alaçatı is a beautiful, serene spot that feels like a world of its own. The atmosphere is calm and thoughtfully designed, with lush greenery and elegant details throughout.",
    room: "Aegean Suit",
    rating: 5,
  },
  {
    name: "Ecenur Y.",
    location: "Google",
    text: "Köyiçine ve Alaçatı'nın en hareketli sokaklarına yürüme mesafesinde bir vaha! Harika bir deneyimdi.",
    room: "Deluxe Apart Duplex",
    rating: 5,
  },
  {
    name: "Gizem O.",
    location: "Google",
    text: "Alaçatı'daki en özel yer. Yıllardır Alaçatı'ya giderim ve her seferinde burada kalıyorum. İşlerim olursa otelde konforlu ve keyifli bir ortamda çalışabiliyorum.",
    room: "Design Apart",
    rating: 5,
  },
];

export const amenities = [
  {
    icon: "Waves",
    title: "Mevsimlik Açık Havuz",
    description: "Mayıs-Ekim aylarında hizmet veren açık yüzme havuzu",
  },
  {
    icon: "Wifi",
    title: "Ücretsiz WiFi",
    description: "Tüm alanlarda 25+ Mbps hızında ücretsiz internet",
  },
  {
    icon: "Car",
    title: "Ücretsiz Otopark",
    description: "Tesise yakın ücretsiz açık otopark imkanı",
  },
  {
    icon: "Utensils",
    title: "Özel Mutfak",
    description: "Her dairede buzdolabı ve mutfak gereçleri",
  },
  {
    icon: "Wind",
    title: "Klima",
    description: "Tüm odalarda bireysel klima kontrolü",
  },
  {
    icon: "TreePine",
    title: "Bahçe",
    description: "Yeşilliklere çevrili huzurlu bahçe alanı",
  },
  {
    icon: "Armchair",
    title: "Dış Mekan Oturma",
    description: "Bahçede mobilyalı oturma ve dinlenme alanları",
  },
  {
    icon: "Droplets",
    title: "Ücretsiz Su",
    description: "Tüm misafirlerimize ücretsiz şişe su ikramı",
  },
  {
    icon: "Languages",
    title: "Çok Dilli Personel",
    description: "Türkçe, İngilizce ve İtalyanca destek",
  },
];

export const galleryImages = [
  { src: "/images/hotel/325f6644.jpg", alt: "Palma Alaçatı dış görünüm", category: "otel" },
  { src: "/images/hotel/6a4c7b08.jpg", alt: "Mevsimlik açık yüzme havuzu", category: "otel" },
  { src: "/images/hotel/35f447c1.jpg", alt: "Otel bahçesi", category: "otel" },
  { src: "/images/hotel/922ba4ad.jpg", alt: "Teras ve veranda", category: "otel" },
  { src: "/images/hotel/9ac599d1.jpg", alt: "Dış mekan görünüm", category: "otel" },
  { src: "/images/rooms/4d06e10d.jpg", alt: "Aegean Suit oturma alanı", category: "odalar" },
  { src: "/images/rooms/1fb73ee9.jpg", alt: "Deluxe Apart Duplex oturma alanı", category: "odalar" },
  { src: "/images/rooms/8a916da6.jpg", alt: "Yatak odası", category: "odalar" },
  { src: "/images/rooms/dbb69dad.jpg", alt: "Aegean Suit yatak odası", category: "odalar" },
  { src: "/images/hotel/4ed14e72.jpg", alt: "Otel dış mekan detay", category: "otel" },
  { src: "/images/hotel/81d0ecd4.jpg", alt: "Otel girişi", category: "otel" },
  { src: "/images/rooms/9bb06987.jpg", alt: "Banyo ve duş", category: "odalar" },
];

export const faqItems = [
  {
    question: "Giriş ve çıkış saatleri nedir?",
    answer: "Giriş (check-in) saati 15:00, çıkış (check-out) saati 11:00'dir. Erken giriş ve geç çıkış talepleri müsaitlik durumuna göre ücretsiz olarak sunulmaktadır.",
  },
  {
    question: "Otel havaalanına ne kadar uzaklıkta?",
    answer: "İzmir Adnan Menderes Havalimanı'na yaklaşık 80 km uzaklıktayız.",
  },
  {
    question: "Evcil hayvan kabul ediyor musunuz?",
    answer: "Maalesef tesisimizde evcil hayvan kabul edilmemektedir.",
  },
  {
    question: "Odalarda mutfak var mı?",
    answer: "Evet, tüm dairelerimizde buzdolabı, tencere, tabak ve mutfak gereçleri dahil özel mutfak bulunmaktadır.",
  },
  {
    question: "Havuz ne zaman açık?",
    answer: "Mevsimlik açık havuzumuz Mayıs - Ekim aylarında hizmet vermektedir.",
  },
  {
    question: "Otopark var mı?",
    answer: "Evet, tesise yaklaşık 10 metre mesafede ücretsiz açık otopark mevcuttur.",
  },
  {
    question: "Yaş sınırı var mı?",
    answer: "Check-in yapabilmek için en az 15 yaşında olmanız gerekmektedir. 6 yaş altındaki çocuklar kabul edilmemektedir.",
  },
  {
    question: "Hangi dillerde hizmet veriyorsunuz?",
    answer: "Personelimiz Türkçe, İngilizce ve İtalyanca konuşmaktadır.",
  },
  {
    question: "Denize ne kadar uzaklıkta?",
    answer: "En yakın plaj yaklaşık 4 km mesafededir. Halka açık kum plajı mevcuttur.",
  },
];
