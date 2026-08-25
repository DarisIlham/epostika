import { useEffect, useState } from "react";

import ArtworkShowcase from "../../components/ArtworkShowcase.jsx";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (filename) => `${imageBaseUrl}/images/artistik1/${filename}`;

const artworks = [
  {
    id: "lukisan-a",
    title: "Nirwana",
    collection: "Lukisan",

    image: {
      src: imageUrl("10.webp"),
      alt: "Lukisan resin A",
    },

    descriptionLead:
      "Laut selalu bergerak dan ombak menemukan sebuah rumah. Birunya menetap, pasirnya diam, dan kerang-kerang kecil menjadi saksi bahwa sesuatu yang seharusnya berlalu tetap dapat bernaung.",

    description:
      "Resin mengabadikan apa yang tak mampu dilakukan waktu. Maka ketika laut tak lagi berada di hadapan mata, dalam sebuah bingkailah ia berada, menunggu seseorang untuk kembali mengingatnya.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "lukisan-b",
    title: "Marga Tira",
    collection: "Lukisan",

    image: {
      src: imageUrl("11.webp"),
      alt: "Lukisan resin B",
    },

    descriptionLead:
      "Seseorang pernah berjalan di sini, meninggalkan dua lengkung sederhana yang perlahan akan diratakan waktu.",

    description:
      "Tetapi sebelum ombak datang menghapusnya, jejak itu sempat menjadi bukti bahwa pernah ada seseorang yang berjalan, berhenti, dan mungkin mencari sesuatu di sepanjang tepian. Sebab setiap perjalanan pada akhirnya akan meninggalkan jejak, meski tidak semua jejak ditakdirkan untuk menetap.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "lukisan-c",
    title: "Tamas Tarangga",
    collection: "Lukisan",

    image: {
      src: imageUrl("12.webp"),
      alt: "Lukisan resin C",
    },

    descriptionLead:
      "Ombak laut tetap datang, memecah dirinya sendiri berkali-kali di hadapan pantai. Tidak pernah benar-benar selesai, tidak pernah benar-benar menyerah.",

    description:
      "Mungkin begitulah ketabahan bekerja, bukan tentang tidak pernah karam, melainkan tentang selalu menemukan alasan untuk kembali.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
  {
    id: "lukisan-d",
    title: "I Wish",
    collection: "Lukisan",

    image: {
      src: imageUrl("13.webp"),
      alt: "Lukisan resin C",
    },

    descriptionLead:
      "Sebuah doa dilarung dalam botol dan dilepas ke tengah laut, membawa harapan yang tak sanggup digenggam sendiri.",

    description:
      "Barangkali, harapan adalah laku paling sunyi manusia: menanam doa di antara riuh gelombang, lalu membiarkannya berlayar menuju takdir, sembari percaya bahwa sesuatu yang kita semogakan akan menemukan jalannya sendiri.",

    instagramUrl: "https://linktr.ee/sigur.id",
    commerceUrl: "",
  },
];

function Artistik1() {
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
            Lukisan
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

export default Artistik1;
