import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Company from "@/components/sections/Company";
import Capabilities from "@/components/sections/Capabilities";
import Services from "@/components/sections/Services";
import WhyGincat from "@/components/sections/WhyGincat";
import Quality from "@/components/sections/Quality";
import Machinery from "@/components/sections/Machinery";
import Sectors from "@/components/sections/Sectors";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Map from "@/components/sections/Map";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Company />
        <Capabilities />
        <Services />
        <WhyGincat />
        <Quality />
        <Machinery />
        <Sectors />
        <Certifications />
        <Contact />
        <Map />
      </main>
      <Footer />  
    </>
  );
}