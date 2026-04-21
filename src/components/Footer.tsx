import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <Image src="/logo-v2.png" alt="Dolphin Clean Solutions" width={140} height={70} className="object-contain" />
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Our mission is to redefine professional cleaning through precision, eco-friendly practices, and an
            unwavering commitment to detail. We transform spaces into sanctuaries.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold text-white text-sm mb-5">Explore</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[
              { label: "Home", href: "#hero" },
              { label: "Services", href: "#services" },
              { label: "Reviews", href: "#reviews" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact Us", href: "#booking" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white text-sm mb-5">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4ecdc4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (813) 553-1364
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4ecdc4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              dolphincleansolutions@gmail.com
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="font-bold text-white text-sm mb-5">Operating Hours</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex justify-between gap-4">
              <span>Mon - Fri</span>
              <span className="text-white">8:00 AM – 6:00 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="text-white">9:00 AM – 4:00 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="text-red-400">Closed</span>
            </li>
          </ul>
          <a
            href="#booking"
            className="mt-6 block text-center border border-[#4ecdc4] text-[#4ecdc4] hover:bg-[#4ecdc4] hover:text-[#1a3a5c] font-semibold text-sm py-2.5 px-5 rounded-full transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center text-xs text-gray-500">
          <p>© 2026 Dolphin Clean Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
