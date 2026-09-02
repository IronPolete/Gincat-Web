import Image from "next/image";
import { translations } from "@/lib/translations";

type MachineryProps = {
  locale: keyof typeof translations;
};

export default function Machinery({ locale }: MachineryProps) {
  const t = translations[locale].machinery;

  const machines = [
    {
      image: "/images/machinery/machine1.png",
      title: t.machine1,
      contain: false,
    },
    {
      image: "/images/machinery/PHOTOA.jfif",
      title: t.machine3,
      contain: true,
    },
    {
      image: "/images/news/keyence.jpg",
      title: t.machine4,
      contain: true,
    },
  ];

  return (
    <section id="maquinaria" className="bg-slate-100 py-32">
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

        <div className="grid gap-8 md:grid-cols-3">

          {machines.map((machine) => (
            <div
              key={machine.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[300px] bg-white">

                <Image
                  src={machine.image}
                  alt={machine.title}
                  fill
                  className={
                    machine.contain
                      ? "object-contain p-4 transition duration-700 group-hover:scale-105"
                      : "object-cover transition duration-700 group-hover:scale-105"
                  }
                />

              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {machine.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}