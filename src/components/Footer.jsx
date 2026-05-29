import Logo from "./Logo";
import { scrollToSection } from "../utils/scrollTo";

const footerLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="scroll-mt-28 border-t html.light:border-slate-200 html.light:bg-white html.dark:border-white/10 html.dark:bg-[#111827]"
    >
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("inicio");
              }}
              aria-label="TISE SAC - Inicio"
            >
              <Logo />
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Tecnología, Innovación y Soluciones Empresariales. Empresa peruana especializada en
              software, telecomunicaciones y transformación digital.
            </p>
            <address className="mt-6 space-y-2 text-sm not-italic text-muted">
              <p>
                <span className="font-medium text-primary">Dirección:</span> San Isidro, Lima, Perú
              </p>
              <p>
                <span className="font-medium text-primary">Correo:</span>{" "}
                <a href="mailto:contacto@tisesac.com" className="text-brand-500 hover:underline">
                  contacto@tisesac.com
                </a>
              </p>
              <p>
                <span className="font-medium text-primary">Horario:</span> Lun–Vie, 9:00 – 18:00
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Navegación
            </h3>
            <nav className="mt-4" aria-label="Enlaces del pie de página">
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {footerLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="text-sm text-muted transition hover:text-brand-500"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="#contacto" className="btn-primary mt-8 inline-flex">
              Escríbenos
            </a>
          </div>
        </div>

        <hr className="my-8 html.light:border-slate-200 html.dark:border-white/10" />

        <p className="text-center text-sm text-muted sm:text-left">
          © {new Date().getFullYear()} TISE SAC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
