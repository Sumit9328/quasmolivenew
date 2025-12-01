"use client";

import { useState } from "react";
import ProductPage from './ProductPage';
import BrochureAndRelated from './BrochureAndRelated';

interface Product {
  name: string;
  category: string;
  images: string[];
  description: string;
  highlight: string;
  longDescription: string;
}

interface ProductDetailProps {
  product: Product;
  categorySlug: string;
}

export default function ProductDetail({ product, categorySlug }: ProductDetailProps) {
  const [selected, setSelected] = useState(product.images?.[0] || "/assets/default.png");
  const [tab, setTab] = useState("description");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Main Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div>
          {/* Featured Badge */}
          <div className="mb-3">
            <span className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
          {/* Main Image */}
          <div className="bg-[#F4F6FF] p-6 rounded-2xl border border-gray-200">
            <div className="relative w-full h-[360px]">
              <img
                src={selected || "/assets/default.png"}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                    e.currentTarget.src = "/assets/default.png";
                }}
              />
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-4 mt-5">
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelected(img)}
                className={`w-28 h-28 rounded-xl border p-3 cursor-pointer bg-white transition ${
                  selected === img
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="relative w-full h-full">
                  <img 
                    src={img || "/assets/default.png"} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.currentTarget.src = "/assets/default.png";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div>
          {/* Product Title */}
          <h1 className="text-3xl font-semibold mb-4">
            {product.name}
          </h1>
          {/* Product Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>
          {/* Highlight Badge */}
          <div className="bg-[#EFF2FF] text-gray-700 p-4 rounded-lg text-sm border border-[#DFE3FF] w-fit">
            {product.highlight}
          </div>
        </div>
      </div>

      {/* TABS SECTION */}
      <div className="mt-12 border-b border-gray-200 pb-1 flex">
        {/* Product Description TAB */}
        <button
          onClick={() => setTab("description")}
          className={`px-6 py-3 text-sm font-medium transition relative ${
            tab === "description"
              ? "text-white bg-blue-600 rounded-t-xl"
              : "text-gray-500"
          }`}
        >
          Product Description
        </button>
        {/* Attachment TAB */}
        <button
          onClick={() => setTab("attachment")}
          className={`px-6 py-3 text-sm font-medium transition ${
            tab === "attachment"
              ? "text-blue-600"
              : "text-gray-500"
          }`}
        >
          Attachment
        </button>
      </div>

      {/* TAB CONTENTS */}
      <div className="mt-6">
        {tab === "description" && (
          <p className="text-gray-600 leading-relaxed">
            {product.longDescription}
          </p>
        )}
      </div>

      {/* Conditional Content Based on Tab */}
      {tab === "description" && (
        <div className="mt-12">
          <ProductPage 
            productName={product.name}
            productDescription={product.description}
            category={product.category}
            categorySlug={categorySlug}
          />
        </div>
      )}

      {tab === "attachment" && (
        <div className="mt-12">
          <BrochureAndRelated />
        </div>
      )}
    </div>
  );
}

