import { Link } from "react-router-dom";

const backgroundImage =
   "/images/home/jelajah.webp";;

function Home() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-stone-950 px-5 py-10">
      {/* Background */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-stone-950/55 to-amber-950/50" />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />

      {/* Konten */}
      <section className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        {/* Shape judul */}
        <div className="rounded-3xl border border-white/50 bg-black/30 px-6 py-8 shadow-2xl shadow-black/40 backdrop-blur-sm sm:px-10 sm:py-10 md:rounded-[2.5rem] md:px-16 md:py-12">
          <h1 className="font-serif text-4xl leading-tight font-medium tracking-tight text-stone-50 sm:text-5xl md:text-7xl lg:text-8xl">
            Epostika Kelana{" "}
            <br />
            <span className="text-amber-300 italic">X</span>{" "}
            <br />
            Sigur.id
          </h1>
        </div>

        {/* Tombol */}
        <Link
          to="/jelajah"
          className="inline-flex min-h-13 items-center justify-center rounded-full border border-stone-50 bg-stone-50 px-8 py-3.5 text-base font-bold tracking-wide text-stone-900 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
        >
          Jelajah di sini
        </Link>
      </section>
    </main>
  );
}

export default Home;