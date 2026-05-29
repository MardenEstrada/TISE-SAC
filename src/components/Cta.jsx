export default function Cta() {
  return (
    <section className="section-padding scroll-mt-28" aria-labelledby="cta-heading">
      <div className="container-page">
        <div className="card-surface relative overflow-hidden p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-xl">
            <h2 id="cta-heading" className="text-2xl font-bold text-primary sm:text-3xl">
              ¿Listo para digitalizar tu empresa?
            </h2>
            <p className="mt-3 text-muted">
              Agenda una consultoría sin compromiso. Analizamos tu operación actual y proponemos
              un plan tecnológico claro, con plazos y alcance definidos.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <a href="#contacto" className="btn-primary">
              Contactar ahora
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
