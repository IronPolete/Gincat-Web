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
    {
      title: "Empresa",
      href: "#empresa",
    },
    {
      title: "Servicios",
      href: "#servicios",
    },
    {
      title: "Calidad",
      href: "#calidad",
    },
    {
      title: "Maquinaria",
      href: "#maquinaria",
    },
    {
      title: "Contacto",
      href: "#contacto",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full lg:hidden transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 items-center justify-between px-6">

          {/* LOGO */}

          <a href="#hero">
            <Image
              src={
                scrolled
                  ? "/images/logo-black.png"
                  : "/images/logo-white.png"
              }
              alt="Gincat"
              width={220}
              height={60}
              priority
              className="h-10 w-auto"
            />
          </a>

          {/* BOTÓN */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>
      </header>

      {/* OVERLAY */}

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
                  <div className="flex h-full flex-col">

{/* CABECERA */}

<div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

  <Image
    src="/images/logo-black.png"
    alt="Gincat System"
    width={180}
    height={50}
    className="h-8 w-auto"
  />

  <button
    onClick={() => setMenuOpen(false)}
    className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
  >
    <X size={28} />
  </button>

</div>

{/* ENLACES */}

<nav className="flex flex-1 flex-col px-8 py-8">

  {links.map((link) => (

    <a
      key={link.title}
      href={link.href}
      onClick={() => setMenuOpen(false)}
      className="border-b border-slate-200 py-5 text-xl font-semibold text-slate-800 transition hover:text-slate-900"
    >
      {link.title}
    </a>

  ))}

  <a
    href="#contacto"
    onClick={() => setMenuOpen(false)}
    className="mt-10 rounded-xl bg-slate-900 py-4 text-center text-lg font-semibold text-white transition hover:bg-slate-800"
  >
    Solicitar presupuesto
  </a>

</nav>

</div>

</div>
</div>
</>
);
}