import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
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
              Especialistas en matricería,
              estampación metálica y fabricación
              industrial de alta precisión.
            </p>

          </div>

          {/* Empresa */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Empresa
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#empresa"
                  className="text-slate-400 transition hover:text-white"
                >
                  Empresa
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  className="text-slate-400 transition hover:text-white"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#calidad"
                  className="text-slate-400 transition hover:text-white"
                >
                  Calidad
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contacto
                </a>
              </li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Contacto
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
              Certificaciones
            </h3>

            <div className="space-y-4">

              <a
                href="/certificados/iso9001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:translate-x-1"
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
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:translate-x-1"
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
                  Próximamente
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 lg:flex-row">

          <p>
            © 2026 Gincat System. Todos los derechos reservados.
          </p>

          <p>
            Diseñado y desarrollado por Gincat System.
          </p>

        </div>

      </div>

    </footer>
  );
}