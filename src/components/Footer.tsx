import { useI18n } from "@/lib/i18n";
import logoRossi from "@/assets/logo-rossi.png";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { href: "#about", label: t("Dr. Javier Rossi", "About") },
    { href: "#servicios", label: t("Servicios", "Services") },
    { href: "#testimonios", label: t("Testimonios", "Testimonials") },
    { href: "#contacto", label: t("Contacto", "Contact") },
  ];

  return (
    <footer className="bg-footer text-footer-foreground py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <img src={logoRossi} alt="Dr. Javier Rossi" className="max-w-[160px] w-auto h-auto mx-auto md:mx-0 md:h-10 md:max-w-none shrink-0" />

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-footer-foreground/50 space-y-1">
            <p>© 2026 Dr. Javier Rossi · {t("Todos los derechos reservados", "All rights reserved")}</p>
            <a href="/privacy" className="hover:text-footer-foreground/70 transition-colors">
              {t("Política de privacidad", "Privacy Policy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
