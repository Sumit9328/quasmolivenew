"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Product {
  name: string;
  image: string;
}

interface OurProductLayoutProps {
  title: string;
  products: Product[];
}

export default function OurProductLayout({ title, products }: OurProductLayoutProps) {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Our Products
          <span className="font-normal"> — {title}</span>
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:border-blue-500 transition-all duration-300 group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 mb-3">
                <img
                  src={item.image || "/assets/default.png"}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                      e.currentTarget.src = "/assets/default.png";
                  }}
                />
              </div>

              {/* Title */}
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                {item.name}
              </p>

              {/* Arrow Button */}
              <div className="mt-3 flex justify-end">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 transition">
                  <ArrowRight
                    size={16}
                    className="text-gray-500 group-hover:text-blue-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
