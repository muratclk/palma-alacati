export const hotelInfo = {
  name: "Palma Alacati",
  fullName: "Palma Alacati Hotel & Resort",
  tagline: "Ege'nin Kalbinde Zarafet",
  description:
    "Alacati'nin tarihi tas sokaklarinda, zeytin agaclari ve begonvillerin golgesinde, Ege'nin essiz dokusunu yasatan butik otel deneyimi.",
  address: "1005 Sokak No:12, Alacati, Cesme, Izmir 35937",
  phone: "+90 232 716 00 00",
  email: "info@palmaalacati.com",
  instagram: "palmaalacati",
  checkIn: "14:00",
  checkOut: "12:00",
  coordinates: { lat: 38.2826, lng: 26.3764 },
  whatsapp: "+902327160000",
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
    slug: "grand-suite",
    name: "Grand Suite",
    nameEn: "Grand Suite",
    description:
      "En ozel suitemiz, genis yasam alani, ozel teras ve panoramik Alacati manzarasi ile misafirlerimize unutulmaz bir konaklama deneyimi sunar. Geleneksel Alacati tas mimarisi ile modern konforun bulustugu bu suite, ozel jakuzisi ve premium minibari ile eksiksiz bir luks deneyim saglar.",
    shortDescription: "Panoramik manzara, ozel teras ve jakuzi",
    size: 55,
    capacity: 4,
    bedType: "King Yatak + Cift Kisilik Cekme Yatak",
    view: "Panoramik Alacati Manzarasi",
    price: "8.500",
    image: "/images/rooms/4d06e10d.jpg",
    gallery: [
      "/images/rooms/eb145162.jpg",
      "/images/rooms/e403d0f8.jpg",
      "/images/rooms/e4566d7f.jpg",
      "/images/rooms/37e58cd8.jpg",
    ],
    amenities: [
      "Ozel Jakuzi",
      "Panoramik Teras",
      "King Size Yatak",
      "Premium Minibar",
      "Nespresso Makinesi",
      "Bluetooth Hoparlor",
      "Ucretsiz WiFi",
      "Klima",
      "LCD TV",
      "Kasa",
      "Sac Kurutma Makinesi",
      "Ozel Banyo Urunleri",
    ],
    featured: true,
  },
  {
    slug: "deluxe-suite",
    name: "Deluxe Suite",
    nameEn: "Deluxe Suite",
    description:
      "Genis yasam alani ve ozel balkonu ile Deluxe Suite, Alacati'nin buguleyici sokaklarina bakan huzurlu bir siginak sunar. Dogal tas duvarlar, el yapimi seramikler ve ozenle secilmis mobilyalar ile Ege ruhunu her detayda hissedeceksiniz.",
    shortDescription: "Genis alan, ozel balkon ve sokak manzarasi",
    size: 40,
    capacity: 3,
    bedType: "King Yatak",
    view: "Alacati Sokak Manzarasi",
    price: "6.500",
    image: "/images/rooms/1fb73ee9.jpg",
    gallery: [
      "/images/rooms/w2875h4032x0y0-31b45ebb.jpg",
      "/images/rooms/9bb06987.jpg",
      "/images/rooms/1841de9d.jpg",
    ],
    amenities: [
      "Ozel Balkon",
      "King Size Yatak",
      "Minibar",
      "Nespresso Makinesi",
      "Ucretsiz WiFi",
      "Klima",
      "LCD TV",
      "Kasa",
      "Sac Kurutma Makinesi",
      "Ozel Banyo Urunleri",
    ],
    featured: true,
  },
  {
    slug: "superior-oda",
    name: "Superior Oda",
    nameEn: "Superior Room",
    description:
      "Ferah ve aydinlik tasarimi ile Superior Oda, konforlu bir konaklama icin ihtiyaciniz olan her seyi sunar. Geleneksel Alacati mimarisinden esinlenen dekorasyonu ve modern olanaklari ile hem dinlenmek hem de Alacati'yi kesfetmek icin ideal bir ust noktadir.",
    shortDescription: "Ferah tasarim, bahce manzarasi",
    size: 28,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Bahce Manzarasi",
    price: "4.500",
    image: "/images/rooms/8a916da6.jpg",
    gallery: [
      "/images/rooms/1a21576e.jpg",
      "/images/rooms/5533b0ba.jpg",
      "/images/rooms/a8c024c2.jpg",
    ],
    amenities: [
      "Bahce Manzarasi",
      "Cift Kisilik Yatak",
      "Minibar",
      "Ucretsiz WiFi",
      "Klima",
      "LCD TV",
      "Kasa",
      "Sac Kurutma Makinesi",
      "Banyo Urunleri",
    ],
    featured: true,
  },
  {
    slug: "standart-oda",
    name: "Standart Oda",
    nameEn: "Standard Room",
    description:
      "Sicak ve samimi atmosferi ile Standart Oda, Alacati'nin tadini cikarmak icin konforlu bir ust noktadir. Kompakt ama ozenle tasarlanmis mekaninda Palma Alacati'nin tum hizmetlerinden yararlanabilirsiniz.",
    shortDescription: "Sicak atmosfer, kompakt konfor",
    size: 20,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Avlu Manzarasi",
    price: "3.000",
    image: "/images/rooms/eefd6913.jpg",
    gallery: [
      "/images/rooms/8f52d654.jpg",
      "/images/rooms/e0c90e2f.jpg",
    ],
    amenities: [
      "Cift Kisilik Yatak",
      "Minibar",
      "Ucretsiz WiFi",
      "Klima",
      "LCD TV",
      "Kasa",
      "Sac Kurutma Makinesi",
      "Banyo Urunleri",
    ],
    featured: false,
  },
  {
    slug: "bahce-oda",
    name: "Bahce Oda",
    nameEn: "Garden Room",
    description:
      "Ozel bahce girisi ve teras ile dogayla ic ice bir konaklama sunan Bahce Oda, huzur arayanlar icin ideal bir secimdir. Sabah kahvaltinizi kendi ozel terasinizda, kus sesleri esliginde yapabilirsiniz.",
    shortDescription: "Ozel bahce girisi ve teras",
    size: 25,
    capacity: 2,
    bedType: "Cift Kisilik Yatak",
    view: "Bahce",
    price: "4.000",
    image: "/images/rooms/a6fdd4db.jpg",
    gallery: [
      "/images/rooms/bf0358c9.jpg",
      "/images/rooms/91759d1e.jpg",
      "/images/rooms/255a0a72.jpg",
    ],
    amenities: [
      "Ozel Teras",
      "Bahce Girisi",
      "Cift Kisilik Yatak",
      "Minibar",
      "Ucretsiz WiFi",
      "Klima",
      "LCD TV",
      "Kasa",
      "Banyo Urunleri",
    ],
    featured: false,
  },
  {
    slug: "cati-kati-suite",
    name: "Cati Kati Suite",
    nameEn: "Rooftop Suite",
    description:
      "Otelin en yuksek noktasinda yer alan Cati Kati Suite, 360 derece Alacati manzarasi sunan ozel cati terasi ile benzersiz bir deneyim sunar. Gun batimini ozel terasinizdan seyrederken Ege'nin butun guzelligini ayaklarinizin altinda hissedeceksiniz.",
    shortDescription: "360 derece manzara, ozel cati terasi",
    size: 45,
    capacity: 2,
    bedType: "King Yatak",
    view: "360 Derece Alacati Manzarasi",
    price: "7.500",
    image: "/images/rooms/dbb69dad.jpg",
    gallery: [
      "/images/rooms/f29760bf.jpg",
      "/images/rooms/438a19c2.jpg",
      "/images/rooms/1205fd3c.jpg",
      "/images/rooms/4001fb51.jpg",
    ],
    amenities: [
      "Ozel Cati Terasi",
      "360 Manzara",
      "King Size Yatak",
      "Premium Minibar",
      "Nespresso Makinesi",
      "Bluetooth Hoparlor",
      "Ucretsiz WiFi",
      "Klima",
      "LCD TV",
      "Kasa",
      "Sac Kurutma Makinesi",
      "Ozel Banyo Urunleri",
    ],
    featured: true,
  },
];

export const testimonials = [
  {
    name: "Ayse K.",
    location: "Istanbul",
    text: "Alacati'da konakladigimiz en guzel otel. Personelin sicakligi, odanin temizligi ve kahvaltinin zenginligi muhtesemdi. Kesinlikle tekrar gelecegiz.",
    room: "Deluxe Suite",
    rating: 5,
  },
  {
    name: "Marco R.",
    location: "Roma, Italya",
    text: "A hidden gem in Alacati. The architecture, the garden, the breakfast - everything was perfect. This hotel captures the true spirit of the Aegean.",
    room: "Grand Suite",
    rating: 5,
  },
  {
    name: "Mehmet Y.",
    location: "Ankara",
    text: "Isinden cikar cikmaz kendini tatilde hissetmek istiyorsan burasi tam senlik. Bahce odasi harikaydı, kus sesleriyle uyanmak paha bicilemez.",
    room: "Bahce Oda",
    rating: 5,
  },
  {
    name: "Sophie L.",
    location: "Paris, Fransa",
    text: "Magnifique! The rooftop terrace at sunset is simply unforgettable. One of the best boutique hotels we've stayed at in Turkey.",
    room: "Cati Kati Suite",
    rating: 5,
  },
];

export const amenities = [
  {
    icon: "Waves",
    title: "Acik Yuzme Havuzu",
    description: "Zeytin agaclari ile cevrili ozel havuzumuzda serinleyin",
  },
  {
    icon: "Utensils",
    title: "Ege Mutfagi Restoran",
    description: "Yerel lezzetler ve organik malzemelerle hazirlanan menuler",
  },
  {
    icon: "Wifi",
    title: "Yuksek Hiz WiFi",
    description: "Tum alanlarda ucretsiz 100+ Mbps internet erisimi",
  },
  {
    icon: "Car",
    title: "Ucretsiz Vale Otopark",
    description: "7/24 guvenli vale park hizmeti",
  },
  {
    icon: "Coffee",
    title: "Acik Kahvalti",
    description: "Her sabah taze hazırlanan zengin Ege kahvaltisi",
  },
  {
    icon: "Flower2",
    title: "SPA & Wellness",
    description: "Geleneksel hamam ve modern spa hizmetleri",
  },
  {
    icon: "Bike",
    title: "Bisiklet Kiralama",
    description: "Alacati sokaklarini bisikletle kesfetme imkani",
  },
  {
    icon: "Plane",
    title: "Transfer Hizmeti",
    description: "Havaalani ve cevreye ozel transfer organizasyonu",
  },
  {
    icon: "Wine",
    title: "Sarap Bar",
    description: "Seckin Ege saraplari ve kokteyl menusu",
  },
];

export const galleryImages = [
  { src: "/images/hotel/325f6644.jpg", alt: "Palma Alacati dis gorunum", category: "otel" },
  { src: "/images/hotel/6a4c7b08.jpg", alt: "Acik yuzme havuzu", category: "otel" },
  { src: "/images/hotel/35f447c1.jpg", alt: "Otel bahcesi", category: "otel" },
  { src: "/images/hotel/922ba4ad.jpg", alt: "Teras ve veranda", category: "otel" },
  { src: "/images/hotel/9ac599d1.jpg", alt: "Dis mekan gorunum", category: "otel" },
  { src: "/images/rooms/4d06e10d.jpg", alt: "Aegean Suite oturma alani", category: "odalar" },
  { src: "/images/rooms/1fb73ee9.jpg", alt: "Deluxe Suite oturma alani", category: "odalar" },
  { src: "/images/rooms/8a916da6.jpg", alt: "Superior Oda yatak odasi", category: "odalar" },
  { src: "/images/rooms/dbb69dad.jpg", alt: "Aegean Suite yatak odasi", category: "odalar" },
  { src: "/images/hotel/4ed14e72.jpg", alt: "Otel dis mekan detay", category: "otel" },
  { src: "/images/hotel/81d0ecd4.jpg", alt: "Otel girisi", category: "otel" },
  { src: "/images/rooms/9bb06987.jpg", alt: "Banyo ve dus", category: "odalar" },
];

export const faqItems = [
  {
    question: "Giris ve cikis saatleri nedir?",
    answer: "Giris (check-in) saati 14:00, cikis (check-out) saati 12:00'dir. Erken giris ve gec cikis talepleri musaitlik durumuna gore degerlendirilir.",
  },
  {
    question: "Otel havaalanina ne kadar uzaklikta?",
    answer: "Izmir Adnan Menderes Havalimani'na yaklasik 80 km uzakliktayiz. Transfer hizmeti talebiniz halinde organizasyon yapilmaktadir.",
  },
  {
    question: "Evcil hayvan kabul ediyor musunuz?",
    answer: "Maalesef otelimizde evcil hayvan kabul edilmemektedir.",
  },
  {
    question: "Kahvalti dahil mi?",
    answer: "Evet, tum oda fiyatlarina acik bufe Ege kahvaltisi dahildir. Kahvalti her gun 08:00-11:00 saatleri arasinda servis edilmektedir.",
  },
  {
    question: "Havuz saatleri nedir?",
    answer: "Acik yuzme havuzumuz her gun 09:00-20:00 saatleri arasinda hizmet vermektedir.",
  },
  {
    question: "Otopark var mi?",
    answer: "Evet, misafirlerimize ucretsiz vale otopark hizmeti sunulmaktadir.",
  },
  {
    question: "Iptal politikaniz nedir?",
    answer: "Giris tarihinden 7 gun oncesine kadar ucretsiz iptal yapilabilir. 7 gunun altindaki iptallerde ilk gece konaklama bedeli tahsil edilir.",
  },
];
