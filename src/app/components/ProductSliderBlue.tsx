export default function SubscribeSection() {
  return (
    <section className="w-full bg-[#2f66e0] py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT CONTENT */}
        <div className="text-white max-md:text-center">
          <h3 className="text-[36px] inter font-semibold mb-2 max-md:text-xl">
            Subscribe to our Latest News
          </h3>
          <p className="text-[14px] inter font-[400] text-blue-100 max-w-md max-md:text-sm max-md:mx-auto">
            Join our mailing list and get the latest Quasmo news, insights,
            updates, and exclusive articles delivered to your inbox.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center gap-4 max-md:flex-col max-md:w-full">

          {/* INPUT */}
          <input
            type="email"
            placeholder="Your email address"
            className="
              bg-white px-5 py-4 rounded-lg outline-none 
              text-sm text-[14px] inter font-[400] w-[280px]
              max-md:w-full
            "
          />

          {/* BUTTON */}
          <button
            className="
              bg-white text-[#316CE6] px-6 py-3 rounded-lg 
              text-[14px] inter font-bold flex items-center gap-2 shadow
              max-md:w-full max-md:justify-center
            "
          >
            Subscribe Now
            <span className="text-lg p-0 m-0">→</span>
          </button>

        </div>

      </div>
    </section>
  );
}
