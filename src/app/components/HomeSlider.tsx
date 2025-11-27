"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeSlider() {
  const slides = [
    {
      title: "Microscopy Solutions",
      desc: "High precision microscopes for industrial and laboratory applications.",
    },
    {
      title: "Biological Microscopes",
      desc: "Designed for education, research and clinical observations.",
    },
    {
      title: "Digital Inspection",
      desc: "Advanced zoom & digital imaging for production environments.",
    },
  ];

  return (
    <section
      className="relative w-full min-h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/2116ee2e-8706-4348-8d50-353b8845b652 1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 3000 }}
        className="relative z-10 w-full"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="max-w-6xl mx-auto text-white px-4 sm:px-6 md:px-10 lg:px-16 text-center">
              
              <p className="font-[300] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px]">
                Leading The Way In
              </p>

              <p className="font-[600] opacity-95 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px]">
                Microscopy Research & Development
              </p>

              <ul className="mt-6 space-y-3 text-sm sm:text-base md:text-lg lg:text-[20px] font-[400]">
                <li>Magnification of objects up to 40x–1000x</li>
                <li>Examination of cells and tissues for scientific study</li>
                <li>Widely used in Colleges, Schools, and Research Centers</li>
              </ul>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
