import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#111827] text-white shadow-lg border-b border-gray-700 fixed top-0 left-0 w-full z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="../assets/img/logo.png"
              alt="TISE SAC logo"
              className="h-10 w-auto rounded-full"
            />
            <span className="text-lg font-semibold text-[#d8ac4d] transition-all duration-300 hover:scale-105">
              TISE SAC
            </span>
          </Link>
        </div>

        {/* MENÚ PARA ESCRITORIO */}
        {/* MENÚ PARA ESCRITORIO */}
        <div className="hidden lg:flex lg:gap-x-10">
          <Link
            to="/"
            className="text-sm font-medium text-white hover:text-[#d8ac4d] transition-all duration-300 hover:scale-105"
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className="text-sm font-medium text-white hover:text-[#d8ac4d] transition-all duration-300 hover:scale-105"
          >
            Servicios
          </Link><Link
            to="/AboutUs"
            className="text-sm font-medium text-white hover:text-[#d8ac4d] transition-all duration-300 hover:scale-105"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/proyectos"
            className="text-sm font-medium text-white hover:text-[#d8ac4d] transition-all duration-300 hover:scale-105"
          >
            Proyectos
          </Link>
          <Link
            to="/contacto"
            className="text-sm font-medium text-white hover:text-[#d8ac4d] transition-all duration-300 hover:scale-105"
          >
            Contacto
          </Link>
        </div>

        {/* BOTÓN DE LOGIN */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="bg-[#d8ac4d] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
          >
            Iniciar sesión
          </Link>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white hover:text-[#d8ac4d] transition-all duration-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        {/* FONDO OSCURO DETRÁS DEL MENÚ */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-300" />

        {/* PANEL DEL MENÚ MÓVIL */}
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#1a2332]/90 p-6 shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="../assets/img/logo.png"
                alt="TISE SAC"
                className="h-10 w-auto rounded-full"
              />
              <span className="text-lg font-semibold text-[#d8ac4d] transition-all duration-300 hover:scale-105">
                TISE SAC
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d8ac4d] transition-all duration-300 hover:scale-110"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* MENÚ LINKS */}
          {/* MENÚ LINKS */}
          <div className="mt-6 space-y-4 text-center">
            <Link
              to="/"
              className="block text-white text-lg font-medium py-2 rounded-md hover:bg-[#d8ac4d] hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="block text-white text-lg font-medium py-2 rounded-md hover:bg-[#d8ac4d] hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
            >
              Servicios
            </Link>
            <Link
              to="/proyectos"
              className="block text-white text-lg font-medium py-2 rounded-md hover:bg-[#d8ac4d] hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
            >
              Proyectos
            </Link>
            <Link
              to="/contacto"
              className="block text-white text-lg font-medium py-2 rounded-md hover:bg-[#d8ac4d] hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
            >
              Contacto
            </Link>
          </div>

          {/* BOTÓN DE LOGIN */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-block bg-[#d8ac4d] text-gray-900 py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out hover:scale-110"
            >
              Iniciar sesión
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
