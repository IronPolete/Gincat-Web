import {
    Factory,
    Cog,
    ShieldCheck,
    Wrench,
  } from "lucide-react";
  
  const capabilities = [
    {
      icon: Factory,
      title: "Estampación metálica",
      description:
        "Producción de componentes metálicos mediante procesos de estampación de alta precisión.",
    },
    {
      icon: Cog,
      title: "Matricería",
      description:
        "Diseño, fabricación y mantenimiento de matrices adaptadas a cada proyecto.",
    },
    {
      icon: Wrench,
      title: "Utillajes",
      description:
        "Fabricación de útiles y soluciones específicas para optimizar los procesos productivos.",
    },
    {
      icon: ShieldCheck,
      title: "Calidad",
      description:
        "Control continuo del proceso productivo siguiendo los estándares más exigentes del sector.",
    },
  ];
  
  export default function Capabilities() {
    return (
      <section
        id="capacidades"
        className="bg-slate-50 py-28"
      >
        <div className="mx-auto max-w-7xl px-8">
  
          <div className="mb-16 text-center">
  
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              CAPACIDADES
            </p>
  
            <h2 className="text-5xl font-black text-slate-900">
              Soluciones industriales
              <br />
              de alto nivel.
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Combinamos experiencia, ingeniería y fabricación para ofrecer
              soluciones completas adaptadas a las necesidades de cada cliente.
            </p>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {capabilities.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon size={30} />
                  </div>
  
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
  
                  <p className="leading-8 text-slate-600">
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