"use client";

import { useState } from "react";

export default function SpecificationsSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: {
      left: {
        title: "200g",
        description: "Aussi léger qu'un paquet d'allumettes. Quand on pense casque anti-bruit, on pense souvent gros casque de chantier. Au contraire, le nôtre est ultra-léger."
      },
      middle: {
        title: "Focal",
        description: "Leader français des casques audio. Nous sommes français et fiers de l'être. Notre casque est made in France, conçu avec l'expertise de Focal."
      },
      right: {
        title: "200dB",
        description: "Efficacité jusqu'à 200 décibels. Sauf si une météorite tombe à côté de vous, vous ne remarquerez rien. Notre IA filtre tous les bruits."
      }
    },
    technical: {
      left: {
        title: "IA",
        description: "Notre IA analyse les bruits extérieurs et renvoie un signal inverse pour les annuler. Entraînée sur plus d'1 To de sons divers et variés."
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
              Aperçu
            </button>
            <button 
              onClick={() => setActiveTab("technical")}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                activeTab === "technical" 
                  ? "bg-green-400 text-black" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Technique
            </button>
            <button 
              onClick={() => setActiveTab("size")}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                activeTab === "size" 
                  ? "bg-green-400 text-black" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Taille
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
