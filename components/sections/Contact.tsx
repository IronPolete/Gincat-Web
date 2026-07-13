import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-slate-900 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            CONTACTO
          </p>

          <h2 className="text-5xl font-black text-white">
            ¿Hablamos de tu proyecto?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Nuestro equipo está preparado para ayudarte en cualquier proyecto
            de matricería, estampación metálica o fabricación industrial.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">

          {/* Información */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="mb-10 text-3xl font-bold text-white">
              Datos de contacto
            </h3>

            <div className="space-y-10">

              <div className="flex gap-5">

                <MapPin
                  className="mt-1 text-sky-400"
                  size={26}
                />

                <div>

                  <h4 className="font-semibold text-white">
                    Dirección
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    Carrer Barcelona, 25
                    <br />
                    08272 Sant Fruitós de Bages
                    <br />
                    Barcelona, España
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Phone
                  className="mt-1 text-sky-400"
                  size={26}
                />

                <div>

                  <h4 className="font-semibold text-white">
                    Teléfono
                  </h4>

                  <p className="mt-2 text-slate-300">
                    +34 938 761 298
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Mail
                  className="mt-1 text-sky-400"
                  size={26}
                />

                <div>

                  <h4 className="font-semibold text-white">
                    Correo electrónico
                  </h4>

                  <p className="mt-2 text-slate-300">
                    info@gincatsystem.com
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Formulario */}

          <div className="rounded-3xl bg-white p-10 shadow-2xl">

            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              Solicita presupuesto
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Nombre"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />

              <input
                type="text"
                placeholder="Empresa"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />

              <textarea
                rows={6}
                placeholder="Cuéntanos tu proyecto..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />

              <button className="w-full rounded-xl bg-slate-900 py-4 text-lg font-semibold text-white transition hover:bg-slate-800">
                Solicitar presupuesto
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}