import React from 'react';
import Header from '@/app/components/header';
import Link from 'next/link';
import { unslugify, slugify } from '@/app/utils/slugify';
import { FAQSection } from '@/app/components/FAQSection';
import { AboutQuasmo } from '@/app/components/AboutQuasmo';
import { VideoHeroSection } from '@/app/components/VideoSec';
import QualityAssurance from '@/app/OtherComponents/About/QualityAssurance';
import TestimonialSection from '@/app/components/TestimonialSection';
import LatestBlogs from '@/app/components/LatestBlogs';
import ContactSection from '@/app/components/ContactSection';
import SubscribeSection from '@/app/components/SubscribeSection';
import QuasmoSection from '@/app/components/QuasmoSection';
import QuasmoFooter from '@/app/components/QuasmoFooter';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

// Mock product data for each category - Replace with your actual data source
const getCategoryProducts = (category: string) => {
    const categoryName = unslugify(category);

    // Product lists for different categories
    const productMap: Record<string, string[]> = {
        "Dissecting & Educational Microscopes": [
            "Dissecting Microscope PZ-2",
            "Dissecting Microscope PZ-2 with BULL LENS",
            "Student Microscope SP-5",
            "Student Microscope SP-7",
            "Compound Student Microscope PZ-5",
            "Compound Student Microscope PZ-6",
            "Compound Student Microscope PZ-7",
            "Medical Student Microscope PZ-9",
            "Medical Student Microscope PZ-9S",
            "Medical Student Microscope PZ-9 Advance",
        ],
        "Laboratory Microscopes": [
            "Pathological Monocular Microscope SP-20",
            "Pathological Binocular Microscope SP-22",
            "Pathological Monocular Microscope STAR-2",
            "Pathological Binocular Microscope STAR-2",
            "Pathological Monocular Microscope STAR PLUS-2",
            "Pathological Binocular Microscope STAR PLUS-2",
            "Monocular Microscope ECO STAR-M",
            "Binocular Microscope ECO STAR-B",
            "Monocular Microscope ECO STAR PLUS-M",
            "Monocular Microscope ECO STAR PLUS-B",
            "Binocular Microscope ECO STAR PLUS-PREMIA",
        ],
    };

    return productMap[categoryName] || [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Product 5",
        "Product 6",
        "Product 7",
        "Product 8",
        "Product 9",
        "Product 10",
    ];
};

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params;
    const categoryName = unslugify(category);
    const products = getCategoryProducts(category);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
                <img
                    src="/ourproduct/image 129.png"
                    alt="Microscope"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "/assets/default.png";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC]/80 via-[#0052CC]/60 to-transparent"></div>

                <div className="relative z-10 max-w-5xl px-6 lg:px-10">
                    <p className="text-white/70 text-sm mb-3">
                        Home <span className="mx-1">•</span> Our Products <span className="mx-1">•</span> {categoryName}
                    </p>
                    <h1 className="text-white text-4xl lg:text-5xl font-semibold leading-tight">
                        {categoryName}
                    </h1>
                    <p className="text-white/80 mt-4 max-w-3xl text-base lg:text-lg leading-relaxed">
                        Explore our comprehensive range of {categoryName.toLowerCase()} designed for professionals
                        who demand precision, clarity, and reliability in their work.
                    </p>
                </div>

                <div className="absolute bottom-6 flex items-center gap-2 z-10">
                    <span className="w-3 h-3 bg-white/70 rounded-full"></span>
                    <span className="w-3 h-3 bg-white/40 rounded-full"></span>
                    <span className="w-3 h-3 bg-white/40 rounded-full"></span>
                </div>

                <button className="absolute right-[-37px] top-1/2 -translate-y-1/2 bg-[#0052CC] text-white px-4 py-2 text-sm font-medium rotate-90 rounded-b-lg shadow-lg">
                    Enquire Now
                </button>
            </section>

            {/* Info Section with Images */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
                    {/* LEFT SIDE CONTENT */}
                    <div>
                        <p className="text-sm tracking-wide text-gray-500 mb-3">
                            {categoryName}
                        </p>
                        <h1 className="text-4xl font-bold leading-tight mb-6">
                            Precision {categoryName.split(' ')[0]}.<br />
                            <span className="text-black">Professional</span>
                            <span className="text-gray-700">-Grade Performance</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {categoryName.toLowerCase()} are essential tools that elevate the performance and versatility
                            of your optical systems. Whether in medical diagnostics, academic research, or industrial
                            inspection, the right {categoryName.toLowerCase()}—like eyepieces, illumination kits, mechanical stages,
                            and digital adapters—ensure sharper imaging, smoother operation, and greater user comfort.
                            From basic upgrades to advanced modular enhancements, our {categoryName.toLowerCase()} are designed to
                            integrate seamlessly with a wide range of microscope models, helping professionals achieve
                            more with every observation.
                        </p>
                        {/* HIGHLIGHT BOX */}
                        <div className="bg-[#eef1ff] border-l-4 border-blue-600 p-5 rounded-xl shadow-sm">
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Widely recognized across globe for delivering precision-engineered {categoryName.toLowerCase()}
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
                            <img
                                src="/assets/accessory-img1.png"
                                alt="Accessory 1"
                                width={400}
                                height={350}
                                className="w-[260px] h-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = "/assets/default.png";
                                }}
                            />
                        </div>
                        {/* TOP RIGHT IMAGE */}
                        <div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-md">
                            <img
                                src="/assets/accessory-img2.png"
                                alt="Accessory 2"
                                width={400}
                                height={350}
                                className="w-[260px] h-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = "/assets/default.png";
                                }}
                            />
                        </div>
                        {/* BOTTOM CENTER IMAGE */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-md">
                            <img
                                src="/assets/accessory-img3.png"
                                alt="Accessory 3"
                                width={500}
                                height={450}
                                className="w-[340px] h-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = "/assets/default.png";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Listing Section */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#1C2C64] mb-8">
                        Our Products - {categoryName}
                    </h2>

                    {/* Product Grid - 3 columns per row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.slice(0, 10).map((productName, index) => {
                            const productSlug = slugify(productName);
                            return (
                                <Link
                                    key={index}
                                    href={`/ourproduct/${category}/${productSlug}`}
                                    className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-300 group"
                                >
                                    {/* Product Image */}
                                    <div className="relative w-full h-48 mb-3 bg-gray-100 rounded-lg overflow-hidden">
                                        <img
                                            src="/images/product1.jpg"
                                            alt={productName}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                e.currentTarget.src = "/assets/default.png";
                                            }}
                                        />
                                    </div>

                                    {/* Product Title */}
                                    <h3 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition mb-2 line-clamp-2">
                                        {productName}
                                    </h3>

                                    {/* View Details Arrow */}
                                    <div className="flex justify-end mt-3">
                                        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 transition">
                                            <svg
                                                className="w-4 h-4 text-gray-500 group-hover:text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <FAQSection />
            <AboutQuasmo />
            <VideoHeroSection />
            <QualityAssurance />
            <TestimonialSection />
            <LatestBlogs />
            <ContactSection />
            <SubscribeSection />
            <QuasmoSection />
            <QuasmoFooter />
        </>
    );
}
