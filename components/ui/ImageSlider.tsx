
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/company/company2-nueva.jpeg", fit: "cover" },
  { src: "/images/company/company1-nueva.png", fit: "cover" },
  { src: "/images/company/company4-nueva.jpeg", fit: "cover" },
  { src: "/images/company/company3-nueva.jpeg", fit: "cover" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-white shadow-xl">

      {/* FOTOGRAFÍAS */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={image.src}
            alt={`Gincat System - Fotografía ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className={
              image.fit === "contain"
                ? "object-contain object-center"
                : "object-cover object-center"
            }
            priority={index === 0}
          />
        </div>
      ))}

      {/* FLECHA IZQUIERDA */}
      <button
        type="button"
        onClick={previous}
        aria-label="Fotografía anterior"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>

      {/* FLECHA DERECHA */}
      <button
        type="button"
        onClick={next}
        aria-label="Fotografía siguiente"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Ver fotografía ${index + 1}`}
            aria-current={index === current ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === current
                ? "w-8 bg-slate-900"
                : "w-2.5 bg-slate-400 hover:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
