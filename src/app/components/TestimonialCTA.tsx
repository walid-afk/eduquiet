export default function TestimonialCTA() {
  return (
    <section className="flex flex-col items-start gap-6">
      <h2 className="text-4xl sm:text-5xl font-semibold">des profs plus sereins</h2>
      <p className="opacity-80 max-w-[70ch] text-sm sm:text-base">
        &ldquo;En moins d&apos;une heure j&apos;ai ressenti un apaisement que je n&apos;avais jamais
        connu. Je suis totalement convaincu par l&apos;impact sur ma concentration.&rdquo;
      </p>
      <div className="flex gap-3">
        <a
          href="#contact"
          className="rounded-full border border-black/[.12] dark:border-white/[.18] px-5 py-2 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]"
        >
          demander une démo
        </a>
        <a
          href="#contact"
          className="rounded-full border border-transparent bg-[#6c5ce7] text-white px-5 py-2 text-sm hover:opacity-90"
        >
          parler à un expert
        </a>
      </div>
    </section>
  );
}


