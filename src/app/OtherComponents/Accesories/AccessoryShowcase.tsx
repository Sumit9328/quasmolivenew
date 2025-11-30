"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
    "/accesories/image 131.png",
    "/accesories/image 131.png",
    "/accesories/image 131.png",
    "/accesories/image 131.png",
    "/accesories/image 131.png",
    "/accesories/image 131.png",
    "/accesories/image 131.png",
    "/accesories/image 131.png",
];

export default function CenterBlurSplide() {
    return (
        <div className="w-full py-20" style={{ backgroundColor: "#316CE6" }}>
            <div className="max-w-8xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12 text-white">
                    <h2 className="text-4xl font-bold">Featured Products</h2>
                    <p className="text-white/80 mt-2">Slide to explore our collection</p>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    slidesPerView={5}
                    centeredSlides={true}
                    spaceBetween={-10}
                    className="w-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <div className="flex justify-center items-center h-[460px] transition-all duration-500">

                                    <Image
                                        src={img}
                                        alt={`product-${index}`}
                                        width={isActive ? 500 : 400}     // WIDTH FIXED
                                        height={isActive ? 450 : 350}    // HEIGHT FIXED
                                        className={`
                      object-contain transition-all duration-500
                      ${isActive
                                                ? "scale-110 opacity-100 blur-0"
                                                : "scale-75 opacity-60 blur-[1px]"
                                            }
                    `}
                                    />

                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
