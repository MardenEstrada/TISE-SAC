import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón de menú hamburguesa (solo visible en móvil) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 text-gray-500 bg-gray-200 rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`relative top-0 left-0 z-40 w-64 h-full bg-gray-50 dark:bg-gray-800 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-4 py-6 space-y-4">
          {/* Botón para cerrar el menú en móvil */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 p-2 text-gray-500 bg-gray-200 rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            ✖️
          </button>

          {/* Logo o título */}
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            📊 Dashboard
          </h2>

          {/* Enlaces de navegación */}
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/Dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                🏠 <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Clients"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                📨 <span className="ml-3">Clientes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Employees"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                👥 <span className="ml-3">Empleados</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Payments"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                💳 <span className="ml-3">Pagos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Contracts"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                📜 <span className="ml-3">Contratos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Productivity"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                📊 <span className="ml-3">Productividad</span>
              </Link>
            </li>
          </ul>

          {/* Botón de salir */}
          <div className="mt-6">
            <Link
              to="/"
              className="block w-full px-4 mt-60 py-2 text-center text-white bg-orange-700 rounded-lg hover:bg-red-700"
            >
              🚪 Salir
            </Link>
          </div>
        </div>
      </aside>

      {/* Fondo oscuro cuando el menú está abierto en móvil */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black opacity-50 sm:hidden"
        ></div>
      )}
    </div>
  );
}
