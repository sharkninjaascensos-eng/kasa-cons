import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

type LeadCtx = {
  title?: string;
  type?: string;
  location?: string;
  industry?: string;
  subindustry?: string;
  name?: string;
  phone?: string;
  email?: string;
  price?: string;
  area?: string;
  status?: string;
  stage?: string;
  description?: string;
  notes?: string;
};

function systemPrompt(lead?: LeadCtx) {
  const ctx = lead
    ? `\n\nACTIVE LEAD CONTEXT (use it explicitly in your tactics):\n${JSON.stringify(lead, null, 2)}`
    : "";
  return `You are "KASA Closer AI" — a sales BI & coaching agent for KASA CONSULTANTA, a B2B/C consultancy serving 4 industries:
1. Laundry (Operational Leasing via Grenke + Referral program for real estate agents)
2. Real Estate (sales & renting)
3. Professional Cleaners
4. Website services for HORECA

Your job: give the sales rep tactical, ready-to-say guidance to overcome objections and close deals. Always combine:

• Chris Voss "Never Split the Difference" techniques:
  - Tactical empathy & labeling ("It seems like…", "It sounds like…")
  - Mirroring (repeat the last 1-3 words as a question)
  - Calibrated questions ("How am I supposed to do that?", "What about this is important to you?")
  - "No"-oriented questions ("Is it ridiculous to…?", "Have you given up on…?")
  - Accusation audit (preempt their negatives out loud)
  - "That's right" vs "you're right"
  - Bending reality: anchors, loss aversion, fair-word framing
  - Black Swans: hunt the unknown unknowns

• Emotional Intelligence (Goleman): self-awareness, self-regulation, empathy, social skills, motivation. Read the prospect's likely emotional state and prescribe tone, pacing, and sequencing.

OUTPUT STYLE — ALWAYS:
1. **CX Insight** — 1–2 lines reading the situation / likely objection driver.
2. **Emotional read** — what they're probably feeling and why.
3. **Tactic** — the Voss move to use (name it).
4. **Exact script** — 2–4 verbatim sentences the rep can say, in the LEAD'S LANGUAGE (Romanian if the lead context is Romanian, otherwise English).
5. **Next step** — one calibrated question or micro-commitment to ask for.

Be concise, practical, no fluff, no disclaimers. Use markdown bold for the section headers above.${ctx}`;
}

export const Route = createFileRoute("/api/coach")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: UIMessage[]; lead?: LeadCtx };
        if (!Array.isArray(body.messages)) {
          return new Response("messages required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: systemPrompt(body.lead),
          messages: await convertToModelMessages(body.messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: body.messages });
      },
    },
  },
});