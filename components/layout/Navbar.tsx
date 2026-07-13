"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const links = [
    { title: "Empresa", href: "#empresa" },
    { title: "Servicios", href: "#servicios" },
    { title: "Calidad", href: "#calidad" },
    { title: "Maquinaria", href: "#maquinaria" },
    { title: "Contacto", href: "#contacto" },
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

          <a href="#hero" className="z-50 flex items-center">
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

          {/* DESKTOP */}

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

          {/* BOTÓN DESKTOP */}

          <a
            href="#contacto"
            className={`hidden rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 lg:block ${
              scrolled
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900"
            }`}
          >
            Solicitar presupuesto
          </a>

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

          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-10 rounded-xl bg-slate-900 py-5 text-center text-lg font-bold text-white"
          >
            Solicitar presupuesto
          </a>

        </div>
      </div>
    </>
  );
}