"use client";

import React from 'react';
import Header from '@/app/components/header';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { unslugify } from '@/app/utils/slugify';
import ProductDetail from './ProductDetail';
import QualityAssurance from '@/app/OtherComponents/About/QualityAssurance';
import TestimonialSection from '@/app/components/TestimonialSection';
import LatestBlogs from '@/app/components/LatestBlogs';
import ContactSection from '@/app/components/ContactSection';
import SubscribeSection from '@/app/components/SubscribeSection';
import QuasmoSection from '@/app/components/QuasmoSection';
import QuasmoFooter from '@/app/components/QuasmoFooter';

interface ProductDetailClientProps {
  category: string;
  slug: string;
}

// Mock product data - Replace with your actual data source
const getProductData = (category: string, slug: string) => {
  const productName = unslugify(slug);
  const categoryName = unslugify(category);
  
  return {
    name: productName,
    category: categoryName,
    images: [
      "/images/product1.jpg",
      "/images/product2.jpg",
      "/images/product1.jpg",
      "/images/product2.jpg",
    ].map(img => img || "/assets/default.png"),
    description: `The ${productName} is a precision-engineered microscope designed for professional use in laboratories, research institutions, and educational settings.`,
    highlight: "Trusted by professionals in hospitals, research institutes, and academic labs for their reliability and precision.",
    longDescription: `The ${productName} is a precision-engineered microscope designed for professional use in laboratories, research institutions, and educational settings. Built with over 60 years of manufacturing excellence, this instrument combines clarity, durability, and ergonomic design to meet the evolving demands of diagnostics and research. At Quasmo, we craft precision instruments for pathology, metallurgy, fluorescence, and education—trusted by labs and institutions across India. With over 60 years of manufacturing excellence, our products combine clarity, durability, and ergonomic design to meet the evolving demands of diagnostics and research.`,
  };
};

export default function ProductDetailClient({ category, slug }: ProductDetailClientProps) {
  const product = getProductData(category, slug);

  return (
    <>
      <Header />
      
      {/* Hero Banner Section */}
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
            Home <span className="mx-1">•</span> Our Products <span className="mx-1">•</span> {product.category} <span className="mx-1">•</span> {product.name}
          </p>
          <h1 className="text-white text-4xl lg:text-5xl font-semibold leading-tight">
            {product.category} for Tomorrow's Innovators
          </h1>
          <p className="text-white/80 mt-4 max-w-3xl text-base lg:text-lg leading-relaxed">
            Explore our comprehensive range of {product.category.toLowerCase()} designed for professionals
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

      {/* Product Detail Component */}
      <section className="w-full py-12 bg-white">
        <ProductDetail product={product} categorySlug={category} />
      </section>

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

