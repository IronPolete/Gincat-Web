"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { translations } from "@/lib/translations";

type ContactProps = {
  locale: keyof typeof translations;
};

export default function Contact({ locale }: ContactProps) {
  const t = translations[locale].contact;

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });


      if (response.ok) {
        setSent(true);

        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      }

    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);
    }
  };


  return (
    <section
  id="contacto"
  className="bg-slate-900 py-32"
>

      <div className="mx-auto max-w-7xl px-8">


        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            {t.subtitle}
          </p>


          <h2 className="text-5xl font-black text-white">
            {t.title}
          </h2>


          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            {t.description}
          </p>

        </div>



        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">


          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">


            <h3 className="mb-10 text-3xl font-bold text-white">
              {t.contactInfo}
            </h3>


            <div className="space-y-10">


              <div className="flex gap-5">

                <MapPin
                  className="mt-1 text-sky-400"
                  size={26}
                />

                <div>

                  <h4 className="font-semibold text-white">
                    {t.address}
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
                    {t.phone}
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
                    {t.email}
                  </h4>

                  <p className="mt-2 text-slate-300">
                    info@gincatsystem.com
                  </p>

                </div>

              </div>


            </div>


          </div>




          <div className="rounded-3xl bg-white p-10 shadow-2xl">


            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              {t.formTitle}
            </h3>



            <div className="space-y-5">


              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder={t.name}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />


              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                type="text"
                placeholder={t.company}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />


              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder={t.email}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />


              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder={t.phone}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />


              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder={t.message}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900"
              />



              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 py-4 text-lg font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
              >

                {loading
                  ? "Enviando..."
                  : t.button}

              </button>



              {sent && (
                <p className="text-center font-semibold text-emerald-600">
                  Solicitud enviada correctamente.
                </p>
              )}


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}