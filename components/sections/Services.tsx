import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Matricería",
    description:
      "Diseño, desarrollo y fabricación de matrices de alta precisión adaptadas a las necesidades de cada proyecto.",
  },
  {
    number: "02",
    title: "Estampación metálica",
    description:
      "Producción de piezas mediante estampación para series pequeñas, medianas y grandes, garantizando repetibilidad y calidad.",
  },
  {
    number: "03",
    title: "Soldadura",
    description:
      "Procesos de soldadura para componentes industriales con un alto nivel de exigencia técnica.",
  },
  {
    number: "04",
    title: "Utillajes",
    description:
      "Fabricación de útiles y soluciones a medida para optimizar los procesos productivos de nuestros clientes.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            SERVICIOS
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            Soluciones industriales
            <br />
            de principio a fin.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Acompañamos a nuestros clientes durante todo el proceso:
            desde el diseño de la matriz hasta la fabricación final
            de las piezas, ofreciendo un servicio integral y flexible.
          </p>

        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Imagen */}

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/company/company.png"
              alt="Servicios Gincat"
              width={900}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Lista */}

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