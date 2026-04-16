import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // GTM event — ready for integration
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "contact_form_submit" });
    }
    setSubmitted(true);
  };

  const serviceOptions = [
    { es: "Feminización Facial", en: "Facial Feminization Surgery" },
    { es: "Cirugía Estética Ósea Facial", en: "Facial Aesthetic Bone Surgery" },
    { es: "Rejuvenecimiento Facial", en: "Facial Rejuvenation" },
    { es: "Cirugía de la Mirada", en: "Eye Rejuvenation Surgery" },
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-lg">
          {/* Info panel */}
          <div className="bg-teal-dark text-teal-dark-foreground p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-medium">
              {t("¿Tenés alguna consulta?", "Have a question?")}
            </h2>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              {t(
                "Completá el formulario y te respondemos a la brevedad.",
                "Fill out the form and we'll get back to you shortly."
              )}
            </p>
            <div className="mt-8 space-y-4 text-sm opacity-90">
              <p>📍 Av. Acoyte 76 piso 5D, Caballito, CABA, Argentina</p>
              <p>📱 +54 9 11 5592-1388</p>
              <p>✉️ consultas@drjavierrossi.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="border border-border border-l-0 p-8 md:p-12 bg-background">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-primary font-medium">
                  {t("¡Gracias! Nos comunicaremos pronto.", "Thank you! We'll be in touch soon.")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-gtm="contact-form">
                <div>
                  <label className="block text-sm text-foreground mb-1.5">
                    {t("Nombre completo", "Full name")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-1.5">
                    {t("WhatsApp / Teléfono", "WhatsApp / Phone")}
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-1.5">
                    {t("Servicio de interés", "Service of interest")}
                  </label>
                  <select
                    required
                    className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">{t("Seleccionar...", "Select...")}</option>
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt.es}>
                        {t(opt.es, opt.en)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-1.5">
                    {t("Mensaje (opcional)", "Message (optional)")}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground text-sm font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                  data-gtm="contact-form-submit"
                >
                  {t("Enviar consulta", "Send inquiry")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
