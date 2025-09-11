"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import HeadphoneCarousel from "../components/HeadphoneCarousel";

// Types pour les données des casques
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

// Données simulées - plus cohérentes
const mockHeadphones: Headphone[] = [
  {
    id: "HP001",
    teacherName: "Marie Dubois",
    teacherEmail: "marie.dubois@ecole.fr",
    school: "École Primaire Victor Hugo",
    batteryLevel: 85,
    isActive: true,
    lastUsed: "2024-01-15T14:30:00Z",
    totalUsageHours: 6.5,
    averageDb: 65,
    environment: "Classe CP",
    status: 'online',
    image: "/assets/headphone-1.jpg"
  },
  {
    id: "HP002",
    teacherName: "Jean Martin",
    teacherEmail: "jean.martin@ecole.fr",
    school: "École Primaire Victor Hugo",
    batteryLevel: 42,
    isActive: false,
    lastUsed: "2024-01-15T12:15:00Z",
    totalUsageHours: 4.2,
    averageDb: 72,
    environment: "Classe CE1",
    status: 'charging',
    image: "/assets/headphone-2.jpg"
  },
  {
    id: "HP003",
    teacherName: "Sophie Leroy",
    teacherEmail: "sophie.leroy@ecole.fr",
    school: "École Primaire Jules Ferry",
    batteryLevel: 95,
    isActive: true,
    lastUsed: "2024-01-15T15:45:00Z",
    totalUsageHours: 7.8,
    averageDb: 58,
    environment: "Classe CE2",
    status: 'online',
    image: "/assets/headphone-3.jpg"
  },
  {
    id: "HP004",
    teacherName: "Pierre Moreau",
    teacherEmail: "pierre.moreau@ecole.fr",
    school: "École Primaire Jules Ferry",
    batteryLevel: 12,
    isActive: false,
    lastUsed: "2024-01-15T10:20:00Z",
    totalUsageHours: 2.1,
    averageDb: 68,
    environment: "Classe CM1",
    status: 'offline',
    image: "/assets/headphone-4.jpg"
  },
  {
    id: "HP005",
    teacherName: "Claire Bernard",
    teacherEmail: "claire.bernard@ecole.fr",
    school: "École Primaire Victor Hugo",
    batteryLevel: 78,
    isActive: true,
    lastUsed: "2024-01-15T16:00:00Z",
    totalUsageHours: 5.3,
    averageDb: 61,
    environment: "Classe CM2",
    status: 'online',
    image: "/assets/headphone-5.jpg"
  }
];

export default function DashboardPage() {
  const router = useRouter();
  const [headphones] = useState<Headphone[]>(mockHeadphones);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Simuler le chargement des données
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement du dashboard...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header du Dashboard */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Informations du directeur et de l'école */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex-1 max-w-md">
              <div className="text-left">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Directeur : Jean-Pierre Martin
                </h2>
                <div className="text-gray-700 space-y-1">
                  <p className="font-medium">École Primaire Victor Hugo</p>
                  <p>123 Avenue de la République</p>
                  <p>75011 Paris</p>
                </div>
              </div>
            </div>

            {/* Titre et bouton */}
            <div className="text-center lg:text-right">
              <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 mb-4">
                Bienvenue Admin
              </h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors btn-hover-shake"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>

        {/* Carrousel des casques */}
        <HeadphoneCarousel headphones={headphones} />

        {/* Tableau d'utilisation hebdomadaire */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Temps d&apos;utilisation moyen par jour
            </h2>
            
            <div className="space-y-4">
              {[
                { day: 'Lundi', hours: 5.2, color: 'bg-blue-500' },
                { day: 'Mardi', hours: 6.8, color: 'bg-green-500' },
                { day: 'Mercredi', hours: 4.1, color: 'bg-yellow-500' },
                { day: 'Jeudi', hours: 7.3, color: 'bg-purple-500' },
                { day: 'Vendredi', hours: 5.9, color: 'bg-indigo-500' },
                { day: 'Samedi', hours: 1.2, color: 'bg-gray-400' },
                { day: 'Dimanche', hours: 0.8, color: 'bg-gray-300' }
              ].map((data, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-20 text-sm font-medium text-gray-700">
                    {data.day}
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full ${data.color} transition-all duration-500`}
                        style={{ width: `${(data.hours / 8) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-16 text-sm font-bold text-gray-900 text-right">
                    {data.hours}h
                  </div>
                </div>
              ))}
            </div>

            {/* Statistiques rapides */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round((5.2 + 6.8 + 4.1 + 7.3 + 5.9 + 1.2 + 0.8) * 10) / 10}h
                  </div>
                  <div className="text-sm text-gray-600">Total cette semaine</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {Math.round(((5.2 + 6.8 + 4.1 + 7.3 + 5.9 + 1.2 + 0.8) / 7) * 10) / 10}h
                  </div>
                  <div className="text-sm text-gray-600">Moyenne par jour</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(((5.2 + 6.8 + 4.1 + 7.3 + 5.9) / 5) * 10) / 10}h
                  </div>
                  <div className="text-sm text-gray-600">Moyenne jours ouvrés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
