import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { scrollToSection } from "../utils/scrollTo";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

function NavItem({ id, label, className, onNavigate }) {
  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection(id);
    onNavigate?.();
  };

  return (
    <a href={`#${id}`} onClick={handleClick} className={className}>
      {label}
    </a>
  );
}

export default function Navbar({ hasBanner = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  const topOffset = hasBanner ? "top-11 sm:top-10" : "top-0";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && NAV_ITEMS.some((n) => n.id === hash)) {
      setTimeout(() => scrollToSection(hash), 80);
    }
  }, []);

  const linkClass = (id) =>
    `nav-link ${activeId === id ? "nav-link-active font-semibold" : ""}`;

  return (
    <header
      className={`fixed ${topOffset} left-0 right-0 z-50 bg-navbar transition-[top,box-shadow] duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("inicio");
          }}
          className="shrink-0 rounded-lg"
          aria-label="TISE SAC - Ir al inicio"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavItem
                id={item.id}
                label={item.label}
                className={`${linkClass(item.id)} rounded-lg px-3 py-2`}
              />
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacto");
            }}
            className="btn-primary"
          >
            Contáctanos
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-muted hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col border-l bg-elevated p-6 shadow-2xl html.light:border-slate-200 html.dark:border-white/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-2 text-muted"
              aria-label="Cerrar menú"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-8 flex flex-1 flex-col gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavItem
                  id={item.id}
                  label={item.label}
                  onNavigate={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base ${linkClass(item.id)} html.light:hover:bg-slate-100 html.dark:hover:bg-white/10`}
                />
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacto");
              setMobileOpen(false);
            }}
            className="btn-primary mt-4 w-full justify-center"
          >
            Contáctanos
          </a>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
