import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, Calendar, Users, Building2, FileText, Home, FolderKanban,
  Monitor, Handshake, ArrowLeftRight, FileSignature, BarChart3, LineChart,
  Megaphone, Calculator, DollarSign, Mail, Plug, Menu, MoreVertical, Search,
  MapPin, Download, Flag, Bookmark, Phone,
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

const leads: Lead[] = [
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

function LeadCard({ lead }: { lead: Lead }) {
  const [note, setNote] = useState("");
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
            <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded bg-foreground text-background text-[10px] font-semibold tracking-wide">PRIMA APARITIE</span>
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

function Index() {
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
            <button className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1.5 rounded hover:bg-primary/90">
              + Lead nou
            </button>
          </div>
        </header>

        <main className="p-5 max-w-5xl w-full mx-auto">
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
