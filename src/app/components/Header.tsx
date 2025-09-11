"use client";

import { useState } from "react";

const categories = [
  { id: "home", label: "Accueil" },
 
];

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogin = () => {
    // Redirection vers une page de connexion ou ouverture d'un modal
    window.open('/login', '_blank');
  };

  const handleDemoRequest = () => {
    // Scroll vers la section contact ou ouverture d'un modal de demande de démo
    scrollToSection('contact');
  };

  return (
    <header className="bg-white border-b border-black/[.08] sticky top-0 z-50">
      <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl font-semibold text-[#6c5ce7]">EduQuiet</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center space-x-6 lg:space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`text-sm font-medium transition-colors hover:text-[#6c5ce7] ${
                  activeCategory === category.id
                    ? "text-[#6c5ce7]"
                    : "text-gray-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={handleLogin}
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#6c5ce7] transition-colors"
            >
              Connexion
            </button>
            <button 
              onClick={handleDemoRequest}
              className="bg-[#6c5ce7] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity min-h-[44px] flex items-center"
            >
              <span className="hidden sm:inline">Demander une démo</span>
              <span className="sm:hidden">Démo</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`w-full text-left px-4 py-4 rounded-lg text-base font-medium transition-colors min-h-[48px] flex items-center ${
                  activeCategory === category.id
                    ? "bg-[#6c5ce7] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-1">
              <button 
                onClick={handleLogin}
                className="w-full text-left px-4 py-4 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-100 transition-colors min-h-[48px] flex items-center"
              >
                Connexion
              </button>
              <button 
                onClick={handleDemoRequest}
                className="w-full bg-[#6c5ce7] text-white px-4 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center"
              >
                Demander une démo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
