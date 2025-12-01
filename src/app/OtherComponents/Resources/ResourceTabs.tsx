"use client";
import Image from "next/image";
import { useState } from "react";

interface ResourceTabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function ResourceTabs({ activeTab, setActiveTab }: ResourceTabsProps) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-full bg-[#f3f4ff] py-20">
            {/* HERO SECTION */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 px-6 items-center">

                {/* LEFT TEXT */}
                <div>
                    <p className="text-blue-600 text-sm mb-3">Home • Resources</p>
                    <h1 className="text-4xl font-bold leading-tight">
                        Empowering Discovery: The Role
                        of Precision Instruments in Modern Science
                    </h1>
                </div>
                {/* RIGHT ILLUSTRATION */}
                <div className="flex justify-center">
                    <Image
                        src={imgError ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
                        alt="Illustration"
                        width={1130}
                        height={581}
                        className="w-[1120px] h-auto"
                        priority
                        onError={() => setImgError(true)}
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
        </div>
    );
}