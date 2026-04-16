import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    es: "La consulta fue muy clara y profesional. El Dr. Rossi me explicó cada etapa y me dio la seguridad que necesitaba para tomar la decisión.",
    en: "The consultation was very clear and professional. Dr. Rossi explained each stage and gave me the confidence I needed to make the decision.",
    author: "M.G., Buenos Aires",
  },
  {
    es: "Saber que es Doctor de la UBA y profesor universitario marcó la diferencia. Confianza desde el primer momento.",
    en: "Knowing he holds a UBA doctorate and is a university professor made all the difference. Confidence from the very first moment.",
    author: "L.R., CABA",
  },
  {
    es: "El resultado fue exactamente lo que buscaba: natural y armónico. El seguimiento postoperatorio fue impecable.",
    en: "The result was exactly what I was looking for: natural and harmonious. The post-operative follow-up was impeccable.",
    authorEs: "S.V., España",
    authorEn: "S.V., Spain",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useI18n();

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-sm font-medium text-primary tracking-wide">
          {t("Pacientes", "Patients")}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-foreground">
          {t("Lo que dicen quienes ya confiaron", "What those who trusted say")}
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="border border-border rounded-lg p-6 bg-background">
              <Stars />
              <p className="mt-4 text-sm text-foreground leading-relaxed italic">
                "{t(item.es, item.en)}"
              </p>
              <p className="mt-4 text-xs text-muted-foreground font-medium">
                — {item.authorEs ? t(item.authorEs, item.authorEn!) : item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
