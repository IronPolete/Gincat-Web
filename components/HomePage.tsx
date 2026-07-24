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

import { translations } from "@/lib/translations";

type Props = {
  locale: keyof typeof translations;
};

export default function HomePage({ locale }: Props) {
  return (
    <>
      <Navbar locale={locale} />

      <main>
        <Hero locale={locale} />

        <Company locale={locale} />

        <Capabilities locale={locale} />

        <Services locale={locale} />

        <WhyGincat locale={locale} />

        <Quality locale={locale} />

        <Machinery locale={locale} />

        <Sectors locale={locale} />

        <Certifications locale={locale} />

        {/* FORMULARIO PRESUPUESTO */}
        <Contact locale={locale} />

        <Map locale={locale} />
      </main>

      <Footer locale={locale} />
    </>
  );
}