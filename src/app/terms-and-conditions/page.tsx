import React from 'react';
import Header from '@/app/components/header';
import QuasmoFooter from '@/app/components/QuasmoFooter';

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      
      <section className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1C2C64] mb-2">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600">
              Quality Scientific & Mechanical Works
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">1. Introduction</h2>
                <p>
                  Welcome to the website of Quality Scientific and Mechanical Works ("Company", "we", "our", or "us"). By accessing or using our website, products, or services, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our website or services.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">2. Use of Website</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You agree to use this website only for lawful purposes.</li>
                  <li>You must not attempt to gain unauthorized access to the site, its data, servers, or any related systems.</li>
                  <li>All content displayed on the website is for informational purposes and may be updated or changed without prior notice.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">3. Products & Specifications</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product images, specifications, and descriptions are indicative and may vary slightly due to continuous product improvements.</li>
                  <li>We reserve the right to modify product specifications, pricing, and features without prior notice.</li>
                  <li>All quotations are valid only for the duration mentioned in the quote.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">4. Orders & Payments</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Orders become valid only after written confirmation from our end.</li>
                  <li>Payment terms will be mentioned in the quotation or invoice.</li>
                  <li>Delayed payments may attract interest or suspension of further deliveries.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">5. Shipping & Delivery</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery timelines shared are estimated and may vary due to external factors.</li>
                  <li>Risk of loss passes to the buyer once the shipment is handed over to the carrier.</li>
                  <li>Any claims for shortages, damages, or discrepancies must be reported within 48 hours of receipt.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">6. Warranty & Service</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Microscopes and related products come with 1–3 years warranty, depending on the model.</li>
                  <li>Warranty covers manufacturing defects only.</li>
                  <li>Warranty does not cover damage due to misuse, mishandling, unauthorized repairs, electrical fluctuations, or accidents.</li>
                  <li>Onsite service availability depends on region, and service charges may apply.</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">7. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All content on this website—including text, images, product designs, graphics, and trademarks—belongs to Quality Scientific and Mechanical Works – QUASMO</li>
                  <li>Reproduction, distribution, or unauthorized use of our intellectual property is strictly prohibited.</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">8. Limitation of Liability</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not responsible for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our products or website.</li>
                  <li>Our maximum liability is limited to the purchase price of the product.</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">9. Governing Law</h2>
                <p>
                  These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Ambala, Haryana, unless otherwise specified.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">10. Contact Information</h2>
                <p className="mb-2">For any questions regarding these Terms & Conditions, contact us at:</p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-lg mb-3">Quality Scientific and Mechanical Works</p>
                  <p className="mb-1"><span className="font-medium">Email:</span> Info@quasmoindianmicroscope.com</p>
                  <p className="mb-1"><span className="font-medium">Phone:</span> +91 8926666632</p>
                  <p className="mb-1"><span className="font-medium">Address:</span></p>
                  <p className="ml-4 mb-1">Unit 1: 84, HSIIDC, Industrial Area, Ambala Cantt – 133001</p>
                  <p className="ml-4">Unit 2: Manglai, P.O Khudda Kalan, Ambala, Haryana – 133006</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <QuasmoFooter />
    </>
  );
}

