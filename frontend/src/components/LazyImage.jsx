import { useEffect, useRef, useState } from "react";

function LazyImage({
  src,
  alt,
  className = "",
  priority = false,
  onError,
  ...props
}) {
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority || !src) {
      setShouldLoad(true);
      return undefined;
    }

    const node = imgRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [src, priority]);

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? src : undefined}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={onError}
      className={className}
      {...props}
    />
  );
}

export default LazyImage;
