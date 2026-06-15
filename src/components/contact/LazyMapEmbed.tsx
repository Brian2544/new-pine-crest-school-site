"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5!2d36.96!3d-1.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR2FtZSBTdGFyIEhpZ2ggU2Nob29s!5e0!3m2!1sen!2ske!4v1";

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
