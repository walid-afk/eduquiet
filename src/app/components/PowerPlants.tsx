export default function PowerPlants() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-4xl sm:text-5xl font-semibold">power plants</h2>
      <p className="opacity-80 max-w-[70ch]">
        Ambiances sonores inspirées de la nature pour favoriser la concentration
        et la relaxation. Bénéfices mesurables dans l&apos;app et routines guidées.
      </p>
      <div className="aspect-[16/9] w-full rounded-xl border border-black/[.08] dark:border-white/[.12] overflow-hidden bg-[#0b0b0b]">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src="/assets/Video - QVEMA 1.mp4" type="video/mp4" />
          <p className="text-white text-center p-8">
            Votre navigateur ne supporte pas la lecture de vidéos HTML5.
            <br />
            <a href="/assets/Video - QVEMA 1.mp4" className="text-blue-400 underline">
              Télécharger la vidéo
            </a>
          </p>
        </video>
      </div>
    </section>
  );
}


