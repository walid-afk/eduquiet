"use client";

import AnnouncementBar from "./AnnouncementBar";
import ModelViewer from "./ModelViewer";
import ScienceSection from "./ScienceSection";

export default function Hero() {
  return (
    <section className="flex flex-col gap-0">
      {/* Hero Image - Full Width with AnnouncementBar taking full screen height */}
      <div className="w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-80px)] relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-70"
        >
          <source src="/assets/1658-148614500_small.mp4" type="video/mp4" />
        </video>
        {/* Overlay sombre avec dégradé pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        
        {/* Effet de vignette pour diriger le regard */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
        
        {/* Effet de particules subtil - responsive */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-300/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-violet-300/25 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center text-white max-w-4xl relative z-10 w-full">
            {/* Overlay derrière le texte pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-black/40 rounded-xl sm:rounded-2xl blur-sm -z-10"></div>
            <div className="relative bg-black/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm mx-2 sm:mx-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight text-shadow-2xl">
                Offrez leur le<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>calme
              </h1>
              
              {/* Bouton CTA avec contraste fort - responsive */}
              <button 
                onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:px-8 rounded-full text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-glow w-full sm:w-auto btn-hover-pulse"
              >
                Découvrir la solution
              </button>
            </div>
          </div>
        </div>
        {/* AnnouncementBar positioned at the bottom of the hero section */}
        <div className="absolute bottom-0 left-0 right-0">
          <AnnouncementBar />
        </div>
      </div>
      <ScienceSection />
      <ModelViewer />
      
    </section>
  );
}


