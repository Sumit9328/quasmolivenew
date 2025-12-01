import { Play } from "lucide-react";
import Image from "next/image";

export function VideoHeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden max-md:h-[280px]">
      <Image
        src="/assets/microscope-video-bg.jpg"
        alt="Microscope Video"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-6">

          {/* Play Button - desktop same, mobile smaller */}
          <button className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur hover:scale-110 transition max-md:w-12 max-md:h-12">
            <Play className="w-7 h-7 max-md:w-5 max-md:h-5" />
          </button>

          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-semibold max-w-3xl max-md:text-sm max-md:leading-snug">
            SP-22B | Pathological Binocular Microscope | Magnification: 40x to
            1000x | Quadruple Nosepiece
          </h3>

        </div>
      </div>
    </section>
  );
}
