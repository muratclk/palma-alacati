import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Rooms from "@/components/home/Rooms";
import Amenities from "@/components/home/Amenities";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Location from "@/components/home/Location";
import CTA from "@/components/home/CTA";

export default function HomePage() {
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
