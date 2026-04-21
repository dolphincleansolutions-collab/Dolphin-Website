"use client";

import { useState } from "react";
import DatePicker from "./DatePicker";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", serviceType: "Residential Cleaning", preferredDate: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <section id="booking" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm flex flex-col md:flex-row">
          {/* Left info panel */}
          <div className="bg-[#1a3a5c] text-white p-14 md:w-80 flex-shrink-0 flex flex-col justify-between rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight mb-4">
                Book Your<br />Session
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Ready for a spotless space? Fill out the form and we'll confirm your appointment within 2 hours.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4ecdc4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(813) 553-1364</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4ecdc4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Sat: 8am – 6pm</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="flex-1 p-14">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#5c6b2e] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a3a5c]">Request Sent!</h3>
                <p className="text-gray-500 text-sm">We'll confirm your appointment within 2 hours.</p>
                <button onClick={() => setStatus("idle")} className="text-sm text-[#4ecdc4] hover:underline mt-2">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(813) 000-0000"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Type</label>
                    <div className="relative">
                      <select
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] bg-white appearance-none pr-10"
                      >
                        <option>Residential Cleaning</option>
                        <option>Commercial Cleaning</option>
                        <option>Outdoor Cleaning</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Date</label>
                  <DatePicker
                    value={form.preferredDate}
                    onChange={(val) => setForm({ ...form, preferredDate: val })}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#5c6b2e] hover:bg-[#4a5524] disabled:opacity-60 text-white font-bold py-4 rounded-full text-sm transition-colors mt-2"
                >
                  {status === "loading" ? "Sending..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
