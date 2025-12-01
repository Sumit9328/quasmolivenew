"use client";

import Image from "next/image";

export default function AccessoriesInfoSection() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">

                {/* LEFT SIDE CONTENT */}
                <div>
                    <p className="text-sm tracking-wide text-gray-500 mb-3">
                        Microscope Accessories
                    </p>

                    <h1 className="text-4xl font-bold leading-tight mb-6">
                        Precision Accessories.<br />
                        <span className="text-black">Professional</span>
                        <span className="text-gray-700">-Grade Performance</span>
                    </h1>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Microscope accessories are essential tools that elevate the performance and versatility
                        of your optical systems. Whether in medical diagnostics, academic research, or industrial
                        inspection, the right accessories—like eyepieces, illumination kits, mechanical stages,
                        and digital adapters—ensure sharper imaging, smoother operation, and greater user comfort.
                        From basic upgrades to advanced modular enhancements, our accessories are designed to
                        integrate seamlessly with a wide range of microscope models, helping professionals achieve
                        more with every observation.
                    </p>

                    {/* HIGHLIGHT BOX */}
                    <div className="bg-[#eef1ff] border-l-4 border-blue-600 p-5 rounded-xl shadow-sm">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Widely recognized across globe for delivering precision-engineered microscope accessories
                            that meet the highest standards of laboratory performance. Our components are trusted by
                            professionals in hospitals, research institutes, and academic labs for their reliability,
                            compatibility, and ability to enhance every aspect of microscopic observation.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGES GRID */}
                {/* RIGHT SIDE CUSTOM POSITIONED IMAGES */}
                <div className="relative w-full min-h-[520px]">

                    {/* TOP LEFT IMAGE */}
                    <div className="absolute top-0 left-0 bg-white p-4 rounded-xl shadow-md">
                        <Image
                            src="/assets/accessory-img1.png"
                            alt="Accessory 1"
                            width={400}
                            height={350}
                            className="w-[260px] h-auto object-contain"
                        />
                    </div>

                    {/* TOP RIGHT IMAGE */}
                    <div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-md">
                        <Image
                            src="/assets/accessory-img2.png"
                            alt="Accessory 2"
                            width={400}
                            height={350}
                            className="w-[260px] h-auto object-contain"
                        />
                    </div>

                    {/* BOTTOM CENTER IMAGE */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-md">
                        <Image
                            src="/assets/accessory-img3.png"
                            alt="Accessory 3"
                            width={500}
                            height={450}
                            className="w-[340px] h-auto object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
