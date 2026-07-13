import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Imagen */}

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

      <div className="relative z-10 flex min-h-screen items-center pt-24 lg:pt-0">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-sm">
              GINCAT SYSTEM
            </p>

            <h1 className="text-5xl font-black leading-none text-white sm:text-6xl lg:text-8xl">
              Engineering
              <br />
              Precision.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
              Diseño y fabricación de matrices, estampación metálica y
              soluciones industriales para clientes que buscan máxima
              precisión, fiabilidad y calidad.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-12">

              <a
                href="#contacto"
                className="w-full rounded-md bg-white px-8 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-slate-200 sm:w-auto"
              >
                Solicitar presupuesto
              </a>

              <a
                href="#servicios"
                className="w-full rounded-md border border-white/40 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Ver servicios
              </a>

            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-3 lg:mt-20">

              <div>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                  25+
                </h2>

                <p className="mt-2 text-white/70">
                  Años de experiencia
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                  IATF
                </h2>

                <p className="mt-2 text-white/70">
                  Sistema de calidad
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
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