import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArtworkShowcase from "../../components/ArtworkShowcase.jsx";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (filename) => `${imageBaseUrl}/images/artistik9/${filename}`;

const artworks = [
  {
    id: "aksesoris-a",
    title: "Jagad Bhumi",
    collection: "Aksesoris",

    image: {
      src: imageUrl("Jagad Bhumi.webp"),
      alt: "Aksesoris resin A",
    },

    descriptionLead:
      "Pertemuan antara biru laut dan warna tanah, seperti serpihan kecil dari semesta yang berpijak pada bumi.",

    description:
      "Ia membawa gambaran tentang alam yang luas, tetapi dapat diringkas dalam satu ruang kecil untuk menemani ke mana pun langkah pergi.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    // Jagad Bhumi diarahkan ke Gantungan Kunci (Loka Asmara)
    priceImageTarget: "Loka Asmara.webp",
  },
  {
    id: "aksesoris-b",
    title: "Ranu",
    collection: "Aksesoris",

    image: {
      src: imageUrl("Ranu.webp"),
      alt: "Aksesoris resin B",
    },

    descriptionLead:
      "Seperti tepian yang mempertemukan pasir dan air, Ranj menyimpan jejak kecil dari perjalanan yang pernah singgah.",

    description:
      "Warna, pasir, dan cangkang berpadu menjadi pengingat bahwa sesuatu yang sederhana pun dapat menyimpan cerita, tentang tempat yang pernah didatangi, suasana yang pernah dirasakan, dan kenangan yang ingin dibawa pulang.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    // Ranu diarahkan ke Gantungan Kunci (Loka Asmara)
    priceImageTarget: "Loka Asmara.webp",
  },
  {
    id: "aksesoris-c",
    title: "Rimba",
    collection: "Aksesoris",

    image: {
      src: imageUrl("Rimba.webp"),
      alt: "Aksesoris resin C",
    },

    descriptionLead:
      "Potongan-potongan kayu dengan jejak lingkar usia yang bertemu dalam satu bentuk, seperti rimba yang tumbuh liar tanpa pernah seragam.",

    description:
      "Setiap serat membawa waktunya sendiri, menjadikan ketidakteraturan sebagai bagian dari keindahan.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "aksesoris-d",
    title: "Loka Asmara",
    collection: "Aksesoris",

    image: {
      src: imageUrl("Loka Asmara.webp"),
      alt: "Aksesoris resin D",
    },

    descriptionLead:
      "Sebuah dunia kecil yang dibangun dari rasa: kasih, rindu, dan kenangan yang enggan selesai.",

    description:
      " Di antara pasir, buih, dan cangkang, ada sesuatu yang sederhana namun cukup untuk membuat sebuah perasaan menemukan tempat tinggal.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "aksesoris-e",
    title: "Luruh Meraki",
    collection: "Aksesoris",

    image: {
      src: imageUrl("Luruh Meraki.webp"),
      alt: "Aksesoris resin E",
    },

    descriptionLead:
      "Tentang sesuatu yang dilepaskan dengan segenap hati, lalu dibiarkan menemukan bentuk barunya sendiri.",

    description:
      "Sebab tidak semua yang luruh berarti hilang; beberapa meninggalkan jejak yang tetap hidup dalam sesuatu yang lain.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "aksesoris-f",
    title: "Bongkah Wana",
    collection: "Aksesoris",

    image: {
      src: imageUrl("Bongkah Wana.webp"),
      alt: "Aksesoris resin F",
    },

    descriptionLead:
      "Serpihan kayu yang membawa ingatan tentang rimba tempat ia pernah tumbuh.",

    description:
      "Dari sesuatu yang dahulu menjadi bagian dari hutan, ia menemukan kehidupan kedua sebagai benda yang dapat dibawa pulang, sepotong alam yang berpindah rupa tanpa kehilangan asalnya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "aksesoris-g",
    title: "Piaggio",
    collection: "Aksesoris",

    image: {
      src: imageUrl("Piaggio_.webp"),
      alt: "Aksesoris resin G",
    },

    descriptionLead:
      "Sebuah perjalanan yang pernah bergerak, kini menetap sebagai jejak yang dapat dikenang.",

    description:
      "Material yang tersisa membawa cerita tentang jalan, waktu, dan perjalanan yang mungkin telah berhenti, tetapi tidak sepenuhnya berakhir.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    // Piaggio tidak dijual
    disableHargaLink: true,
  },
];

function Artistik9() {
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
        <div className="mb-6 flex justify-start">
          <Link
            to="/jelajah"
            className="inline-flex items-center gap-2 rounded-full border border-[#315c59]/15 bg-white/80 px-4 py-2 text-xs font-semibold text-[#254846] shadow-sm transition hover:border-[#0d747c]/30 hover:bg-[#f2fbfb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/20 sm:text-sm"
          >
            ← Kembali ke Jelajah
          </Link>
        </div>

        {/* Headline */}
        <header
          className={`relative mx-auto flex min-h-20 w-full max-w-xl items-center justify-center overflow-hidden rounded-[2rem] border border-[#315c59]/10 bg-white/75 px-6 py-5 text-center shadow-[0_16px_45px_rgba(39,72,70,0.10)] backdrop-blur-sm transition-all duration-700 ease-out before:absolute before:inset-x-10 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#168494]/50 before:to-transparent after:absolute after:-right-8 after:-top-10 after:size-24 after:rounded-full after:bg-[#168494]/10 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            pageEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-[35vh] opacity-0"
          }`}
        >
          <h1 className="relative z-10 font-cronde text-3xl font-medium text-[#254846] sm:text-4xl md:text-5xl">
            Aksesoris
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

export default Artistik9;
