"use client";

import AnnouncementBar from "./AnnouncementBar";
import ModelViewer from "./ModelViewer";
import ScienceSection from "./ScienceSection";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col gap-0">
      {/* Hero Image - Full Width */}
      <div className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] relative overflow-hidden">
        <Image
          src="/assets/teacher-hero.jpg"
          alt="Professeur confiant avec EduQuiet"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight">
              Travailler dans le calme,<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>partout.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              La technologie audio française qui révolutionne l&apos;éducation
            </p>
          </div>
        </div>
      </div>
      <AnnouncementBar />
      <ScienceSection />
      <ModelViewer />
      
    </section>
  );
}


