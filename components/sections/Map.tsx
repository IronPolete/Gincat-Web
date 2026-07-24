import { translations } from "@/lib/translations";
type MapProps = {
  locale: keyof typeof translations;
};

export default function Map({ locale }: MapProps) {
  const t = translations[locale].map;
    return (
      <section
        id="ubicacion"
        className="bg-slate-50 py-36"
      >
        <div className="mx-auto max-w-7xl px-8">
  
          <div className="mb-20 text-center">
  
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-sky-700">
  {t.subtitle}
</p>
  
<h2 className="text-5xl font-black text-slate-900 lg:text-6xl">
  {t.title}
</h2>
  
<p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
  {t.description}
</p>
  
          </div>
  
          <div className="mb-10 grid gap-8 lg:grid-cols-3">
  
            {/* Dirección */}
  
            <div className="rounded-3xl bg-white p-8 shadow-xl">
  
            <h3>{t.address}</h3>
  
              <p className="leading-8 text-slate-600">
                Carrer Barcelona, 25
                <br />
                08272 Sant Fruitós de Bages
                <br />
                Barcelona · España
              </p>
  
            </div>
  
            {/* Horario */}
  
            <div className="rounded-3xl bg-white p-8 shadow-xl">
  
            <h3>{t.schedule}</h3>
  
              <p className="leading-8 text-slate-600">
                {t.weekdays}
                <br />
                06:00 - 14:00
              </p>
  
            </div>
  
            {/* Google Maps */}
  
            <div className="rounded-3xl bg-slate-900 p-8 shadow-xl">
  
            <h3>{t.directions}</h3>
  
              <p className="mb-8 leading-8 text-slate-200">
                {t.directionsText}
              </p>
  
              <a
                href="https://www.google.com/maps/search/?api=1&query=Carrer+Barcelona,+25,+08272+Sant+Fruitós+de+Bages"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white px-6 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-slate-100"
              >
                {t.button}
              </a>
  
            </div>
  
          </div>
  
          <div className="overflow-hidden rounded-[32px] shadow-2xl ring-1 ring-slate-200">
  
            <iframe
              src="https://www.google.com/maps?q=Carrer+Barcelona,+25,+08272+Sant+Fruitós+de+Bages&output=embed"
              width="100%"
              height="650"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
  
          </div>
  
        </div>
      </section>
    );
  }