export default function Map() {
    return (
      <section
        id="ubicacion"
        className="bg-slate-50 py-36"
      >
        <div className="mx-auto max-w-7xl px-8">
  
          <div className="mb-20 text-center">
  
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-sky-700">
              VISÍTANOS
            </p>
  
            <h2 className="text-5xl font-black text-slate-900 lg:text-6xl">
              Estamos cerca de ti.
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Nuestro centro productivo está ubicado en Sant Fruitós de Bages,
              desde donde diseñamos, fabricamos y desarrollamos soluciones de
              matricería y estampación metálica para clientes de toda España.
            </p>
  
          </div>
  
          <div className="mb-10 grid gap-8 lg:grid-cols-3">
  
            {/* Dirección */}
  
            <div className="rounded-3xl bg-white p-8 shadow-xl">
  
              <h3 className="mb-6 text-3xl font-bold text-slate-900">
                Dirección
              </h3>
  
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
  
              <h3 className="mb-6 text-3xl font-bold text-slate-900">
                Horario
              </h3>
  
              <p className="leading-8 text-slate-600">
                Lunes a Viernes
                <br />
                06:00 - 14:00
              </p>
  
            </div>
  
            {/* Google Maps */}
  
            <div className="rounded-3xl bg-slate-900 p-8 shadow-xl">
  
              <h3 className="mb-6 text-3xl font-bold text-white">
                Cómo llegar
              </h3>
  
              <p className="mb-8 leading-8 text-slate-200">
                Consulta la ruta directamente desde Google Maps y planifica tu
                visita a nuestras instalaciones.
              </p>
  
              <a
                href="https://www.google.com/maps/search/?api=1&query=Carrer+Barcelona,+25,+08272+Sant+Fruitós+de+Bages"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white px-6 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-slate-100"
              >
                Abrir Google Maps →
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