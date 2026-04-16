import { useI18n } from "@/lib/i18n";

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-teal-dark text-teal-dark-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-medium">
          {t("Comenzá tu consulta hoy", "Start your consultation today")}
        </h2>
        <p className="mt-4 text-base opacity-80 leading-relaxed">
          {t(
            "La primera consulta es el punto de partida. El Dr. Rossi evalúa tu caso, responde todas tus preguntas y te propone el camino más adecuado.",
            "The first consultation is the starting point. Dr. Rossi evaluates your case, answers all your questions and proposes the most appropriate path."
          )}
        </p>
        <a
          href="https://wa.me/5491155921388"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-8 bg-background text-primary text-sm font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          data-gtm="whatsapp-cta"
        >
          {t("Consultar por WhatsApp", "Contact via WhatsApp")}
        </a>
      </div>
    </section>
  );
}
