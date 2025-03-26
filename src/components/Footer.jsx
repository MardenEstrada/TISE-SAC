import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 shadow-sm rounded-t-lg">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          {/* Logo y Nombre */}
          <a href="#" className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0 space-x-3">
            <img
              src="../assets/img/logo.png"
              className="h-10"
              alt="TISE SAC Logo"
            />
            <span className="text-2xl font-semibold">TISE SAC</span>
          </a>

          {/* Enlaces */}
          <ul className="grid grid-cols-2 sm:flex sm:space-x-6 text-sm font-medium">
            {["Sobre nosotros", "Política de privacidad", "Servicios", "Contáctanos"].map((item, index) => (
              <li key={index} className="mb-2 sm:mb-0">
                <a href="#" className="hover:text-[#d8ac4d]">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Línea divisoria */}
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        {/* Derechos reservados */}
        <span className="block text-sm text-center">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="text-[#d8ac4d] hover:underline">
            TISE SAC™
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
