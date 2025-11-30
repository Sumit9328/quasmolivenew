"use client";
import Image from "next/image";
import { Search } from "lucide-react";

export default function CareerHero() {
    return (
        <section className="relative w-full h-[480px] mb-10">

            {/* BG IMAGE */}
            <Image
                src="/contact/4109.png"   // ← apni BG image daalna
                alt="Careers background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* LEFT TEXT CONTENT */}
            <div className="relative z-20 max-w-6xl mx-auto px-6 pt-28">
                {/* Breadcrumb */}
                <p className="text-white/80 text-sm mb-3">
                    Home <span className="text-blue-300">•</span> Careers
                </p>

                <h1 className="text-5xl font-bold text-white leading-tight max-w-2xl">
                    Wish to join us: <span className="text-blue-300">Explore</span> <br />
                    Jobs @ QUASMO
                </h1>
            </div>

            {/* FLOATING FORM BOX */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-80px] w-[780px] 
                bg-white shadow-xl rounded-xl px-10 py-8 z-30">

                {/* SEARCH FIELD */}
                <div className="flex items-center border rounded-lg px-4 py-2 shadow-sm">
                    <input
                        type="text"
                        placeholder="Search for jobs.."
                        className="flex-1 outline-none text-gray-700"
                    />
                    <Search size={18} className="text-gray-500" />
                </div>

                {/* FILTERS ROW */}
                <div className="flex items-center gap-6 mt-6">

                    {/* Experience Dropdown */}
                    <div className="flex-1">
                        <label className="text-sm font-medium text-gray-700">Experience Level</label>
                        <select className="w-full border px-3 py-2 mt-1 rounded-md text-gray-700">
                            <option>All Experience Levels</option>
                            <option>Fresher</option>
                            <option>1–3 Years</option>
                            <option>3–6 Years</option>
                            <option>Senior</option>
                        </select>
                    </div>

                    {/* Categories Dropdown */}
                    <div className="flex-1">
                        <label className="text-sm font-medium text-gray-700">Categories</label>
                        <select className="w-full border px-3 py-2 mt-1 rounded-md text-gray-700">
                            <option>All Categories</option>
                            <option>Microscopy</option>
                            <option>Engineering</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button className="mt-6 bg-blue-600 text-white px-6 py-2 h-10 rounded-md hover:bg-blue-700 transition">
                        View Jobs
                    </button>
                </div>
            </div>

        </section>
    );
}
