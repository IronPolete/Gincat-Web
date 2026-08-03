import { BadgeCheck, CheckCircle2, ClipboardCheck } from "lucide-react";
import { translations } from "@/lib/translations";

type QualityProps = {
  locale: keyof typeof translations;
};

export default function Quality({ locale }: QualityProps) {
  const t = translations[locale].quality;

  const items = [
    {
      icon: BadgeCheck,
      title: t.item1Title,
      text: t.item1Text,
    },
    {
      icon: ClipboardCheck,
      title: t.item2Title,
      text: t.item2Text,
    },
    {
      icon: CheckCircle2,
      title: t.item3Title,
      text: t.item3Text,
    },
  ];

  return (
    <section id="calidad" className="bg-white py-32">
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

        <div className="grid gap-8 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}