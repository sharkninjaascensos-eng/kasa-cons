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

function systemPrompt(lead?: LeadCtx, language?: "en" | "ro") {
  const ctx = lead
    ? `\n\nACTIVE LEAD CONTEXT (use it explicitly in your tactics):\n${JSON.stringify(lead, null, 2)}`
    : "";
  const lang = language === "ro" ? "Romanian" : "English";
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
4. **Exact script** — 2–4 verbatim sentences the rep can say.
5. **Next step** — one calibrated question or micro-commitment to ask for.

LANGUAGE: Write the ENTIRE reply (all 5 sections, headers included) in ${lang}. Do not mix languages.

Be concise, practical, no fluff, no disclaimers. Use markdown bold for the section headers above.${ctx}`;
}

export const Route = createFileRoute("/api/coach")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as {
          messages?: UIMessage[];
          lead?: LeadCtx;
          language?: "en" | "ro";
          vocarooUrl?: string;
        };
        if (!Array.isArray(body.messages)) {
          return new Response("messages required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        // If a Vocaroo URL is attached, resolve to the mp3 CDN and inject
        // an audio file part into the LAST user message so the model can
        // "listen" to the call recording alongside the rep's question.
        const messages = [...body.messages];
        const voc = (body.vocarooUrl ?? "").trim();
        if (voc) {
          const m = voc.match(/(?:voca\.ro|vocaroo\.com)\/(?:i\/)?([A-Za-z0-9]+)/);
          const id = m?.[1];
          if (id) {
            const audioUrl = `https://media.vocaroo.com/mp3/${id}`;
            for (let i = messages.length - 1; i >= 0; i--) {
              if (messages[i].role === "user") {
                const parts = [
                  ...messages[i].parts,
                  {
                    type: "file" as const,
                    mediaType: "audio/mpeg",
                    url: audioUrl,
                    filename: `vocaroo-${id}.mp3`,
                  },
                ];
                messages[i] = { ...messages[i], parts } as UIMessage;
                break;
              }
            }
          }
        }

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: systemPrompt(body.lead, body.language) + (voc
            ? "\n\nThe user attached a Vocaroo call recording as an audio file. Transcribe key moments briefly, analyze tone/emotion/objections you actually hear, then apply the standard 5-section output tailored to that recording."
            : ""),
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: body.messages });
      },
    },
  },
});