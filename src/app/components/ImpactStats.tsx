export default function ImpactStats() {
  const stats = [
    {
      value: "60+",
      title: "Years of Expertise",
      desc: "Since 1961 delivering reliability & innovation.",
    },
    {
      value: "100%",
      title: "In-House Manufacturing",
      desc: "From lens crafting to CNC machining.",
    },
    {
      value: "30+",
      title: "Product Categories",
      desc: "Pathology, metallurgy, digital imaging & more.",
    },
    {
      value: "5,000+",
      title: "Institutions Served",
      desc: "IITs, AIIMS, leading diagnostic labs and dealers.",
    },
    {
      value: "25+",
      title: "Countries",
      desc: "Export to 25+ research and healthcare institutions.",
    },
  ];

  return (
    <section className="w-full bg-[#F4F4FF] py-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[49.9px] pp-300 leading-[54px]">Our Impact in Number</p>
        <p className="text-[39px] font-bold mt-2 pp-700">
          Trusted by Innovators. Built for Discovery.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="px-4">
              <p className="text-[42px] pp-600 text-[#316CE6]">{s.value}</p>
              <h4 className="pp-700 text-[16px] mt-2">{s.title}</h4>
              <p className="text-sm text-gray-500 mt-2 inter">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
