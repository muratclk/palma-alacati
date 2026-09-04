import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Rooms from "@/components/home/Rooms";
import Amenities from "@/components/home/Amenities";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Location from "@/components/home/Location";
import CTA from "@/components/home/CTA";
import { HOME_HIDDEN } from "@/lib/siteStatus";

export async function generateMetadata(): Promise<Metadata> {
  // Ana sayfa gizliyken sekme basligi da bombos 404 gibi gorunsun.
  if (HOME_HIDDEN) {
    return {
      title: { absolute: "404: This page could not be found." },
      robots: { index: false, follow: false },
    };
  }
  return {};
}

export default function HomePage() {
  // Ana sayfa gizliyken 404 dondur; eski icerik asagida oldugu gibi duruyor.
  if (HOME_HIDDEN) {
    notFound();
  }

  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Testimonials />
      <CTA />
      <Location />
    </>
  );
}
