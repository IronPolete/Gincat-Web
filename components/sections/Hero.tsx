"use client";

import Image from "next/image";
import { translations } from "@/lib/translations";

type HeroProps = {
  locale: keyof typeof translations;
};

export default function Hero({ locale }: HeroProps) {
  const t = translations[locale].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
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
              {t.subtitle}
            </p>

            <h1 className="text-5xl font-black leading-none text-white sm:text-6xl lg:text-8xl">
              {t.title1}
              <br />
              {t.title2}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-12">

              <a
                href="#contacto"
                className="w-full rounded-md bg-white px-8 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-slate-200 sm:w-auto"
              >
                {t.button1}
              </a>

              <a
                href="#servicios"
                className="w-full rounded-md border border-white/40 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                {t.button2}
              </a>

            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-3 lg:mt-20">

              <div>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                  {t.years}
                </h2>

                <p className="mt-2 text-white/70">
                  {t.yearsText}
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                  {t.quality}
                </h2>

                <p className="mt-2 text-white/70">
                  {t.qualityText}
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                  {t.manufacturing}
                </h2>

                <p className="mt-2 text-white/70">
                  {t.manufacturingText}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}