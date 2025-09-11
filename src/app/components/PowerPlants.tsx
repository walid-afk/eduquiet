export default function PowerPlants() {
  return (
    <section className="flex flex-col gap-6 sm:gap-8">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Pour toutes les Amina
        </h2>
       
      </div>
      <div className="aspect-[16/9] w-full rounded-xl border border-black/[.08] dark:border-white/[.12] overflow-hidden bg-[#0b0b0b]">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          playsInline
        >
          <source src="/assets/qvemafinal.mp4" type="video/mp4" />
          <p className="text-white text-center p-4 sm:p-8 text-sm sm:text-base">
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


