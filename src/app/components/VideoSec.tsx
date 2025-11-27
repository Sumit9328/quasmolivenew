
import { Play } from "lucide-react";
import Image from "next/image";

export function VideoHeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src="/assets/microscope-video-bg.jpg"
        alt="Microscope Video"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <button className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur hover:scale-110 transition">
            <Play className="w-7 h-7" />
          </button>

          <h3 className="text-2xl md:text-3xl font-semibold max-w-3xl">
            SP-22B | Pathological Binocular Microscope | Magnification: 40x to
            1000x | Quadruple Nosepiece
          </h3>
        </div>
      </div>
    </section>
  );
}