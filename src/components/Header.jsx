const stats = [
  { name: "Clientes satisfechos", value: "150+" },
  { name: "Proyectos entregados", value: "80+" },
  { name: "Años de experiencia", value: "7+" },
  { name: "Tiempo de respuesta", value: "< 24 h" },
];

export default function Header() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-28 overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
            Tecnología · Innovación · Soluciones Empresariales
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Transformamos empresas con{" "}
            <span className="text-gradient">soluciones digitales</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            TISE SAC diseña e implementa software, aplicaciones y servicios de telecomunicaciones
            que optimizan operaciones y aceleran el crecimiento de PYMES y corporaciones en Perú.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contacto" className="btn-primary w-full sm:w-auto">
              Solicitar consultoría
            </a>
            <a href="#nosotros" className="btn-secondary w-full sm:w-auto">
              Conocer la empresa
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.name}
              className="card-surface animate-fade-up p-4 text-center sm:p-5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <dt className="text-xs text-muted sm:text-sm">{stat.name}</dt>
              <dd className="mt-1 text-2xl font-bold text-brand-500 sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
