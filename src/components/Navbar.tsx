import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import logoRossi from "@/assets/logoRossi.png";

export function Navbar() {
  const { lang, toggleLang, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t("Dr. Javier Rossi", "About") },
    { href: "#servicios", label: t("Servicios", "Services") },
    { href: "#testimonios", label: t("Testimonios", "Testimonials") },
    { href: "#contacto", label: t("Contacto", "Contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={logoRossi} alt="Dr. Javier Rossi" className="w-10 h-10 object-contain" />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-normal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded px-2 py-1 transition-colors"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="https://wa.me/5491155921388"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center bg-teal text-teal-foreground text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            data-gtm="whatsapp-navbar"
          >
            {t("Consultar por WhatsApp", "Contact via WhatsApp")}
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5491155921388"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-teal text-teal-foreground text-sm font-medium px-4 py-2 rounded-md"
            data-gtm="whatsapp-navbar-mobile"
          >
            {t("Consultar por WhatsApp", "Contact via WhatsApp")}
          </a>
        </div>
      )}
    </nav>
  );
}
