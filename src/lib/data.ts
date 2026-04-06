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
    image: "https://placehold.co/800x600/3D5A47/FAF8F4?text=Grand+Suite",
    gallery: [
      "https://placehold.co/1200x800/3D5A47/FAF8F4?text=Grand+Suite+1",
      "https://placehold.co/1200x800/5A7A6F/FAF8F4?text=Grand+Suite+2",
      "https://placehold.co/1200x800/6A9BAA/FAF8F4?text=Grand+Suite+3",
      "https://placehold.co/1200x800/B8956B/FAF8F4?text=Grand+Suite+4",
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
    image: "https://placehold.co/800x600/5A7A6F/FAF8F4?text=Deluxe+Suite",
    gallery: [
      "https://placehold.co/1200x800/5A7A6F/FAF8F4?text=Deluxe+Suite+1",
      "https://placehold.co/1200x800/3D5A47/FAF8F4?text=Deluxe+Suite+2",
      "https://placehold.co/1200x800/B8956B/FAF8F4?text=Deluxe+Suite+3",
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
    image: "https://placehold.co/800x600/6A9BAA/FAF8F4?text=Superior+Oda",
    gallery: [
      "https://placehold.co/1200x800/6A9BAA/FAF8F4?text=Superior+Oda+1",
      "https://placehold.co/1200x800/3D5A47/FAF8F4?text=Superior+Oda+2",
      "https://placehold.co/1200x800/B8956B/FAF8F4?text=Superior+Oda+3",
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
    image: "https://placehold.co/800x600/B8956B/FAF8F4?text=Standart+Oda",
    gallery: [
      "https://placehold.co/1200x800/B8956B/FAF8F4?text=Standart+Oda+1",
      "https://placehold.co/1200x800/3D5A47/FAF8F4?text=Standart+Oda+2",
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
    image: "https://placehold.co/800x600/3D5A47/FAF8F4?text=Bahce+Oda",
    gallery: [
      "https://placehold.co/1200x800/3D5A47/FAF8F4?text=Bahce+Oda+1",
      "https://placehold.co/1200x800/5A7A6F/FAF8F4?text=Bahce+Oda+2",
      "https://placehold.co/1200x800/6A9BAA/FAF8F4?text=Bahce+Oda+3",
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
    image: "https://placehold.co/800x600/96754D/FAF8F4?text=Cati+Kati+Suite",
    gallery: [
      "https://placehold.co/1200x800/96754D/FAF8F4?text=Cati+Kati+1",
      "https://placehold.co/1200x800/3D5A47/FAF8F4?text=Cati+Kati+2",
      "https://placehold.co/1200x800/6A9BAA/FAF8F4?text=Cati+Kati+3",
      "https://placehold.co/1200x800/B8956B/FAF8F4?text=Cati+Kati+4",
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
  { src: "https://placehold.co/800x600/3D5A47/FAF8F4?text=Otel+Genel", alt: "Palma Alacati dis gorunum", category: "otel" },
  { src: "https://placehold.co/800x600/5A7A6F/FAF8F4?text=Havuz", alt: "Acik yuzme havuzu", category: "otel" },
  { src: "https://placehold.co/800x600/6A9BAA/FAF8F4?text=Bahce", alt: "Otel bahcesi", category: "otel" },
  { src: "https://placehold.co/800x600/B8956B/FAF8F4?text=Restoran", alt: "Ege mutfagi restoran", category: "restoran" },
  { src: "https://placehold.co/800x600/96754D/FAF8F4?text=Kahvalti", alt: "Acik bufet kahvalti", category: "restoran" },
  { src: "https://placehold.co/800x600/3D5A47/FAF8F4?text=Suite+Oda", alt: "Grand Suite oda", category: "odalar" },
  { src: "https://placehold.co/800x600/6A9BAA/FAF8F4?text=Deluxe+Oda", alt: "Deluxe Suite", category: "odalar" },
  { src: "https://placehold.co/800x600/5A7A6F/FAF8F4?text=SPA", alt: "SPA ve wellness", category: "spa" },
  { src: "https://placehold.co/800x600/B8956B/FAF8F4?text=Teras", alt: "Cati terasi gun batimi", category: "otel" },
  { src: "https://placehold.co/800x600/96754D/FAF8F4?text=Lobi", alt: "Otel lobisi", category: "otel" },
  { src: "https://placehold.co/800x600/3D5A47/FAF8F4?text=Alacati+Sokak", alt: "Alacati sokaklari", category: "cevre" },
  { src: "https://placehold.co/800x600/6A9BAA/FAF8F4?text=Deniz", alt: "Alacati sahil", category: "cevre" },
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
