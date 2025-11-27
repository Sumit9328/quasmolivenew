'use client'
import Image from "next/image";
import LearnMoreButton from "./LearnMoreButton";

export default function AboutSection() {
    return (
        <>
        <div className="py-12 bg-[#f9fafb] ">
        <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image - Centered */}
            <Image
                src="/assets/Vector.svg"
                alt="Background Vector"
                width={900}
                height={700}
                className="absolute left-[870px] top-[340px] -translate-x-1/2 -translate-y-1/2 w-auto h-[500px] opacity-20 pointer-events-none"
            />

            <div className="relative container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* LEFT IMAGE STACK */}
                    <div className="relative flex justify-center">
                        <div className="relative">
                            {/* Top Image */}
                            <Image
                                src="/assets/young-female-construction-specialist-engineer-revi-8DFXZ4A.svg"
                                alt="Microscope"
                                width={256}
                                height={256}
                                className="shadow-lg object-cover absolute top-[-140px]"
                            />


                            {/* Bottom Image */}
                            <Image
                                src="/assets/about-img-2.jpg.svg"
                                alt="Microscope"
                                width={256}
                                height={256}
                                className="shadow-lg object-cover relative top-[130px] left-[110px]"
                            />

                            {/* Blue Experience Box */}
                            <div className="absolute left-[-30px] top-[75px] bg-blue-600 text-white p-8 shadow-xl w-40">
                                <h2 className="text-4xl font-bold">60+</h2>
                                <p className="text-sm mt-2 leading-snug">
                                    Years of Precision Craftsmanship in Scientific
                                    Instrumentation
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        <p className="uppercase tracking-widest text-[#222222] mb-2 text-[18px] pp-700">
                            About Us
                        </p>

                        <p className="text-3xl md:text-[41px] pp-400 text-[#222222] mb-4">
                            Quality <span className="text-[#222222] pp-700">Scientific & Mechanical</span> Works
                        </p>

                        <p className="text-[#81848A] leading-relaxed mb-6 pp-400 max-w-[48ch]">
                            Quality Scientific & Mechanical Works (microscope manufacturers in India) has ushered onto the path of accelerated growth since its establishment in the year 1961. The logical ideas and effective methods to handle the managerial activities, have assisted the company to acquire distinguished position amidst the dependable Industrial & pathological Microscopes Manufacturers in India. The company has also earned loads of appreciation in the market for dealing in Scientific & Industrial Instruments.
                        </p>

                        <LearnMoreButton/>
                    </div>
                </div>
            </div>
        </section>

        </div>
        </>
    );
}
