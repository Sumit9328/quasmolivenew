"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[480px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about/4109.png"
        alt="Laboratory Microscope"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10  mx-auto px-0">
        {/* Breadcrumb */}
        <p className="text-[16px] font-[700] text-white mb-4">
          Home <span className="text-blue-400">• About Us</span>
        </p>

        {/* Heading */}
        <h1 className="text-white text-3xl md:text-[70px] font-light leading-tight">
          A Legacy of Innovation,
          <br />
          <span className="font-semibold">A Future of Possibilities.</span>
        </h1>
      </div>

      {/* Enquiry Now Button */}
      <Link
        href="/contact"
        className="fixed right-3 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-l-lg shadow-lg flex items-center gap-2 rotate-90 origin-right">
          <span className="text-[18px] inter font-[400]">Enquire Now</span>
        </div>
      </Link>
    </section>
  );
}
