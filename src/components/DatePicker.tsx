"use client";

import { useState, useRef, useEffect } from "react";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const today = new Date();
  const selected = value ? new Date(value + "T00:00:00") : null;

  const [open, setOpen] = useState(false);
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const prevMonth = () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1));
  const nextMonth = () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1));

  const firstDay = view.getDay();
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const handleDay = (day: number) => {
    const d = new Date(view.getFullYear(), view.getMonth(), day);
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (d < todayMidnight) return;
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    onChange(`${yyyy}-${mm}-${dd}`);
    setOpen(false);
  };

  const isSelected = (day: number) =>
    selected &&
    selected.getFullYear() === view.getFullYear() &&
    selected.getMonth() === view.getMonth() &&
    selected.getDate() === day;

  const isToday = (day: number) =>
    today.getFullYear() === view.getFullYear() &&
    today.getMonth() === view.getMonth() &&
    today.getDate() === day;

  const isPast = (day: number) => {
    const d = new Date(view.getFullYear(), view.getMonth(), day);
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < todayMidnight;
  };

  const display = selected
    ? selected.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "Select a date";

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-200 rounded-xl px-4 py-4 text-sm text-left focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] flex items-center justify-between bg-white"
      >
        <span className={selected ? "text-gray-700" : "text-gray-400"}>{display}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {/* Calendar dropdown */}
      {open && (
        <div className="absolute z-50 bottom-full mb-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-72">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button type="button" onClick={prevMonth}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#1a3a5c] hover:text-white hover:border-[#1a3a5c] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-bold text-[#1a3a5c]">
              {MONTHS[view.getMonth()]} {view.getFullYear()}
            </span>
            <button type="button" onClick={nextMonth}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#1a3a5c] hover:text-white hover:border-[#1a3a5c] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-[11px] font-semibold text-gray-400">{d}</div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-y-1">
            {cells.map((day, i) => {
              if (!day) return <div key={i} />;
              const past = isPast(day);
              const sel = isSelected(day);
              const tod = isToday(day);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleDay(day)}
                  disabled={past}
                  className={`
                    mx-auto w-8 h-8 rounded-full text-xs flex items-center justify-center transition-colors
                    ${sel ? "bg-[#1a3a5c] text-white font-bold" : ""}
                    ${!sel && tod ? "text-[#4ecdc4] font-bold" : ""}
                    ${!sel && !past ? "hover:bg-[#4ecdc4]/20 text-gray-700" : ""}
                    ${past ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
