import { useI18n } from "@/lib/i18n";
import drRossiPhoto from "@/assets/DR.RossiHD.png";

export function AboutSection() {
  const { t } = useI18n();

  const credentials = [
    {
      es: "Doctor en Medicina Quirúrgica — UBA | Especializado en Cirugía Facial. El máximo nivel académico en la carrera médica argentina.",
      en: "PhD in Surgical Medicine — UBA | Specialized in Facial Surgery. The highest academic level in Argentine medicine.",
    },
    {
      es: "Triple especialización quirúrgica | Cirugía General · Cirugía de Cabeza, Cuello y Maxilofacial · Cirugía Plástica, Reparadora y Estética.",
      en: "Triple surgical specialization | General Surgery · Head, Neck & Maxillofacial Surgery · Plastic, Reconstructive & Aesthetic Surgery.",
    },
    {
      es: "Director de Carrera y Residencia de Cirugía — UBA | Profesor universitario en UBA, Universidad del Salvador, Barceló y UCES.",
      en: "Director of Surgery Career & Residency — UBA | University professor at UBA, Universidad del Salvador, Barceló and UCES.",
    },
    {
      es: "Hospital Militar Central | Miembro del American College of Surgeons y American Society of Plastic Surgery.",
      en: "Central Military Hospital | Member of the American College of Surgeons and American Society of Plastic Surgery.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Photo */}
          <ImagePlaceholder
            label={t("Foto retrato Dr. Rossi — se subirá", "Dr. Rossi portrait photo — will be uploaded")}
            aspectRatio="3/4"
          />

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary tracking-wide">
              {t("El profesional", "The professional")}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-foreground leading-snug">
              {t(
                "Una formación sin igual en cirugía facial",
                "Unmatched credentials in facial surgery"
              )}
            </h2>

            {/* Pull quote */}
            <blockquote className="mt-6 border-l-2 border-primary pl-5 text-muted-foreground italic text-base leading-relaxed">
              {t(
                "Cada intervención quirúrgica es el resultado de décadas de formación y miles de horas en quirófano.",
                "Every surgical intervention is the result of decades of training and thousands of hours in the operating room."
              )}
            </blockquote>

            {/* Credential cards */}
            <div className="mt-8 space-y-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-4 bg-background"
                >
                  <p className="text-sm text-foreground leading-relaxed">
                    {t(cred.es, cred.en)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
