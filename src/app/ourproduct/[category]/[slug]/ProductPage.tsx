"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductPageProps {
  productName: string;
  productDescription: string;
  category: string;
  categorySlug: string;
}

export default function ProductPage({ productName, productDescription, category, categorySlug }: ProductPageProps) {
  return (
    <div className="w-full">
      {/* ==== TOP HEADER ==== */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link href={`/ourproduct/${categorySlug}`}>
          <button className="text-sm text-blue-600 border px-3 py-1 rounded-md mb-4 hover:bg-blue-50 transition">
            Go Back
          </button>
        </Link>
        <h1 className="text-3xl font-semibold mb-2">{productName}</h1>
        <p className="text-gray-600 max-w-2xl">
          {productDescription}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <button className="text-blue-600 hover:underline text-sm">
            Get Quote
          </button>
          <ArrowRight size={16} />
        </div>
      </div>

      {/* ==== TWO BOXES ==== */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT BOX */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm border relative">
          <h2 className="text-xl font-semibold mb-3">Product Description</h2>
          <p className="text-gray-700 text-sm leading-6">
            The {productName.toLowerCase()} is ideal for studying small organisms. It
            ensures clear visibility with high resolution optics and durable build.
          </p>
          <div className="mt-5 flex justify-center">
            <Image
              src="/sample-micro.png"
              width={200}
              height={200}
              alt="product"
              className="object-contain"
            />
          </div>
        </div>
        {/* RIGHT BOX */}
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Product Packaging</h2>
          <p className="text-sm opacity-90">
            Thermocol/Cartoon Packing And Other Customisable.
          </p>
        </div>
      </div>

      {/* ==== SPECIFICATION TABLE ==== */}
      <div className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-2xl font-semibold mb-6">Product Specification</h2>
        <div className="overflow-hidden border rounded-lg">
          <table className="w-full text-left">
            <tbody>
              {[
                ["Optical System", "High Contrast Extra Optical Corrected Ground System."],
                ["Stand", "Ergonomically designed stand ensures steady structure and ease of operation."],
                ["Magnification", "40x to 100x through magnification."],
                ["Viewing Head", "360° rotatable binocular viewing head."],
                ["Eyepieces", "Wide field eyepieces with anti-reflection & dust-proof coating."],
                ["Objectives", "Achromatic objectives with precision focusing."],
                ["Illumination", "LED illumination with adjustable brightness."],
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 font-semibold bg-gray-50 w-1/3">{row[0]}</td>
                  <td className="p-4 text-gray-700">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==== RELATED PRODUCTS ==== */}
      <div className="bg-white py-10">
        <h2 className="text-center text-2xl font-semibold mb-8">Related Products</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "PATHOLOGICAL LABORATORY", img: "/p1.png" },
            { title: "FLUORESCENT MICROSCOPES", img: "/p2.png" },
            { title: "Multi Viewing Microscopes", img: "/p3.png" },
            { title: "LABORATORY EQUIPMENTS", img: "/p4.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  width={150}
                  height={150}
                  alt={item.title}
                />
              </div>
              <p className="text-center mt-4 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

