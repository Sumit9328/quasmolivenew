"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function AccessoriesHero() {
    const slides = [
        {
            title: "Enhance Every Observation with the Right Tools",
            description:
                "Microscopes are essential across medical, chemical, and industrial laboratories—and wherever they’re used, accessories play a vital role. From illumination systems to eyepieces and mechanical stages, microscope accessories improve functionality, precision, and user comfort, making every observation more effective and efficient.",
            image: "/accesories/Adobe Express - file (1) 1.png",
        },
        {
            title: "High-Quality Optics for Better Precision",
            description:
                "Our microscope accessories are crafted for superior clarity, ensuring accurate and high-resolution imaging for scientific and industrial usage.",
            image: "/accesories/Adobe Express - file (1) 1.png",
        },
        {
            title: "Reliable Tools for Advanced Microscopy",
            description:
                "Designed for advanced users, our accessories meet global quality standards and enhance every aspect of your research workflow.",
            image: "/accesories/Adobe Express - file (1) 1.png",
        },
    ];

    return (
        <section className="relative w-full">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-500 -z-10"></div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500 }}
                loop={true}
                className="w-full"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">

                            {/* LEFT CONTENT */}
                            <div>
                                <p className="text-sm mb-3">Home • Accessories</p>

                                <h1 className="text-4xl font-bold leading-tight mb-4">
                                    {item.title}
                                </h1>

                                <p className="text-sm opacity-90 leading-relaxed max-w-md">
                                    {item.description}
                                </p>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="flex justify-center">
                                <Image
                                    src={item.image}
                                    alt="Accessory Image"
                                    width={600}
                                    height={600}
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
