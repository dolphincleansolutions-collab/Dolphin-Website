import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative text-white px-6 py-10 md:py-12 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://plus.unsplash.com/premium_photo-1679920025550-75324e59680f?fm=jpg&q=85&w=1800&auto=format&fit=crop"
        alt="Professional cleaning"
        fill
        className="object-cover"
        priority
      />

      {/* Dark silhouette overlay */}
      <div className="absolute inset-0 bg-[#0d1f33]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/logo-v2.png"
            alt="Dolphin Clean Solutions"
            width={228}
            height={228}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Deep Clean,{" "}
            <span className="text-[#4ecdc4] block">Fresh Results</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xs mb-8 leading-relaxed">
            Professional cleaning services for your home or business. Experience the luxury of a pristine space
            with our aqueous precision techniques.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#booking"
              className="bg-[#5c6b2e] hover:bg-[#4a5524] text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors"
            >
              Book Your Cleaning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
