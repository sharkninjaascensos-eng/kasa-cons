import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  LayoutDashboard, Calendar, Users, Building2, FileText, Home, FolderKanban,
  Monitor, Handshake, ArrowLeftRight, FileSignature, BarChart3, LineChart,
  Megaphone, Calculator, DollarSign, Mail, Plug, Menu, MoreVertical, Search,
  MapPin, Download, Flag, Bookmark, Phone, LogOut, ChevronDown, Lock, Upload, Trash2, FileText as FileTextIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KASA CONSULTANTA — CRM" },
      { name: "description", content: "CRM imobiliar KASA CONSULTANTA: leaduri, contacte, proprietati și rapoarte." },
      { property: "og:title", content: "KASA CONSULTANTA — CRM" },
      { property: "og:description", content: "CRM imobiliar pentru gestionarea leadurilor și a portofoliului." },
    ],
  }),
  component: Index,
});

const navGroups = [
  {
    label: null,
    items: [{ icon: LayoutDashboard, label: "Dashboard", active: false }],
  },
  {
    label: "BAZA DE DATE",
    items: [
      { icon: Calendar, label: "Activitati" },
      { icon: Users, label: "Contacte" },
      { icon: Building2, label: "Firme" },
      { icon: FileText, label: "Cereri" },
      { icon: Home, label: "Proprietati" },
      { icon: FolderKanban, label: "Proiecte" },
      { icon: Monitor, label: "Particulari", badge: "CRM", active: true },
      { icon: Monitor, label: "Particulari", badge: "Argus" },
      { icon: Handshake, label: "Colaborare", badge: "Nou" },
      { icon: ArrowLeftRight, label: "Tranzactii" },
      { icon: FileSignature, label: "Contracte" },
      { icon: BarChart3, label: "Analiza", badge: "Nou" },
      { icon: LineChart, label: "Rapoarte" },
    ],
  },
  {
    label: "MARKETING",
    items: [{ icon: Megaphone, label: "Publicare" }],
  },
  {
    label: "UTILE",
    items: [
      { icon: Calculator, label: "Calculator Taxe" },
      { icon: DollarSign, label: "Curs Valutar" },
      { icon: Mail, label: "Semnatura Email" },
      { icon: Plug, label: "Integrari" },
    ],
  },
];

type Lead = {
  id: string;
  title: string;
  type: string;
  location: string;
  updated: string;
  posted: string;
  source: string;
  views?: string;
  price: string;
  area: string;
  year?: string;
  category?: string;
  name: string;
  phone?: string;
  email?: string;
  description: string;
  image: string;
};

const defaultLeads: Lead[] = [
  {
    id: "1",
    title: "Afacere de vanzare la cheie",
    type: "Spatiu comercial de vanzare",
    location: "Morarilor Sector 2, Bucuresti, Ilfov",
    updated: "11.06.2026 08:47",
    posted: "11.06.2026 08:47",
    source: "publi24.ro (2 afisari)",
    price: "45.000 EUR",
    area: "260 mp utili",
    year: "2000",
    category: "Spatiu comercial",
    name: "Totidal Service Auto Srl",
    phone: "0775668217",
    description:
      "Vand afacere la cheie. Service autocutiat cu tot ce este nevoie sa incepi lucrul imediat. 3 elevatoare cu bancuri de lucru, vulcanizare. ID anunt: 1775473144",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "Vanzare spatiu comercial M Barvu x Ferdinand 7mp",
    type: "Spatiu comercial de vanzare",
    location: "Sector 2, Bucuresti, Ilfov",
    updated: "11.06.2026 07:17",
    posted: "11.06.2026 07:12",
    source: "olx.ro",
    price: "35.000 EUR",
    area: "7 mp utili",
    name: "Razvan",
    phone: "0722785568",
    description:
      "7 mp Proprietar persoana fizica. Instalatie electrica noua. Apa AC invertor, Hi Fi. Este liber. Cafeneaua utilaje si firma fara datorii (4500eur). Chiria media a fost 250 euro. Fara mesaje. Fara schimburi.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "Calea 13 Septembrie, zona Hotel Marriott, Palatul Parlamentului",
    type: "Spatiu comercial de vanzare",
    location: "Sector 5, Bucuresti, Ilfov",
    updated: "11.06.2026 01:16",
    posted: "11.06.2026 01:12",
    source: "olx.ro (5 afisari)",
    price: "900 EUR",
    area: "135 mp utili",
    name: "Bratosin Adrian",
    phone: "0722769333",
    description:
      "1. Demisol, 135 mp. Lumina naturala si fereste, partial cu inaltime de 3.5 m, accesul se face pe scari sau cu ascensorul. Pret: 900 e + TVA 2. Etajul 4, 100 mp. Compartimentat in 3 camere + 2 toalete. Pret: 1.500 e + TVA. Locuri de parcare fara plata. Cladire...",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "De Inchiriat Spatiu comercial + curte Zona Decebal",
    type: "Spatiu comercial de inchiriat",
    location: "Sector 3, Bucuresti, Ilfov",
    updated: "10.06.2026 19:17",
    posted: "10.06.2026 18:10",
    source: "olx.ro",
    price: "2.500 EUR",
    area: "200 mp utili",
    name: "Cristian",
    phone: "0724888731",
    description:
      "De inchiriat spatiu comercial in Zona Decebal: Theodor sperantia 73, 70 mp open space + garsoniera 30 mp + 100 mp curte. Spatiul + curtea este gata mobilat si placut vizual aranjat pentru a putea deschide ce se doreste in imediata inchiriere. Cerem si oferim serios.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    title: "Hala depozit de vanzare in Bucuresti Sector 1, Zona Nord, Baneasa Odai",
    type: "Spatiu industrial de vanzare",
    location: "Baneasa Sector 1, Bucuresti, Ilfov",
    updated: "10.06.2026 17:43",
    posted: "10.06.2026 17:43",
    source: "olx.ro",
    price: "1.200.000 EUR",
    area: "2000 mp utili",
    name: "Clara Stancu",
    phone: "400721284221",
    description:
      "Spatiu industrial de logistica, depozitare si productie situat in zona de nord a Bucurestiului, soseaua de centura Odai. Suprafata totala 2000 mp. Suprafata birouri 200 mp. Suprafata teren 2000 mp. Spatiu construit din stalpi beton si grinzi metalice cu inchidere perimetrala.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    title: "Imobil premium cu chirias de renume Piata Victoriei | 67 mp | 460.000 euro",
    type: "Spatiu comercial de vanzare",
    location: "Piata Victoriei Sector 1, Bucuresti, Ilfov",
    updated: "10.06.2026 11:24",
    posted: "10.06.2026 11:24",
    source: "publi24.ro (1 afisari)",
    price: "460.000 EUR",
    area: "67 mp utili",
    year: "1982",
    category: "Spatiu comercial",
    name: "Alexandru",
    phone: "0757662131",
    description:
      "Locatia spune totul. Piata Victoriei este unul dintre cele mai dinamice si vizibile puncte comerciale din Bucuresti, cu trafic pietonal si auto ridicat, excelenta conectivitate si o cerere constanta din partea brandurilor care isi doresc prezenta in zona.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border min-h-screen">
      <div className="px-5 py-5 border-b border-sidebar-border flex items-center gap-2">
        <div className="h-9 w-9 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-black text-lg">K</div>
        <div className="leading-tight">
          <div className="font-black tracking-wide text-sm">KASA</div>
          <div className="text-[10px] tracking-[0.2em] text-sidebar-foreground/60">CONSULTANTA</div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-3 text-sm">
        {navGroups.map((group, gi) => (
          <div key={gi} className="mb-3">
            {group.label && (
              <div className="px-5 pt-3 pb-1 text-[10px] font-semibold tracking-[0.18em] text-sidebar-foreground/50">
                {group.label}
              </div>
            )}
            <ul>
              {group.items.map((item, i) => {
                const Icon = item.icon;
                const active = "active" in item && item.active;
                return (
                  <li key={i}>
                    <a
                      href="#"
                      className={`flex items-center gap-3 px-5 py-2 transition-colors border-l-2 ${
                        active
                          ? "bg-sidebar-accent border-primary text-white"
                          : "border-transparent hover:bg-sidebar-accent/60 text-sidebar-foreground/85"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1">{item.label}</span>
                      {"badge" in item && item.badge && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${
                          item.badge === "Nou"
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/10 text-sidebar-foreground/80"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

const STATUS_OPTIONS = [
  { value: "new", label: "Lead nou", color: "bg-foreground text-background" },
  { value: "contacted", label: "Contactat", color: "bg-primary text-primary-foreground" },
  { value: "no_response", label: "Nu raspunde", color: "bg-yellow-500 text-black" },
  { value: "not_interested", label: "Neinteresat", color: "bg-zinc-500 text-white" },
] as const;
type StatusValue = typeof STATUS_OPTIONS[number]["value"];

function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else cur += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === "," || c === ";") { out.push(cur); cur = ""; }
      else cur += c;
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function parseCsvToLeads(text: string): Lead[] {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.trim() !== "");
  if (lines.length < 2) return [];
  const headers = parseCsvLine(lines[0]).map((h) => h.toLowerCase().replace(/^"|"$/g, ""));
  const leads: Lead[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i]);
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => { row[h] = cells[idx] ?? ""; });
    const title = row.title || row.titlu || row.name || "";
    if (!title) continue;
    leads.push({
      id: `csv-${Date.now()}-${i}`,
      title,
      type: row.type || row.tip || "Lead importat",
      location: row.location || row.locatie || "",
      updated: row.updated || row.actualizat || new Date().toLocaleString("ro-RO"),
      posted: row.posted || row.aparitie || row.updated || new Date().toLocaleString("ro-RO"),
      source: row.source || row.sursa || "CSV import",
      price: row.price || row.pret || "—",
      area: row.area || row.suprafata || "—",
      year: row.year || row.an || undefined,
      category: row.category || row.categorie || undefined,
      name: row.name || row.nume || row.contact || "—",
      phone: row.phone || row.telefon || undefined,
      email: row.email || undefined,
      description: row.description || row.descriere || "",
      image: row.image || row.imagine || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    });
  }
  return leads;
}

async function extractPdfText(file: File): Promise<string[]> {
  const pdfjs: any = await import("pdfjs-dist/build/pdf.mjs");
  const workerSrc = (await import("pdfjs-dist/build/pdf.worker.mjs?url")).default;
  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
  const buf = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: buf }).promise;
  const pages: string[] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    // Reconstruct lines using y-coords
    const items = content.items as any[];
    const lines: Record<string, { x: number; str: string }[]> = {};
    for (const it of items) {
      const y = Math.round(it.transform[5]);
      const key = String(y);
      (lines[key] ||= []).push({ x: it.transform[4], str: it.str });
    }
    const sortedYs = Object.keys(lines).map(Number).sort((a, b) => b - a);
    const pageText = sortedYs
      .map((y) =>
        lines[String(y)]
          .sort((a, b) => a.x - b.x)
          .map((p) => p.str)
          .join(" ")
          .replace(/\s+/g, " ")
          .trim(),
      )
      .filter(Boolean)
      .join("\n");
    pages.push(pageText);
  }
  return pages;
}

function parsePdfTextToLeads(pages: string[]): Lead[] {
  const out: Lead[] = [];
  const fullText = pages.join("\n");
  // Split on "Actualizat la:" which appears once per lead, then look back for title
  const blocks = fullText.split(/(?=Actualizat la:)/g);
  let prevTail = "";
  let idx = 0;
  for (const raw of blocks) {
    if (!/Actualizat la:/.test(raw)) {
      prevTail = raw;
      continue;
    }
    const block = prevTail + raw;
    prevTail = "";

    const get = (re: RegExp) => {
      const m = block.match(re);
      return m ? m[1].trim() : "";
    };

    // Title: the line right before the "Spatiu ... de vanzare|inchiriat" descriptor
    const typeMatch = block.match(
      /(Spatiu [a-zA-Z]+ de (?:vanzare|inchiriat)[^\n,]*),\s*([^\n]+?)(?=\s*Actualizat la:)/,
    );
    const type = typeMatch ? typeMatch[1].trim() : "Spatiu comercial";
    const location = typeMatch ? typeMatch[2].trim() : "";

    // Title is the text right before the type
    let title = "Lead importat din PDF";
    if (typeMatch) {
      const before = block.slice(0, block.indexOf(typeMatch[0]));
      const lines = before.split("\n").map((l) => l.trim()).filter(Boolean);
      // Drop boilerplate
      const cleaned = lines.filter(
        (l) =>
          !/^(IMOFLEX|KASA|Dashboard|BAZA DE DATE|MARKETING|UTILE|Titlu|descarca poze|Vezi pe harta|Salveaza|Raporteaza|Sursa:|Prima aparitie|Cauta Anunturi|Particulari|Vezi mai mult|Telefon:|Nume:|E-mail:)/i.test(
            l,
          ) && l.length > 3 && l.length < 200,
      );
      if (cleaned.length) title = cleaned[cleaned.length - 1];
    }

    const updated = get(/Actualizat la:\s*([0-9.: ]+)/);
    const posted = get(/Prima aparitie:\s*([0-9.: ]+)/);
    const source = get(/Sursa:\s*([^\s\n]+(?:\s*\([^)]+\))?)/);
    const priceM = block.match(
      /([\d.,]+\s*(?:EUR|RON)(?:\s*negociabil)?)/,
    );
    const areaM = block.match(/(\d[\d.,]*\s*mp[^\n,]*)/);
    const yearM = block.match(/\b(19\d{2}|20\d{2})\b/);
    const phoneM = block.match(/(?:Telefon:\s*)(0\d{8,10}|\+?\d{9,15})/);
    const emailM = block.match(/([\w.+-]+@[\w-]+\.[\w.-]+)/);
    const nameM = block.match(/Nume:\s*([^\n]+?)(?=\s+Telefon:|\s+E-mail:|\n|$)/);

    // Description: text after "Raporteaza Anunt"
    const descM = block.match(/Raporteaza Anunt\s*([\s\S]+?)(?=\n|Vezi mai mult|$)/);
    let description = descM ? descM[1].trim() : "";
    description = description.replace(/\s+/g, " ").slice(0, 600);

    out.push({
      id: `pdf-${Date.now()}-${idx++}`,
      title,
      type,
      location,
      updated: updated || "—",
      posted: posted || updated || "—",
      source: source || "PDF import",
      price: priceM ? priceM[1].replace(/\s+/g, " ").trim() : "—",
      area: areaM ? areaM[1].replace(/\s+/g, " ").trim() : "—",
      year: yearM ? yearM[1] : undefined,
      name: nameM ? nameM[1].trim() : "—",
      phone: phoneM ? phoneM[1] : undefined,
      email: emailM ? emailM[1] : undefined,
      description: description || "Lead extras din PDF.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    });
  }
  return out;
}

function LeadCard({ lead }: { lead: Lead }) {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<StatusValue>("new");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`kasa:lead:${lead.id}:status`);
    if (saved) setStatus(saved as StatusValue);
  }, [lead.id]);

  const updateStatus = (s: StatusValue) => {
    setStatus(s);
    localStorage.setItem(`kasa:lead:${lead.id}:status`, s);
    setOpen(false);
  };

  const current = STATUS_OPTIONS.find((s) => s.value === status)!;

  return (
    <article className="bg-card border border-border rounded-md shadow-sm mb-5">
      <div className="flex gap-4 p-4 border-b border-border">
        <img
          src={lead.image}
          alt={lead.title}
          className="h-24 w-32 object-cover rounded border border-border shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground leading-tight">{lead.title}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{lead.type}, {lead.location}</p>
          <div className="mt-1 text-xs space-y-0.5 text-foreground/80">
            <div><span className="font-semibold">Actualizat la:</span> {lead.updated}</div>
            <div><span className="font-semibold">Prima aparitie:</span> {lead.posted}</div>
            <div className="italic text-muted-foreground">
              Sursa: <a className="text-primary underline" href="#">{lead.source}</a>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-3 text-xs">
            <a href="#" className="flex items-center gap-1 text-primary hover:underline"><Download className="h-3.5 w-3.5"/> descarca poze</a>
            <a href="#" className="flex items-center gap-1 text-primary hover:underline"><MapPin className="h-3.5 w-3.5"/> Vezi pe harta</a>
            <div className="ml-auto relative">
              <button
                onClick={() => setOpen((o) => !o)}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide ${current.color}`}
              >
                {current.label.toUpperCase()}
                <ChevronDown className="h-3 w-3"/>
              </button>
              {open && (
                <div className="absolute right-0 mt-1 z-20 bg-card border border-border rounded shadow-lg min-w-40 py-1">
                  {STATUS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateStatus(opt.value)}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-muted flex items-center gap-2 ${
                        opt.value === status ? "font-bold" : ""
                      }`}
                    >
                      <span className={`inline-block h-2 w-2 rounded-full ${opt.color}`} />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="p-1 h-fit text-muted-foreground hover:text-foreground"><MoreVertical className="h-5 w-5"/></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        <div className="bg-card px-3 py-2 text-sm font-semibold">{lead.price}</div>
        <div className="bg-card px-3 py-2 text-sm">⌀ {lead.area}</div>
        <div className="bg-card px-3 py-2 text-sm">{lead.year ? `⊟ ${lead.year}` : ""}</div>
      </div>
      {lead.category && (
        <div className="px-4 py-2 text-xs border-t border-border bg-muted/40">⌑ tip: {lead.category}</div>
      )}

      <div className="p-4 space-y-1 text-sm border-t border-border">
        <div><span className="font-semibold">Nume:</span> {lead.name}</div>
        {lead.phone && (
          <div className="flex items-center gap-1">
            <span className="font-semibold">Telefon:</span>
            <a href={`tel:${lead.phone}`} className="text-primary underline">{lead.phone}</a>
          </div>
        )}
        {lead.email && (
          <div><span className="font-semibold">E-mail:</span> <a href={`mailto:${lead.email}`} className="text-primary underline">{lead.email}</a></div>
        )}
        <a href="#" className="inline-flex items-center gap-1 text-primary text-xs mt-1 hover:underline">
          <Search className="h-3.5 w-3.5"/> Cauta Anunturi in Particulari CRM
        </a>
      </div>

      <div className="px-4 pb-3">
        <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
          <Flag className="h-3.5 w-3.5"/> Raporteaza Anunt
        </a>
      </div>

      <div className="px-4 pb-4 text-sm text-foreground/90">
        {lead.description}{" "}
        <a href="#" className="text-primary hover:underline">Vezi mai mult...</a>
      </div>

      <div className="px-4 pb-4">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Observatii..."
          className="w-full min-h-24 border border-input rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
        <button className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary">
          <Bookmark className="h-3.5 w-3.5"/> Salveaza Observatii
        </button>
      </div>
    </article>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === "KASA" && pass === "Kasaconsult1@") {
      localStorage.setItem("kasa:auth", "1");
      onLogin();
    } else {
      setError("Utilizator sau parola incorecte.");
    }
  };

  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-card text-card-foreground rounded-lg shadow-2xl p-6 border-t-4 border-primary">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-black text-lg">K</div>
          <div className="leading-tight">
            <div className="font-black tracking-wide">KASA</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground">CONSULTANTA</div>
          </div>
        </div>
        <h1 className="text-lg font-bold mb-1">Autentificare CRM</h1>
        <p className="text-xs text-muted-foreground mb-5">Introdu credentialele pentru a continua.</p>

        <label className="block text-xs font-semibold mb-1">Utilizator</label>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full border border-input rounded px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-ring"
          autoFocus
        />

        <label className="block text-xs font-semibold mb-1">Parola</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full border border-input rounded px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-ring"
        />

        {error && <div className="text-xs text-primary font-semibold mb-3">{error}</div>}

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded hover:bg-primary/90 flex items-center justify-center gap-2"
        >
          <Lock className="h-4 w-4"/> Conecteaza-te
        </button>
      </form>
    </div>
  );
}

function Index() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);
  const [leads, setLeads] = useState<Lead[]>(defaultLeads);
  const [importMsg, setImportMsg] = useState<string | null>(null);

  useEffect(() => {
    setAuthed(localStorage.getItem("kasa:auth") === "1");
    setReady(true);
    const saved = localStorage.getItem("kasa:leads");
    if (saved) {
      try { setLeads(JSON.parse(saved)); } catch {}
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("kasa:auth");
    setAuthed(false);
  };

  const persistLeads = (next: Lead[]) => {
    setLeads(next);
    localStorage.setItem("kasa:leads", JSON.stringify(next));
  };

  const onCsvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const text = await file.text();
    try {
      const imported = parseCsvToLeads(text);
      if (!imported.length) {
        setImportMsg("Niciun lead gasit in CSV.");
        return;
      }
      persistLeads([...imported, ...leads]);
      setImportMsg(`${imported.length} leaduri importate.`);
      setTimeout(() => setImportMsg(null), 4000);
    } catch (err) {
      setImportMsg("Eroare la import CSV.");
    }
  };

  const resetLeads = () => {
    if (!confirm("Resetezi lista la leadurile demo?")) return;
    localStorage.removeItem("kasa:leads");
    setLeads(defaultLeads);
  };

  if (!ready) return null;
  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-card border-b border-border px-5 py-3 flex items-center gap-3 sticky top-0 z-10">
          <button className="lg:hidden p-1"><Menu className="h-5 w-5"/></button>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary"/>
            <span>Titlu / Localizare / Data</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="h-4 w-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"/>
              <input
                placeholder="Cauta lead..."
                className="pl-8 pr-3 py-1.5 text-sm border border-input rounded w-56 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <label className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1.5 rounded hover:bg-primary/90 cursor-pointer flex items-center gap-1">
              <Upload className="h-4 w-4"/> Incarca CSV
              <input type="file" accept=".csv,text/csv" className="hidden" onChange={onCsvUpload}/>
            </label>
            <button
              onClick={resetLeads}
              title="Resetare la demo"
              className="p-2 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary"
            >
              <Trash2 className="h-4 w-4"/>
            </button>
            <button
              onClick={logout}
              title="Iesire"
              className="p-2 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary"
            >
              <LogOut className="h-4 w-4"/>
            </button>
          </div>
        </header>

        <main className="p-5 max-w-5xl w-full mx-auto">
          {importMsg && (
            <div className="mb-3 px-3 py-2 text-sm rounded border border-primary/30 bg-primary/10 text-primary font-semibold">
              {importMsg}
            </div>
          )}
          <div className="mb-4 text-xs text-muted-foreground bg-card border border-border rounded p-3">
            <strong className="text-foreground">Format CSV acceptat:</strong> prima linie = header. Coloane recunoscute:
            <code className="text-primary"> title, type, location, updated, posted, source, price, area, year, category, name, phone, email, description, image</code>.
            Doar <code className="text-primary">title</code> este obligatoriu.
          </div>
          <div className="mb-4 flex items-baseline justify-between">
            <h1 className="text-xl font-black tracking-tight">Particulari CRM</h1>
            <span className="text-xs text-muted-foreground">{leads.length} leaduri afisate</span>
          </div>
          {leads.map((l) => <LeadCard key={l.id} lead={l} />)}
        </main>

        <footer className="text-center text-xs text-muted-foreground py-4 border-t border-border bg-card">
          KASA CONSULTANTA CRM © 2026 | <a href="#" className="text-primary hover:underline">Toate drepturile rezervate</a>
        </footer>
      </div>
    </div>
  );
}
