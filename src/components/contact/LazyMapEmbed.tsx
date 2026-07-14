"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps?q=Pine%20Crest%20School%2C%20Kihunguro%2C%20Ruiru%2C%20Kenya&output=embed";

export function LazyMapEmbed() {
  const [loadMap, setLoadMap] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadMap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [loadMap]);

  return (
    <div
      ref={containerRef}
      className="mt-10 overflow-hidden rounded-2xl border border-green-100 bg-green-50"
      style={{ minHeight: 300 }}
    >
      {loadMap ? (
        <iframe
          title="Pine Crest School location on Google Maps"
          src={MAP_SRC}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoadMap(true)}
          className="flex h-[300px] w-full flex-col items-center justify-center gap-3 text-green-800 transition hover:bg-green-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          aria-label="Load Google Maps showing school location"
        >
          <MapPin className="h-10 w-10 text-green-700" aria-hidden />
          <span className="font-medium">Tap to load map</span>
          <span className="text-sm text-slate-600">Ruiru, Kihunguro</span>
        </button>
      )}
    </div>
  );
}
