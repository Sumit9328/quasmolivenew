"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


export default function ProductSliderBlue() {
    const slides = [
        {
            title: "16X EYE PIECE",
            desc: `The 16x Eyepiece offers enhanced magnification for detailed specimen viewing...`,
            img: "/eyepiece16.png",
            tags: ["Medical Laboratories", "Educational Institutions", "Research Facilities"],
        },
    ];

    return (
        <section className="w-full bg-[#2A52FF] py-14 text-white">
            <Swiper
                modules={[Navigation]}
                navigation
                loop
                className="px-8 md:px-20"
            >
                {slides.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                            {/* Left text box */}
                            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl h-fit">
                                <h2 className="text-2xl font-bold mb-3">
                                    {item.title}
                                </h2>
                                <p className="text-sm opacity-90">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Right image */}
                            <div className="flex justify-center">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={380}
                                    height={380}
                                    className="drop-shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Bottom tags */}
                        <div className="flex gap-3 flex-wrap mt-6">
                            {item.tags.map((t, i) => (
                                <button
                                    key={i}
                                    className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm"
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
