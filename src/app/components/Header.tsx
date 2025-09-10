"use client";

import { useState } from "react";

const categories = [
  { id: "home", label: "Accueil" },
  { id: "features", label: "Fonctionnalités" },
  { id: "products", label: "Produits" },
  { id: "app", label: "App" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("home");

  const scrollToSection = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white border-b border-black/[.08] sticky top-0 z-50">
      <div className="flex items-center justify-between py-4 px-6 sm:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">EduQuiet</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center space-x-8">
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
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#6c5ce7] transition-colors">
              Connexion
            </button>
            <button className="bg-[#6c5ce7] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Demander une démo
            </button>
          </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden pb-4 px-6">
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`text-xs font-medium whitespace-nowrap px-3 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#6c5ce7] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
      </div>
    </header>
  );
}
