export default function FeatureGrid() {
  const features = [
    {
      title: "Cocon de sérénité",
      text:
        "Notre IA filtre tous les bruits extérieurs. Plus de stress lié au bruit constant des lycées, des rues parisiennes ou de la maison.",
    },
    {
      title: "Made in France",
      text:
        "Nous sommes français et fiers de l'être. Notre casque est conçu en partenariat avec Focal, leader français des casques audio.",
    },
    {
      title: "Ultra-léger",
      text:
        "200g seulement. Aussi léger qu'un paquet d'allumettes. Contrairement aux gros casques de chantier, le nôtre est discret et confortable.",
    },
    {
      title: "Efficacité garantie",
      text: "Jusqu'à 200 décibels d'efficacité. Sauf si une météorite tombe à côté de vous, vous ne remarquerez rien.",
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


