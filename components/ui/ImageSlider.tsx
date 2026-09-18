"use client";

import Image from "next/image";

const image = "/images/company/company1.png";

export default function ImageSlider() {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
      <Image
        src={image}
        alt="Gincat System"
        width={1400}
        height={900}
        className="h-[650px] w-full object-cover"
        priority
      />
    </div>
  );
}