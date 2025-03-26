import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 sm:px-8 lg:px-12">
        {/* Descripción de la Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 md:py-16 lg:py-20 transition-all duration-500"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl transition-transform duration-500 hover:scale-105">
            Nuestra Empresa
          </h2>
          <p className="mt-5 text-lg text-gray-300 sm:text-xl transition-all duration-500 hover:text-yellow-300">
            TISE S.A.C. (Tecnología, Innovación y Soluciones Empresariales) es una empresa peruana de tecnología y telecomunicaciones especializada en el desarrollo de soluciones digitales innovadoras para empresas de diversos sectores.
            Ubicada en San Isidro, Lima, Perú, la empresa cuenta con un equipo altamente capacitado de ingenieros, desarrolladores y especialistas en telecomunicaciones, cuyo objetivo es diseñar e implementar soluciones innovadoras que optimicen la eficiencia operativa de sus clientes.
          </p>
        </motion.div>

        {/* Historia de la Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-8 bg-gray-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 md:py-16 lg:py-20 transition-all duration-500"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl transition-transform duration-500 hover:scale-105">
            Nuestra Historia
          </h2>
          <p className="mt-5 text-lg text-gray-300 sm:text-xl transition-all duration-500 hover:text-yellow-300">
            TISE S.A.C. comienza en 2018, cuando un grupo de ingenieros peruanos apasionados por la tecnología y las telecomunicaciones decidió unir fuerzas para enfrentar un desafío común: la falta de soluciones digitales integrales en las empresas peruanas.
            En el Perú, muchas empresas enfrentaban dificultades para modernizar sus operaciones debido a la falta de infraestructura tecnológica, costos elevados y escasa capacitación en herramientas digitales. Las pequeñas y medianas empresas (PYMES) sufrían especialmente, ya que no contaban con soluciones personalizadas que se adaptaran a sus necesidades.
            Frente a esta problemática, Anderson Gutierrez Romero, un ingeniero en sistemas con más de 15 años de experiencia en el sector, junto con un equipo de expertos en software, redes y ciberseguridad, decidió crear una empresa que ofreciera soluciones tecnológicas accesibles, eficientes y escalables para negocios de todos los tamaños.
          </p>
        </motion.div>

        {/* Misión de la Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-8 bg-gray-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 md:py-16 lg:py-20 transition-all duration-500"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl transition-transform duration-500 hover:scale-105">
            Nuestra Misión
          </h2>
          <p className="mt-5 text-lg text-gray-300 sm:text-xl transition-all duration-500 hover:text-yellow-300">
            Brindar soluciones tecnológicas innovadoras y personalizadas que potencien la eficiencia y el crecimiento de empresas en el mercado digital.
          </p>
        </motion.div>

        {/* Visión de la Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-8 bg-gray-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 md:py-16 lg:py-20 transition-all duration-500"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl transition-transform duration-500 hover:scale-105">
            Nuestra Visión
          </h2>
          <p className="mt-5 text-lg text-gray-300 sm:text-xl transition-all duration-500 hover:text-yellow-300">
            Ser la empresa líder en transformación digital y telecomunicaciones en Latinoamérica, ofreciendo servicios de alta calidad con las últimas tendencias tecnológicas.
          </p>
        </motion.div>

        {/* Filosofía de la Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-8 bg-gray-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 md:py-16 lg:py-20 transition-all duration-500"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl transition-transform duration-500 hover:scale-105">
            Nuestra Filosofía
          </h2>
          <p className="mt-5 text-lg text-gray-300 sm:text-xl transition-all duration-500 hover:text-yellow-300">
            "Lo que comenzó como una idea entre amigos, hoy es una empresa que está cambiando la forma en que el Perú adopta la tecnología."
          </p>
        </motion.div>
      </div>
    </div>
  );
}