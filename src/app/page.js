import Brands from "@/components/Brands";
import Catering from "@/components/Catering";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <Hero/>
      <Brands/>
      <Catering/>
      <Menu/>
      <Testimonials/>
      <Locations/>

    </main>
  );
}
