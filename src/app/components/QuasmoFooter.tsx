"use client";

import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";

export default function QuasmoFooter() {
    return (
        <footer className="relative bg-white border-t">

            {/* faint background microscope illustration */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('/home/footer-bg.png')] bg-repeat bg-center"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-14">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

                    {/* OUR TOP PRODUCTS */}
                    <div className="max-md:text-center">
                        <h3 className="text-[14px] inter font-[700] mb-4">Our Top Products</h3>
                        <ul className="space-y-2 inter text-[14px] font-[400] text-gray-600">
                            <li>Dissecting Microscope PZ-2</li>
                            <li>Student Microscope SP-5</li>
                            <li>Binocular Microscope ECO STAR-B</li>
                            <li>Research Trinocular Microscope STAR-4</li>
                            <li>Stereo Zoom Microscope SZB-50L</li>
                            <li>Stereo Zoom Microscope SZB-65A</li>
                            <li>Semens QSS-2D</li>
                            <li>Trinocular Polarizing Microscope PR-4IM</li>
                        </ul>
                    </div>

                    {/* TOP CATEGORIES */}
                    <div className="max-md:text-center">
                        <h3 className="text-[14px] inter font-[700] mb-4">Top Categories</h3>
                        <ul className="space-y-2 inter text-[14px] font-[400] text-gray-600">
                            <li>Dissecting & Educational Microscopes</li>
                            <li>Laboratory Microscopes</li>
                            <li>Star Series Microscopes</li>
                            <li>Stereo Zoom Microscopes</li>
                            <li>Inverted Tissue Culture Microscopes</li>
                            <li>Fluorescent Microscopes</li>
                            <li>Sperms Analysis Microscope</li>
                            <li>Polarizing Microscopes</li>
                            <li>Multi-Head Microscopes</li>
                        </ul>
                    </div>

                    {/* ABOUT US */}
                    <div className="max-md:text-center">
                        <h3 className="text-[14px] inter font-[700] mb-4">About US</h3>
                        <ul className="space-y-2 inter text-[14px] font-[400] text-gray-600 mb-6">
                            <li>Overview</li>
                            <li>Quasmo Infrastructure</li>
                            <li>Certificates</li>
                        </ul>

                        <h3 className="text-[14px] inter font-[700] mb-4">Resources</h3>
                        <ul className="space-y-2 inter text-[14px] font-[400] text-gray-600">
                            <li>Blogs & Articles</li>
                            <li>Quasmo in News</li>
                            <li>Events</li>
                        </ul>
                    </div>

                    {/* CONTACT US */}
                    <div className="max-md:text-center">
                        <h3 className="text-[14px] inter font-[700] mb-4">Contact Us</h3>
                        <ul className="space-y-2 inter text-[14px] font-[400] text-gray-600">
                            <li>General Queries</li>
                            <li>Careers</li>
                            <li>
                                <span className="font-medium block text-gray-800">FOR SALES:</span>
                                <span className="break-all">sales@quasmoindianmicroscope.com</span>
                            </li>
                            <li>
                                <span className="font-medium block text-gray-800">
                                    FOR TENDER INQUIRIES:
                                </span>
                                <span className="break-all">quasmo.mechanical@gmail.com</span>
                            </li>
                            <li>
                                <span className="font-medium block text-gray-800">
                                    FOR GENERAL INQUIRIES:
                                </span>
                                <span className="break-all">info@quasmoindianmicroscope.com</span>
                            </li>
                        </ul>

                        <h3 className="font-semibold mb-3 mt-4">Our Social Media</h3>
                        <div className="flex space-x-3 text-gray-700 max-md:justify-center">
                            <Facebook className="w-4 h-4" />
                            <Twitter className="w-4 h-4" />
                            <Instagram className="w-4 h-4" />
                            <Linkedin className="w-4 h-4" />
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 inter text-[14px] font-[400] text-gray-600 max-md:text-center">
                    <p>
                        Copyright ©2025 Quasmo - Quality scientific and Mechanical Works.{" "}
                        <span className="text-blue-600 underline cursor-pointer">
                            All rights reserved managed.
                        </span>
                    </p>

                    <div className="flex gap-4 justify-center md:justify-end">
                        <span>Terms & Conditions</span>
                        <span>•</span>
                        <span>Privacy Notice</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
