"use client";

import { useState } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      title: "Plus de burnout pour moi",
      content: "Avant EduQuiet, je rentrais épuisée tous les soirs à cause du bruit constant du lycée et des rues parisiennes. Maintenant, je retrouve ma sérénité. Je ne fais plus partie des 93% de professeurs en burnout.",
      rating: 5,
      reviewer: "Amina T., Professeure de Mathématiques"
    },
    {
      title: "Fini les antidépresseurs",
      content: "J'avais tout essayé : boules quies, méditation, antidépresseurs. Rien ne fonctionnait vraiment. Avec EduQuiet, j'ai enfin trouvé mon cocon de sérénité. Je peux enseigner sans stress.",
      rating: 5,
      reviewer: "Marie L., Professeure de Français"
    },
    {
      title: "Made in France, ça compte",
      content: "Ce qui me plaît avec EduQuiet, c'est que c'est français ! Focal est un leader qu'on connaît. Le casque fait 200g seulement, aussi léger qu'un paquet d'allumettes. Parfait pour mes journées de cours.",
      rating: 5,
      reviewer: "Pierre D., Professeur de Physique"
    },
    {
      title: "200 décibels d'efficacité",
      content: "L'IA filtre vraiment tous les bruits. Sauf si une météorite tombe à côté, je ne remarque rien ! Plus de stress lié au bruit. Je me sens enfin protégée dans mon environnement de travail.",
      rating: 5,
      reviewer: "Sophie R., Professeure d'Histoire"
    },
    {
      title: "Nos professeurs restent",
      content: "Avant, 55% de nos enseignants souhaitaient quitter la profession. Avec EduQuiet, ils retrouvent le goût d'enseigner. L'investissement nous sauve nos équipes pédagogiques.",
      rating: 5,
      reviewer: "Jean-Baptiste K., Proviseur"
    },
    {
      title: "Pour toutes les Amina",
      content: "Nous avons perdu une collègue précieuse. Si EduQuiet avait existé plus tôt, elle serait encore parmi nous. Maintenant, nous protégeons toutes nos enseignantes avec cette technologie.",
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
