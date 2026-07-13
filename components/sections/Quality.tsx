import { BadgeCheck, CheckCircle2, ClipboardCheck } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Control de calidad",
    text: "Cada pieza se verifica durante todo el proceso de fabricación para asegurar la máxima precisión.",
  },
  {
    icon: ClipboardCheck,
    title: "Mejora continua",
    text: "Trabajamos con procesos estandarizados y una filosofía de mejora continua para garantizar la fiabilidad.",
  },
  {
    icon: CheckCircle2,
    title: "Compromiso",
    text: "Nuestro objetivo es entregar productos que cumplan los requisitos técnicos y las expectativas del cliente.",
  },
];

export default function Quality() {
  return (
    <section id="calidad" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            CALIDAD
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            La calidad forma parte
            <br />
            de cada proceso.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Nuestro compromiso es ofrecer soluciones fiables,
            repetibles y adaptadas a los estándares más exigentes
            del sector industrial.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}