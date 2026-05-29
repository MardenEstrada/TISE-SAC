const blocks = [
  {
    title: "Quiénes somos",
    text: "TISE S.A.C. (Tecnología, Innovación y Soluciones Empresariales) es una empresa peruana de tecnología y telecomunicaciones con sede en San Isidro, Lima. Contamos con ingenieros, desarrolladores y especialistas en redes y ciberseguridad orientados a la eficiencia operativa de nuestros clientes.",
  },
  {
    title: "Nuestra historia",
    text: "Desde 2018, un equipo liderado por Anderson Gutiérrez Romero —ingeniero con más de 15 años de experiencia— identificó la brecha digital en PYMES peruanas y creó TISE SAC para ofrecer soluciones accesibles, escalables y adaptadas a cada industria.",
  },
  {
    title: "Misión",
    text: "Entregar soluciones tecnológicas innovadoras y personalizadas que impulsen la eficiencia y el crecimiento sostenible de las empresas en el entorno digital.",
  },
  {
    title: "Visión",
    text: "Ser referente en transformación digital y telecomunicaciones en Latinoamérica, con estándares de calidad, soporte cercano y las mejores prácticas del sector.",
  },
];

const values = [
  "Innovación aplicada al negocio",
  "Compromiso con resultados medibles",
  "Soporte y acompañamiento continuo",
  "Seguridad y cumplimiento normativo",
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="section-padding scroll-mt-28 border-section"
      aria-labelledby="about-heading"
    >
      <div className="container-page">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">Nosotros</p>
          <h2 id="about-heading" className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Innovación con <span className="text-gradient">compromiso</span>
          </h2>
          <p className="mt-4 text-muted">
            Más de siete años ayudando a empresas peruanas a adoptar tecnología de forma estratégica.
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {blocks.map((block, i) => (
            <article
              key={block.title}
              className="card-surface animate-fade-up p-6 sm:p-8"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="text-lg font-bold text-primary sm:text-xl">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{block.text}</p>
            </article>
          ))}
        </div>

        <div className="card-surface mx-auto mt-8 max-w-5xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-primary">Nuestros valores</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2" role="list">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2 text-sm text-muted sm:text-base">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {v}
              </li>
            ))}
          </ul>
          <blockquote className="mt-6 border-l-4 border-brand-500 pl-4 text-sm italic text-muted sm:text-base">
            &ldquo;Lo que comenzó como una idea entre profesionales apasionados, hoy impulsa la forma en que
            el Perú adopta la tecnología en su día a día.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
