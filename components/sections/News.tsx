import Image from "next/image";
import { news } from "@/lib/news";
import { translations } from "@/lib/translations";

type NewsProps = {
  locale: keyof typeof translations;
};

export default function News({ locale }: NewsProps) {
  const t = translations[locale].news;


  return (
    <section
      id="noticias"
      className="bg-slate-50 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
  {t.subtitle}
</p>

<h2 className="text-5xl font-black text-slate-900">
  {t.title1}
  <br />
  {t.title2}
</h2>

<p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
  {t.description}
</p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {news.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64">

              <Image
  src={item.image}
  alt={item.title[locale]}
  fill
  className="object-contain bg-white p-6"
/>

              </div>

              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                  {item.date}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
  {item.title[locale]}
</h3>

<p className="mt-4 leading-8 text-slate-600">
  {item.description[locale]}
</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}