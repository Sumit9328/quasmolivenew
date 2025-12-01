"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import LearnMoreButton from "./LearnMoreButton";

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
      desc: "Every microscope meets global standards for accuracy and durability.",
      icon: "/home/Vector (1).svg",
    },
    {
      title: "Manufacturing Standard",
      desc: "Advanced tools ensure consistent, high-quality output.",
      icon: "/home/Vector (2).svg",
    },
    {
      title: "30+ Product Range",
      desc: "From pathology and research to gemology and digital imaging.",
      icon: "/home/Group.svg",
    },
    {
      title: "Nationwide Support",
      desc: "Trusted by 5,000+ institutions, backed by a robust dealer network.",
      icon: "/home/fi_1660165.svg",
    },
  ];

  return (
    <section className="w-full bg-[#303030] py-0 overflow-hidden max-md:py-8">
      <div className="max-w-[90%] ml-auto grid md:grid-cols-2 gap-10 max-md:max-w-full max-md:ml-0 max-md:px-4">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center pr-12 max-md:pr-0">

          <p className="text-[16px] leading-[20px] text-white font-bold">
            Why Us
          </p>

          <h2 className="text-[42px] font-[300] leading-snug text-white max-md:text-2xl">
            Quasmo Indian Microscope— <br />
            <span className="font-[700]">Precision You Can Trust</span>
          </h2>

          <p className="text-[18px] font-[400] mt-4 text-white max-md:text-sm">
            A legacy brand known for crafting high-performance scientific instruments that power discovery across pathology, research, and industrial applications. With over 60 years of optical engineering, we deliver unmatched clarity, durability, and innovation—trusted by institutions across India and beyond.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6 mt-8 max-md:grid-cols-1 max-md:w-full">
            {features.map((x, i) => (
              <div
                key={i}
                className={`p-4 border border-white rounded-[20px] w-full ${i % 4 === 1 || i % 4 === 2 ? "bg-[#454545]" : ""}`}
              >
                <div className="w-[33px] h-[41px] relative mb-3">
                  <Image src={x.icon} alt={x.title} fill className="object-contain" />
                </div>

                <h4 className="font-bold inter text-[20px] text-[#6597FF] max-md:text-base">
                  {x.title}
                </h4>

                <p className="text-[13px] font-[400] text-white mt-2 max-md:text-xs">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="py-8 text-[14px] font-[400] text-white">
            Let’s make something great work together.
          </p>

          <div>
            <LearnMoreButton />
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full h-[929px] max-md:h-[260px] max-md:w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt="microscope"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
