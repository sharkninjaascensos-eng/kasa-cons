import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { Brain, Send, X, Sparkles, AlertTriangle } from "lucide-react";
import ReactMarkdown from "react-markdown";

export type CoachLead = {
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
};

const QUICK_PROMPTS = [
  "Clientul spune ca e prea scump. Cum raspund?",
  "Nu raspunde la telefon de 3 zile. Ce fac?",
  "Vrea sa se mai gandeasca. Cum inchid azi?",
  "Compara cu un competitor. Cum diferentiez?",
  "Trebuie sa vorbesc cu sotia/sotul. Cum avansez?",
  "Vrea sa analizeze piata si sa intrebe vecinii. Cum inchid?",
  "Vrea sa vanda/inchirieze la acelasi pret ca vecinul din bloc. Cum ajustez asteptarea?",
];

export function CoachPanel({ lead, onClose }: { lead: CoachLead; onClose: () => void }) {
  const [language, setLanguage] = useState<"en" | "ro">("ro");

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/coach",
        body: { lead, language },
      }),
    [lead, language],
  );

  const { messages, sendMessage, status, error } = useChat({
    id: `coach-${lead.title ?? "lead"}`,
    transport,
  });

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const loading = status === "submitted" || status === "streaming";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const submit = (text: string) => {
    const value = text.trim();
    if (!value || loading) return;
    sendMessage({ text: value });
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
      <div className="bg-card text-card-foreground w-full max-w-2xl h-[90vh] sm:h-[80vh] rounded-lg shadow-2xl border-t-4 border-primary flex flex-col overflow-hidden">
        <header className="px-4 py-3 border-b border-border flex items-center gap-2 bg-foreground text-background">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <Brain className="h-4 w-4 text-primary-foreground"/>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-black text-sm tracking-wide">KASA Closer AI</div>
            <div className="text-[10px] text-background/60 truncate">
              {lead.title ?? "Lead"} · Chris Voss + EQ tactics
            </div>
          </div>
          <div className="flex items-center gap-1 mr-1 bg-white/10 rounded p-0.5">
            <button
              onClick={() => setLanguage("ro")}
              className={`text-[10px] font-bold px-2 py-1 rounded ${language === "ro" ? "bg-primary text-primary-foreground" : "text-background/70 hover:text-background"}`}
            >
              RO
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-[10px] font-bold px-2 py-1 rounded ${language === "en" ? "bg-primary text-primary-foreground" : "text-background/70 hover:text-background"}`}
            >
              EN
            </button>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded">
            <X className="h-5 w-5"/>
          </button>
        </header>

        <div className="px-3 py-2 bg-red-600 text-white text-[11px] font-semibold flex items-start gap-2 border-b border-red-800">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            {language === "ro"
              ? "Recomandare: Contacteaza TM sau Avocatul pentru a confirma daca cererea clientului se aliniaza cu ce propunem noi."
              : "Reminder: Contact TM or the Lawyer to confirm whether the client's request aligns with what we offer."}
          </span>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.length === 0 && (
            <div className="text-center py-6">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-2"/>
              <p className="text-sm text-muted-foreground mb-4">
                Cere insights, gestionarea obiectiilor sau scripturi de inchidere.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto">
                {QUICK_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => submit(p)}
                    className="text-xs text-left p-2 border border-border rounded bg-card hover:border-primary hover:text-primary transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m: UIMessage) => {
            const text = m.parts
              .map((p) => (p.type === "text" ? p.text : ""))
              .join("");
            const isUser = m.role === "user";
            return (
              <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                    isUser
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  }`}
                >
                  {isUser ? (
                    <div className="whitespace-pre-wrap">{text}</div>
                  ) : (
                    <div className="prose prose-sm max-w-none prose-headings:my-1 prose-p:my-1 prose-ul:my-1 prose-strong:text-primary">
                      <ReactMarkdown>{text || "..."}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="text-xs text-muted-foreground italic flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"/>
              Coach analizeaza...
            </div>
          )}
          {error && (
            <div className="text-xs text-primary font-semibold border border-primary/30 bg-primary/10 p-2 rounded">
              Eroare: {error.message}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
          className="border-t border-border p-2 flex gap-2 bg-card"
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit(input);
              }
            }}
            placeholder="Intreaba coach-ul (Enter trimite)..."
            rows={2}
            disabled={loading}
            className="flex-1 resize-none text-sm border border-input rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="self-end bg-primary text-primary-foreground rounded px-3 py-2 text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <Send className="h-4 w-4"/>
          </button>
        </form>
      </div>
    </div>
  );
}