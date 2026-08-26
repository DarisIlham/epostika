import { useEffect, useState } from "react";

import ArtworkShowcase from "../../components/ArtworkShowcase.jsx";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (filename) => `${imageBaseUrl}/images/artistik2/${filename}`;

const artworks = [
  {
    id: "tas-a",
    title: "Eclipse",
    collection: "Tas",

    image: {
      src: imageUrl("Eclipse.webp"),
      alt: "Tas resin A",
    },

    descriptionLead:
      "Cahaya dan gelap tak pernah benar-benar berpisah; seperti gerhana, cahaya hanya bersembunyi di balik bayang, bukan lenyap.",

    description:
      "Manusia pun demikian, di balik yang tampak, tersimpan singularitas, ruang terdalam segala riuh terhisap. Gelap bukan akhir dari cahaya, melainkan jeda tempat ia menetap, sebelum kembali menyala dalam senyap.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "tas-b",
    title: "Kelana",
    collection: "Tas",

    image: {
      src: imageUrl("Kelana.webp"),
      alt: "Tas resin B",
    },

    descriptionLead:
      "Hidup selalu menemukan jalannya sendiri tanpa pernah benar-benar kehilangan jejak dari mana ia bermula.",

    description:
      "Pergi bukan berarti melupakan asal dan berubah bukan berarti kehilangan diri. Sebab sejauh apa pun perjalanan membawa kita, selalu ada sesuatu yang tetap mengalir dari tempat kita pernah berasal.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    priceImageTarget: "Asmara.webp",
  },
  {
    id: "tas-c",
    title: "Asmara",
    collection: "Tas",

    image: {
      src: imageUrl("Asmara.webp"),
      alt: "Tas resin C",
    },

    descriptionLead:
      "Ada perasaan yang tidak datang dengan gaduh. Ia tumbuh perlahan, melewati waktu, lalu menetap tanpa banyak suara.",

    description:
      "Segala yang pernah dilalui tidak menjadi sesuatu yang harus dilupakan, melainkan bagian yang membuatnya semakin dalam. Barangkali kasih memang demikian, tumbuh tanpa tergesa, tetapi meninggalkan jejak yang sulit hilang.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "tas-d",
    title: "Wening",
    collection: "Tas",

    image: {
      src: imageUrl("Wening_.webp"),
      alt: "Tas resin D",
    },

    descriptionLead:
      "Tidak semua kepingan harus serupa untuk menjadi utuh. Ada yang datang membawa bentuknya sendiri, lalu menemukan tempat di antara yang lainnya.",

    description:
      "Ketika perbedaan tidak lagi dipaksa untuk serupa, sesuatu yang lebih indah tumbuh di antaranya. Sebab keutuhan bukan tentang menjadi satu, melainkan tentang tahu bagaimana saling melengkapi.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    priceImageTarget: "Asmara.webp",
  },
  {
    id: "tas-e",
    title: "Jelaga",
    collection: "Tas",

    image: {
      src: imageUrl("Jelaga.webp"),
      alt: "Tas resin E",
    },

    descriptionLead:
      "Tidak semua kepingan harus serupa untuk menjadi utuh. Ada yang datang membawa bentuknya sendiri, lalu menemukan tempat di antara yang lainnya.",

    description:
      "Ketika perbedaan tidak lagi dipaksa untuk serupa, sesuatu yang lebih indah tumbuh di antaranya. Sebab keutuhan bukan tentang menjadi satu, melainkan tentang tahu bagaimana saling melengkapi.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    priceImageTarget: "Asmara.webp",
  },
];

function Artistik2() {
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
            Tas
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

export default Artistik2;
