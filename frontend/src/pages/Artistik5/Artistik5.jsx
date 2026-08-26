import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArtworkShowcase from "../../components/ArtworkShowcase.jsx";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (filename) => `${imageBaseUrl}/images/artistik5/${filename}`;

const artworks = [
  {
    id: "home decor serving-a",
    title: "Fluke",
    collection: "Home Decor Serving",

    image: {
      src: imageUrl("Fluke.webp"),
      alt: "Home Decor Serving resin A",
    },

    descriptionLead:
      "Tiga ekor paus menjadi gambaran kehidupan seperti mengarungi samudra yang besar dan bebas.",

    description:
      "Riak ombak yang melekat pada tubuhnya menjadi jejak perjalanan, bahwa setiap makhluk memiliki arusnya sendiri.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "home decor serving-b",
    title: "Saujana",
    collection: "Home Decor Serving",

    image: {
      src: imageUrl("Saujana.webp"),
      alt: "Home Decor Serving resin B",
    },

    descriptionLead:
      "Hijau yang membentang dan bukit yang bersusun menjadi sepotong wajah Desa Wisata Branjang,",

    description:
      "tempat alam dan kehidupan tumbuh beriringan, menyimpan teduh yang membuat waktu seakan berjalan lebih lirih.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "home decor serving-c",
    title: "Nebula Orion",
    collection: "Home Decor Serving",

    image: {
      src: imageUrl("Nebula Orion.webp"),
      alt: "Home Decor Serving resin c",
    },

    descriptionLead:
      "Karya yang mencakup filosofi karya, awal mula ide, dan detail tambahan lain dari karya tersebut.",

    description:
      "Home Decor Serving ini menampilkan permainan warna serta tekstur resin yang memberikan hasil berbeda pada setiap karya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "home decor serving-d",
    title: "Nebula Carina",
    collection: "Home Decor Serving",

    image: {
      src: imageUrl("Nebula Carina.webp"),
      alt: "Home Decor Serving resin d",
    },

    descriptionLead:
      "Karya yang mencakup filosofi karya, awal mula ide, dan detail tambahan lain dari karya tersebut.",

    description:
      "Home Decor Serving ini menampilkan permainan warna serta tekstur resin yang memberikan hasil berbeda pada setiap karya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    // Arahkan Nebula Carina ke Nebula Orion yang punya harga sama
    priceImageTarget: "Nebula Orion.webp",
  },
  {
    id: "home decor serving-e",
    title: "Raka",
    collection: "Home Decor Serving",

    image: {
      src: imageUrl("Raka.webp"),
      alt: "Home Decor Serving resin e",
    },

    descriptionLead:
      "Karya yang mencakup filosofi karya, awal mula ide, dan detail tambahan lain dari karya tersebut.",

    description:
      "Home Decor Serving ini menampilkan permainan warna serta tekstur resin yang memberikan hasil berbeda pada setiap karya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    // Raka tidak dijual
    disableHargaLink: true,
  },
  {
    id: "home decor serving-f",
    title: "Raki",
    collection: "Home Decor Serving",

    image: {
      src: imageUrl("Raki.webp"),
      alt: "Home Decor Serving resin f",
    },

    descriptionLead:
      "Karya yang mencakup filosofi karya, awal mula ide, dan detail tambahan lain dari karya tersebut.",

    description:
      "Home Decor Serving ini menampilkan permainan warna serta tekstur resin yang memberikan hasil berbeda pada setiap karya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
    // Raki tidak dijual
    disableHargaLink: true,
  },
];

function Artistik5() {
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
            Home Decor Serving
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

export default Artistik5;
