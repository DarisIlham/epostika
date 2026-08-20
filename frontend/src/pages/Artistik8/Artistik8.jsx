import { useEffect, useState } from "react";

import ArtworkShowcase from "../../components/ArtworkShowcase.jsx";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (filename) =>
  `${imageBaseUrl}/images/artistik8/${filename}`;

const artworks = [
  {
    id: "cermin-a",
    title: "Cermin A",
    collection: "Cermin",

    image: {
      src: imageUrl("cermin-a.webp"),
      alt: "Cermin resin A",
    },

    descriptionLead:
      "Karya yang mencakup filosofi karya, awal mula ide, dan detail tambahan lain dari karya tersebut.",

    description:
      "Cermin resin ini memadukan warna, tekstur, dan bentuk organik untuk menghasilkan karakter visual yang unik.",

    instagramUrl: "https://www.instagram.com/",
    commerceUrl: "",
  },
  {
    id: "cermin-b",
    title: "Cermin B",
    collection: "Cermin",

    image: {
      src: imageUrl("cermin-b.webp"),
      alt: "Cermin resin B",
    },

    descriptionLead:
      "Karya yang mencakup filosofi karya, awal mula ide, dan detail tambahan lain dari karya tersebut.",

    description:
      "Karya ini mengeksplorasi perpaduan material resin dengan warna dan komposisi yang dibuat secara manual.",

    instagramUrl: "https://www.instagram.com/",
    commerceUrl: "",
  },
  {
    id: "cermin-c",
    title: "Cermin C",
    collection: "Cermin",

    image: {
      src: imageUrl("cermin-c.webp"),
      alt: "Cermin resin C",
    },

    descriptionLead:
      "Karya yang mencakup filosofi karya, awal mula ide, dan detail tambahan lain dari karya tersebut.",

    description:
      "Cermin ini menampilkan permainan warna serta tekstur resin yang memberikan hasil berbeda pada setiap karya.",

    instagramUrl: "https://www.instagram.com/",
    commerceUrl: "",
  },
];

function Artistik8() {
  const [pageEntered, setPageEntered] = useState(false);
  const [activeArtworkId, setActiveArtworkId] = useState(
    artworks[0].id,
  );

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
    const sections = document.querySelectorAll(
      "[data-artwork-section]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(
          (entry) => entry.isIntersecting,
        );

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
          className={`mx-auto flex min-h-16 w-full max-w-md items-center justify-center bg-[#ffdc63] px-6 py-4 text-center shadow-sm transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            pageEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-[35vh] opacity-0"
          }`}
        >
          <h1 className="font-cronde text-3xl font-normal text-stone-950 sm:text-4xl md:text-5xl">
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