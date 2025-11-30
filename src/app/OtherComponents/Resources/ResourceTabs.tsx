"use client";

import { useState } from "react";
import Image from "next/image";




export default function ResourceTabs() {
    const [activeTab, setActiveTab] = useState("blogs");

    return (
        <div className="w-full bg-[#f3f4ff] py-20">

            {/* HERO SECTION */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">

                {/* LEFT TEXT */}
                <div>
                    <p className="text-blue-600 text-sm mb-3">Home • Resources</p>
                    <h1 className="text-4xl font-bold leading-tight">
                        Empowering Discovery: The Role <br />
                        of Precision Instruments in Modern Science
                    </h1>
                </div>

                {/* RIGHT ILLUSTRATION */}
                <div className="flex justify-center">

                    <Image
                        src="/resources/Group 1000005969.png"
                        alt="Illustration"
                        width={1129}
                        height={580}
                        className="w-[80%] h-auto"
                        priority
                    />
                </div>
            </div>

            {/* TABS */}

            <div className="flex justify-center mt-10">
                <div className="bg-white shadow-xl rounded-full px-6 py-2 flex gap-6">

                    <button
                        onClick={() => setActiveTab("blogs")}
                        className={`px-5 py-2 text-sm rounded-full transition font-semibold
                            ${activeTab === "blogs"
                                ? "bg-[#eae9ff] text-blue-600"
                                : "text-gray-600 hover:bg-gray-100"}
                        `}
                    >
                        Blogs & Articles
                    </button>

                    <button
                        onClick={() => setActiveTab("news")}
                        className={`px-5 py-2 text-sm rounded-full transition font-semibold
                            ${activeTab === "news"
                                ? "bg-[#eae9ff] text-blue-600"
                                : "text-gray-600 hover:bg-gray-100"}
                        `}
                    >
                        Quasmo in News
                    </button>

                    <button
                        onClick={() => setActiveTab("events")}
                        className={`px-5 py-2 text-sm rounded-full transition font-semibold
                            ${activeTab === "events"
                                ? "bg-[#eae9ff] text-blue-600"
                                : "text-gray-600 hover:bg-gray-100"}
                        `}
                    >
                        Events
                    </button>

                </div>
            </div>

            {/* TAB CONTENT BOX */}
            <div className="max-w-6xl mx-auto px-6 py-16">

                {activeTab === "blogs" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="bg-white shadow p-4 rounded-xl">
                                <img src="/assets/blog1.png" className="rounded-lg mb-3" />
                                <h3 className="font-semibold text-lg">Understanding Optical Precision</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Deep insights into optical research technologies.
                                </p>
                            </div>

                            <div className="bg-white shadow p-4 rounded-xl">
                                <img src="/assets/blog2.png" className="rounded-lg mb-3" />
                                <h3 className="font-semibold text-lg">Microscope Advancements</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Modern tools transforming scientific discovery.
                                </p>
                            </div>

                            <div className="bg-white shadow p-4 rounded-xl">
                                <img src="/assets/blog3.png" className="rounded-lg mb-3" />
                                <h3 className="font-semibold text-lg">How Imaging Improves Accuracy</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Exploring the world of digital microscopy.
                                </p>
                            </div>

                        </div>
                    </div>
                )}

                {activeTab === "news" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">In The Headlines</h2>

                        <div className="space-y-6">

                            <div className="bg-white shadow p-6 rounded-xl">
                                <h3 className="font-semibold text-xl">Quasmo Featured in Tech Times</h3>
                                <p className="text-gray-600 mt-2 text-sm">
                                    Recognized for innovation in scientific instruments.
                                </p>
                            </div>

                            <div className="bg-white shadow p-6 rounded-xl">
                                <h3 className="font-semibold text-xl">Global Research Summit Coverage</h3>
                                <p className="text-gray-600 mt-2 text-sm">
                                    Quasmo’s latest microscope gaining international focus.
                                </p>
                            </div>

                        </div>
                    </div>
                )}

                {activeTab === "events" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="bg-white shadow p-6 rounded-xl">
                                <h3 className="font-semibold text-xl">Microscopy Workshop 2024</h3>
                                <p className="text-gray-600 mt-2 text-sm">
                                    Hands-on exploration of advanced microscope handling.
                                </p>
                            </div>

                            <div className="bg-white shadow p-6 rounded-xl">
                                <h3 className="font-semibold text-xl">Quasmo Innovation Expo</h3>
                                <p className="text-gray-600 mt-2 text-sm">
                                    Showcasing breakthrough optical instruments.
                                </p>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
