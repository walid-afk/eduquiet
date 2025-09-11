"use client";

import { useState, useEffect } from "react";

const categories = [
  { id: "home", label: "Accueil" },
 
];

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const scrollToSection = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMobileMenuOpen(false);
    
    // Si on est sur la page d'accueil, faire un scroll vers la section
    if (window.location.pathname === '/') {
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, rediriger vers la page d'accueil
      window.location.href = `/#${categoryId}`;
    }
  };

  const handleLogin = () => {
    if (isAuthenticated) {
      // Si connecté, aller au dashboard
      window.location.href = '/dashboard';
    } else {
      // Sinon, aller à la page de connexion
      window.location.href = '/login';
    }
  };

  const handleDemoRequest = () => {
    // Scroll vers la section contact form
    scrollToSection('contact-form');
  };

  return (
    <header className="bg-white border-b border-black/[.08] sticky top-0 z-50">
      <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="text-lg sm:text-xl font-semibold text-[#6c5ce7] hover:text-[#5a4fcf] transition-colors btn-hover-scale"
            >
              EduQuiet
            </button>
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
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#6c5ce7] transition-colors btn-hover-scale"
            >
              {isAuthenticated ? 'Dashboard' : 'Connexion'}
            </button>
            <button 
              onClick={handleDemoRequest}
              className="bg-[#6c5ce7] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity min-h-[44px] flex items-center btn-hover-lift"
            >
              <span className="hidden sm:inline">Demander une démo</span>
              <span className="sm:hidden">Démo</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center btn-hover-bounce"
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
                className="w-full text-left px-4 py-4 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-100 transition-colors min-h-[48px] flex items-center btn-hover-scale"
              >
                {isAuthenticated ? 'Dashboard' : 'Connexion'}
              </button>
              <button 
                onClick={handleDemoRequest}
                className="w-full bg-[#6c5ce7] text-white px-4 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center btn-hover-lift"
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
