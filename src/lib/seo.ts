import { hotelInfo, rooms } from "./data";

export function generateHotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotelInfo.fullName,
    description: hotelInfo.description,
    url: "https://palmaalacati.com",
    telephone: hotelInfo.phone,
    email: hotelInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1005 Sokak No:12",
      addressLocality: "Alacati, Cesme",
      addressRegion: "Izmir",
      postalCode: "35937",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotelInfo.coordinates.lat,
      longitude: hotelInfo.coordinates.lng,
    },
    image: "https://placehold.co/1200x630/3D5A47/FAF8F4?text=Palma+Alacati",
    starRating: {
      "@type": "Rating",
      ratingValue: "4",
    },
    priceRange: "$$$$",
    checkinTime: hotelInfo.checkIn,
    checkoutTime: hotelInfo.checkOut,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Acik Yuzme Havuzu", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ucretsiz WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ucretsiz Otopark", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restoran", value: true },
      { "@type": "LocationFeatureSpecification", name: "SPA", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kahvalti Dahil", value: true },
    ],
    containsPlace: rooms.map((room) => ({
      "@type": "HotelRoom",
      name: room.name,
      description: room.shortDescription,
      occupancy: {
        "@type": "QuantitativeValue",
        value: room.capacity,
      },
      floorSize: {
        "@type": "QuantitativeValue",
        value: room.size,
        unitCode: "MTK",
      },
      bed: {
        "@type": "BedDetails",
        typeOfBed: room.bedType,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateRoomJsonLd(room: (typeof rooms)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    image: room.image,
    occupancy: {
      "@type": "QuantitativeValue",
      value: room.capacity,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: room.size,
      unitCode: "MTK",
    },
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bedType,
    },
    amenityFeature: room.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      price: room.price.replace(".", ""),
      availability: "https://schema.org/InStock",
    },
  };
}
