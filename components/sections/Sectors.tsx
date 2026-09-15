import {
  Car,
  Factory,
  Cpu,
  Cog,
  Zap,
  Refrigerator,
} from "lucide-react";
import { translations } from "@/lib/translations";

type SectorsProps = {
  locale: keyof typeof translations;
};

export default function Sectors({
  locale,
}: SectorsProps) {
  const t = translations[locale].sectors;

  const extraSectors = {
    es: {
      title: ["Eléctrico", "Electrodoméstico"],
      text: [
        "Componentes metálicos de precisión para sistemas eléctricos y aplicaciones industriales.",
        "Piezas metálicas y componentes de precisión para fabricantes de electrodomésticos.",
      ],
    },
    en: {
      title: ["Electrical", "Home Appliances"],
      text: [
        "Precision metal components for electrical systems and industrial applications.",
        "Metal parts and precision components for home appliance manufacturers.",
      ],
    },
    fr: {
      title: ["Électrique", "Électroménager"],
      text: [
        "Composants métalliques de précision pour les systèmes électriques et les applications industrielles.",
        "Pièces métalliques et composants de précision pour les fabricants d'appareils électroménagers.",
      ],
    },
    de: {
      title: ["Elektrotechnik", "Haushaltsgeräte"],
      text: [
        "Präzisions-Metallkomponenten für elektrische Systeme und industrielle Anwendungen.",
        "Metallteile und Präzisionskomponenten für Hersteller von Haushaltsgeräten.",
      ],
    },
    ca: {
      title: ["Elèctric", "Electrodomèstic"],
      text: [
        "Components metàl·lics de precisió per a sistemes elèctrics i aplicacions industrials.",
        "Peces metàl·liques i components de precisió per a fabricants d'electrodomèstics.",
      ],
    },
    zh: {
      title: ["电气", "家用电器"],
      text: [
        "用于电气系统和工业应用的高精度金属部件。",
        "为家用电器制造商提供金属零件和高精度组件。",
      ],
    },
    ja: {
      title: ["電気", "家電"],
      text: [
        "電気システムや産業用途向けの高精度金属部品。",
        "家電メーカー向けの金属部品および高精度コンポーネント。",
      ],
    },
  } as const;

  const extra = extraSectors[locale];

  const sectors = [
    {
      icon: Car,
      title: t.item1Title,
      text: t.item1Text,
    },
    {
      icon: Factory,
      title: t.item2Title,
      text: t.item2Text,
    },
    {
      icon: Cog,
      title: t.item3Title,
      text: t.item3Text,
    },
    {
      icon: Cpu,
      title: t.item4Title,
      text: t.item4Text,
    },
    {
      icon: Zap,
      title: extra.title[0],
      text: extra.text[0],
    },
    {
      icon: Refrigerator,
      title: extra.title[1],
      text: extra.text[1],
    },
  ];

  return (
    <section id="sectors" className="bg-white py-32">
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <div
                key={sector.title}
                className="rounded-3xl border border-slate-200 p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {sector.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {sector.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}