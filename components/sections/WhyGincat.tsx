import {
    Award,
    Building2,
    Factory,
    Settings,
  } from "lucide-react";
  
  const stats = [
    {
      icon: Award,
      value: "25+",
      title: "Años de experiencia",
      description:
        "Más de dos décadas desarrollando soluciones para la industria.",
    },
    {
      icon: Building2,
      value: "1.800 m²",
      title: "Instalaciones",
      description:
        "Centro productivo equipado para proyectos de alta exigencia.",
    },
    {
      icon: Factory,
      value: "40–400 T",
      title: "Prensas",
      description:
        "Capacidad de estampación para distintos tipos de producción.",
    },
    {
      icon: Settings,
      value: "360°",
      title: "Servicio integral",
      description:
        "Desde el diseño de la matriz hasta la pieza final.",
    },
  ];
  
  export default function WhyGincat() {
    return (
      <section
        id="porque-gincat"
        className="bg-[#0f172a] py-32"
      >
        <div className="mx-auto max-w-7xl px-8">
  
          <div className="mx-auto mb-20 max-w-4xl text-center">
  
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              POR QUÉ GINCAT
            </p>
  
            <h2 className="text-5xl font-black leading-tight !text-white lg:text-6xl">
              Ingeniería,
              <br />
              fabricación y compromiso.
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 !text-slate-300">
              Cada proyecto se desarrolla con el objetivo de ofrecer precisión,
              fiabilidad y soluciones adaptadas a las necesidades de nuestros
              clientes.
            </p>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {stats.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-white/10"
                >
                  <Icon
                    size={34}
                    className="text-sky-300"
                  />
  
                  <h3 className="mt-8 text-5xl font-black !text-white">
                    {item.value}
                  </h3>
  
                  <h4 className="mt-4 text-2xl font-bold !text-white">
                    {item.title}
                  </h4>
  
                  <p className="mt-5 leading-8 !text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }