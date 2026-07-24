import {
  Factory,
  Cog,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { translations } from "@/lib/translations";

type CapabilitiesProps = {
  locale: keyof typeof translations;
};

export default function Capabilities({
  locale,
}: CapabilitiesProps) {
  const t = translations[locale].capabilities;

  const capabilities = [
    {
      icon: Factory,
      title: t.item1Title,
      description: t.item1Description,
    },
    {
      icon: Cog,
      title: t.item2Title,
      description: t.item2Description,
    },
    {
      icon: Wrench,
      title: t.item3Title,
      description: t.item3Description,
    },
    {
      icon: ShieldCheck,
      title: t.item4Title,
      description: t.item4Description,
    },
  ];

  return (
    <section
      id="capabilities"
      className="bg-slate-50 py-28"
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}