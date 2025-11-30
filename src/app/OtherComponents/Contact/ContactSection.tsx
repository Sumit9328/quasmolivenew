"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-[#316CE6] flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CARD */}
        <div className="bg-white w-full md:w-[60%] rounded-xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-500 mt-2 mb-8">
            Any question or remarks? Just write us a message!
          </p>

          {/* FORM */}
          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 012 3456 789"
                  className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
                />
              </div>
            </div>

            {/* Company + City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Company</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">City</label>
                <input
                  type="text"
                  placeholder="Noida"
                  className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
             <textarea
  className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 resize-none"
  rows={3}
  placeholder="Write your message.."
/>

            </div>

            {/* Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-[#316CE6] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            src="/contact-illustration.png"
            alt="Contact Illustration"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
