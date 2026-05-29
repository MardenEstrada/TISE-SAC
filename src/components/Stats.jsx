const stats = [
  { name: "Proyectos completados", value: "80+" },
  { name: "Clientes activos", value: "150+" },
  { name: "Profesionales en el equipo", value: "25+" },
  { name: "Sectores atendidos", value: "12+" },
];

export default function Stats() {
  return (
    <section className="section-padding border-section html.light:bg-slate-100/80 html.dark:bg-[#111827]/50" aria-labelledby="stats-heading">
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <h2 id="stats-heading" className="text-3xl font-bold text-primary sm:text-4xl">
            Resultados en <span className="text-gradient">cifras</span>
          </h2>
          <p className="mt-4 text-muted">
            Indicadores que reflejan la confianza de nuestros clientes y la calidad de nuestra entrega.
          </p>
        </header>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="card-surface p-6 text-center">
              <dt className="text-sm text-muted">{stat.name}</dt>
              <dd className="mt-2 text-4xl font-bold text-brand-500">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
