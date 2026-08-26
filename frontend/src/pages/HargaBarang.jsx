import { useMemo, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LazyImage from "../components/LazyImage";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const imageUrl = (folder, filename) =>
  `${imageBaseUrl}/images/${folder}/${filename}`;

// Ganti nilai "image" sesuai nama file gambar di backend.
// Folder harus tetap mengarah ke artistik1 sampai artistik9.
const products = [
  {
    id: 1,
    name: "Lukisan Resin",
    price: 1440000,
    displayPrice: "Rp1.440.000 / pcs",
    category: "Lukisan",
    folder: "artistik1",
    image: "11.webp",
  },
  {
    id: 2,
    name: "Tas Resin Eclipse",
    price: 1080000,
    displayPrice: "Rp1.080.000 / pcs",
    category: "Tas",
    folder: "artistik2",
    image: "Eclipse.webp",
  },
  {
    id: 3,
    name: "Tas Resin Lain",
    price: 660000,
    displayPrice: "Rp660.000 / pcs",
    category: "Tas",
    folder: "artistik2",
    image: "Asmara.webp",
  },
  {
    id: 4,
    name: "Home Decor Ekor Paus",
    price: 420000,
    displayPrice: "Rp420.000 / set",
    note: "Set 3 pcs · besar, sedang, kecil",
    category: "Home Decor",
    folder: "artistik5",
    image: "Fluke.webp",
  },
  {
    id: 5,
    name: "Home Decor Nebula",
    price: 228000,
    displayPrice: "Rp228.000 / pcs",
    category: "Home Decor",
    folder: "artistik5",
    image: "Nebula Orion.webp",
  },
  {
    id: 6,
    name: "Lukisan Resin Persegi",
    price: 348000,
    displayPrice: "Rp348.000 / pcs",
    category: "Lukisan",
    folder: "artistik1",
    image: "10.webp",
  },
  {
    id: 7,
    name: "Cermin Resin",
    price: 156000,
    displayPrice: "Rp130.000 / pcs",
    category: "Cermin",
    folder: "artistik8",
    image: "Rinengga.webp",
  },
  {
    id: 8,
    name: "Home Decor Pantai Perahu Oval",
    price: 328000,
    displayPrice: "Rp328.000 / set",
    note: "3 pcs",
    category: "Home Decor",
    folder: "artistik4",
    image: "2.webp",
  },
  {
    id: 9,
    name: "Home Decor Pantai Perahu",
    price: 108000,
    displayPrice: "Rp108.000 / pcs",
    category: "Home Decor",
    folder: "artistik4",
    image: "3.webp",
  },
  {
    id: 10,
    name: "Lampu Tidur Bergolak",
    price: 1020000,
    displayPrice: "Rp1.020.000 / pcs",
    category: "Lampu Tidur",
    folder: "artistik3",
    image: "Bergolak.webp",
  },
  {
    id: 11,
    name: "Home Decor Oval Gold",
    price: 216000,
    displayPrice: "Rp216.000 / set",
    note: "2 pcs",
    category: "Home Decor",
    folder: "artistik4",
    image: "1.webp",
  },
  {
    id: 12,
    name: "Jam Resin Besar",
    price: 216000,
    displayPrice: "Rp216.000 / pcs",
    category: "Jam",
    folder: "artistik7",
    image: "Hermes_.webp",
  },
  {
    id: 13,
    name: "Jam Resin Kecil",
    price: 144000,
    displayPrice: "Rp144.000 / pcs",
    category: "Jam",
    folder: "artistik7",
    image: "Kalantara.webp",
  },
  {
    id: 14,
    name: "Coaster",
    price: 48000,
    displayPrice: "Rp48.000 / pcs",
    category: "Coaster",
    folder: "artistik6",
    image: "coaster1.webp",
  },
  {
    id: 15,
    name: "Kalung",
    price: 60000,
    displayPrice: "Rp60.000 / pcs",
    category: "Aksesoris",
    folder: "artistik9",
    image: "Luruh Meraki.webp",
  },
  {
    id: 16,
    name: "Gantungan Kunci & Tempelan Kulkas",
    price: 30000,
    displayPrice: "Rp30.000 / pcs",
    category: "Aksesoris",
    folder: "artistik9",
    image: "Loka Asmara.webp",
  },
  {
    id: 17,
    name: "Home Decor Desa Wisata Branjang",
    price: 180000,
    displayPrice: "Rp180.000 / pcs",
    category: "Home Decor",
    folder: "artistik5",
    image: "Saujana.webp",
  },
];

const palette = [
  "#12395d",
  "#58adbb",
  "#2458b7",
  "#f4d8a1",
  "#a80f12",
  "#e75d85",
  "#f7d928",
  "#5bd3b4",
];

function formatCount(value) {
  return String(value).padStart(2, "0");
}

function HargaBarang() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    const previousPath = location.state?.from;

    if (previousPath && typeof previousPath === "string") {
      navigate(previousPath, { replace: true });
      return;
    }

    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/jelajah", { replace: true });
  };

  // Scroll to product if `?img=` query param is present (image filename)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const img = params.get("img");

    if (!img) return;

    const decoded = decodeURIComponent(img);
    let targetProduct = products.find((p) => p.image === decoded);

    // Fallback: jika tidak ada image match, gunakan kategori dari query param
    if (!targetProduct) {
      const cat = params.get("cat");

      if (cat) {
        targetProduct = products.find((p) => p.category === cat);
      }
    }

    if (!targetProduct) return;

    // Make sure category filter shows the product first
    setActiveCategory(targetProduct.category);

    // Wait a moment for DOM to update, then scroll to product
    setTimeout(() => {
      const el = document.getElementById(`product-${targetProduct.id}`);

      if (el) {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        el.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    }, 60);
  }, [location.search]);

  const categories = useMemo(
    () => ["Semua", ...new Set(products.map((item) => item.category))],
    [],
  );

  const visibleProducts = useMemo(() => {
    if (activeCategory === "Semua") return products;

    return products.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="relative min-h-svh overflow-hidden bg-[#f4efe5] font-sora text-[#173b3a]">
      {/* Dekorasi latar minimalis bernuansa kayu */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -left-28 -top-24 size-[24rem] rounded-full border-[4rem] border-[#58adbb]/10" />
        <div className="absolute -right-36 top-[24%] size-[28rem] rounded-full bg-[#f4d8a1]/45 blur-3xl" />
        <div className="absolute -bottom-48 left-[18%] size-[34rem] rounded-full bg-[#5bd3b4]/10 blur-3xl" />

        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-36 w-full opacity-50 sm:h-44"
        >
          <path
            d="M0 132C220 64 385 206 608 126C838 43 1055 183 1440 78V220H0Z"
            fill="#eadbc5"
          />
          <path
            d="M0 176C268 96 485 226 746 150C1005 75 1190 170 1440 124V220H0Z"
            fill="#dcc4a6"
          />
        </svg>
      </div>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <div className="mb-6 flex justify-start">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-full border border-[#315c59]/15 bg-white/80 px-4 py-2 text-xs font-semibold text-[#12395d] shadow-sm transition hover:border-[#58adbb]/40 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/20 sm:text-sm"
          >
            ← Kembali
          </button>
        </div>

        <header className="mb-10 sm:mb-14">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2458b7] sm:text-xs">
            <span className="h-px w-10 bg-[#2458b7]" />
            Epostika · Daftar Harga
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="font-cronde text-5xl font-medium leading-[0.95] tracking-tight text-[#12395d] sm:text-6xl lg:text-7xl">
                Harga Karya
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#536967] sm:text-base">
                Koleksi karya resin Epostika dengan nuansa material alami,
                warna laut, dan aksen kayu yang hangat.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#b8794e]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#76533d] shadow-sm backdrop-blur-sm">
              <span className="size-2 rounded-full bg-[#a80f12]" />
              {formatCount(products.length)} item
            </div>
          </div>

          {/* Potongan color palette */}
          <div className="mt-8 flex h-2 overflow-hidden rounded-full bg-white/60 shadow-sm">
            {palette.map((color) => (
              <span
                key={color}
                className="h-full flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </header>

        {/* Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  isActive
                    ? "border-[#12395d] bg-[#12395d] text-white shadow-sm"
                    : "border-[#315c59]/15 bg-white/65 text-[#536967] hover:border-[#58adbb]/50 hover:bg-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid produk */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <article
              id={`product-${product.id}`}
              data-image={product.image}
              key={product.id}
              className="group overflow-hidden rounded-[2rem] border border-[#315c59]/10 bg-white/75 p-3 shadow-[0_16px_48px_rgba(39,72,70,0.09)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#58adbb]/30 hover:shadow-[0_22px_55px_rgba(39,72,70,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-[#eadbc5] via-[#d8b98f] to-[#a46f4c]">
                <div className="absolute inset-0 grid place-items-center">
                  {/* <span className="rounded-full bg-[#f7f1e8]/80 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#76533d] backdrop-blur-sm">
                    Tambahkan gambar
                  </span> */}
                </div>

                <LazyImage
                  src={imageUrl(product.folder, product.image)}
                  alt={product.name}
                  priority={index < 4}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#f7f1e8]/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#76533d] shadow-sm backdrop-blur-sm">
                  {formatCount(product.id)}
                </span>

                <span
                  className="absolute bottom-3 right-3 h-1.5 w-14 rounded-full shadow-sm"
                  style={{ backgroundColor: palette[index % palette.length] }}
                />
              </div>

              <div className="px-2 pb-2 pt-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2458b7]">
                  {product.category}
                </p>

                <h2 className="min-h-[3rem] text-base font-semibold leading-snug text-[#12395d] sm:text-lg">
                  {product.name}
                </h2>

                {product.note && (
                  <p className="mt-2 text-xs leading-5 text-[#7b6a5e]">
                    {product.note}
                  </p>
                )}

                <div className="mt-4 border-t border-[#315c59]/10 pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a7665]">
                    Harga
                  </p>

                  <p className="mt-1 text-lg font-bold tracking-tight text-[#a80f12]">
                    {product.displayPrice}
                  </p>

                  <a
                    href="/jelajah#pesan-produk"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#12395d] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0d2f4d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#58adbb]/25"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#315c59]/15" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a8d8b]">
            Nature · Resin · Craft
          </span>
          <span className="h-px flex-1 bg-[#315c59]/15" />
        </footer>
      </section>
    </main>
  );
}

export default HargaBarang;
