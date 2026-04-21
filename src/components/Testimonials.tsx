"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "The attention to detail is unlike anything I've experienced before. My home feels more like a spa after they leave.",
    name: "Sarah Mitchell",
    role: "Residential Client",
    initials: "SM",
    color: "bg-[#1a3a5c]",
  },
  {
    quote: "We switched our office cleaning to Dolphin and the difference was night and day. Reliable, professional, and thorough.",
    name: "James Duarte",
    role: "Property Manager",
    initials: "JD",
    color: "bg-[#4ecdc4]",
  },
  {
    quote: "The booking process was seamless and the team arrived exactly on time. Highly recommend their deep clean service!",
    name: "Linda Wu",
    role: "Business Owner",
    initials: "LW",
    color: "bg-[#5c6b2e]",
  },
  {
    quote: "I've tried several cleaning services over the years and Dolphin is by far the best. My carpets have never looked this good.",
    name: "Marcus Johnson",
    role: "Homeowner",
    initials: "MJ",
    color: "bg-[#1a3a5c]",
  },
  {
    quote: "Our clinic requires the highest standards of cleanliness and Dolphin consistently exceeds our expectations every single visit.",
    name: "Dr. Priya Patel",
    role: "Clinic Director",
    initials: "PP",
    color: "bg-[#4ecdc4]",
  },
  {
    quote: "They cleaned our entire retail space overnight before our grand reopening. Flawless work under a tight deadline.",
    name: "Carlos Rivera",
    role: "Retail Store Owner",
    initials: "CR",
    color: "bg-[#5c6b2e]",
  },
  {
    quote: "I scheduled a move-out clean and got my full deposit back. My landlord was shocked at how pristine the place looked.",
    name: "Aisha Thompson",
    role: "Residential Client",
    initials: "AT",
    color: "bg-[#1a3a5c]",
  },
  {
    quote: "The outdoor pressure washing they did on our driveway and patio was incredible. Looks brand new after years of staining.",
    name: "Greg Holloway",
    role: "Homeowner",
    initials: "GH",
    color: "bg-[#4ecdc4]",
  },
  {
    quote: "Dolphin's team is always courteous, punctual, and leaves the office smelling fresh. Our employees love coming in on clean days.",
    name: "Rachel Kim",
    role: "Office Manager",
    initials: "RK",
    color: "bg-[#5c6b2e]",
  },
  {
    quote: "I was skeptical about aqueous cleaning but the results speak for themselves. Zero chemical smell and everything sparkles.",
    name: "Tom Brecker",
    role: "Residential Client",
    initials: "TB",
    color: "bg-[#1a3a5c]",
  },
  {
    quote: "We have a large warehouse facility and Dolphin handles it without missing a corner. Extremely reliable month after month.",
    name: "Diane Castillo",
    role: "Facilities Manager",
    initials: "DC",
    color: "bg-[#4ecdc4]",
  },
  {
    quote: "Best investment I've made for my Airbnb. Guests consistently rate cleanliness 5 stars since I switched to Dolphin.",
    name: "Nathan Lee",
    role: "Airbnb Host",
    initials: "NL",
    color: "bg-[#5c6b2e]",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="reviews" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a5c]">What Our Clients Say</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#1a3a5c] hover:text-[#1a3a5c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-400 tabular-nums">{page + 1} / {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#1a3a5c] hover:text-[#1a3a5c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <StarRating />
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#1a3a5c] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === page ? "bg-[#1a3a5c]" : "bg-gray-300"}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
