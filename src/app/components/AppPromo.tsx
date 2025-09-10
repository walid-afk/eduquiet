import Image from "next/image";

export default function AppPromo() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-[1fr_320px] items-center gap-8">
      <div className="space-y-3">
        <h2 className="text-4xl sm:text-5xl font-semibold">app</h2>
        <p className="opacity-80 max-w-[70ch]">
          Tableau de bord pour les professeurs et les directions: suivez les
          sessions, identifiez les sons les plus efficaces et observez les
          progrès semaine après semaine.
        </p>
      </div>
      <Image 
        src="/assets/app-phone.svg" 
        alt="App" 
        width={320}
        height={360}
        className="h-[360px] w-auto rounded-xl border border-black/[.08] dark:border-white/[.12] bg-[#0b0b0b]" 
      />
    </section>
  );
}


