type Card = {
  name: string;
  color: string;
  notes: string;
};

const cards: Card[] = [
  { name: "valerian", color: "#f5a623", notes: "calme et récupération" },
  { name: "passiflora", color: "#6c5ce7", notes: "focus et créativité" },
  { name: "ashwagandha", color: "#ff6b6b", notes: "énergie douce" },
];

export default function ProductCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {cards.map((c) => (
        <article
          key={c.name}
          className="rounded-xl overflow-hidden border border-black/[.08] dark:border-white/[.12] bg-white/5"
        >
          <div className="p-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold capitalize">{c.name}</h3>
            <span className="text-xs opacity-70">{c.notes}</span>
          </div>
          <div className="h-48" style={{ background: c.color }} />
          <div className="p-4 text-sm opacity-80">
            Sonorités naturelles sélectionnées pour {c.notes}.
          </div>
        </article>
      ))}
    </section>
  );
}


