"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function BrochureAndRelated() {
  return (
    <div className="w-full">
      {/* ==== DOWNLOAD BROCHURE SECTION ==== */}
      <div className="max-w-6xl mx-auto px-4 my-10">
        <h2 className="text-lg font-semibold mb-4">Download Brochure</h2>
        <div className="space-y-3">
          {/* Row 1 */}
          <div className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm hover:shadow transition">
            <div>
              <p className="font-medium text-sm">PZ-2 Dissecting Microscope</p>
              <p className="text-xs text-gray-500">PZ-2 Dissecting Microscope.pdf</p>
            </div>
            <Download size={18} className="text-gray-700" />
          </div>
          {/* Row 2 */}
          <div className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm hover:shadow transition">
            <div>
              <p className="font-medium text-sm">Certificate</p>
              <p className="text-xs text-gray-500">PZ-2 Dissecting Microscope Certificate.pdf</p>
            </div>
            <Download size={18} className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* ==== RELATED PRODUCTS TITLE ==== */}
      <h2 className="text-center text-2xl font-semibold mt-20 mb-10">
        Related Products
      </h2>

      {/* ==== PRODUCT GRID ==== */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item, i) => (
          <div
            key={i}
            className="border bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="w-full h-52 flex justify-center items-center bg-gray-50">
              <div className="h-40 w-40 bg-gray-200 rounded"></div>
            </div>
            {/* Text */}
            <div className="p-4">
              <p className="font-semibold text-sm mb-2 uppercase">
                PRODUCT TITLE
              </p>
              <p className="text-xs text-gray-600 leading-5">
                Short description of the product goes here, matching exact layout.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ==== SHOW MORE BUTTON ==== */}
      <div className="w-full flex justify-center py-10">
        <button className="border border-blue-400 px-8 py-2 rounded text-sm text-blue-600 hover:bg-blue-50 transition">
          Show More
        </button>
      </div>
    </div>
  );
}

