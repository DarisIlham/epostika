import { Link } from "react-router-dom";

const imageBaseUrl =
  import.meta.env.VITE_IMAGE_BASE_URL || "http://localhost:5000";

const backgroundImage = `${imageBaseUrl}/images/home/homee.webp`;

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5"
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

function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#102e4e] font-sora text-white">
      <style>{`
        @keyframes home-wave-drift-a {
          0%, 100% { transform: translate3d(-2.5%, 0, 0); }
          50% { transform: translate3d(2.5%, 7px, 0); }
        }

        @keyframes home-wave-drift-b {
          0%, 100% { transform: translate3d(2%, 4px, 0); }
          50% { transform: translate3d(-2%, -4px, 0); }
        }

        @keyframes home-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .home-wave-a {
          animation: home-wave-drift-a 9s ease-in-out infinite;
        }

        .home-wave-b {
          animation: home-wave-drift-b 12s ease-in-out infinite;
        }

        .home-float {
          animation: home-float 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-wave-a,
          .home-wave-b,
          .home-float {
            animation: none;
          }
        }
      `}</style>

      {/* Background berasal dari folder public backend. */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
      />

      {/* Overlay memakai palet navy dan royal blue dari referensi. */}
      <div className="absolute inset-0 bg-linear-to-r from-[#102e4e]/95 via-[#102e4e]/72 to-[#2258b5]/35" />
      <div className="absolute inset-0 bg-linear-to-t from-[#102e4e]/70 via-transparent to-[#102e4e]/25" />

      {/* Blok warna dekoratif. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 z-10 flex gap-1.5 sm:right-8 sm:top-8"
      >
        <span className="h-2 w-8 rounded-full bg-[#58afb9]" />
        <span className="h-2 w-5 rounded-full bg-[#2258b5]" />
        <span className="h-2 w-3 rounded-full bg-[#fedca1]" />
      </div>

      <div
        aria-hidden="true"
        className="home-float pointer-events-none absolute -right-16 top-[18%] hidden size-64 rounded-full border-[3.5rem] border-[#58afb9]/15 lg:block"
      />

      <section className="relative z-20 mx-auto flex min-h-svh w-full max-w-7xl items-center px-5 pb-44 pt-20 sm:px-8 sm:pb-52 lg:px-12 lg:pb-56">
        <div className="w-full max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a9e5e7] sm:text-xs">
            <span className="h-px w-10 bg-[#58afb9]" />
            Kolaborasi seni dan kerajinan resin
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#102e4e]/40 p-6 shadow-[0_24px_80px_rgba(7,25,43,0.28)] backdrop-blur-md sm:rounded-[2.75rem] sm:p-9 lg:p-11">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-14 size-40 rounded-full bg-[#58afb9]/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-[#58afb9] via-[#2258b5] to-[#fedca1]"
            />

            <div className="relative">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#fedca1] sm:text-xs">
                Kayu · Resin · Laut
              </p>

              <h1 className="font-cronde text-[clamp(3.2rem,12vw,7.5rem)] font-medium leading-[0.84] tracking-[-0.035em] text-white">
                Epostika
                <span className="block">Kelana</span>
              </h1>

              <div className="mt-5 flex items-center gap-3 sm:mt-7">
                <span className="grid size-9 place-items-center rounded-full bg-[#fedca1] font-cronde text-xl text-[#102e4e] sm:size-11 sm:text-2xl">
                  ×
                </span>
                <span className="font-cronde text-3xl text-[#a9e5e7] sm:text-4xl lg:text-5xl">
                  Sigur.id
                </span>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Sebuah perjalanan visual yang mempertemukan tekstur alami,
                warna laut, dan karya resin dalam satu ruang eksplorasi.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/jelajah"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#fedca1] px-6 py-3.5 text-sm font-bold text-[#102e4e] shadow-[0_12px_35px_rgba(7,25,43,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#fedca1]/35 sm:px-7 sm:text-base"
                >
                  Jelajah di sini
                  <span className="transition duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>

                <p className="max-w-48 text-[10px] font-medium uppercase leading-5 tracking-[0.16em] text-[#a9e5e7]/80 sm:text-xs">
                  Sembilan koleksi
                  <span className="block text-white/55">satu perjalanan</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gelombang bergerak di bagian bawah. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 overflow-hidden sm:h-44 lg:h-52"
      >
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="home-wave-a absolute -bottom-1 -left-[5%] h-full w-[110%]"
        >
          <path
            d="M0 106C172 35 326 169 515 105C704 42 858 154 1047 98C1211 49 1327 67 1440 89V240H0Z"
            fill="#58AFB9"
            fillOpacity="0.9"
          />
        </svg>

        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="home-wave-b absolute -bottom-4 -left-[5%] h-[88%] w-[110%]"
        >
          <path
            d="M0 119C190 59 344 165 535 124C726 83 894 172 1082 119C1242 74 1341 92 1440 110V240H0Z"
            fill="#2258B5"
            fillOpacity="0.88"
          />
        </svg>

        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="absolute -bottom-10 left-0 h-[72%] w-full"
        >
          <path
            d="M0 120C211 80 355 163 568 134C781 105 958 177 1166 132C1275 108 1363 111 1440 126V240H0Z"
            fill="#102E4E"
          />
        </svg>

        <div className="absolute bottom-4 left-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55 sm:bottom-6 sm:left-8 sm:text-[10px] lg:left-12">
          <span>Nature</span>
          <span className="size-1 rounded-full bg-[#fedca1]" />
          <span>Craft</span>
          <span className="size-1 rounded-full bg-[#e85c88]" />
          <span>Ocean</span>
        </div>
      </div>
    </main>
  );
}

export default Home;