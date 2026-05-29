const allies = [
  "Google Cloud",
  "Microsoft Azure",
  "Amazon Web Services",
  "IBM",
  "Oracle",
  "Cisco",
];

export default function Allies() {
  const duplicated = [...allies, ...allies];

  return (
    <section
      id="proyectos"
      className="section-padding scroll-mt-28 border-section"
      aria-labelledby="allies-heading"
    >
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">Proyectos</p>
          <h2 id="allies-heading" className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Tecnologías y <span className="text-gradient">aliados</span>
          </h2>
          <p className="mt-4 text-muted">
            Integramos plataformas líderes para entregar soluciones robustas, escalables y listas
            para producción en sectores retail, finanzas, logística y servicios.
          </p>
        </header>

        <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max gap-8 animate-marquee" role="list" aria-label="Tecnologías aliadas">
            {duplicated.map((name, index) => (
              <li
                key={`${name}-${index}`}
                className="flex h-14 min-w-[160px] items-center justify-center rounded-xl border px-6 text-sm font-semibold html.light:border-slate-200 html.light:bg-white html.light:text-slate-600 html.dark:border-white/10 html.dark:bg-white/5 html.dark:text-slate-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
          Casos de éxito en modernización de procesos, portales corporativos, integración de APIs
          y despliegue de infraestructura en la nube para empresas en Lima y provincias.
        </p>
      </div>
    </section>
  );
}
