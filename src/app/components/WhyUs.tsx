"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function WhyUs() {
  const slides = [
    "/home/Rectangle 44459.png",
    "/home/Rectangle 44459.png",
    "/home/Rectangle 44459.png",
  ];

  const features = [
    {
      title: "Quality Assurance",
      desc: "Microscopes meet global standards.",
    },
    {
      title: "Manufacturing Standard",
      desc: "High quality CNC crafted designs.",
    },
    {
      title: "30+ Product Range",
      desc: "Pathology, gemology, digital imaging.",
    },
    {
      title: "Nationwide Support",
      desc: "5,000+ institutions trust our network.",
    },
  ];

  return (
    <section className=" mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 bg-[#303030]">

      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <p className="text-sm text-gray-500 mb-2">Why Us</p>
        <h2 className="text-4xl font-bold leading-snug">
          Quasmo Indian Microscope— <br />
          Precision You Can Trust
        </h2>

        <p className="text-gray-600 mt-4">
          A legacy brand known for high-performance scientific instruments powering research & diagnostics worldwide.
        </p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {features.map((x, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg">
              <h4 className="font-semibold">{x.title}</h4>
              <p className="text-sm text-gray-500 mt-2">{x.desc}</p>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 w-fit">
          Get Quote →
        </button>
      </div>

      {/* Right Slider */}
      <div className="h-[480px] rounded-xl overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop
          className="h-full"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <Image src={src} alt="microscope" fill className="object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
