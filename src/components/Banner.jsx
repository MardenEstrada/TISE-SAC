import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed isolate z-90 w-full flex items-center justify-center gap-x-6 overflow-hidden px-6 py-3 sm:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <p className="text-sm font-medium text-gray-300 text-center">
              <strong className="text-white font-semibold">
                TISE SAC : Innovación y Tecnología
              </strong>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline size-0.5 fill-current text-gray-500"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              Descubre cómo transformamos ideas en software de alto impacto.
            </p>
            <Link
              to="/proyectos"
              className="flex-none rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-semibold text-gray-900 shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 focus:outline-none"
            >
              Conoce nuestros proyectos <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="absolute right-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.2, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setIsVisible(false)}
              className="-m-3 p-1.5 rounded-full bg-gray-800 shadow-md transition-colors duration-300 hover:bg-red-500"
            >
              <span className="sr-only">Cerrar</span>
              <XMarkIcon
                aria-hidden="true"
                className="size-5 text-gray-300 hover:text-white"
              />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
