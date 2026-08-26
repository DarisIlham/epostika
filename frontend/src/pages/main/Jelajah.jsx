import { useRef } from "react";
import { Link } from "react-router-dom";
import LazyImage from "../../components/LazyImage";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (path, filename) =>
  `${imageBaseUrl}/images${path}/${filename}`;

const categories = [
  {
    id: 1,
    title: "Lukisan",
    path: "/artistik1",
    image: "10.webp",
  },
  {
    id: 2,
    title: "Tas",
    path: "/artistik2",
    image: "Eclipse.webp",
  },
  {
    id: 3,
    title: "Lampu Tidur",
    path: "/artistik3",
    image: "Bergolak.webp",
  },
  {
    id: 4,
    title: "Home Decor Oval",
    path: "/artistik4",
    image: "2.webp",
  },
  {
    id: 5,
    title: "Home Decor Serving",
    path: "/artistik5",
    image: "Fluke.webp",
  },
  {
    id: 6,
    title: "Coaster",
    path: "/artistik6",
    image: "coaster1.webp",
  },
  {
    id: 7,
    title: "Jam Meja",
    path: "/artistik7",
    image: "Hermes_.webp",
  },
  {
    id: 8,
    title: "Cermin",
    path: "/artistik8",
    image: "Rinengga.webp",
  },
  {
    id: 8,
    title: "Aksesoris",
    path: "/artistik9",
    image: "Luruh Meraki.webp",
    subtitle: "Kalung & Gantungan Kunci",
  },
];

function ArrowIcon({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`size-5 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Jelajah() {
  const carouselRef = useRef(null);

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-svh overflow-hidden bg-[#f5f0e7] font-sora text-[#173b3a]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -right-36 -top-28 size-[25rem] rounded-full border-[4.5rem] border-[#168494]/10 sm:size-[34rem]" />

        <div className="absolute -left-32 top-[42%] size-80 rounded-full bg-[#b8794e]/10 blur-3xl sm:size-[30rem]" />

        <div className="absolute -bottom-48 right-[8%] size-[30rem] rounded-full bg-[#168494]/10 blur-3xl" />

        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-32 w-full opacity-60 sm:h-44"
        >
          <path
            d="M0 130C220 50 380 210 610 122C840 34 1020 170 1440 72V220H0Z"
            fill="#dce9e6"
          />
          <path
            d="M0 175C270 86 470 230 740 145C1010 60 1180 170 1440 120V220H0Z"
            fill="#c8dfdc"
          />
        </svg>
      </div>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <div className="mb-6 flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#315c59]/15 bg-white/80 px-4 py-2 text-xs font-semibold text-[#254846] shadow-sm transition hover:border-[#0d747c]/30 hover:bg-[#f2fbfb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/20 sm:text-sm"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

        <header className="mb-10 sm:mb-14 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0d747c] sm:text-xs">
              <span className="h-px w-10 bg-[#0d747c]" />
              Epostika Kelana × Sigur.id
            </div>

            <h1 className="font-cronde text-5xl font-medium leading-[0.95] tracking-tight text-[#254846] sm:text-6xl lg:text-7xl">
              Jelajah Sigur.id
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#536967] sm:text-base">
              Temukan sembilan karya yang mempertemukan hangatnya kayu
              dengan warna dan keindahan resin.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b8794e]/25 bg-white/65 px-4 py-2 text-xs font-medium text-[#76533d] shadow-sm backdrop-blur-sm">
              <span className="size-2 rounded-full bg-[#b8794e]" />
              {String(categories.length).padStart(2, "0")} koleksi karya
            </div>

            <Link
              to="/harga"
              className="inline-flex items-center justify-center rounded-full border border-[#0d747c]/20 bg-white px-5 py-2.5 text-xs font-semibold text-[#0d747c] shadow-sm transition hover:bg-[#f2fbfb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/20 sm:text-sm"
            >
              Lihat katalog harga
            </Link>

            <a
              id="pesan-produk"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc5WfbIdapkbGmNwHcsdXYId4Cp-qEY38VntcNGa7Gx1KLk-Q/viewform?pli=1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0d747c] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(13,116,124,0.25)] transition hover:bg-[#0b6469] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/25 sm:text-sm"
            >
              Pesan
            </a>
          </div>
        </header>

        <div className="mb-5 flex items-center justify-between md:hidden">
          <p className="text-xs font-medium text-[#667b79]">
            Geser untuk menjelajah
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Karya sebelumnya"
              className="grid size-10 place-items-center rounded-full border border-[#0d747c]/20 bg-white/80 text-[#0d747c] shadow-sm transition active:scale-95"
            >
              <ArrowIcon direction="left" />
            </button>

            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Karya berikutnya"
              className="grid size-10 place-items-center rounded-full bg-[#0d747c] text-white shadow-sm transition active:scale-95"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:gap-8"
        >
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.path}
              aria-label={`Buka halaman ${category.title}`}
              className="group w-[78vw] max-w-[300px] shrink-0 snap-center rounded-[2rem] border border-[#315c59]/10 bg-white/75 p-3 shadow-[0_16px_50px_rgba(39,72,70,0.10)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#0d747c]/30 hover:shadow-[0_22px_55px_rgba(39,72,70,0.16)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/25 sm:w-[45vw] md:w-auto md:max-w-none md:snap-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-[#d9c09d] via-[#d6b286] to-[#b8794e]">
                {/* <div className="absolute inset-0 grid place-items-center">
                  <span className="rounded-full bg-white/55 px-4 py-2 text-xs font-medium text-[#694a37] backdrop-blur-sm">
                    Preview karya
                  </span>
                </div> */}

                <LazyImage
                  src={imageUrl(category.path, category.image)}
                  alt={`Preview karya ${category.title}`}
                  priority={index < 3}
                  onError={(event) => {
                    console.error(
                      "Gagal memuat gambar:",
                      imageUrl(category.path, category.image)
                    );

                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#f7f1e8]/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#76533d] shadow-sm backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex min-h-20 items-center justify-between gap-3 px-2 pb-1 pt-4">
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0d747c]">
                    Karya resin
                  </p>

                  <h2 className="text-base font-semibold leading-tight text-[#254846] sm:text-lg mb-1">
                    {category.title}
                  </h2>
                  <h5 className="text-xs font-medium leading-tight text-[#505857] sm:text-sm">
                    {category.subtitle}
                  </h5>

                </div>

                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#0d747c]/15 text-[#0d747c] transition duration-300 group-hover:border-[#0d747c] group-hover:bg-[#0d747c] group-hover:text-white">
                  <ArrowIcon direction="right" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 hidden items-center gap-4 md:flex">
          <span className="h-px flex-1 bg-[#315c59]/15" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a8d8b]">
            Nature • Craft
          </span>

          <span className="h-px flex-1 bg-[#315c59]/15" />
        </div>
      </section>
    </main>
  );
}

export default Jelajah;