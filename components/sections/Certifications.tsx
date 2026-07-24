import Image from "next/image";
import { translations } from "@/lib/translations";

type CertificationsProps = {
  locale: keyof typeof translations;
};

export default function Certifications({
  locale,
}: CertificationsProps) {
  const t = translations[locale].certifications;

  const certifications = [
    {
      image: "/images/certifications/iso9001.png",
      title: "ISO 9001",
      status: t.active,
      statusColor: "bg-emerald-100 text-emerald-700",
    },
    {
      image: "/images/certifications/iso14001.png",
      title: "ISO 14001",
      status: t.active,
      statusColor: "bg-emerald-100 text-emerald-700",
    },
    {
      image: "/images/certifications/iatf16949.png",
      title: "IATF 16949",
      status: t.comingSoon,
      statusColor: "bg-amber-100 text-amber-700",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-4xl text-center">

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

        <div className="grid gap-10 md:grid-cols-3">

          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-28 w-full">

                <Image
                  src={certification.image}
                  alt={certification.title}
                  fill
                  className="object-contain"
                />

              </div>

              <h3 className="mt-10 text-2xl font-bold text-slate-900">
                {certification.title}
              </h3>

              <span
                className={`mt-5 rounded-full px-4 py-2 text-sm font-semibold ${certification.statusColor}`}
              >
                {certification.status}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}