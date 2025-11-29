"use client";

import Image from "next/image";

export default function CompanyOverview() {
    return (
        <section className="w-full bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <span className="text-[15px] font-[700] tracking-widest uppercase leading-[25px]">
                        Company Overview
                    </span>

                    <h2 className="text-4xl md:text-[42px] leading-[55px] pp-300 text-gray-900">
                        Crafting Clarity.
                        <span className="text-[42px] pp-700">Powering Precision.</span>
                    </h2>

                    <p className="text-gray-600 pp-400 text-[18px] leading-relaxed max-w-xl">
                        Quality Scientific & Mechanical Works (microscope manufacturers in
                        India) has ushered onto the path of accelerated growth since its
                        establishment in the year 1961. The logical ideas and effective
                        methods to handle the managerial activities, have assisted the
                        company to acquire distinguished position amidst the dependable
                        Industrial & pathological Microscopes Manufacturers in India. The
                        company has also earned loads of appreciation in the market for
                        dealing in Scientific & Industrial Instruments.
                    </p>

                    {/* FEATURES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/about/SVG.svg"
                                alt="Feature Icon"
                                width={20}
                                height={20}
                            />
                            <p className="text-gray-700 text-[16px] font-[400]">
                                Engage - marketing automation
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/about/SVG.svg"
                                alt="Feature Icon"
                                width={20}
                                height={20}
                            />
                            <p className="text-gray-700 text-[16px] font-[400]">
                                Learn from customer feedback
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/about/SVG.svg"
                                alt="Feature Icon"
                                width={20}
                                height={20}
                            />
                            <p className="text-gray-700 text-[16px] font-[400]">
                                Acquire live chat sales
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/about/SVG.svg"
                                alt="Feature Icon"
                                width={20}
                                height={20}
                            />
                            <p className="text-gray-700 text-[16px] font-[400]">Customer support</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-[670px] h-[850px]">
                        <Image
                            src="/about/png-microscope-biotechnology-magnification-biochemistry 1.png"
                            alt="Microscope"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
