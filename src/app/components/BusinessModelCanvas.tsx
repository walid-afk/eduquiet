type Column = { title: string; items: string[] };

const data: Column[] = [
  {
    title: "1. Segments de marché",
    items: [
      "Professeurs (Faculté, Collège, Lycée)",
      "Directeurs en difficulté de remplacement",
      "Directeurs impactés par les arrêts maladie",
    ],
  },
  {
    title: "2. Propositions de valeur",
    items: [
      "Travailler dans le calme partout",
      "Se déconnecter d’un environnement bruyant",
      "Sons relaxants qui boostent les capacités cognitives",
      "Réduction des bruits inutiles",
      "Moins d’arrêt maladie (gain économique)",
    ],
  },
  {
    title: "3. Canaux",
    items: [
      "B2B – Écoles privées",
      "Réseaux sociaux, Presse",
      "Site web, Salons de l’éducation",
    ],
  },
  {
    title: "4. Relations clients",
    items: [
      "Réduction sur achat ou leasing/location",
      "Suivi de l’amélioration psychologique",
      "SAV réactif, garanties, newsletter bien-être",
    ],
  },
  {
    title: "5. Flux de revenus",
    items: [
      "Ventes ou location / leasing",
      "Extensions de garanties",
      "Subventions de l’État",
    ],
  },
  {
    title: "6. Ressources clés",
    items: [
      "Technologie audio de suppression de bruit",
      "Design épuré",
      "Ingénieurs informatiques",
      "Usine en France (Focal)",
    ],
  },
  {
    title: "7. Activités clés",
    items: ["Marketing & acquisition", "R&D pour réduire les coûts"],
  },
  {
    title: "8. Partenaires clés",
    items: [
      "Ministère de l’Éducation, Collectivités et Régions",
      "Directeurs, Associations de professeurs",
      "Prestataire de paiement B2B (Qonto)",
      "Prestataire de livraison",
      "Focal (fabrication de casque)",
    ],
  },
  {
    title: "9. Structure des coûts",
    items: [
      "Production des casques, SAV",
      "Marketing & acquisition client",
      "Aspect légal & juridique",
      "R&D, Optimisation de la production",
    ],
  },
];

export default function BusinessModelCanvas() {
  return (
    <section id="bmc" className="flex flex-col gap-6">
      <h2 className="text-3xl sm:text-4xl font-semibold">Business Model Canvas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((col) => (
          <div
            key={col.title}
            className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-4 bg-white/5"
          >
            <h3 className="font-semibold mb-2">{col.title}</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
              {col.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


