import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Dr. Javier Rossi" },
      { name: "description", content: "Política de privacidad del sitio web del Dr. Javier Rossi." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-sm text-primary hover:underline">← Volver</Link>
        <h1 className="mt-6 text-3xl font-medium text-foreground">Política de Privacidad</h1>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          Esta página es un placeholder. El contenido de la política de privacidad será agregado próximamente.
        </p>
      </div>
    </div>
  );
}
