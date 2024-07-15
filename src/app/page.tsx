import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <HomeHeader/>
    <Hero/>
    <Benefits/>
    <About/>
    <Footer/>
   </div>
  );
}
