import { useI18n } from "@/lib/i18n";

type Testimonial = {
  text: string;
  author: string;
};

const spanishTestimonials: Testimonial[] = [
  {
    author: "Silvana Goncalves",
    text: "Súper recomendable la experiencia con el Dr Rossi y su equipo. No solo los resultados de su práctica que es sensata y queda espectacular, además acompañan de forma cálida y cuidadosa los tratamientos.",
  },
  {
    author: "Angeles",
    text: "Son profesionales del más alto nivel aparte de ser super responsables el Dr. Rossi, la Dra. Castellano y todo el staff médico y administrativo de Crear. Están siempre ahí cuando los necesitás. Tienen muchos años de experiencia y lo más importante es que siempre ponen por delante de todo tu salud y la búsqueda de un resultado natural.",
  },
  {
    author: "Eliana Bracciaforte",
    text: "Soy paciente del Dr Rossi desde hace más de un año con tratamientos complejos y avanzados. Estoy muy agradecida del trato y calidad que recibí siempre de él y su equipo.",
  },
  {
    author: "Cesar Rodrigo Cabrera",
    text: "La calidad de los profesionales es la mejor, seriedad y responsabilidad desde el principio y un seguimiento en tiempo y forma. Super recomendable, la atención y calidez del doctor Rossi hace que te sientas como en casa. Impecable.",
  },
  {
    author: "Silvia Di Benedetto",
    text: "Me realicé una blefaroplastia acompañada de un lifting y lipofilling facial con el Dr. Rossi. Excelente atención en las dos consultas previas y excelente cirugía. Hoy hace tan solo 10 días y estoy muy bien, viendo mi notable cambio día a día. Muy feliz con el resultado, que no fue ni más ni menos lo que él me dijo que sucedería. Un placer ponerme en sus manos. Muchas gracias doctor Rossi y equipo.",
  },
  {
    author: "Gladis Risso Patron",
    text: "Me realizaron varios tratamientos, entre los cuales está una mastopexia bilateral — un trabajo excepcional del Dr. Rossi, quedé encantada. Excelente atención de todo el staff. Estoy muy contenta de haber encontrado un lugar que pueda cumplir todas mis expectativas.",
  },
];

const englishTestimonials: Testimonial[] = [
  {
    author: "western_rin",
    text: "I'm very happy with my FFS results. Dr. Rossi and his team took great care of me. I got a very balanced set of changes that look good and shifted how both I and others perceive my gender — exactly according to my desired goals for the procedure.",
  },
  {
    author: "Considerate4023",
    text: "I had a choice of any doctor in the world, but the moment I had my consultation with Dr. Rossi, I knew who was going to perform my Facial Feminization Surgery. His charm and wit is only surpassed by his knowledge and skill. I could not be happier with my results. My features went from hard and chiseled to soft and feminine. Now that the recovery time has passed, I am no longer misgendered. Thank you Dr. Rossi and the entire team.",
  },
  {
    author: "Energetic7872",
    text: "I had FFS with Dr. Rossi and found him and his team very professional and polite. My surgery changed my life. I had a lot of procedures done and I am so glad I chose Dr. Rossi. I would not hesitate recommending them to others wanting this surgery.",
  },
];

const testimonials: Testimonial[] = [...spanishTestimonials, ...englishTestimonials];

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
              <p className="mt-4 text-sm text-foreground leading-relaxed">
                "{item.text}"
              </p>
              <p className="mt-4 text-sm text-foreground">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
