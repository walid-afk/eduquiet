export default function FeatureGrid() {
  const features = [
    {
      title: "réduction des bruits",
      text:
        "Technologie audio qui filtre les sons inutiles pour un environnement d’apprentissage serein.",
    },
    {
      title: "connected",
      text:
        "App de suivi: réglages personnalisés, statistiques et routines efficaces.",
    },
    {
      title: "design épuré & portable",
      text:
        "Léger et robuste, pensé pour passer d’une salle à l’autre toute la journée.",
    },
    {
      title: "garanties & SAV",
      text: "Accompagnement réactif et extensions possibles pour vos établissements.",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
      {features.map((f) => (
        <div key={f.title} className="space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{f.title}</h3>
          <p className="opacity-70 leading-relaxed text-sm sm:text-base">{f.text}</p>
        </div>
      ))}
    </section>
  );
}


