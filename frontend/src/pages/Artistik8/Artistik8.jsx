import { useEffect, useState } from "react";

import ArtworkShowcase from "../../components/ArtworkShowcase.jsx";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (filename) => `${imageBaseUrl}/images/artistik8/${filename}`;

const artworks = [
  {
    id: "cermin-a",
    title: "Rinengga",
    collection: "Cermin",

    image: {
      src: imageUrl("Rinengga.webp"),
      alt: "Cermin resin A",
    },

    descriptionLead:
      "Ada sesuatu yang indah dari kepingan yang tidak sempurna ketika dipertemukan dengan cara yang tepat.",

    description:
      "Barangkali keindahan memang tidak selalu lahir dari sesuatu yang sempurna sejak awal. Kadang, ia tumbuh dari apa-apa yang pernah tercerai dan kemudian dirangkai kembali dengan kehati-hatian.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "cermin-b",
    title: "Waskita",
    collection: "Cermin",

    image: {
      src: imageUrl("Waskita.webp"),
      alt: "Cermin resin B",
    },

    descriptionLead:
      "Yang tampak di permukaan tidak selalu menjadi seluruh cerita. Ada pantulan yang mengembalikan wajah, tetapi ada pula kedalaman yang mengajak mata melihat lebih jauh.",

    description:
      "Semakin lama dipandang, semakin banyak hal yang perlahan terbaca. Ada kalanya kita perlu diam agar sesuatu berkenan menampakkan maknanya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "cermin-c",
    title: "Rupa Laras",
    collection: "Cermin",

    image: {
      src: imageUrl("Rupa Laras.webp"),
      alt: "Cermin resin C",
    },

    descriptionLead:
      "Ada pertemuan yang tidak datang untuk saling menenggelamkan, melainkan untuk membuat satu sama lain semakin terlihat.",

    description:
      "Ia seperti senja yang tidak pernah benar-benar memilih antara siang dan malam, melainkan sebuah peralihan yang justru menemukan keindahannya sendiri. Tidak semua yang berbeda harus dipertentangkan. Terkadang, dalam pertemuan itulah cahaya menemukan bentuknya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
];

function Artistik8() {
  const [pageEntered, setPageEntered] = useState(false);
  const [activeArtworkId, setActiveArtworkId] = useState(artworks[0].id);

  // Animasi headline
  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setPageEntered(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Mengubah tombol aktif berdasarkan panel dalam viewport
  useEffect(() => {
    const sections = document.querySelectorAll("[data-artwork-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveArtworkId(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  function handleNavigate(artworkId) {
    const target = document.getElementById(artworkId);

    if (!target) {
      return;
    }

    setActiveArtworkId(artworkId);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <main className="min-h-svh border-t border-stone-950 bg-[#fdfcf8] px-4 py-8 text-stone-950 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Headline */}
        <header
          className={`relative mx-auto flex min-h-20 w-full max-w-xl items-center justify-center overflow-hidden rounded-[2rem] border border-[#315c59]/10 bg-white/75 px-6 py-5 text-center shadow-[0_16px_45px_rgba(39,72,70,0.10)] backdrop-blur-sm transition-all duration-700 ease-out before:absolute before:inset-x-10 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#168494]/50 before:to-transparent after:absolute after:-right-8 after:-top-10 after:size-24 after:rounded-full after:bg-[#168494]/10 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            pageEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-[35vh] opacity-0"
          }`}
        >
          <h1 className="relative z-10 font-cronde text-3xl font-medium text-[#254846] sm:text-4xl md:text-5xl">
            Cermin
          </h1>
        </header>

        {/* Panel karya */}
        <section
          className={`mt-14 space-y-24 transition-all delay-300 duration-700 sm:mt-20 sm:space-y-32 lg:mt-24 lg:space-y-40 ${
            pageEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {artworks.map((artwork, index) => (
            <ArtworkShowcase
              key={artwork.id}
              artwork={artwork}
              navigationItems={artworks}
              activeArtworkId={activeArtworkId}
              onNavigate={handleNavigate}
              reverse={index % 2 === 1}
              priority={index === 0}
              showCollectionLabel={index > 0}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Artistik8;
