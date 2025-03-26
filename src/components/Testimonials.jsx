import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    position: "Fundador de TechVision",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Increíble servicio. Nos ayudaron a mejorar nuestra presencia digital y aumentar las ventas en un 40%.",
  },
  {
    id: 2,
    name: "Ana Torres",
    position: "CEO de InnovateX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Una experiencia excelente. El equipo fue profesional, creativo y entregó resultados más allá de nuestras expectativas.",
  },
  {
    id: 3,
    name: "Ricardo López",
    position: "Gerente de Nexus Solutions",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Altamente recomendados. Su enfoque en la innovación y la atención al detalle realmente marcaron la diferencia.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("-translate-x-full opacity-0");
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setAnimation("translate-x-full opacity-0");
        setTimeout(() => setAnimation("translate-x-0 opacity-100"), 100);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="relative max-w-4xl w-full bg-gray-900 px-12 py-20 shadow-2xl sm:rounded-3xl sm:px-20 md:py-24 text-center transition-all duration-500 hover:shadow-2xl overflow-hidden">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:top-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 size-[64rem] opacity-70 animate-pulse"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#gradient-dark)"
            fillOpacity="0.65"
          />
          <defs>
            <radialGradient id="gradient-dark">
              <stop stopColor="#d8ac4d" />
              <stop offset={1} stopColor="#223535" />
            </radialGradient>
          </defs>
        </svg>

        {/* Contenido */}
        <div className={`transition-transform duration-500 ${animation}`}>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-6 hover:scale-105 transition-transform duration-500">
            Lo que dicen nuestros clientes
          </h2>
          <blockquote className="text-xl sm:text-2xl italic font-semibold text-gray-300 hover:text-yellow-300 transition-all duration-500">
            <p>“{testimonials[index].quote}”</p>
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="size-16 rounded-full border-2 border-[#d8ac4d] shadow-lg transition-transform duration-500 hover:scale-110"
            />
            <div className="mt-3 text-lg font-semibold text-[#d8ac4d]">
              {testimonials[index].name}
            </div>
            <div className="text-gray-400">{testimonials[index].position}</div>
          </figcaption>
        </div>

        {/* Botones de navegación */}
        <div className="mt-8 flex justify-center space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAnimation("-translate-x-full opacity-0");
                setTimeout(() => {
                  setIndex(i);
                  setAnimation("translate-x-full opacity-0");
                  setTimeout(
                    () => setAnimation("translate-x-0 opacity-100"),
                    100
                  );
                }, 400);
              }}
              className={`h-4 w-4 rounded-full transition-colors ${
                i === index ? "bg-yellow-500 scale-110" : "bg-gray-500"
              } hover:bg-yellow-400`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
