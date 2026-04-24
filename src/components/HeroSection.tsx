import { useI18n } from "@/lib/i18n";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="pt-24 pb-0 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-12 md:py-20">
          {/* Text */}
          <div>
            <span className="text-sm font-medium text-primary tracking-wide">
              {t(
                "Cirugía Facial Especializada · Buenos Aires",
                "Specialized Facial Surgery · Buenos Aires"
              )}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-[2.75rem] leading-tight font-medium text-foreground">
              {t(
                "Tu cambio empieza con el tratamiento indicado",
                "Your change starts with the right treatment"
              )}
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {t(
                "Más de 25 años de experiencia. Triple especialización quirúrgica. Resultados naturales y seguros.",
                "Over 25 years of experience. Triple surgical specialization. Natural and safe results."
              )}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5491155921388"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-teal text-teal-foreground text-sm font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                data-gtm="whatsapp-hero"
              >
                {t("Consultar por WhatsApp", "Contact via WhatsApp")}
              </a>
              <a
                href="#about"
                className="text-sm text-primary hover:underline font-medium"
              >
                {t("Conocer al Dr. Rossi →", "Meet Dr. Rossi →")}
              </a>
            </div>
          </div>
          {/* Image */}
          <img
            src={heroImage}
            alt={t("Cirugía facial especializada", "Specialized facial surgery")}
            className="w-full rounded-lg object-cover"
            style={{ aspectRatio: "4/5" }}
          />
        </div>
      </div>

      {/* Credentials bar */}
      <div className="bg-teal-dark text-teal-dark-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "+25", label: t("Años de experiencia", "Years of experience") },
            { stat: "Doctorate", label: t("Doctor UBA en Medicina Quirúrgica", "UBA PhD in Surgical Medicine") },
            { stat: "×3", label: t("Especializaciones quirúrgicas", "Surgical specializations") },
            { stat: "UBA", label: t("Profesor de cirugía", "Professor of Surgery") },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-2xl font-medium">{item.stat}</p>
              <p className="text-sm opacity-80 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
