import { useEffect, useState } from "react";

import ArtworkShowcase from "../../components/ArtworkShowcase.jsx";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (filename) => `${imageBaseUrl}/images/artistik7/${filename}`;

const artworks = [
  {
    id: "jam meja-a",
    title: "Hermes",
    collection: "Jam Meja",

    image: {
      src: imageUrl("Hermes_.webp"),
      alt: "Jam Meja resin A",
    },

    descriptionLead:
      "Hermes, dewa utusan dan pelindung perjalanan, digambarkan lewat cakram putih dengan guratan biru menyala yang melambangkan kecepatan lintasan langit, dipadu semburat emas sebagai jejak cahayanya.",

    description:
      "Setiap detak jam ini seolah membawa cerita tentang petualangan dan kebijaksanaan dalam perjalanan hidup.",

    instagramUrl: "https://www.instagram.com/",
    commerceUrl: "",
  },
  {
    id: "jam meja-b",
    title: "Athena",
    collection: "Jam Meja",

    image: {
      src: imageUrl("Athena.webp"),
      alt: "Jam Meja resin B",
    },

    descriptionLead:
      "Sebagai dewi perang pelindung kota Athena, ia tidak hanya dikenal sebagai pejuang, melainkan juga pencipta seni, kerajinan, dan keteraturan.",

    description:
      " Batu-batu kristal di tengah jam menggambarkan pecahan Aegis, perisai legendarisnya, menjadikan karya ini simbol hikmat yang memandu manusia menjalani hari demi hari dengan kebijaksanaan.",

    instagramUrl: "https://www.instagram.com/",
    commerceUrl: "",
  },
  {
    id: "jam meja-c",
    title: "Kalendra",
    collection: "Jam Meja",

    image: {
      src: imageUrl("Kalendra.webp"),
      alt: "Jam Meja resin C",
    },

    descriptionLead:
      "Waktu mengalir di antara pasang dan surut kehidupan.",

    description:
      "Perjalanan yang tak pernah menetap, sementara detik yang berputar mengajarkan bahwa segala yang datang akan pergi. Meninggalkan denting yang masih bergema dalam masa.",

    instagramUrl: "https://www.instagram.com/",
    commerceUrl: "",
  },
  {
    id: "jam meja-c",
    title: "Kalantara",
    collection: "Jam Meja",

    image: {
      src: imageUrl("Kalantara.webp"),
      alt: "Jam Meja resin C",
    },

    descriptionLead:
      "Waktu mengalir seperti ombak–datang, surut, lalu meninggalkan jejak yang tak pernah sama.",

    description:
      "Setiap detik adalah perjalanan yang tak dapat ditahan, hanya dapat dirasakan sebelum menjelma kenangan.",

    instagramUrl: "https://www.instagram.com/",
    commerceUrl: "",
  },
];

function Artistik7() {
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
            Jam
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

export default Artistik7;
