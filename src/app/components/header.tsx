"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
    const [openProducts, setOpenProducts] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    const productItems = [
        "Dissecting & Educational Microscopes",
        "Fluorescent Microscopes",
        "Projection Microscopes",
        "Magnoscope",
        "Laboratory Microscopes",
        "Sperms Analysis Microscope",
        "Metallurgical Microscopes",
        "Imaging Cameras For Microscopy (Attachments)",
        "Star Series Microscopes",
        "Polarizing Microscopes",
        "Travelling Microscope",
        "Digital Attachments for Microscope",
        "Stereo Zoom Microscopes",
        "Multi-Head Microscopes",
        "ENT Operating Microscope",
        "Phase Contrast & Dark Field (Attachments)",
        "Inverted Tissue Culture Microscopes",
        "Digital Video Microscopes",
        "Gemological Microscope",
        "Software",
    ];

    return (
        <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">

                {/* LOGO */}
                <Link href="/" className="text-xl font-bold">
                    <Image
                        src="/assets/QUASMO LOGO.svg"
                        alt="logo"
                        width={70}   // required
                        height={40}   // required
                        className="h-[50px] w-[51px] md:h-[70px] md:w-[71px] object-contain"
                    />
                </Link>

                {/* DESKTOP MENU ITEMS */}
                <ul className="hidden md:flex items-center space-x-8 font-medium text-black pp-500">
                    <li>
                        <Link href="/about" className="hover:text-blue-500 text-[16px] pp-500 text-black">About Us</Link>
                    </li>

                    {/* OUR PRODUCTS DROPDOWN */}
                    <li
                        className="relative"
                        onMouseEnter={() => setOpenProducts(true)}
                        onMouseLeave={() => setOpenProducts(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-blue-500 text-[16px] pp-500">
                            Our Products <ChevronDown size={16} />
                        </button>

                        {openProducts && (
                            <div className="fixed left-0 top-[95px] w-full bg-white shadow-xl border-t animate-fadeIn z-40">
                                <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-6">
                                    {productItems.map((name, i) => (
                                        <Link
                                            key={i}
                                            href="#"
                                            className="flex justify-between items-center border p-3 rounded-lg hover:bg-blue-50 transition"
                                        >
                                            <span className="text-sm font-medium">{name}</span>
                                            <ArrowRight size={16} className="text-blue-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}


                    </li>

                    <li>
                        <Link href="/accessories" className="hover:text-blue-500 font-[500]">Accessories</Link>
                    </li>

                    <li>
                        <Link href="/resources" className="hover:text-blue-500">Resources</Link>
                    </li>

                    <li>
                        <Link href="/contact" className="hover:text-blue-500">Contact Us</Link>
                    </li>
                </ul>

                {/* HAMBURGER MENU BUTTON - MOBILE ONLY */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-gray-700 hover:text-blue-500 transition"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <ul className="flex flex-col py-4 px-4 space-y-4">
                        <li>
                            <Link 
                                href="/about" 
                                className="block py-2 text-[16px] pp-500 text-black hover:text-blue-500"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>

                        {/* MOBILE PRODUCTS DROPDOWN */}
                        <li>
                            <button
                                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                className="flex items-center justify-between w-full py-2 text-[16px] pp-500 text-black hover:text-blue-500"
                            >
                                <span>Our Products</span>
                                <ChevronDown 
                                    size={16} 
                                    className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            
                            {mobileProductsOpen && (
                                <div className="mt-2 pl-4 space-y-2 max-h-[400px] overflow-y-auto">
                                    {productItems.map((name, i) => (
                                        <Link
                                            key={i}
                                            href="#"
                                            className="block py-2 text-sm text-gray-700 hover:text-blue-500 border-b border-gray-100"
                                            onClick={() => {
                                                setMobileProductsOpen(false);
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            {name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <Link 
                                href="/accessories" 
                                className="block py-2 text-[16px] pp-500 font-[500] hover:text-blue-500"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Accessories
                            </Link>
                        </li>

                        <li>
                            <Link 
                                href="/resources" 
                                className="block py-2 text-[16px] pp-500 hover:text-blue-500"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Resources
                            </Link>
                        </li>

                        <li>
                            <Link 
                                href="/contact" 
                                className="block py-2 text-[16px] pp-500 hover:text-blue-500"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
