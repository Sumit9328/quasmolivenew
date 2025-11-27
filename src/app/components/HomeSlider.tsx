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
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/assets/2116ee2e-8706-4348-8d50-353b8845b652 1.png')" }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop
                autoplay={{ delay: 3000 }}
                className="relative z-10 "
            >
                {slides.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="text-white px-6 text-center p-4">
                            <p className="text-[76px] font-[300] leading-[70px] text-white">Leading The Way In </p>
                            <p className="text-[76px] font-[600] opacity-90">Microscopy Research & Development</p>
                            <ul className="text-[20px] font-[400]">
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
