"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


export default function ProductSliderWhite() {
    const slides = [
        {
            title: "2X AUXILIARY LENS",
            desc: `The 2x auxiliary lens enhances total magnification while preserving image sharpness and working distance...`,
            img: "/lens2x.png",
            tags: [
                "Electronics & PCB Inspection",
                "Forensic Laboratories",
                "Entomology & Zoology Labs",
            ],
        },
    ];

    return (
        <section className="w-full py-12">
            <Swiper
                modules={[Navigation]}
                navigation
                loop
                className="px-8 md:px-20"
            >
                {slides.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-2xl font-bold tracking-wide">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="flex gap-2 flex-wrap mt-4">
                                    {item.tags.map((t, i) => (
                                        <button
                                            key={i}
                                            className="border px-4 py-1 rounded-full text-sm"
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Image
                                    src={item.img}
                                    width={400}
                                    height={400}
                                    alt={item.title}
                                    className="drop-shadow-xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
