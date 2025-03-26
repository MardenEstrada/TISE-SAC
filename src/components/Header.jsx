import { motion } from "framer-motion";

const links = [
  { name: "Nuestros Proyectos", href: "#" },
  { name: "Carreras en TISE SAC", href: "#" },
  { name: "Tecnologías que usamos", href: "#" },
  { name: "Nuestro equipo", href: "#" },
];

const stats = [
  { name: "Clientes felices", value: "150+" },
  { name: "Líneas de código escritas", value: "1M+" },
  { name: "Frameworks dominados", value: "25+" },
  { name: "Tiempo de respuesta", value: "< 24h" },
];

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&h=1500&q=80"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Únete a TISE SAC
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Creamos software innovador con tecnologías de vanguardia. Explora nuestras oportunidades y forma parte de una comunidad de desarrolladores apasionados.
          </p>
        </motion.div>

        {/* Links con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1, color: "#FACC15" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-yellow-400 transition duration-300 ease-in-out"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              className="flex flex-col-reverse gap-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <dt className="text-base/7 text-gray-300">{stat.name}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
