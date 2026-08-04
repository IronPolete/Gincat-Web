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
  ];

  return (
    <section
    id="servicios"
    className="bg-white py-32"
  >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 max-w-3xl">

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

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/company/company1.png"
              alt={t.imageAlt}
              width={900}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

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

                  <div className="h-8 w-px bg-slate-300"></div>

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