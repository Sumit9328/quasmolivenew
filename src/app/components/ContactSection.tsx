import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full py-6 md:py-10 flex justify-center px-4 md:px-6">
      <div className="max-w-7xl w-full bg-[#f4f5ff] rounded-2xl flex flex-col md:flex-row overflow-hidden">

        {/* LEFT ILLUSTRATION */}
        <div className="w-full md:w-[37%] bg-[#316CE6] flex items-center justify-center p-6 md:p-10">
          <Image
            src="/home/newsletter-img.png.svg"
            alt="Contact Illustration"
            width={350}
            height={350}
            className="object-contain w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px]"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-[60%] p-6 md:p-10">

          {/* Heading - desktop same, mobile scaled */}
          <h2 className="text-[28px] md:text-[42px] pp-700 mb-6 md:mb-8 leading-snug max-md:text-xl">
            Any question or remarks? Just{" "}
            <br className="hidden md:block" /> write us a message!
          </h2>

          <form className="space-y-4 md:space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-[12px] pp-500 text-gray-600 mb-0">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 text-sm"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-[12px] pp-500 text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-[12px] pp-500 text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 text-sm"
                  placeholder="+91 "
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[12px] pp-500 text-gray-600 mb-1">
                Message
              </label>
              <textarea
                rows={2}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 resize-none text-sm"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 
                bg-white rounded-lg shadow-sm text-gray-700 font-medium 
                text-sm md:text-base w-full md:w-auto
              "
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
