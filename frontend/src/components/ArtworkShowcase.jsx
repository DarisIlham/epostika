function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-4"
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

function ArtworkImage({ src, alt, priority = false, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#dcc5a4] via-[#cda77a] to-[#a96f49] ${className}`}
    >
      {/* Placeholder tetap terlihat ketika gambar belum tersedia. */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          
          
        </div>
      </div>

      <img
        key={src}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onError={(event) => {
          event.currentTarget.hidden = true;
        }}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/artwork:scale-[1.03]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#173b3a]/25 to-transparent"
      />
    </div>
  );
}

function ArtworkShowcase({
  artwork,
  navigationItems,
  activeArtworkId,
  onNavigate,
  reverse = false,
  priority = false,
  showCollectionLabel = false,
}) {
  const artworkPosition =
    navigationItems.findIndex((item) => item.id === artwork.id) + 1;

  return (
    <article
      id={artwork.id}
      data-artwork-section
      className="group/artwork relative w-full scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#315c59]/10 bg-white/75 p-4 shadow-[0_20px_65px_rgba(39,72,70,0.10)] backdrop-blur-sm sm:scroll-mt-28 sm:rounded-[2.5rem] sm:p-7 lg:p-10"
    >
      {/* Aksen organik bertema laut dan kayu. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-20 -top-24 size-56 rounded-full border-[2.5rem] border-[#168494]/10" />
        <div className="absolute -bottom-24 -left-20 size-52 rounded-full bg-[#b8794e]/10 blur-2xl" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#168494]/35 to-transparent" />
      </div>

      <div className="relative">
        {showCollectionLabel && (
          <div
            className={`mb-7 flex items-center gap-3 sm:mb-9 ${
              reverse ? "lg:justify-end" : ""
            }`}
          >
            <span className="h-px w-8 bg-[#b8794e]" />
            <p className="font-sora text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76533d] sm:text-xs">
              Koleksi {artwork.collection}
            </p>
          </div>
        )}

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Foto karya */}
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="relative">
              <ArtworkImage
                src={artwork.image.src}
                alt={artwork.image.alt}
                priority={priority}
                className="aspect-[4/3] w-full rounded-[1.5rem] shadow-[0_18px_45px_rgba(39,72,70,0.14)] sm:rounded-[2rem]"
              />

              <span className="absolute left-4 top-4 rounded-full border border-white/45 bg-[#f7f1e8]/90 px-3 py-1.5 font-sora text-[10px] font-semibold tracking-[0.16em] text-[#76533d] shadow-sm backdrop-blur-sm">
                {String(artworkPosition).padStart(2, "0")} /{" "}
                {String(navigationItems.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Informasi karya */}
          <div
            className={`font-sora ${reverse ? "lg:order-1" : ""}`}
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d747c] sm:text-xs">
              Karya resin · {artwork.collection}
            </p>

            <h3 className="font-cronde text-4xl font-medium leading-none tracking-tight text-[#254846] sm:text-5xl lg:text-6xl">
              {artwork.title}
            </h3>

            <div className="mt-6 rounded-[1.5rem] border border-[#b8794e]/15 bg-[#f7f1e8]/80 p-5 sm:mt-8 sm:p-6">
              <p className="text-sm leading-7 text-[#536967] sm:text-base sm:leading-8">
                <strong className="font-semibold text-[#294b49]">
                  {artwork.descriptionLead}
                </strong>{" "}
                {artwork.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {artwork.instagramUrl && (
                <a
                  href={artwork.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0d747c]/20 bg-white/75 px-4 py-2.5 text-xs font-semibold text-[#0d747c] transition hover:border-[#0d747c] hover:bg-[#0d747c] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/20 sm:text-sm"
                >
                  Sigur.id
                  <ArrowIcon />
                </a>
              )}

              {artwork.commerceUrl && (
                <a
                  href={artwork.commerceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#76533d] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#5f402e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#b8794e]/25 sm:text-sm"
                >
                  E-commerce
                  <ArrowIcon />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigasi antar-karya; bentuk dan ukurannya selalu konsisten. */}
        <nav
          aria-label={`Navigasi karya ${artwork.collection}`}
          className="mt-8 border-t border-[#315c59]/10 pt-5 sm:mt-10 sm:pt-6"
        >
          <p className="mb-3 font-sora text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a8d8b]">
            Pilih karya
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {navigationItems.map((item, index) => {
              const isActive = activeArtworkId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Pergi ke ${item.title}`}
                  onClick={() => onNavigate(item.id)}
                  className={`flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-full border px-3 py-2 font-sora text-[11px] font-semibold leading-tight transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168494]/20 sm:min-h-12 sm:text-sm ${
                    isActive
                      ? "border-[#0d747c] bg-[#0d747c] text-white shadow-md shadow-[#0d747c]/15"
                      : "border-[#315c59]/15 bg-[#f7f1e8]/80 text-[#536967] hover:-translate-y-0.5 hover:border-[#b8794e]/40 hover:bg-[#eadbc5] hover:text-[#694a37]"
                  }`}
                >
                  <span
                    className={`hidden text-[9px] tracking-[0.12em] sm:inline ${
                      isActive ? "text-white/65" : "text-[#b8794e]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate">{item.title}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </article>
  );
}

export default ArtworkShowcase;