import Image from "next/image";

export default function Company() {
  return (
    <section
      id="empresa"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            SOBRE GINCAT SYSTEM
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            Más de 25 años fabricando
            <br />
            matrices de precisión.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            En Gincat diseñamos y fabricamos matrices,
            utillajes y soluciones de estampación metálica
            para clientes que buscan la máxima calidad,
            precisión y fiabilidad.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/company/company.png"
            alt="Instalaciones Gincat"
            width={1600}
            height={900}
            className="w-full object-cover"
          />

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Ingeniería
            </h3>

            <p className="text-slate-600 leading-8">
              Desarrollo de matrices y soluciones adaptadas
              a las necesidades de cada cliente.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Fabricación
            </h3>

            <p className="text-slate-600 leading-8">
              Producción propia con maquinaria especializada
              y procesos de alta precisión.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Calidad
            </h3>

            <p className="text-slate-600 leading-8">
              Compromiso con la mejora continua y los
              estándares exigidos por la industria.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Experiencia
            </h3>

            <p className="text-slate-600 leading-8">
              Más de dos décadas ofreciendo soluciones
              fiables para automoción e industria.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}