import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Euro, ArrowRight, CheckCircle2, Heart, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Karriere",
  description: "Offene Stellen bei der Altvater GmbH – Klempner, Metalltechniker, Projektleiter und mehr.",
};

const STELLEN = [
  {
    id: 1,
    titel: "Klempner / Spengler (m/w/d)",
    bereich: "Produktion & Montage",
    ort: "Nufringen",
    art: "Vollzeit",
    gehalt: "nach Tarif + Zulagen",
    beschreibung: "Für unser wachsendes Montageteam suchen wir erfahrene Klempner für die Ausführung von Dach-, Fassaden- und Entwässerungsarbeiten auf Baustellen in der Region.",
    aufgaben: [
      "Montage von Dachrinnen, Fallrohren und Entwässerungssystemen",
      "Verarbeitung von Zink, Kupfer und Edelstahl",
      "Blecharbeiten an Fassaden und Dächern",
      "Dokumentation der ausgeführten Arbeiten",
    ],
    anforderungen: [
      "Abgeschlossene Ausbildung als Klempner, Spengler oder vergleichbar",
      "Berufserfahrung wünschenswert",
      "Führerschein Klasse B",
      "Teamfähigkeit und Zuverlässigkeit",
    ],
  },
  {
    id: 2,
    titel: "CNC-Maschinenbediener / Metalltechniker (m/w/d)",
    bereich: "Fertigung",
    ort: "Nufringen",
    art: "Vollzeit",
    gehalt: "nach Vereinbarung",
    beschreibung: "Für unsere moderne Fertigungshalle suchen wir einen erfahrenen Metalltechniker, der unsere CNC-gestützte Blechbearbeitung verantwortet.",
    aufgaben: [
      "Bedienung und Einrichtung von CNC-Abkantpressen und Rollformmaschinen",
      "Qualitätskontrolle der gefertigten Teile",
      "Rüsten und Optimieren von Fertigungsprogrammen",
      "Wartung und Pflege der Maschinen",
    ],
    anforderungen: [
      "Ausbildung als Metalltechniker, Industriemechaniker oder ähnlich",
      "Erfahrung mit CNC-Steuerungen",
      "Technisches Verständnis und Sorgfalt",
      "Selbstständige Arbeitsweise",
    ],
  },
  {
    id: 3,
    titel: "Vertriebsmitarbeiter Innendienst (m/w/d)",
    bereich: "Vertrieb",
    ort: "Nufringen",
    art: "Vollzeit / Teilzeit",
    gehalt: "nach Vereinbarung",
    beschreibung: "Zur Verstärkung unseres Vertriebsteams suchen wir eine kommunikationsstarke Persönlichkeit für die telefonische und schriftliche Kundenbetreuung.",
    aufgaben: [
      "Angebotserstellung und Auftragsbearbeitung",
      "Telefonische Kundenberatung",
      "Pflege des CRM-Systems",
      "Unterstützung beim Ausbau des Händlerportals",
    ],
    anforderungen: [
      "Kaufmännische Ausbildung oder technischer Hintergrund",
      "Kommunikationsstärke und Serviceorientierung",
      "MS-Office Kenntnisse",
      "Interesse an Bauprodukten und Metallverarbeitung",
    ],
  },
];

const BENEFITS = [
  { icon: Euro, titel: "Attraktive Vergütung", desc: "Leistungsgerechte Bezahlung nach Tarif plus Zulagen und Jahresprämie" },
  { icon: Clock, titel: "Flexible Arbeitszeiten", desc: "Gleitzeitmodell und familienfreundliche Arbeitszeitgestaltung" },
  { icon: Zap, titel: "Weiterbildung", desc: "Regelmäßige Schulungen und Förderung der Meisterausbildung" },
  { icon: Users, titel: "Team & Atmosphäre", desc: "Familiäres Betriebsklima mit kurzen Entscheidungswegen" },
  { icon: Heart, titel: "Gesundheit", desc: "Betriebliche Krankenversicherung und ergonomische Arbeitsplätze" },
  { icon: MapPin, titel: "Standort", desc: "Zentral in Nufringen – gut erreichbar aus dem Großraum Stuttgart" },
];

export default function KarriereSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/unternehmen">Unternehmen</Link><span>/</span>
            <span className="text-white">Karriere</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Karriere bei Altvater</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Wir suchen Menschen, die mit Leidenschaft und Präzision arbeiten.
            Werden Sie Teil eines wachsenden Familienunternehmens in Nufringen.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Was wir bieten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.titel} className="card p-6 flex items-start gap-4 group hover:-translate-y-1 transition-transform">
                <div className="w-11 h-11 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-600 transition-colors">
                  <b.icon size={20} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1">{b.titel}</h3>
                  <p className="text-sm text-gray-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offene Stellen */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title mb-10">Offene Stellen</h2>
          <div className="space-y-6">
            {STELLEN.map((stelle) => (
              <div key={stelle.id} className="card p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-900 mb-2">{stelle.titel}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="badge bg-accent-100 text-accent-700 text-xs">{stelle.bereich}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin size={11} />{stelle.ort}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500"><Clock size={11} />{stelle.art}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500"><Euro size={11} />{stelle.gehalt}</span>
                    </div>
                  </div>
                  <Link href={`/kontakt?betreff=Bewerbung: ${encodeURIComponent(stelle.titel)}`}
                    className="btn-primary text-sm px-5 py-2.5 shrink-0">
                    Jetzt bewerben <ArrowRight size={14} />
                  </Link>
                </div>
                <p className="text-gray-600 mb-6">{stelle.beschreibung}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-3 text-sm">Ihre Aufgaben</h4>
                    <ul className="space-y-2">
                      {stelle.aufgaben.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-accent-500 mt-0.5 flex-shrink-0" />{a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-3 text-sm">Ihr Profil</h4>
                    <ul className="space-y-2">
                      {stelle.anforderungen.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-accent-500 mt-0.5 flex-shrink-0" />{a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Initiativbewerbung */}
          <div className="mt-10 p-8 bg-brand-800 rounded-3xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Keine passende Stelle dabei?</h3>
            <p className="text-gray-300 mb-6">Wir freuen uns jederzeit über Initiativbewerbungen von motivierten Fachkräften.</p>
            <Link href="/kontakt" className="btn-outline-white">
              Initiativbewerbung senden <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
