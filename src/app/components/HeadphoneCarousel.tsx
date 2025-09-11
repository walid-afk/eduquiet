"use client";

import { useState } from "react";

interface Headphone {
  id: string;
  teacherName: string;
  teacherEmail: string;
  school: string;
  batteryLevel: number;
  isActive: boolean;
  lastUsed: string;
  totalUsageHours: number;
  averageDb: number;
  environment: string;
  status: 'online' | 'offline' | 'charging' | 'error';
  image: string;
}

interface HeadphoneCarouselProps {
  headphones: Headphone[];
}

export default function HeadphoneCarousel({ headphones }: HeadphoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === headphones.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? headphones.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-gray-500';
      case 'charging':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getBatteryColor = (level: number) => {
    if (level < 20) return 'text-red-600';
    if (level < 50) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getDbColor = (db: number) => {
    if (db > 70) return 'text-red-600';
    if (db > 60) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carrousel Container */}
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Slide */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {headphones.map((headphone) => (
            <div key={headphone.id} className="w-full flex-shrink-0">
              <div className="flex flex-col lg:flex-row items-center p-8 lg:p-12">
                {/* Image du casque */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-8 lg:mb-0 lg:mr-12">
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-violet-200 rounded-2xl flex items-center justify-center">
                    {/* Placeholder pour l'image du casque */}
                    <div className="text-6xl lg:text-8xl">🎧</div>
                    {/* Indicateur de statut */}
                    <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${getStatusColor(headphone.status)}`}></div>
                  </div>
                </div>

                {/* Informations du casque */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {headphone.teacherName}
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Donnée 1 - Batterie */}
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">🔋</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Batterie</p>
                        <p className={`text-2xl font-bold ${getBatteryColor(headphone.batteryLevel)}`}>
                          {headphone.batteryLevel}%
                        </p>
                      </div>
                    </div>

                    {/* Donnée 2 - Usage */}
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">⏱️</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Temps d&apos;usage</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {headphone.totalUsageHours}h
                        </p>
                      </div>
                    </div>

                    {/* Donnée 3 - dB moyen */}
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">dB moyen</p>
                        <p className={`text-2xl font-bold ${getDbColor(headphone.averageDb)}`}>
                          {headphone.averageDb} dB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 btn-hover-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 btn-hover-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {headphones.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 btn-hover-scale ${
              index === currentIndex 
                ? 'bg-purple-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Informations supplémentaires */}
      <div className="text-center mt-6">
        <p className="text-gray-600">
          {currentIndex + 1} sur {headphones.length} casques
        </p>
      </div>
    </div>
  );
}
