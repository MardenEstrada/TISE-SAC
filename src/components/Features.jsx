import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Desarrollo de software a medida",
    description:
      "Sistemas web y de escritorio alineados a tus procesos: ERP, CRM, portales y automatización de flujos internos.",
    icon: CodeBracketIcon,
  },
  {
    name: "Aplicaciones móviles",
    description:
      "Apps nativas e híbridas para equipos en campo, logística, ventas y atención al cliente con sincronización en tiempo real.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Telecomunicaciones e infraestructura",
    description:
      "Redes, conectividad y soporte técnico para operaciones estables, seguras y preparadas para escalar.",
    icon: SignalIcon,
  },
  {
    name: "Despliegue y cloud",
    description:
      "Arquitectura en la nube con despliegues ágiles, monitoreo y alta disponibilidad para tus servicios críticos.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Ciberseguridad",
    description:
      "SSL/TLS, autenticación robusta, respaldos y buenas prácticas OWASP para proteger datos y reputación.",
    icon: LockClosedIcon,
  },
  {
    name: "Optimización y soporte",
    description:
      "Mejora continua de rendimiento, capacitación de usuarios y mesa de ayuda con tiempos de respuesta garantizados.",
    icon: ArrowPathIcon,
  },
];

export default function Features() {
  return (
    <section
      id="servicios"
      className="section-padding scroll-mt-28 border-section"
      aria-labelledby="features-heading"
    >
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">Servicios</p>
          <h2 id="features-heading" className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Tecnología integral para tu empresa
          </h2>
          <p className="mt-4 text-muted">
            Desde la consultoría inicial hasta el soporte post-lanzamiento, acompañamos cada etapa
            del ciclo de vida digital de tu negocio.
          </p>
        </header>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {features.map((feature) => (
            <li key={feature.name} className="card-surface group p-6 transition hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-slate-900">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{feature.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
