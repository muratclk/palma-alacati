import { hotelInfo, rooms } from "./data";

export function generateHotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://palmaalacati.com",
    name: hotelInfo.fullName,
    description: hotelInfo.description,
    url: "https://palmaalacati.com",
    telephone: hotelInfo.phone,
    email: hotelInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2055. Sokak No:4, Hacimemis Mahallesi",
      addressLocality: "Alacati, Cesme",
      addressRegion: "Izmir",
      postalCode: "35930",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotelInfo.coordinates.lat,
      longitude: hotelInfo.coordinates.lng,
    },
    image: "/images/hotel/325f6644.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hotelInfo.googleRating,
      reviewCount: hotelInfo.googleReviewCount,
      bestRating: 5,
    },
    priceRange: "$$$",
    checkinTime: hotelInfo.checkIn,
    checkoutTime: hotelInfo.checkOut,
    numberOfRooms: 5,
    petsAllowed: false,
    availableLanguage: [
      { "@type": "Language", name: "Turkish" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Italian" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Mevsimlik Acik Havuz", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ucretsiz WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ucretsiz Otopark", value: true },
      { "@type": "LocationFeatureSpecification", name: "Klima", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ozel Mutfak", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bahce", value: true },
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
  };
}
