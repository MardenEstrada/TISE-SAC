import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`rounded-full border p-2 transition html.light:border-slate-200 html.dark:border-white/15 ${className}`}
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-brand-400" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-600" aria-hidden="true" />
      )}
    </button>
  );
}
