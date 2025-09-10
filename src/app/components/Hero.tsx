"use client";

import AnnouncementBar from "./AnnouncementBar";
import ModelViewer from "./ModelViewer";
import ScienceSection from "./ScienceSection";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col gap-0">
      {/* Hero Image - Full Width */}
      <div className="w-full h-[35vh] sm:h-[45vh] md:h-[50vh] relative overflow-visible">
        <Image
          src="/assets/teacher-hero.jpg"
          alt="Professeur confiant avec EduQuiet"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Travailler dans le calme,<br />
              partout.
            </h1>
            
          </div>
        </div>
      </div>
      <AnnouncementBar />
      <ScienceSection />
      <ModelViewer />
      
    </section>
  );
}


