import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="w-full bg-white px-6 py-16 relative">
            <div className="max-w-7xl mx-auto">

                {/* MAIN CONTENT */}
                <div className="max-w-xl">

                    {/* Logo */}
                    <Image
                        src="/home/quasmo-logo.svg"   // <- apna logo yahan do
                        alt="Quasmo Logo"
                        width={120}
                        height={120}
                    />

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                        Quality Scientific & Mechanical Works (microscope manufacturers in India) has
                        ushered onto the path of accelerated growth since its establishment in
                        the year 1961.
                    </p>

                    {/* Address */}
                    <p className="text-gray-800 text-sm mt-6 font-semibold">
                        Address:{" "}
                        <span className="font-normal text-gray-600">
                            #84 HSIIDC, Industrial Estate, Ambala-133001
                        </span>
                    </p>

                    {/* Contact Buttons */}
                    <div className="flex gap-4 mt-6 flex-wrap">

                        {/* Phone */}
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm text-gray-700">
                            <span>📞</span>
                            1800-419-4979
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm text-gray-700">
                            <span>✉️</span>
                            sales@quasmoindianmicroscope.com
                        </div>

                    </div>
                </div>

                {/* BACK TO TOP BUTTON */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="absolute right-10 top-10 w-14 h-14 rounded-full bg-[#2f66e0] text-white flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition"
                >
                    ↑
                </button>

            </div>
        </footer>
    );
}
