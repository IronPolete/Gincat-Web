import Image from "next/image";

import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import { translations } from "@/lib/translations";

type FooterProps = {
  locale: keyof typeof translations;
};

export default function Footer({ locale }: FooterProps) {
  const t = translations[locale].footer;

  return (
    <footer className="bg-[#0b1120] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Gincat System"
              width={220}
              height={70}
              className="rounded-md bg-white p-2"
            />

            <p className="mt-8 leading-8 text-slate-400">
              {t.description}
            </p>

            {/* Política de Calidad */}
            <a
              href="/documentos/politica-calidad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm text-sky-400 transition hover:text-white"
            >
              Política de Calidad
            </a>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              {t.company}
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#company"
                  className="text-slate-400 transition hover:text-white"
                >
                  {t.company}
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 transition hover:text-white"
                >
                  {t.services}
                </a>
              </li>

              <li>
                <a
                  href="#quality"
                  className="text-slate-400 transition hover:text-white"
                >
                  {t.quality}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              {t.contact}
            </h3>

            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin
                  className="mt-1 text-sky-400"
                  size={20}
                />

                <span className="text-slate-400 leading-7">
                  Carrer Barcelona, 25
                  <br />
                  08272 Sant Fruitós de Bages
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  className="mt-1 text-sky-400"
                  size={20}
                />

                <a
                  href="tel:+34938761298"
                  className="text-slate-400 transition hover:text-white"
                >
                  +34 938 761 298
                </a>
              </div>

              <div className="flex gap-3">
                <Mail
                  className="mt-1 text-sky-400"
                  size={20}
                />

                <a
                  href="mailto:info@gincatsystem.com"
                  className="text-slate-400 transition hover:text-white"
                >
                  info@gincatsystem.com
                </a>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              {t.certifications}
            </h3>

            <div className="space-y-4">
              <a
                href="/certificados/iso9001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-white/10"
              >
                <span>ISO 9001</span>

                <ArrowUpRight
                  size={18}
                  className="text-emerald-400"
                />
              </a>

              <a
                href="/certificados/iso14001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-white/10"
              >
                <span>ISO 14001</span>

                <ArrowUpRight
                  size={18}
                  className="text-emerald-400"
                />
              </a>

              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span>IATF 16949</span>

                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
                  {t.comingSoon}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 lg:flex-row">
          <p>
            © 2026 Gincat System. {t.rights}
          </p>

          <p>
            {t.designed}
          </p>
        </div>
      </div>
    </footer>
  );
}