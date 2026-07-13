"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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
        className={`fixed top-0 left-0 z-50 w-full lg:hidden transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 items-center justify-between px-6">
          <a href="#hero">
            <Image
              src={
                scrolled
                  ? "/images/logo-black.png"
                  : "/images/logo-white.png"
              }
              alt="Gincat System"
              width={220}
              height={60}
              priority
              className="h-10 w-auto"
            />
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className={`transition ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Fondo oscuro */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menú */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl">

            {/* Cabecera */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

              <Image
                src="/images/logo-black.png"
                alt="Gincat System"
                width={180}
                height={50}
                className="h-8 w-auto"
              />

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={28} />
              </button>

            </div>

            {/* Links */}

            <nav className="flex flex-col px-6 py-6">

              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-200 py-5 text-xl font-semibold text-slate-900"
                >
                  {link.title}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-8 rounded-xl bg-slate-900 py-4 text-center text-lg font-semibold text-white"
              >
                Solicitar presupuesto
              </a>

            </nav>

          </div>
        </div>
      )}
    </>
  );
}