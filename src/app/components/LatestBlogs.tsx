import Image from "next/image";

export default function LatestBlogs() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">

          <div>
            <p className="text-[16px] font-[700] leading-[61px] tracking-widest text-black uppercase mb-2 max-md:leading-normal">
              Latest Blogs & Articles
            </p>

            {/* Desktop same, mobile scaled */}
            <h2 className="text-[56px] leading-[50px] md:text-4xl font-[300] max-md:text-2xl max-md:leading-tight">
              Insights from our <br />
              <span className="text-[56px] leading-[65px] font-bold max-md:text-2xl max-md:leading-tight">
                latest blogs
              </span>
            </h2>
          </div>

          <p className="text-gray-400 font-[400] text-[18px] max-w-md mt-4 md:mt-0 max-md:text-sm">
            Stay updated with the latest trends, innovations, and expert insights
            in the manufacturing and industrial sectors
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Blog Card 1 */}
          <div className="group">

            <div className="rounded-[24px] overflow-hidden">
              <Image
                src="/home/Link (1).png"
                alt="Blog 1"
                width={700}
                height={440}
                className="object-cover rounded-[24px] group-hover:scale-105 transition duration-300
                           max-md:w-full max-md:h-[220px]"
              />
            </div>

            <div className="flex justify-between items-center mt-4 gap-3">
              <p className="text-[22px] font-[600] text-gray-700 max-w-[70%] max-md:text-base max-md:max-w-full">
                Sustainable Practices Reducing Waste in Industrial Production
              </p>

              <button className="w-9 h-9 rounded-md bg-blue-600 flex items-center justify-center text-white max-md:w-8 max-md:h-8">
                ↗
              </button>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="group">

            <div className="rounded-[24px] overflow-hidden">
              <Image
                src="/home/Link.png"
                alt="Blog 2"
                width={700}
                height={440}
                className="object-cover rounded-[24px] group-hover:scale-105 transition duration-300
                           max-md:w-full max-md:h-[220px]"
              />
            </div>

            <div className="flex justify-between items-center mt-4 gap-3">
              <p className="text-[22px] font-[600] text-gray-700 max-w-[60%] max-md:text-base max-md:max-w-full">
                Advanced Robotics Revolutionizing Industrial Workflows
              </p>

              <button className="w-9 h-9 rounded-md bg-blue-600 flex items-center justify-center text-white max-md:w-8 max-md:h-8">
                ↗
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
