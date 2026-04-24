import { useI18n } from "@/lib/i18n";
import { ImagePlaceholder } from "./ImagePlaceholder";
import serviceBoneSurgery from "@/assets/service-bone-surgery.jpg";
import serviceEyeSurgery from "@/assets/service-eye-surgery.jpg";
import serviceRejuvenation from "@/assets/service-rejuvenation.jpg";
import serviceFfs from "@/assets/service-ffs.jpg";

const serviceImages: Record<string, string> = {
  ffs: serviceFfs,
  osea: serviceBoneSurgery,
  rejuvenecimiento: serviceRejuvenation,
  mirada: serviceEyeSurgery,
};

interface Service {
  id: string;
  num: string;
  titleEs: string;
  titleEn: string;
  textEs: string;
  textEn: string;
  tagsEs: string[];
  tagsEn: string[];
  imgLabel: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    id: "ffs",
    num: "01",
    titleEs: "Feminización Facial",
    titleEn: "Facial Feminization Surgery",
    textEs: "Transformación quirúrgica integral de la estructura facial hacia una armonía femenina natural. Frontoplastia, orbitoplastia, mentoplastia, rinoplastia y más.",
    textEn: "Comprehensive surgical transformation of facial structure toward natural feminine harmony. Forehead, orbital, chin, rhinoplasty and more.",
    tagsEs: ["Frontoplastia", "Orbitoplastia", "Mentoplastia", "Rinoplastia"],
    tagsEn: ["Forehead", "Orbital", "Chin", "Rhinoplasty"],
    imgLabel: "Service image — FFS",
    featured: true,
  },
  {
    id: "osea",
    num: "02",
    titleEs: "Cirugía Estética Ósea Facial",
    titleEn: "Facial Aesthetic Bone Surgery",
    textEs: "Intervenciones precisas sobre la estructura ósea del rostro para lograr proporciones armónicas y resultados estructurales duraderos. Rinoplastía y mentoplastía.",
    textEn: "Precise interventions on facial bone structure to achieve harmonious proportions and lasting structural results.",
    tagsEs: ["Cirugía orbitaria", "Pómulos", "Mentón"],
    tagsEn: ["Orbital surgery", "Cheekbones", "Chin"],
    imgLabel: "Service image — Bone surgery",
  },
  {
    id: "rejuvenecimiento",
    num: "03",
    titleEs: "Rejuvenecimiento Facial",
    titleEn: "Facial Rejuvenation",
    textEs: "Abordaje integral del rejuvenecimiento con las técnicas más avanzadas. Resultados naturales que respetan la identidad del paciente. Lifting deep plane, lifting endoscópico y mini lifting facial.",
    textEn: "Comprehensive rejuvenation approach using the most advanced techniques. Natural results that respect the patient's identity.",
    tagsEs: ["Lifting Deep Plane", "Endolift Láser", "Liposegmentaria Facial"],
    tagsEn: ["Deep Plane Lift", "Laser Endolift", "Facial Liposegmental"],
    imgLabel: "Service image — Rejuvenation",
  },
  {
    id: "mirada",
    num: "04",
    titleEs: "Cirugía de la Mirada",
    titleEn: "Eye Rejuvenation Surgery",
    textEs: "Recuperá una mirada fresca y descansada. Blefaroplastia, lifting endoscópico de cejas y procedimientos de rejuvenecimiento periocular con resultados naturales.",
    textEn: "Restore a fresh, rested look. Blepharoplasty and periocular rejuvenation procedures with natural results.",
    tagsEs: ["Blefaroplastia", "Rejuvenecimiento periocular"],
    tagsEn: ["Blepharoplasty", "Periocular rejuvenation"],
    imgLabel: "Service image — Eye surgery",
  },
];

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="servicios" className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-sm font-medium text-primary tracking-wide">
          {t("Servicios", "Services")}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-foreground">
          {t("Cirugías especializadas en rostro", "Specialized facial surgeries")}
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <article
              key={svc.id}
              id={svc.id}
              className={`bg-background border border-border rounded-lg overflow-hidden ${
                svc.featured ? "border-t-2 border-t-primary" : ""
              }`}
            >
              {serviceImages[svc.id] ? (
                <img src={serviceImages[svc.id]} alt={t(svc.titleEs, svc.titleEn)} className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
              ) : (
                <ImagePlaceholder label={svc.imgLabel} aspectRatio="16/9" className="rounded-none border-0" />
              )}
              <div className="p-6">
                <span className="text-xs text-muted-foreground">{svc.num}</span>
                <h3 className="mt-1 text-lg font-medium text-foreground">
                  {t(svc.titleEs, svc.titleEn)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(svc.textEs, svc.textEn)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(t(svc.tagsEs.join("|"), svc.tagsEn.join("|"))).split("|").map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-lavender-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
