import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 animate-fade-in min-h-screen flex flex-col">
      <Navbar />
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 sm:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 md:py-16 lg:flex lg:gap-x-16 lg:px-20 lg:py-0 hover:shadow-2xl transition-all duration-500">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl transition-transform duration-500 hover:scale-105">
              Nuestra Historia,
              <span className="text-yellow-400"> Nuestro Compromiso.</span>
            </h2>
            <p className="mt-5 text-lg text-gray-300 sm:text-xl transition-all duration-500 hover:text-yellow-300">
              En <strong className="text-white">TISE S.A.C.</strong>, combinamos innovación y tecnología
              para transformar empresas, optimizando procesos con soluciones digitales avanzadas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#"
                className="w-full sm:w-auto rounded-md bg-yellow-500 px-6 py-3 text-base font-semibold text-black shadow-md hover:scale-105 hover:bg-yellow-400 hover:shadow-lg transition-all duration-500"
              >
                Contáctanos
              </a>
              <a
                href="#"
                className="w-full mt-3 sm:w-auto text-base font-semibold text-gray-300 hover:text-yellow-400 transition-all hover:scale-105 duration-500"
              >
                Ver más <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* Imagen */}
          <div className="relative mt-12 h-64 sm:h-80 md:h-96 lg:mt-0 lg:w-1/2">
            <img
              alt="Equipo de trabajo"
              src="https://c4.wallpaperflare.com/wallpaper/554/984/33/mr-robot-4k-cool-pic-wallpaper-thumb.jpg"
              width={1824}
              height={1080}
              className="absolute top-5 left-0 w-full h-full object-cover rounded-lg shadow-md ring-1 ring-gray-800 transition-transform duration-500 hover:scale-110 hover:rotate-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
