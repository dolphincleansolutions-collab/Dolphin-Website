"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Residential Deep Clean",
  },
  {
    src: "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Home Cleaning Service",
  },
  {
    src: "https://images.unsplash.com/photo-1758272421751-963195322eaa?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Move-In / Move-Out Clean",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661914082480-4e9c89baa3be?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Modern Office",
  },
  {
    src: "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Floor & Surface Care",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Bathroom Sanitization",
  },
  {
    src: "https://images.unsplash.com/photo-1762810981576-1b07f76af9d2?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Clean Driveway",
  },
  {
    src: "https://images.unsplash.com/photo-1602860739945-9a61573cd62d?fm=jpg&q=80&w=800&auto=format&fit=crop",
    label: "Outdoor Patio",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight" && selected !== null) setSelected((selected + 1) % images.length);
      if (e.key === "ArrowLeft" && selected !== null) setSelected((selected - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="gallery" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a5c] mb-3">Our Work</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            A glimpse into the spaces we&apos;ve transformed — every surface, every corner, every time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#1a3a5c]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-semibold">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Modal card */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src={images[selected].src.replace("w=800", "w=1600")}
                alt={images[selected].label}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            {/* Label bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
              <p className="text-white font-semibold">{images[selected].label}</p>
            </div>

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={() => setSelected((selected - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={() => setSelected((selected + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
