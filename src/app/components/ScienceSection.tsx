"use client";

export default function ScienceSection() {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Section - Main Text */}
          <div className="flex-1 lg:max-w-md text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Un bijou de technologie.
              <br />
              Made in France,
              <br />
              pour les professeurs.
            </h2>
          </div>

          {/* Middle Section - Abstract Shape */}
          <div className="flex-shrink-0 w-20 h-28 sm:w-24 sm:h-36 lg:w-32 lg:h-48 xl:w-40 xl:h-56 order-1 lg:order-2">
            <svg
              viewBox="0 0 200 300"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 50 Q50 20 80 50 Q110 80 140 50 Q170 20 200 50 Q200 100 180 120 Q160 140 140 160 Q120 180 100 200 Q80 220 60 240 Q40 260 20 280"
                fill="#93c5fd"
                stroke="none"
              />
            </svg>
          </div>

          {/* Right Section - Description */}
          <div className="flex-1 lg:max-w-md text-center lg:text-left order-3">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              Notre IA analyse les bruits extérieurs et renvoie un signal inverse pour les annuler. 
              Entraînée sur plus d&apos;1 To de sons divers, elle filtre tout le bruit. 
              Nous travaillons avec Focal, leader français des casques audio. 
              Cerise sur le gâteau : nous sommes français et fiers de l&apos;être.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
