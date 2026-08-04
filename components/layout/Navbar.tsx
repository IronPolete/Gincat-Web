"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { translations } from "@/lib/translations";

type NavbarProps = {
  locale: keyof typeof translations;
};

export default function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const t = translations[locale].navbar;

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ca", name: "Català", flag: "CA" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
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
                <Globe size={18} />
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
                      <span className="text-lg">{lang.flag}</span>

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

          {/* Idiomas móvil */}

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
                  <span>{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

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