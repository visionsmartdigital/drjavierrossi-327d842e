import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Javier Rossi — Cirugía Facial Especializada en Buenos Aires" },
      { name: "description", content: "Más de 25 años de experiencia en cirugía facial. Triple especialización quirúrgica. Feminización facial, rejuvenecimiento, cirugía ósea y de la mirada. Buenos Aires, Argentina." },
      { property: "og:title", content: "Dr. Javier Rossi — Cirugía Facial Especializada" },
      { property: "og:description", content: "Triple especialización quirúrgica. Resultados naturales y seguros. Consultá hoy." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </I18nProvider>
  );
}
