"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { translations } from "@/lib/translations";

type NavbarProps = {
  locale: keyof typeof translations;
};

function LanguageFlag({ code }: { code: string }) {
  const common = {
    viewBox: "0 0 36 24",
    className: "h-4 w-6 shrink-0",
    "aria-hidden": true,
  };

  switch (code) {
    case "es":
      return (
        <svg {...common}>
          <rect width="36" height="24" fill="#AA151B" />
          <rect y="6" width="36" height="12" fill="#F1BF00" />
        </svg>
      );

    case "en":
      return (
        <svg {...common}>
          <rect width="36" height="24" fill="#012169" />

          <polygon
            points="0,0 4,0 36,20 36,24 32,24 0,4"
            fill="white"
          />
          <polygon
            points="32,0 36,0 36,4 4,24 0,24 0,20"
            fill="white"
          />

          <polygon
            points="0,0 2,0 36,22 36,24 34,24 0,3"
            fill="#C8102E"
          />
          <polygon
            points="34,0 36,0 36,2 2,24 0,24 0,22"
            fill="#C8102E"
          />

          <rect x="15" width="6" height="24" fill="white" />
          <rect y="9" width="36" height="6" fill="white" />

          <rect x="16.5" width="3" height="24" fill="#C8102E" />
          <rect y="10.5" width="36" height="3" fill="#C8102E" />
        </svg>
      );

    case "fr":
      return (
        <svg {...common}>
          <rect width="12" height="24" fill="#0055A4" />
          <rect x="12" width="12" height="24" fill="white" />
          <rect x="24" width="12" height="24" fill="#EF4135" />
        </svg>
      );

    case "de":
      return (
        <svg {...common}>
          <rect width="36" height="8" fill="#000000" />
          <rect y="8" width="36" height="8" fill="#DD0000" />
          <rect y="16" width="36" height="8" fill="#FFCE00" />
        </svg>
      );

    case "ca":
      return (
        <svg {...common}>
          <rect width="36" height="24" fill="#FCDD09" />
          <rect y="0" width="36" height="3" fill="#DA121A" />
          <rect y="6" width="36" height="3" fill="#DA121A" />
          <rect y="12" width="36" height="3" fill="#DA121A" />
          <rect y="18" width="36" height="3" fill="#DA121A" />
        </svg>
      );

    case "zh":
      return (
        <svg {...common}>
          <rect width="36" height="24" fill="#DE2910" />
          <polygon
            points="7,3 7.9,5.7 10.8,5.7 8.45,7.4 9.35,10.1 7,8.45 4.65,10.1 5.55,7.4 3.2,5.7 6.1,5.7"
            fill="#FFDE00"
          />
        </svg>
      );

    case "ja":
      return (
        <svg {...common}>
          <rect width="36" height="24" fill="white" />
          <circle cx="18" cy="12" r="7" fill="#BC002D" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const t = translations[locale].navbar;

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "ca", name: "Català" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  useEffect(() => {
    const close = () => setLanguageOpen(false);

    if (languageOpen) {
      document.addEventListener("click", close);
    }

    return () => document.removeEventListener("click", close);
  }, [languageOpen]);

  const links = [
    { title: t.company, href: "#empresa" },
    { title: t.services, href: "#servicios" },
    { title: t.quality, href: "#calidad" },
    { title: t.machinery, href: "#maquinaria" },
    { title: t.news, href: "#noticias" },
    { title: t.contact, href: "#contacto" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200 bg-white/90 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-8">

          {/* LOGO */}
          <a href={`/${locale}#hero`} className="z-50 flex items-center">
            <Image
              src={
                scrolled
                  ? "/images/logo-black.png"
                  : "/images/logo-white.png"
              }
              alt="Gincat System"
              width={300}
              height={86}
              priority
              className="h-9 w-auto transition-all duration-500 lg:h-14"
            />
          </a>

          {/* MENÚ DESKTOP */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`relative pb-2 text-[17px] font-semibold transition-all duration-300
                after:absolute
                after:bottom-0
                after:left-0
                after:h-[2px]
                after:w-0
                after:transition-all
                after:duration-300
                hover:after:w-full
                ${
                  scrolled
                    ? "text-slate-800 after:bg-slate-900"
                    : "text-white after:bg-white"
                }`}
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* IDIOMA + PRESUPUESTO DESKTOP */}
          <div className="hidden items-center gap-4 lg:flex">
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 font-semibold transition-all ${
                  scrolled
                    ? "text-slate-800 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
               <LanguageFlag code={locale} />
               {locale.toUpperCase()}

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={`/${lang.code}`}
                      className="flex items-center gap-3 px-5 py-3 text-slate-700 transition hover:bg-slate-100"
                    >
                      <LanguageFlag code={lang.code} />

                      <span className="font-medium">
                        {lang.name}
                      </span>

                      {lang.code === locale && (
                        <span className="ml-auto text-xs font-bold text-slate-500">
                          ✓
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href={`/${locale}#contacto`}
              className={`rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900"
              }`}
            >
              {t.quote}
            </a>
          </div>

          {/* HAMBURGUESA */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`z-50 lg:hidden ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-10">

          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-slate-200 py-6 text-2xl font-bold text-slate-900"
            >
              {link.title}
            </a>
          ))}

          {/* IDIOMAS MÓVIL */}
          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Language
            </p>

            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href={`/${lang.code}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-medium transition ${
                    locale === lang.code
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <LanguageFlag code={lang.code} />

                  <span>{lang.code.toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* PRESUPUESTO */}
          <a
            href={`/${locale}#contacto`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-10 rounded-xl bg-slate-900 py-5 text-center text-lg font-bold text-white"
          >
            {t.quote}
          </a>
        </div>
      </div>
    </>
  );
}