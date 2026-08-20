import { Link } from "react-router-dom";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const categories = [
  {
    id: 1,
    title: "Lukisan",
    path: "/artistik1",
    image: "lukisan.webp",
  },
  {
    id: 2,
    title: "Tas",
    path: "/artistik2",
    image: "tas.webp",
  },
  {
    id: 3,
    title: "Lampu Tidur",
    path: "/artistik3",
    image: "lampu-tidur.webp",
  },
  {
    id: 4,
    title: "Home Decor Oval",
    path: "/artistik4",
    image: "home-decor-oval.webp",
  },
  {
    id: 5,
    title: "Home Decor Serving",
    path: "/artistik5",
    image: "home-decor-serving.webp",
  },
  {
    id: 6,
    title: "Coaster",
    path: "/artistik6",
    image: "coaster.webp",
  },
  {
    id: 7,
    title: "Jam Meja",
    path: "/artistik7",
    image: "jam-meja.webp",
  },
  {
    id: 8,
    title: "Cermin",
    path: "/artistik8",
    image: "cermin.webp",
  },
  {
    id: 9,
    title: "Lukisan Kecil",
    path: "/artistik9",
    image: "lukisan-kecil.webp",
  },
];

function Jelajah() {
  return (
    <main className="min-h-svh bg-[#fbfaf8] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <section className="mx-auto w-full max-w-5xl">
        {/* Headline */}
        <header className="mx-auto mb-10 flex min-h-20 w-full max-w-2xl items-center justify-center rounded-sm bg-[#ffdb68] px-5 py-4 text-center shadow-sm sm:mb-14 sm:min-h-24">
          <h1 className="font-serif text-2xl font-semibold tracking-wide text-stone-900 sm:text-3xl md:text-4xl">
            Jelajah Sigur.id
          </h1>
        </header>

        {/* Daftar kategori */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-7 sm:gap-x-6 sm:gap-y-10 md:gap-x-10 lg:gap-x-14">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.path}
              aria-label={`Buka halaman ${category.title}`}
              className="group flex min-w-0 flex-col items-center text-center"
            >
              {/* Preview berbentuk lingkaran */}
              <div className="relative aspect-square w-full max-w-24 overflow-hidden rounded-full bg-[#ffdb68] shadow-md shadow-stone-900/10 ring-2 ring-transparent transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:ring-amber-400 group-focus-visible:ring-4 group-focus-visible:ring-amber-500 sm:max-w-40 md:max-w-48 lg:max-w-56">
                <span className="absolute inset-0 flex items-center justify-center px-2 text-[10px] font-medium text-stone-700 sm:text-sm">
                  Preview karya
                </span>

                <img
                  src={`${imageBaseUrl}/images/jelajah/${category.image}`}
                  alt={`Preview karya ${category.title}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Nama kategori */}
              <h2 className="mt-3 min-h-10 text-xs leading-tight font-medium text-stone-900 transition group-hover:text-amber-700 sm:mt-4 sm:text-base md:text-lg">
                {category.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Jelajah;