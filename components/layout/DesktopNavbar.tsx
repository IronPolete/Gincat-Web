"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DesktopNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed left-0 top-0 z-50 hidden w-full transition-all duration-500 lg:block ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* LOGO */}

        <a
          href="#hero"
          className="flex items-center"
        >
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
            className="h-14 w-auto transition-all duration-500"
          />
        </a>

        {/* MENÚ */}

        <nav className="flex items-center gap-12">

          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`relative pb-2 text-[17px] font-semibold transition-all duration-300

              after:absolute
              after:left-0
              after:bottom-0
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
                {/* BOTÓN */}

                <a
          href="#contacto"
          className={`rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-slate-900 text-white hover:bg-slate-800"
              : "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900"
          }`}
        >
          Solicitar presupuesto
        </a>

      </div>
    </header>
  );
}