export const hotelInfo = {
  name: "Palma Alaçatı",
  fullName: "Palma Alaçatı Boutique Apart Hotel",
  tagline: "Ege'nin Kalbinde Zarafet",
  description:
    "Alaçatı'nın Hacımemiş Mahallesi'nde, 7 özel tasarımlı dairesi ile butik apart otel deneyimi. Her daire kendine özgü iç tasarımı, özel mutfağı ve bahçe manzarası ile Ege'nin huzurunu yaşatır.",
  address: "2055. Sokak No:4, Hacımemiş Mahallesi, Alaçatı, 35930 Çeşme/İzmir",
  phone: "+90 536 914 81 83",
  email: "info@palmaalacati.com",
  instagram: "palmaalacati",
  checkIn: "15:00",
  checkOut: "11:00",
  coordinates: { lat: 38.2771283, lng: 26.3737438 },
  whatsapp: "+905369148183",
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
  video?: string;
  amenities: string[];
  featured: boolean;
}

export const rooms: Room[] = [
  {
    slug: "pietra",
    name: "Pietra",
    nameEn: "Pietra",
    description:
      "Doğal taş duvarları ve toprak tonlarıyla Ege'nin otantik ruhunu yansıtan Pietra, geniş oturma alanı, özel mutfak ve zarif banyo ile konforlu bir yaşam alanı sunar. Alaçatı taş mimarisinden ilham alan bu daire, her detayında doğallığı hissettirir.",
    shortDescription: "Taş duvarlar, toprak tonları, otantik Alaçatı ruhu",
    size: 40,
    capacity: 3,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/pietra/2.jpg",
    gallery: [
      "/images/rooms/pietra/6.jpg",
      "/images/rooms/pietra/7.jpg",
      "/images/rooms/pietra/5.jpg",
      "/images/rooms/pietra/8.jpg",
      "/images/rooms/pietra/4.jpg",
      "/images/rooms/pietra/3.jpg",
      "/images/rooms/pietra/1.jpg",
    ],
    video: "/images/rooms/pietra/video1.mp4",
    amenities: [
      "amenityPrivateKitchen",
      "amenityFridge",
      "amenityLivingArea",
      "amenityAC",
      "amenityWifi",
      "amenityShower",
      "amenityHairDryer",
      "amenityTowels",
      "amenityIron",
      "amenityWater",
    ],
    featured: true,
  },
  {
    slug: "acqua",
    name: "Acqua",
    nameEn: "Acqua",
    description:
      "Havuz manzaralı konumu ve su temasından ilham alan tasarımıyla Acqua, ferah ve huzurlu bir atmosfer sunar. Minimalist dekorasyonu, özel mutfağı ve konforlu yatağı ile Alaçatı'da kendinizi evinizde hissedeceksiniz.",
    shortDescription: "Havuz manzarası, su temalı, ferah atmosfer",
    size: 35,
    capacity: 3,
    bedType: "Çift Kişilik Yatak",
    view: "Havuz & Bahçe Manzarası",
    price: "",
    image: "/images/rooms/acqua/1.jpg",
    gallery: [
      "/images/rooms/acqua/4.jpg",
      "/images/rooms/acqua/3.jpg",
      "/images/rooms/acqua/2.jpg",
    ],
    video: "/images/rooms/acqua/video1.mp4",
    amenities: [
      "amenityPrivateKitchen",
      "amenityFridge",
      "amenityAC",
      "amenityTV",
      "amenityWifi",
      "amenityShower",
      "amenityHairDryer",
      "amenityTowels",
      "amenityWater",
    ],
    featured: true,
  },
  {
    slug: "terra",
    name: "Terra",
    nameEn: "Terra",
    description:
      "Toprak ve doğa tonlarıyla bezeli Terra, kırsal Ege yaşamının sıcaklığını modern konforla buluşturur. Ahşap detayları, özel mutfağı ve huzurlu atmosferi ile doğayla iç içe bir konaklama deneyimi sunar.",
    shortDescription: "Doğa tonları, kırsal sıcaklık, ahşap detaylar",
    size: 30,
    capacity: 2,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/terra/1.jpg",
    gallery: [
      "/images/rooms/terra/2.jpg",
      "/images/rooms/terra/4.jpg",
      "/images/rooms/terra/6.jpg",
      "/images/rooms/terra/3.jpg",
      "/images/rooms/terra/5.jpg",
    ],
    amenities: [
      "amenityPrivateKitchen",
      "amenityFridge",
      "amenityAC",
      "amenityWifi",
      "amenityShower",
      "amenityHairDryer",
      "amenityTowels",
      "amenityWater",
    ],
    featured: false,
  },
  {
    slug: "priva",
    name: "Priva",
    nameEn: "Priva",
    description:
      "Özel ve mahrem bir konaklama arayanlar için tasarlanan Priva, kendi bağımsız girişi ve özel bahçe alanıyla ayrıcalıklı bir deneyim sunar. Modern tasarımı, geniş yatağı ve tam donanımlı mutfağıyla Alaçatı'da ev konforunu yaşayın.",
    shortDescription: "Özel giriş, bağımsız alan, modern tasarım",
    size: 35,
    capacity: 3,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/priva/5.jpg",
    gallery: [
      "/images/rooms/priva/6.jpg",
      "/images/rooms/priva/1.jpg",
      "/images/rooms/priva/7.jpg",
      "/images/rooms/priva/2.jpg",
      "/images/rooms/priva/4.jpg",
      "/images/rooms/priva/3.jpg",
    ],
    amenities: [
      "amenityPrivateEntrance",
      "amenityPrivateKitchen",
      "amenityFridge",
      "amenityAC",
      "amenityWifi",
      "amenityShower",
      "amenityHairDryer",
      "amenityTowels",
      "amenityIron",
      "amenityWater",
    ],
    featured: false,
  },
  {
    slug: "aria",
    name: "Aria",
    nameEn: "Aria",
    description:
      "Beyaz tonları ve aydınlık atmosferiyle Aria, Ege'nin ferah esintisini iç mekana taşır. Zarif ve minimalist tasarımı, özel mutfağı ve konforlu yatak alanıyla huzurlu bir konaklama vaat eder.",
    shortDescription: "Beyaz tonlar, aydınlık atmosfer, zarif tasarım",
    size: 35,
    capacity: 3,
    bedType: "Çift Kişilik Yatak",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/aria/1.jpg",
    gallery: [
      "/images/rooms/aria/3.jpg",
      "/images/rooms/aria/5.jpg",
      "/images/rooms/aria/9.jpg",
      "/images/rooms/aria/8.jpg",
      "/images/rooms/aria/4.jpg",
      "/images/rooms/aria/6.jpg",
      "/images/rooms/aria/7.jpg",
      "/images/rooms/aria/2.jpg",
    ],
    amenities: [
      "amenityPrivateKitchen",
      "amenityFridge",
      "amenityAC",
      "amenityWifi",
      "amenityQualityBedding",
      "amenityShower",
      "amenityHairDryer",
      "amenityTowels",
      "amenityIron",
      "amenityWater",
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
    image: "/images/rooms/curva/4.jpg",
    gallery: [
      "/images/rooms/curva/1.jpg",
      "/images/rooms/curva/6.jpg",
      "/images/rooms/curva/3.jpg",
      "/images/rooms/curva/2.jpg",
      "/images/rooms/curva/7.jpg",
      "/images/rooms/curva/5.jpg",
    ],
    amenities: [
      "amenityPrivateKitchen",
      "amenityFridge",
      "amenityAC",
      "amenityWifi",
      "amenityShower",
      "amenityHairDryer",
      "amenityTowels",
      "amenityWater",
    ],
    featured: false,
  },
  {
    slug: "luce",
    name: "Luce",
    nameEn: "Luce",
    description:
      "Işık temasından ilham alan Luce, geniş pencereleri ve aydınlık iç mekanıyla en ferah dairemizdir. 4 kişiye kadar konaklama imkanı sunan bu daire, aileler ve arkadaş grupları için ideal bir seçimdir. Özel mutfağı, geniş oturma alanı ve modern tasarımıyla konforlu bir Alaçatı deneyimi yaşatır.",
    shortDescription: "Işık temalı, geniş alan, 4 kişilik kapasite",
    size: 50,
    capacity: 4,
    bedType: "Çift Kişilik Yatak + Tek Kişilik Yataklar",
    view: "Bahçe Manzarası",
    price: "",
    image: "/images/rooms/luce/8.jpg",
    gallery: [
      "/images/rooms/luce/1.jpg",
      "/images/rooms/luce/3.jpg",
      "/images/rooms/luce/9.jpg",
      "/images/rooms/luce/5.jpg",
      "/images/rooms/luce/4.jpg",
      "/images/rooms/luce/6.jpg",
      "/images/rooms/luce/7.jpg",
      "/images/rooms/luce/2.jpg",
    ],
    amenities: [
      "amenityPrivateKitchen",
      "amenityFridge",
      "amenityLargeLivingArea",
      "amenityAC",
      "amenityWifi",
      "amenityShower",
      "amenityHairDryer",
      "amenityTowels",
      "amenityIron",
      "amenityWater",
    ],
    featured: true,
  },
];

export const testimonials = [
  {
    name: "Benan B.",
    location: "Google",
    text: "Palma Alaçatı is a beautiful, serene spot that feels like a world of its own. The atmosphere is calm and thoughtfully designed, with lush greenery and elegant details throughout.",
    room: "Pietra",
    rating: 5,
  },
  {
    name: "Ecenur Y.",
    location: "Google",
    text: "Köyiçine ve Alaçatı'nın en hareketli sokaklarına yürüme mesafesinde bir vaha! Harika bir deneyimdi.",
    room: "Luce",
    rating: 5,
  },
  {
    name: "Gizem O.",
    location: "Google",
    text: "Alaçatı'daki en özel yer. Yıllardır Alaçatı'ya giderim ve her seferinde burada kalıyorum. İşlerim olursa otelde konforlu ve keyifli bir ortamda çalışabiliyorum.",
    room: "Aria",
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
    title: "amenityWifi",
    description: "Tüm alanlarda 25+ Mbps hızında ücretsiz internet",
  },
  {
    icon: "Car",
    title: "Ücretsiz Otopark",
    description: "Tesise yakın ücretsiz açık otopark imkanı",
  },
  {
    icon: "Utensils",
    title: "amenityPrivateKitchen",
    description: "Her dairede buzdolabı ve mutfak gereçleri",
  },
  {
    icon: "Wind",
    title: "amenityAC",
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
    title: "amenityWater",
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
  { src: "/images/rooms/pietra/1.jpg", alt: "Pietra oturma alanı", category: "odalar" },
  { src: "/images/rooms/acqua/1.jpg", alt: "Acqua daire görünümü", category: "odalar" },
  { src: "/images/rooms/aria/1.jpg", alt: "Aria yatak odası", category: "odalar" },
  { src: "/images/rooms/luce/1.jpg", alt: "Luce geniş oturma alanı", category: "odalar" },
  { src: "/images/hotel/4ed14e72.jpg", alt: "Otel dış mekan detay", category: "otel" },
  { src: "/images/hotel/81d0ecd4.jpg", alt: "Otel girişi", category: "otel" },
  { src: "/images/rooms/curva/1.jpg", alt: "Curva romantik atmosfer", category: "odalar" },
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
