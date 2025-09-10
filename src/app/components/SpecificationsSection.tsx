"use client";

import { useState } from "react";

export default function SpecificationsSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      left: {
        title: "280g",
        description: "Poids ultra-léger optimisé pour le port prolongé en classe. Confort exceptionnel même lors de journées de 8h d'enseignement."
      },
      middle: {
        title: "Focal",
        description: "Technologie audio française de pointe. Suppression de bruit active avec algorithmes spécialement développés pour les environnements éducatifs."
      },
      right: {
        title: "Design",
        description: "Design épuré et professionnel. Couleurs sobres s'intégrant parfaitement dans l'environnement scolaire sans distraction."
      }
    },
    technical: {
      left: {
        title: "Audio",
        description: "Suppression de bruit active jusqu'à -35dB. Qualité audio premium avec sons relaxants intégrés pour améliorer la concentration."
      },
      middle: {
        title: "Batterie",
        description: "Autonomie de 30 heures en suppression de bruit. Charge rapide USB-C : 3h d'autonomie en 15 minutes de charge."
      },
      right: {
        title: "Connexion",
        description: "Bluetooth 5.0 et connexion filaire. Compatible avec tous les équipements pédagogiques (tablettes, ordinateurs, smartphones)."
      }
    },
    size: {
      left: {
        title: "Portabilité",
        description: "Pliable et transportable dans un étui compact. Parfait pour les enseignants qui changent de salle de classe."
      },
      middle: {
        title: "Ergonomie",
        description: "Coussinets mémoire de forme pour un confort optimal. Ajustement automatique de la pression pour éviter les maux de tête."
      },
      right: {
        title: "Durabilité",
        description: "Construction robuste résistant aux chutes. Garantie 3 ans avec SAV réactif dans toute la France."
      }
    }
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <section className="bg-black text-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Navigation Bar */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                activeTab === "overview" 
                  ? "bg-green-400 text-black" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab("technical")}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                activeTab === "technical" 
                  ? "bg-green-400 text-black" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Technical
            </button>
            <button 
              onClick={() => setActiveTab("size")}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                activeTab === "size" 
                  ? "bg-green-400 text-black" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Size
            </button>
          </div>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              {currentContent.left.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
              {currentContent.left.description}
            </p>
          </div>

          {/* Middle Column */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              {currentContent.middle.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
              {currentContent.middle.description}
            </p>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              {currentContent.right.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
              {currentContent.right.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
