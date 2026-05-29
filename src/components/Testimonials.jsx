import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    position: "Fundador, TechVision",
    quote:
      "TISE SAC modernizó nuestros procesos comerciales y la presencia digital. En seis meses aumentamos ventas un 40 % con una plataforma estable y fácil de usar.",
  },
  {
    id: 2,
    name: "Ana Torres",
    position: "CEO, InnovateX",
    quote:
      "Profesionalismo, claridad en plazos y un equipo que entiende el negocio. Superaron expectativas en el rediseño de nuestra operación logística.",
  },
  {
    id: 3,
    name: "Ricardo López",
    position: "Gerente de Operaciones, Nexus Solutions",
    quote:
      "La atención al detalle en seguridad y rendimiento marcó la diferencia. Hoy tenemos infraestructura confiable y soporte cercano cuando lo necesitamos.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((direction) => {
    setIndex((prev) => (prev + direction + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => goTo(1), 7000);
    return () => clearInterval(interval);
  }, [goTo]);

  const current = testimonials[index];

  return (
    <section className="section-padding scroll-mt-28" aria-labelledby="testimonials-heading">
      <div className="container-page">
        <div className="card-surface mx-auto max-w-3xl p-8 sm:p-12">
          <h2 id="testimonials-heading" className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Lo que dicen nuestros clientes
          </h2>

          <figure className="mt-8 text-center" aria-live="polite">
            <blockquote className="text-lg italic text-muted sm:text-xl">
              <p>&ldquo;{current.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6">
              <cite className="not-italic">
                <span className="block text-base font-semibold text-brand-500">{current.name}</span>
                <span className="text-sm text-muted">{current.position}</span>
              </cite>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(-1)}
              className="rounded-full border p-2 text-muted html.light:border-slate-200 html.light:hover:bg-slate-100 html.dark:border-white/10 html.dark:hover:bg-white/10"
              aria-label="Testimonio anterior"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Seleccionar testimonio">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonio de ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-brand-500" : "w-2.5 bg-slate-400/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(1)}
              className="rounded-full border p-2 text-muted html.light:border-slate-200 html.light:hover:bg-slate-100 html.dark:border-white/10 html.dark:hover:bg-white/10"
              aria-label="Siguiente testimonio"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
