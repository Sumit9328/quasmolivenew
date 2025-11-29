"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QualityAssurance() {
  const cards = [
    {
      title: "Why It Matters to You",
      desc: "Whether you’re in a lab, clinic, or research center, our instruments deliver clarity you can trust—day after day, year after year.",
      image: "/about/b7b8c32bbcb29a4fc110fca55c26b607ceea73ae.jpg",
    },
    {
      title: "Engineered for Accuracy",
      desc: "From raw material selection to final inspection, every step is optimized for performance, durability, and reliability.",
      image: "/about/270b29ae3295628bf6d04809b4142d20482735c1.png",
    },
    {
      title: "Tested at Every Stage",
      desc: "Each component undergoes rigorous testing and validation—ensuring flawless integration and consistent results.",
      image: "/about/92586fc3a975ed3f51d3a31170764e80d75f4a15.png",
    },
    {
      title: "Why It Matters to You",
      desc: "Whether you’re in a lab, clinic, or research center, our instruments deliver clarity you can trust—day after day, year after year.",
      image: "/about/b7b8c32bbcb29a4fc110fca55c26b607ceea73ae.jpg",
    },
    {
      title: "Engineered for Accuracy",
      desc: "From raw material selection to final inspection, every step is optimized for performance, durability, and reliability.",
      image: "/about/270b29ae3295628bf6d04809b4142d20482735c1.png",
    },
    {
      title: "Tested at Every Stage",
      desc: "Each component undergoes rigorous testing and validation—ensuring flawless integration and consistent results.",
      image: "/about/92586fc3a975ed3f51d3a31170764e80d75f4a15.png",
    }
  ];

  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    setIndex((index + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + cards.length) % cards.length);
  };

  // ⭐ Fixed TypeScript error here
  const getCardClass = (i: number) => {
    if (i === index) return "w-[50%] scale-100 z-20";
    if (i === (index - 1 + cards.length) % cards.length)
      return "w-[25%] scale-90 opacity-70 z-10";
    if (i === (index + 1) % cards.length)
      return "w-[25%] scale-90 opacity-70 z-10";
    return "hidden";
  };

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-[14px] pp-400 tracking-wide text-gray-700 uppercase">
          Quality Assurance
        </p>

        <h2 className="text-[34px] pp-700 text-[#1C2C64] mt-3">
          Built with Precision. Delivered with Confidence.
        </h2>

        <p className="text-gray-600 text-[16px] pp-300 mt-4 leading-[26px] max-w-4xl mx-auto">
          At Quasmo, quality isn’t a checkpoint—it’s a mindset. From sourcing high-grade raw materials to final inspection,
          every step is engineered for accuracy, durability, and trust.
        </p>

        <div className="relative flex items-center justify-center gap-4 mt-14 overflow-hidden">

          {cards.map((item, i) => (
            <div
              key={i}
              className={`relative h-[330px] rounded-lg overflow-hidden transition-all duration-500 ease-in-out flex-shrink-0 ${getCardClass(
                i
              )}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-end text-left p-6">
                <h3 className="text-white text-[20px] pp-700">{item.title}</h3>
                <p className="text-gray-200 text-[14px] mt-2 leading-[22px] pp-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}
