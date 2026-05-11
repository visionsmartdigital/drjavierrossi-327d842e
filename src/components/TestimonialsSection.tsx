import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, isMobile]);

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-sm font-medium text-primary tracking-wide">
          {t("Pacientes", "Patients")}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-foreground">
          {t("Lo que dicen quienes ya confiaron", "What those who trusted say")}
        </h2>

        <div className="mt-10 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] md:flex-[0_0_33.3333%] min-w-0 px-3"
                >
                  <div className="border border-border rounded-lg p-6 bg-background h-full">
                    <Stars />
                    <p className="mt-4 text-sm text-foreground leading-relaxed">
                      "{item.text}"
                    </p>
                    <p className="mt-4 text-sm text-foreground">
                      — {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label={t("Anterior", "Previous")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`${t("Ir al testimonio", "Go to testimonial")} ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === selectedIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label={t("Siguiente", "Next")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
