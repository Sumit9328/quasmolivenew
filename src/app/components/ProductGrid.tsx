"use client";

import Image from "next/image";

const products = [
  {
    img: "/home/image 9.png",
    title: "Industrial Microscopes",
    desc: "Industrial microscopes are used for measuring, quality control...",
  },
  {
    img: "/home/image 9 (1).png",
    title: "Biological Microscopes",
    desc: "Biological microscopes are primarily designed to observe cells...",
  },
  {
    img: "/home/image 9 (2).png",
    title: "Digital Microscopes",
    desc: "Digital Microscopy provides solutions for all types of...",
  },
  {
    img: "/home/image 9 (3).png",
    title: "Microscopic Cameras",
    desc: "Microscopic cameras provide precise imaging...",
  },
  {
    img: "/home/image 9 (4).png",
    title: "PATHOLOGICAL LABORATORY",
    desc: "Precision instruments designed for clinical labs...",
  },
  {
    img: "/home/image 9 (5).png",
    title: "FLUORESCENT MICROSCOPES",
    desc: "Specialized optical instruments for fluorescence...",
  },
  {
    img: "/home/image 9 (6).png",
    title: "Multiviewing Microscopes",
    desc: "Also known as multi-head or observer microscopes...",
  },
  {
    img: "/home/image 9 (1).png",
    title: "LABORATORY EQUIPMENTS",
    desc: "Includes a wide range of diagnostic tools...",
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-[90px]">
      <p className="text-[18px] pp-700 tracking-wide text-[#222222]">
        OUR PRODUCTS
      </p>

      <h2 className="text-[41px] pp-400 mb-10">
        View Our <span className="pp-700">Microscopy Solutions</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="shadow-md hover:shadow-xl duration-300 rounded-md overflow-hidden"
          >
            {/* FIXED IMAGE SIZE */}
            <div className="w-[338px] h-[357px] relative">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4  bg-[#F4F5F7]">
              <h3 className="pp-600 text-[27px] leading-[32px]">{p.title}</h3>
              <p className="text-[16px] pp-500 mt-1 line-clamp-2 text-[#898989]">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-8 py-2 border border-[1px] text-[#316CE6] border-[#316CE6] pp-600 hover:bg-gray-100">
          Show More
        </button>
      </div>
    </section>
  );
}
