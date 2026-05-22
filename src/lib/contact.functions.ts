import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const RECIPIENT = "vision.smartdigital@gmail.com";
const FROM_ADDRESS = "Dr. Javier Rossi <onboarding@resend.dev>";
const SUBJECT = "Nueva consulta desde drjavierrossi.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

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

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, email, phone, service, message } = data;

    const html = `
      <h2>Nueva consulta desde el sitio web</h2>
      <p><strong>Nombre completo:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>WhatsApp / Teléfono:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Servicio de interés:</strong> ${escapeHtml(service || "—")}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message || "—")}</p>
    `;
    const text = [
      `Nueva consulta desde el sitio web`,
      `Nombre completo: ${name}`,
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
        from: FROM_ADDRESS,
        to: [RECIPIENT],
        reply_to: email,
        subject: SUBJECT,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend send failed [${response.status}]:`, body);
      throw new Error("Email send failed");
    }

    return { ok: true };
  });
