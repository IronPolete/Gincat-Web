import {
    Car,
    Factory,
    Cpu,
    Cog,
  } from "lucide-react";
  
  const sectors = [
    {
      icon: Car,
      title: "Automoción",
      text: "Fabricación de componentes metálicos para uno de los sectores más exigentes.",
    },
    {
      icon: Factory,
      title: "Industria",
      text: "Soluciones para procesos industriales y fabricación en serie.",
    },
    {
      icon: Cog,
      title: "Ingeniería",
      text: "Desarrollo de matrices, utillajes y soluciones personalizadas.",
    },
    {
      icon: Cpu,
      title: "Fabricación metálica",
      text: "Procesos de estampación y fabricación con altos estándares de calidad.",
    },
  ];
  
  export default function Sectors() {
    return (
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
  
          <div className="mb-20 text-center">
  
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              SECTORES
            </p>
  
            <h2 className="text-5xl font-black text-slate-900">
              Experiencia en distintos
              <br />
              sectores industriales.
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Adaptamos nuestros procesos y conocimientos a las necesidades
              específicas de cada cliente y sector.
            </p>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {sectors.map((sector) => {
              const Icon = sector.icon;
  
              return (
                <div
                  key={sector.title}
                  className="rounded-3xl border border-slate-200 p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon size={30} />
                  </div>
  
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {sector.title}
                  </h3>
  
                  <p className="leading-8 text-slate-600">
                    {sector.text}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }