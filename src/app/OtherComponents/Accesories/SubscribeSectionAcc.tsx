export default function SubscribeSectionAcc() {
  return (
    <section className="relative w-full py-20 bg-[#316CE6] overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[160%] h-[160%] rotate-45 border-[1px] border-white/20 rounded-[40%]"></div>
        <div className="absolute -top-20 -left-20 w-[160%] h-[160%] rotate-[55deg] border-[1px] border-white/15 rounded-[40%]"></div>
        <div className="absolute -top-20 -left-20 w-[160%] h-[160%] rotate-[65deg] border-[1px] border-white/10 rounded-[40%]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center text-white px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Subscribe to our Latest News
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
          Join our mailing list and get the latest Quasmo news, insights, updates, 
          and exclusive articles delivered to your inbox.
        </p>

        {/* Input + Button */}
        <div className="flex justify-center items-center gap-2 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="
              w-full md:w-[350px] py-3 px-4 rounded-md
              text-gray-800 outline-none
              bg-white placeholder-gray-400
            "
          />
          <button
            className="
              bg-white text-[#316CE6] font-semibold
              px-5 py-3 rounded-md shadow-md
              hover:bg-gray-100 transition
            "
          >
            SUBSCRIBE
          </button>
        </div>

      </div>
    </section>
  );
}
