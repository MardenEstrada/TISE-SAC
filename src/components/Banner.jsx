import { XMarkIcon } from "@heroicons/react/20/solid";
import { scrollToSection } from "../utils/scrollTo";

export default function Banner({ onDismiss }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-x-4 px-4 py-2.5 text-center sm:px-6 html.light:bg-brand-50 html.light:border-b html.light:border-brand-200 html.dark:bg-gradient-to-r html.dark:from-[#111827] html.dark:via-[#1a2332] html.dark:to-[#111827]"
      role="region"
      aria-label="Anuncio"
    >
      <p className="text-xs sm:text-sm text-muted">
        <strong className="font-semibold text-primary">TISE SAC</strong>
        <span className="mx-2 hidden sm:inline opacity-50" aria-hidden="true">
          ·
        </span>
        <span className="hidden sm:inline">
          Soluciones digitales para empresas en Perú y Latinoamérica.
        </span>
      </p>
      <a
        href="#proyectos"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("proyectos");
        }}
        className="shrink-0 text-xs font-semibold text-brand-600 hover:text-brand-500 sm:text-sm dark:text-brand-400"
      >
        Ver proyectos →
      </a>
      <button
        type="button"
        onClick={onDismiss}
        className="absolute right-2 rounded-full p-1.5 text-muted hover:bg-black/5 sm:right-4 dark:hover:bg-white/10"
        aria-label="Cerrar anuncio"
      >
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
