import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function QuasmoFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-24 h-24 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Sun rays */}
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
                {/* Circle */}
                <circle cx="50" cy="50" r="30" fill="none" stroke="#1e40af" strokeWidth="2" />
                {/* Text */}
                <text x="50" y="48" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">
                  QUASMO
                </text>
                <text x="50" y="60" textAnchor="middle" fontSize="8" fill="#1e40af">
                  INDIA
                </text>
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mb-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              Quality Scientific & Mechanical Works (microscope manufacturers in India) has
              ushered onto the path of accelerated growth since its establishment in the year 1961.
            </p>
          </div>

          {/* Address */}
          <div className="mb-6">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Address:</span> #84 HSIIDC, Industrial Estate, Ambala-133001
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4">
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
              <span className="text-sm font-medium">sales@quasmoindianmicroscope.com</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Our Top Products */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Top Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Dissecting Microscope PZ-2</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Student Microscope SP-5</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Binocular Microscope ECO STAR-B</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Research Trinocular Microscope STAR-4</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Stereo Zoom Microscope SZB-50L</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Stereo Zoom Microscope SZB-65A</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Semiscope QSS-2D</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Trinocular Polarizing Microscope PR-4IM</a></li>
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Top Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Dissecting & Educational Microscopes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Laboratory Microscopes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Star Series Microscopes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Stereo Zoom Microscopes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Inverted Tissue Culture Microscopes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Fluorescent Microscopes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Sperms Analysis Microscope</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Polarizing Microscopes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Multi-Head Microscopes</a></li>
            </ul>
          </div>

          {/* About US & Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About US</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Overview</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Quasmo Infrastructure</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Certificates</a></li>
            </ul>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Blogs & Articles</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Quasmo in News</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Events</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-gray-600">General Queries</li>
              <li className="text-sm text-gray-600">Careers</li>
              <li>
                <p className="text-sm text-gray-900 font-medium mb-1">FOR SALES:</p>
                <a href="mailto:sales@quasmoindianmicroscope.com" className="text-sm text-gray-600 hover:text-blue-700">
                  sales@quasmoindianmicroscope.com
                </a>
              </li>
              <li>
                <p className="text-sm text-gray-900 font-medium mb-1">FOR TENDER INQUIRIES:</p>
                <a href="mailto:quasmo.mechanical@gmail.com" className="text-sm text-gray-600 hover:text-blue-700">
                  quasmo.mechanical@gmail.com
                </a>
              </li>
              <li>
                <p className="text-sm text-gray-900 font-medium mb-1">FOR GENERAL INQUIRIES:</p>
                <a href="mailto:info@quasmoindianmicroscope.com" className="text-sm text-gray-600 hover:text-blue-700">
                  info@quasmoindianmicroscope.com
                </a>
              </li>
            </ul>
            <h3 className="font-semibold text-gray-900 mb-4">Our Social Media</h3>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-blue-700 hover:bg-blue-50 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-blue-700 hover:bg-blue-50 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-blue-700 hover:bg-blue-50 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-blue-700 hover:bg-blue-50 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Copyright ©2025 Quasmo - Quality scientific and Mechanical Works.{' '}
            <a href="#" className="text-blue-700 hover:underline">All rights reserved managed.</a>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-700">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-700">Privacy Notice</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}