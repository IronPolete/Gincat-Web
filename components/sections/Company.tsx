import ImageSlider from "../ui/ImageSlider";
import { translations } from "@/lib/translations";

type CompanyProps = {
  locale: keyof typeof translations;
};

export default function Company({ locale }: CompanyProps) {
  console.log("locale:", locale);
  console.log("translations keys:", Object.keys(translations));
  console.log("translations[locale]:", translations[locale]);

  if (!translations[locale]) {
    return (
      <div style={{ color: "red", padding: "20px" }}>
        Error: locale "{String(locale)}" no existe en translations.
      </div>
    );
  }

  const t = translations[locale].company;

  return (
    <section
      id="empresa"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
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

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <ImageSlider />
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {t.card1Title}
            </h3>

            <p className="leading-8 text-slate-600">
              {t.card1Description}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {t.card2Title}
            </h3>

            <p className="leading-8 text-slate-600">
              {t.card2Description}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {t.card3Title}
            </h3>

            <p className="leading-8 text-slate-600">
              {t.card3Description}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {t.card4Title}
            </h3>

            <p className="leading-8 text-slate-600">
              {t.card4Description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}