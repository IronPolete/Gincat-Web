"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/company/company1.png",
  "/images/company/company2.jpg",
  "/images/company/company3.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl group">

      <Image
        src={images[current]}
        alt="Gincat"
        width={1400}
        height={900}
        className="h-[650px] w-full object-cover transition-all duration-500"
      />

      {/* Flecha izquierda */}

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 opacity-0 backdrop-blur transition group-hover:opacity-100"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Flecha derecha */}

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 opacity-0 backdrop-blur transition group-hover:opacity-100"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicadores */}

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}