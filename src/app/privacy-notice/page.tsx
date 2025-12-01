import React from 'react';
import Header from '@/app/components/header';
import QuasmoFooter from '@/app/components/QuasmoFooter';

export default function PrivacyNoticePage() {
  return (
    <>
      <Header />
      
      <section className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1C2C64] mb-2">
              Privacy Notice
            </h1>
            <p className="text-xl text-gray-600">
              Quality Scientific & Mechanical Works
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              {/* Introduction */}
              <div>
                <p className="text-lg">
                  This Privacy Notice explains how Quality Scientific and Mechanical Works ("we", "our", "us") collects, uses, shares, and protects your personal information when you visit our website or interact with our services.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following information:</p>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">a. Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company/Institution details</li>
                    <li>Billing & shipping address</li>
                    <li>Inquiry or communication details</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">b. Technical Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address</li>
                    <li>Browser type & version</li>
                    <li>Device information</li>
                    <li>Pages visited on our website</li>
                    <li>Time spent on pages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">c. Transactional Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Order details</li>
                    <li>Payment information (processed through secure third-party gateways)</li>
                    <li>Delivery details</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">3. How We Use Your Information</h2>
                <p className="mb-2">We use your information for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processing orders and delivering products</li>
                  <li>Providing customer support and after-sales service</li>
                  <li>Sending quotations, invoices, and technical documents</li>
                  <li>Improving our website and product offerings</li>
                  <li>Sending updates, offers, or promotional content (only if you opt-in)</li>
                  <li>Compliance with legal or regulatory obligations</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">4. Sharing of Information</h2>
                <p className="mb-2">We do not sell or trade your personal information.</p>
                <p className="mb-2">However, we may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Shipping and logistics partners</li>
                  <li>Payment gateways</li>
                  <li>Service technicians or authorized distributors</li>
                  <li>Legal authorities (if required by law)</li>
                </ul>
                <p className="mt-2">All third-party partners are bound by confidentiality obligations.</p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">5. Cookies & Tracking Technologies</h2>
                <p className="mb-2">Our website may use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve user experience</li>
                  <li>Analyze website traffic</li>
                  <li>Store preferences</li>
                </ul>
                <p className="mt-2">You may disable cookies through your browser settings, though some features may not function properly.</p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">6. Data Security</h2>
                <p>
                  We use industry-standard security measures to protect your personal data from unauthorized access, loss, misuse, or alteration.
                </p>
                <p className="mt-2">
                  However, no online system is 100% secure.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">7. Data Retention</h2>
                <p>
                  We retain your data only as long as necessary to fulfil business purposes, legal obligations, customer support, or ongoing service warranties.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">8. Your Rights</h2>
                <p className="mb-2">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent for marketing</li>
                  <li>Ask how your data is being used</li>
                </ul>
                <p className="mt-2">To exercise your rights, contact us using the details below.</p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party sites. We are not responsible for their content, privacy practices, or security.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">10. Updates to this Notice</h2>
                <p>
                  We may update this Privacy Notice occasionally. Any updates will be posted on this page with a new "Last Updated" date.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-semibold text-[#1C2C64] mb-4">11. Contact Us</h2>
                <p className="mb-2">For privacy-related questions, contact:</p>
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

