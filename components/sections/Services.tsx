
import Image from "next/image";
import { translations } from "@/lib/translations";

type ServicesProps = {
  locale: keyof typeof translations;
};

export default function Services({ locale }: ServicesProps) {
  const t = translations[locale].services;

  const services = [
    {
      number: "01",
      title: t.service1Title,
      description: t.service1Description,
    },
    {
      number: "02",
      title: t.service2Title,
      description: t.service2Description,
    },
    {
      number: "03",
      title: t.service3Title,
      description: t.service3Description,
    },
    {
      number: "04",
      title: t.service4Title,
      description: t.service4Description,
    },
    {
      number: "05",
      title: t.service5Title,
      description: t.service5Description,
    },
    {
      number: "06",
      title: t.service6Title,
      description: t.service6Description,
    },
  ];

  const images = [
    {
      src: "/images/company/company2-nueva.jpeg",
      alt: "Matrices de precisión Gincat System",
    },
    {
      src: "/images/company/company1-nueva.png",
      alt: t.imageAlt,
    },
    {
      src: "/images/company/company4-nueva.jpeg",
      alt: "Fabricación de matrices Gincat System",
    },
  ];

  return (
    <section id="servicios" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-8">
        {/* CABECERA */}
        <div className="mb-20 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            {t.subtitle}
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            {t.title1}
            <br />
            {t.title2}
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            {t.description}
          </p>
        </div>

        {/* FOTOGRAFÍAS Y SERVICIOS */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* COLUMNA IZQUIERDA: 3 FOTOGRAFÍAS */}
          <div className="flex flex-col gap-8">
            {images.map((image, index) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full transition-transform duration-700 hover:scale-105"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* COLUMNA DERECHA: SERVICIOS */}
          <div>
            {services.map((service) => (
              <div
                key={service.number}
                className="border-b border-slate-200 py-8"
              >
                <div className="mb-4 flex items-center gap-6">
                  <span className="text-lg font-bold text-slate-400">
                    {service.number}
                  </span>

                  <div className="h-8 w-px bg-slate-300" />

                  <h3 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <p className="pl-[58px] leading-8 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
