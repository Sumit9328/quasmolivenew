"use client";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#F4F4FF] rounded-3xl flex flex-col md:flex-row overflow-hidden mt-10">
      {/* Left Graphic Side */}
      <div className="bg-[#2A52FF] w-full md:w-1/3 flex items-center justify-center py-12 relative">
        <Image
          src="/contact-illustration.png" // your SVG/PNG here
          alt="Contact Illustration"
          width={450}
          height={450}
          className="drop-shadow-lg"
        />
      </div>

      {/* Right Contact Form */}
      <div className="flex-1 p-10 flex flex-col">
        <h1 className="text-[32px] font-bold text-gray-900 leading-tight">
          Any question or remarks? Just <br />
          write us a message!
        </h1>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="border-b border-gray-300 focus:border-black outline-none pb-1"
              placeholder="John Carter"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="border-b border-gray-300 focus:border-black outline-none pb-1"
              placeholder="+91 000 000 0000"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="text"
              className="border-b border-gray-300 focus:border-black outline-none pb-1"
              placeholder="email@domain.com"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="border-b border-gray-300 focus:border-black outline-none pb-1"
              placeholder="Write your message..."
            />
          </div>

          <div className="col-span-2 flex">
            <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
