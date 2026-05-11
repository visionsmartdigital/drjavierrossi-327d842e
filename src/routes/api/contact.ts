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

export const Route = createFileRoute("/api/contact")({
  staticData: {
    // This marks it as an API route in TanStack Start
    server: true,
  },
});
