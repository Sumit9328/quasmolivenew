"use client";

import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function QuasmoSection() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <div className="mb-12">

          {/* Logo */}
          <div className="mb-6 flex max-md:justify-center">
            <div className="w-24 h-24 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 50 + Math.cos(angle) * 35;
                  const y1 = 50 + Math.sin(angle) * 35;
                  const x2 = 50 + Math.cos(angle) * 42;
                  const y2 = 50 + Math.sin(angle) * 42;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#1e40af"
                      strokeWidth="2"
                    />
                  );
                })}
                <circle cx="50" cy="50" r="30" fill="none" stroke="#1e40af" strokeWidth="2" />
                <text x="50" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">
                  QUASMO
                </text>
                <text x="50" y="60" textAnchor="middle" fontSize="8" fill="#1e40af">
                  INDIA
                </text>
              </svg>
            </div>
          </div>

          <div className="max-w-2xl mb-6 max-md:text-center">
            <p className="text-gray-700 text-sm leading-relaxed">
              Quality Scientific & Mechanical Works (microscope manufacturers in India) has
              ushered onto the path of accelerated growth since its establishment in the year 1961.
            </p>
          </div>

          <div className="mb-6 max-md:text-center">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Address:</span> #84 HSIIDC, Industrial Estate, Ambala-133001
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4 max-md:justify-center">
            <a
              href="tel:1800-419-4979"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full hover:border-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">1800-419-4979</span>
            </a>

            <a
              href="mailto:sales@quasmoindianmicroscope.com"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full hover:border-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium break-all max-md:text-xs">
                sales@quasmoindianmicroscope.com
              </span>
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors max-md:bottom-5 max-md:right-5 max-md:w-10 max-md:h-10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 max-md:w-4 max-md:h-4" />
        </button>

      </div>
    </footer>
  );
}
