"use client";

export default function ScienceSection() {
  return (
    <section className="bg-black py-16 sm:py-24 border-0 outline-none">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 border-0 outline-none">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border-0 outline-none">
          {/* Left Section - Main Text */}
          <div className="flex-1 lg:max-w-md border-0 outline-none text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight border-0 outline-none">
              Travaillez dans le calme.
              <br />
              EduQuiet s&apos;occupe
              <br />
              du reste.
            </h2>
          </div>

          {/* Middle Section - Abstract Shape */}
          <div className="flex-shrink-0 w-24 h-36 sm:w-32 sm:h-48 lg:w-40 lg:h-56 border-0 outline-none order-first lg:order-none">
            <svg
              viewBox="0 0 200 300"
              className="w-full h-full border-0 outline-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 50 Q50 20 80 50 Q110 80 140 50 Q170 20 200 50 Q200 100 180 120 Q160 140 140 160 Q120 180 100 200 Q80 220 60 240 Q40 260 20 280"
                fill="#93c5fd"
                stroke="none"
              />
            </svg>
          </div>

          {/* Right Section - Description and Button */}
          <div className="flex-1 lg:max-w-md border-0 outline-none text-center lg:text-left">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 border-0 outline-none">
              Nous avons développé notre technologie audio de suppression de bruit 
              en partenariat avec Focal, leader français du casque audio. 
              Nos ingénieurs ont optimisé l&apos;algorithme pour les environnements 
              éducatifs, réduisant le stress des enseignants et améliorant 
              leur bien-être au travail.
            </p>
            <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200 border-0 outline-none text-sm sm:text-base">
              Notre Technologie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
