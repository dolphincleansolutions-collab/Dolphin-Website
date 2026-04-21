import Image from "next/image";

const services = [
  {
    title: "Residential Cleaning",
    description: "Tailored home solutions including deep cleans, recurring maintenance, and move-in/out services.",
    image: "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?fm=jpg&q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial Cleaning",
    description: "Janitorial services for offices, clinics, and retail spaces that demand a sterile, professional image.",
    image: "https://plus.unsplash.com/premium_photo-1661914082480-4e9c89baa3be?fm=jpg&q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Outdoor Cleaning",
    description: "Pressure washing, window cleaning, and patio detailing to keep your exterior as fresh as the interior.",
    image: "https://images.unsplash.com/photo-1762810981576-1b07f76af9d2?fm=jpg&q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a5c] mb-3">Our Specialized Services</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Meticulous attention to detail for every surface, corner, and crevice of your environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1a3a5c] flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a3a5c] text-base mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
