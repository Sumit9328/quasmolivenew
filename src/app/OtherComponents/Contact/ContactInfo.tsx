"use client";

import Image from "next/image";

export default function ContactInfo() {
    return (
        <section className="w-full min-h-[500px] py-20 relative overflow-hidden">

            {/* Background Image */}
            <Image
                src="/contact/3fc97f0aaa7b6b782de34d7a1b1ddadef14335a2.png"
                alt="contact background"
                fill
                className="object-cover object-center z-[1]"
            />

            {/* White overlay */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-[2]"></div>

            {/* MAIN CONTENT */}
            <div className="relative z-[3] max-w-7xl mx-auto px-6">

                <p className="text-gray-700 text-sm mb-2">Contact Info</p>

                <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                    We are always <br /> happy to assist you
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
                    {/* Location */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-3">Location</h3>
                        <p className="text-gray-700 leading-relaxed">
                            # 84, HSIDC Industrial <br />
                            Area, Ambala Cantt. -133 <br />
                            001, Haryana, INDIA
                        </p>
                    </div>

                    {/* Numbers */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-3">Number</h3>

                        <div className="mb-4">
                            <p className="font-semibold">Dheeraj Bahl (MD)</p>
                            <p className="text-gray-700">+91 9215 617 707</p>
                        </div>

                        <div>
                            <p className="font-semibold">Ujjwal Bahl (MD)</p>
                            <p className="text-gray-700">+91 8926 666 632</p>
                        </div>
                    </div>

                    {/* Emails */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-3">Emails</h3>

                        <p className="font-semibold">Sales</p>
                        <p className="text-gray-700 mb-3">
                            sales@quasmoindianmicroscope.com
                        </p>

                        <p className="font-semibold">Tender Enquiries</p>
                        <p className="text-gray-700 mb-3">
                            quasmo.mechanical@gmail.com
                        </p>

                        <p className="font-semibold">General Inquiries</p>
                        <p className="text-gray-700">info@quasmoindianmicroscope.com</p>
                    </div>

                    {/* Tech Support */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-3">Technical Support</h3>

                        <p className="font-semibold">Email</p>
                        <p className="text-gray-700 mb-3">
                            support@quasmoindianmicroscope.com
                        </p>

                        <p className="font-semibold">Toll-Free (Front Desk)</p>
                        <p className="text-gray-700">1800-419-4979</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
