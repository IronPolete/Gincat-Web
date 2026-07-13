import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/hero/hero.png"
        alt="Gincat System"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
              GINCAT SYSTEM
            </p>

            <h1 className="text-6xl font-black leading-none text-white lg:text-8xl">
              Engiring
              <br />
              Precision.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/90">
              Diseño y fabricación de matrices, estampación metálica y
              soluciones industriales para clientes que buscan máxima
              precisión, fiabilidad y calidad.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#"
                className="rounded-md bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Solicitar presupuesto
              </a>

              <a
                href="#"
                className="rounded-md border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
              <div>
                <h2 className="text-5xl font-bold text-white">25+</h2>
                <p className="mt-2 text-white/70">
                  Años de experiencia
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-white">
                  IATF
                </h2>
                <p className="mt-2 text-white/70">
                  Sistema de calidad
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-white">
                  100%
                </h2>
                <p className="mt-2 text-white/70">
                  Fabricación propia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}