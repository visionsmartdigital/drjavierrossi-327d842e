import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import drRossiPhoto from "@/assets/DR.RossiHD.png";

export function AboutSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const credentials = [
    {
      es: "Doctor en Medicina Quirúrgica — UBA | Especializado en Cirugía Facial. El máximo nivel académico en la carrera médica argentina.",
      en: "Doctorate in Surgical Medicine — UBA | Specialized in Facial Surgery. The highest academic level in Argentine medicine.",
      detailEs:
        "El Doctorado en Medicina es el máximo escalón académico de la carrera médica universitaria en Argentina. No existe título de posgrado superior. El Dr. Rossi lo obtuvo con especialización en Cirugía Facial en la Universidad de Buenos Aires.",
      detailEn:
        "A Doctorate in Medicine is the highest academic level in Argentine university medical training. No higher postgraduate degree exists. Dr. Rossi earned it with a specialization in Facial Surgery at the University of Buenos Aires.",
    },
    {
      es: "Triple especialización quirúrgica | Cirugía General · Cirugía de Cabeza, Cuello y Maxilofacial · Cirugía Plástica, Reparadora y Estética.",
      en: "Triple surgical specialization | General Surgery · Head, Neck & Maxillofacial Surgery · Plastic, Reconstructive & Aesthetic Surgery.",
      detailEs:
        "Pocos cirujanos en Argentina combinan estas tres especializaciones. Esta formación le permite al Dr. Rossi abordar el rostro desde una perspectiva integral: estructura ósea, tejidos blandos y estética, con dominio técnico en cada nivel.",
      detailEn:
        "Few surgeons in Argentina combine these three specializations. This training allows Dr. Rossi to approach the face from an integral perspective: bone structure, soft tissue and aesthetics, with technical mastery at every level.",
    },
    {
      es: "Director de Carrera y Residencia de Cirugía — UBA | Profesor universitario en UBA, Universidad del Salvador, Barceló y UCES.",
      en: "Director of Surgery Career & Residency — UBA | University professor at UBA, Universidad del Salvador, Barceló and UCES.",
      detailEs:
        "El Dr. Rossi no solo opera — forma a los cirujanos del futuro. Su rol como director y profesor universitario en UBA, Universidad del Salvador, Barceló y UCES refleja el reconocimiento de la comunidad académica a su trayectoria.",
      detailEn:
        "Dr. Rossi doesn't only operate — he trains the surgeons of the future. His role as director and university professor at UBA, Universidad del Salvador, Barceló and UCES reflects the academic community's recognition of his career.",
    },
    {
      es: "Hospital Militar Central | Miembro del American College of Surgeons y American Society of Plastic Surgery.",
      en: "Central Military Hospital | Member of the American College of Surgeons and American Society of Plastic Surgery.",
      detailEs:
        "Centro de referencia nacional para cirugías de alta complejidad. El Dr. Rossi desarrolló gran parte de su carrera en el HMC, uno de los hospitales con mayor exigencia técnica y quirúrgica del país.",
      detailEn:
        "A national reference center for high-complexity surgeries. Dr. Rossi developed much of his career at the HMC, one of the country's most technically and surgically demanding hospitals.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Photo */}
          <img
            src={drRossiPhoto}
            alt="Dr. Javier Rossi"
            className="w-full rounded-lg object-cover"
            style={{ aspectRatio: "3/4" }}
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
              {credentials.map((cred, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`group border border-border rounded-lg bg-background overflow-hidden transition-shadow duration-300 cursor-pointer hover:[box-shadow:0_4px_20px_rgba(156,141,183,0.45)] ${
                      isOpen ? "[box-shadow:0_4px_20px_rgba(156,141,183,0.45)]" : ""
                    }`}
                    onMouseEnter={() => setOpenIndex(i)}
                    onMouseLeave={() => setOpenIndex((cur) => (cur === i ? null : cur))}
                    onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
                  >
                    <div className="p-4">
                      <p className="text-sm text-foreground leading-relaxed">
                        {t(cred.es, cred.en)}
                      </p>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="px-4 pt-3 pb-4 text-sm leading-relaxed text-white"
                          style={{ backgroundColor: "#9C8DB7" }}
                        >
                          {t(cred.detailEs, cred.detailEn)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
