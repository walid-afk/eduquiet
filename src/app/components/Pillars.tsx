export default function Pillars() {
  const pillars = [
    { title: "plants", text: "sons naturels et ambiances bénéfiques" },
    { title: "people", text: "bien-être et efficacité des professeurs" },
    { title: "planet", text: "design durable et production locale" },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {pillars.map((p) => (
        <div key={p.title} className="space-y-2">
          <h3 className="text-3xl font-semibold">{p.title}</h3>
          <p className="opacity-80">{p.text}</p>
        </div>
      ))}
    </section>
  );
}


