"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    alert("Merci pour votre inscription à la newsletter !");
    setEmail("");
  };

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Colonne 1 - Produits */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Produits</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Concentré Focus</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Boost Créativité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Régulateur Stress</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Kit Test</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Carte Cadeau</a></li>
            </ul>
          </div>

          {/* Colonne 2 - Entreprise */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Entreprise</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Notre Science</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Légal */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Légal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center text-sm sm:text-base">
                  Carrières
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Confidentialité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Politique Retours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">CGU</a></li>
            </ul>
          </div>

          {/* Colonne 4 - Newsletter et Réseaux sociaux */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Inscrivez-vous à notre newsletter pour recevoir 10% de réduction sur votre première commande.
            </p>
            
            {/* Formulaire newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-4 sm:mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse email"
                  className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>

            {/* LinkedIn uniquement */}
            <div className="flex gap-2 sm:gap-3">
              <a 
                href="linkedin://profile/walid-bouzidane-600720256"
                onClick={(e) => {
                  // Fallback vers le web si l'app n'est pas installée
                  const appUrl = "linkedin://profile/walid-bouzidane-600720256";
                  const webUrl = "https://www.linkedin.com/in/walid-bouzidane-600720256/";
                  
                  // Essayer d'ouvrir l'app
                  window.location.href = appUrl;
                  
                  // Fallback après un délai si l'app ne s'ouvre pas
                  setTimeout(() => {
                    window.open(webUrl, '_blank');
                  }, 1000);
                  
                  e.preventDefault();
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} EduQuiet. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
