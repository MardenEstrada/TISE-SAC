import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Despliegue Rápido",
    description:
      "Implementamos soluciones con la mejor infraestructura para garantizar velocidad y estabilidad en cada proyecto.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Seguridad Avanzada",
    description:
      "Protegemos tus aplicaciones con cifrado SSL, autenticación segura y medidas de protección contra ataques.",
    icon: LockClosedIcon,
  },
  {
    name: "Optimización Continua",
    description:
      "Analizamos y mejoramos el rendimiento de tu plataforma para una experiencia rápida y eficiente.",
    icon: ArrowPathIcon,
  },
  {
    name: "Tecnología Inteligente",
    description:
      "Desarrollamos soluciones con inteligencia artificial y automatización para optimizar tu negocio.",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gradient-to-r cursor-default  from-black to-gray-900 py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-yellow-400 transition-transform duration-500 hover:scale-110">
            TISE SAC - Innovación Digital
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance transition-opacity duration-500 hover:opacity-80">
            Transformamos tu negocio con tecnología de vanguardia
          </p>
          <p className="mt-6 text-lg text-gray-300 transition-all duration-500 hover:text-yellow-400">
            En <strong className="text-white">TISE SAC</strong>, ofrecemos desarrollo web, aplicaciones y optimización digital con las herramientas más avanzadas del mercado.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-16 group transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gray-800 p-4 rounded-lg"
              >
                <dt className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-lg bg-yellow-500 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-black"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-300 transition-all duration-500 group-hover:text-yellow-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
