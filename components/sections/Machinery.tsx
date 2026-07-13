import Image from "next/image";

const machines = [
  {
    image: "/images/machinery/machine1.png",
    title: "Centro de mecanizado",
  },
  {
    image: "/images/machinery/machine2.png",
    title: "Fabricación de matrices",
  },
  {
    image: "/images/machinery/machine3.png",
    title: "Procesos de precisión",
  },
  {
    image: "/images/machinery/machine4.png",
    title: "Producción industrial",
  },
];

export default function Machinery() {
  return (
    <section id="maquinaria" className="bg-slate-100 py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            MAQUINARIA
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            Tecnología para fabricar
            <br />
            con precisión.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Disponemos de un parque de maquinaria preparado para
            fabricar matrices y componentes con la máxima precisión,
            garantizando calidad y repetibilidad en cada proyecto.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {machines.map((machine) => (
            <div
              key={machine.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[380px]">
                <Image
                  src={machine.image}
                  alt={machine.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
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