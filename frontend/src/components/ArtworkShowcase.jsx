function ArtworkImage({
  src,
  alt,
  priority = false,
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#ffdc63] ${className}`}
    >
      <span className="absolute inset-0 flex items-center justify-center px-3 text-center font-sora text-xs font-medium text-stone-800 sm:text-sm">
        Foto karya
      </span>

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
        className="absolute inset-0 h-full w-full object-cover"
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
  return (
    <article
      id={artwork.id}
      data-artwork-section
      className="w-full scroll-mt-24 sm:scroll-mt-28"
    >
      {showCollectionLabel && (
        <div
          className={`mb-10 flex min-h-14 w-full max-w-64 items-center justify-center bg-[#ffdc63] px-6 py-3 ${
            reverse ? "lg:ml-auto" : ""
          }`}
        >
          <h2 className="font-cronde text-2xl font-normal text-stone-950">
            {artwork.collection}
          </h2>
        </div>
      )}

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        {/* Foto dan navigasi */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="grid grid-cols-[minmax(8rem,0.85fr)_minmax(0,1.15fr)] items-center gap-5 sm:gap-8">
            <ArtworkImage
              src={artwork.image.src}
              alt={artwork.image.alt}
              priority={priority}
              className="aspect-square w-full rounded-full shadow-lg shadow-stone-900/10"
            />

            <div className="min-w-0 font-sora">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 sm:text-sm">
                Nama karya
              </p>

              <h3 className="font-cronde text-2xl leading-tight font-normal text-stone-950 sm:text-3xl md:text-4xl">
                {artwork.title}
              </h3>
            </div>
          </div>

          {/* Navigasi antar-panel */}
          <nav
            aria-label="Navigasi karya lukisan"
            className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-5"
          >
            {navigationItems.map((item) => {
              const isActive = activeArtworkId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Pergi ke ${item.title}`}
                  onClick={() => onNavigate(item.id)}
                  className={`aspect-square w-full max-w-24 justify-self-center rounded-full px-2 font-sora text-[11px] font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950 sm:max-w-28 sm:text-sm ${
                    isActive
                      ? "scale-105 bg-stone-950 text-[#ffdc63] shadow-lg ring-4 ring-[#ffdc63]/50"
                      : "bg-[#ffdc63] text-stone-950 hover:-translate-y-1 hover:bg-[#f3ca43] hover:shadow-md"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Deskripsi karya */}
        <div
          className={`font-sora ${reverse ? "lg:order-1" : ""}`}
        >
          <div className="border-l-4 border-[#ffdc63] pl-5 sm:pl-7">
            <p className="text-base leading-relaxed text-stone-800 sm:text-lg sm:leading-8">
              <strong className="font-bold text-stone-950">
                {artwork.descriptionLead}
              </strong>{" "}
              {artwork.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold sm:text-base">
            {artwork.instagramUrl && (
              <a
                href={artwork.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline-offset-4 transition hover:text-blue-900 hover:underline"
              >
                Instagram
              </a>
            )}

            {artwork.commerceUrl && (
              <a
                href={artwork.commerceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline-offset-4 transition hover:text-blue-900 hover:underline"
              >
                Akses e-commerce
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArtworkShowcase;