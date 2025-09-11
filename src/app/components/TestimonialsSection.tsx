"use client";

import { useState } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      title: "Enfin du calme dans ma classe",
      content: "En tant que professeur de lycée, j'ai toujours eu du mal à me concentrer avec le bruit des élèves. Depuis que j'utilise EduQuiet, je peux enfin préparer mes cours dans le calme, même pendant les récréations. Ma productivité a doublé !",
      rating: 5,
      reviewer: "Marie L., Professeure de Français"
    },
    {
      title: "Moins d'arrêts maladie",
      content: "En tant que directrice d'établissement, j'ai constaté une nette diminution des arrêts maladie de mes enseignants depuis l'installation des casques EduQuiet. L'investissement s'est rentabilisé en 6 mois grâce aux économies réalisées.",
      rating: 5,
      reviewer: "Claire M., Directrice d'école"
    },
    {
      title: "Technologie impressionnante",
      content: "La suppression de bruit est vraiment efficace. Je peux travailler dans mon bureau même quand il y a des travaux dans l'école. Le design est élégant et les sons relaxants m'aident à me concentrer.",
      rating: 5,
      reviewer: "Pierre D., Professeur de Mathématiques"
    },
    {
      title: "Solution parfaite pour Paris",
      content: "Travailler dans le centre de Paris avec tout ce bruit était un vrai défi. EduQuiet m'a permis de retrouver ma sérénité et ma capacité de concentration. Je recommande vivement à tous mes collègues.",
      rating: 5,
      reviewer: "Sophie R., Professeure d'Histoire"
    },
    {
      title: "Investissement rentable",
      content: "Nous avons équipé tout notre établissement avec EduQuiet. Les enseignants sont plus détendus, moins stressés, et nous avons réduit nos coûts liés aux arrêts maladie de 40%. Un excellent retour sur investissement.",
      rating: 5,
      reviewer: "Jean-Baptiste K., Proviseur"
    },
    {
      title: "Label 'Cœur de Profs' mérité",
      content: "Après 3 mois d'utilisation, notre école a obtenu le label 'Cœur de Profs'. Nos enseignants sont plus épanouis et nos résultats scolaires se sont améliorés. EduQuiet a transformé notre environnement de travail.",
      rating: 5,
      reviewer: "Isabelle T., Directrice pédagogique"
    }
  ];

  const nextSlide = () => {
    const maxIndex = window.innerWidth < 640 ? 0 : window.innerWidth < 1024 ? testimonials.length - 2 : testimonials.length - 4;
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    const maxIndex = window.innerWidth < 640 ? 0 : window.innerWidth < 1024 ? testimonials.length - 2 : testimonials.length - 4;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    }
    return 1;
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + getVisibleCount());

  return (
    <section className="bg-[#faf9f8] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 leading-tight">
              Ce que disent nos enseignants et directeurs
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-medium text-gray-700">Excellent</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-600">127 avis d&apos;établissements</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-green-600">Éducation Nationale</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Témoignages d&apos;établissements labellisés &ldquo;Cœur de Profs&rdquo;</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 self-center sm:self-auto">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:bg-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Témoignage précédent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:bg-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Témoignage suivant"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-3 leading-tight">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                  {testimonial.reviewer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
