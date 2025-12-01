"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { slugify } from "@/app/utils/slugify";

interface ProductSectionProps {
  title: string;
  description: string;
  image: string; // image URL string
  products: string[]; // list of product names
  reverse?: boolean; // optional
}

export default function ProductSection({
  title,
  description,
  image,
  products,
  reverse = false,
}: ProductSectionProps) {
  const categorySlug = slugify(title);

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div
            className={`relative w-full h-[360px] rounded-xl overflow-hidden shadow-md ${
              reverse ? "md:order-2" : "md:order-1"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div
            className={`space-y-4 ${
              reverse ? "md:order-1" : "md:order-2"
            }`}
          >
            <h2 className="text-[34px] font-bold text-[#1C2C64] leading-tight">
              {title}
            </h2>

            <p className="text-gray-600 leading-[26px] text-[16px]">
              {description}
            </p>
          </div>
        </div>

        {/* PRODUCT GRID BELOW */}
        <div className="mt-12 grid grid-cols-5 gap-4">
          {products.map((p, i) => {
            const productSlug = slugify(p);
            return (
              <Link
                key={i}
                href={`/ourproduct/${categorySlug}/${productSlug}`}
                className={`flex items-center justify-between border rounded-lg px-3 py-2 text-[13px] shadow-sm transition ${
                  i === 0
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                {p}
                <ArrowRight size={15} />
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
