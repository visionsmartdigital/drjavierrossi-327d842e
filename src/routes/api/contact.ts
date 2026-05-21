import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import nodemailer from "nodemailer";

const RECIPIENTS = [
  "macarena.delgado.crear@gmail.com",
  "dr_rossijavier@yahoo.com",
];

const FROM_ADDRESS = "consultas@drjavierrossi.com";
const SUBJECT = "Nueva consulta desde drjavierrossi.com";

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

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
        if (!SMTP_PASSWORD) {
          return Response.json(
            { error: "SMTP_PASSWORD is not configured" },
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

        const transporter = nodemailer.createTransport({
          host: "smtp.hostinger.com",
          port: 465,
          secure: true,
          auth: {
            user: "consultas@drjavierrossi.com",
            pass: SMTP_PASSWORD,
          },
        });

        try {
          await transporter.sendMail({
            from: `"Dr. Javier Rossi" <${FROM_ADDRESS}>`,
            to: RECIPIENTS,
            replyTo: email,
            subject: SUBJECT,
            html,
            text,
          });
        } catch (err) {
          console.error("SMTP send failed:", err);
          return Response.json(
            { error: "Email send failed" },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
