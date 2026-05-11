import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const RECIPIENTS = [
  "dr_rossijavier@yahoo.com",
  "macarena.delgado.crear@gmail.com",
];

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().default(""),
  service: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function handleRequest(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!LOVABLE_API_KEY) {
    return Response.json(
      { error: "LOVABLE_API_KEY is not configured" },
      { status: 500 },
    );
  }
  if (!RESEND_API_KEY) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, phone, service, message } = parsed.data;

  const subject = `Nueva consulta web — ${name}`;
  const html = `
    <h2>Nueva consulta desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>WhatsApp / Teléfono:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Servicio de interés:</strong> ${escapeHtml(service || "—")}</p>
    <p><strong>Mensaje:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message || "—")}</p>
  `;
  const text = [
    `Nueva consulta desde el sitio web`,
    `Nombre: ${name}`,
    `Email: ${email}`,
    `WhatsApp / Teléfono: ${phone || "—"}`,
    `Servicio de interés: ${service || "—"}`,
    `Mensaje:`,
    message || "—",
  ].join("\n");

  const response = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: "Dr. Javier Rossi <noreply@drjavierrossi.com>",
      to: RECIPIENTS,
      reply_to: email,
      subject,
      html,
      text,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return Response.json(
      { error: "Email send failed", status: response.status, data },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: ({ request }: { request: Request }) => handleRequest(request),
    },
  },
});
