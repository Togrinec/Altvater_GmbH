import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, Shield, FileCheck, Microscope, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Qualität & Zertifizierungen",
  description: "Qualitätsstandards und Zertifizierungen der Altvater GmbH – für zuverlässige Metallverarbeitung nach höchsten Ansprüchen.",
};

const ZERTIFIKATE = [
  {
    icon: Award,
    titel: "Zertifizierter Fachbetrieb",
    org: "Fachverband Sanitär Heizung Klempner Baden-Württemberg",
    jahr: "seit 1998",
    beschreibung: "Anerkannter Fachbetrieb mit qualifizierten Klempnermeistern nach HWO.",
  },
  {
    icon: Shield,
    titel: "Certfix – Klebesysteme Fassade",
    org: "Certfix e.V.",
    jahr: "seit 2001",
    beschreibung: "Zertifizierter Betrieb für die Verarbeitung von Klebesystemen bei Fassadenelementen.",
  },
  {
    icon: FileCheck,
    titel: "ISO 9001:2015 – Qualitätsmanagement",
    org: "TÜV SÜD",
    jahr: "seit 2015",
    beschreibung: "Zertifiziertes Qualitätsmanagementsystem für alle Fertigungs- und Serviceprozesse.",
  },
  {
    icon: Microscope,
    titel: "Arbeitsschutz AMS",
    org: "Handwerkskammer Region Stuttgart",
    jahr: "seit 2010",
    beschreibung: "Ausgezeichneter Betrieb für betriebliches Arbeitsschutz-Management-System.",
  },
];

const QUALITAETSMASSNAHMEN = [
  { titel: "Eingangskontrolle", desc: "Jedes Rohmaterial wird bei Eingang geprüft – Stärke, Beschaffenheit und Norm-Konformität werden dokumentiert." },
  { titel: "Fertigungskontrolle", desc: "Während der Produktion prüfen Meister die Maßhaltigkeit und Verarbeitungsqualität an definierten Kontrollpunkten." },
  { titel: "Ausgangsprüfung", desc: "Vor der Auslieferung wird jede Charge auf Vollständigkeit, Maße und Oberflächenqualität geprüft." },
  { titel: "Reklamationsmanagement", desc: "Jede Reklamation wird analysiert und führt zu einer messbaren Verbesserung im Prozess." },
  { titel: "Mitarbeiterschulungen", desc: "Regelmäßige Weiterbildungen stellen sicher, dass unser Team immer auf dem aktuellen Stand der Technik ist." },
  { titel: "Lieferantenbewertung", desc: "Unsere Rohstofflieferanten werden regelmäßig bewertet – nur beste Qualität kommt in unsere Fertigung." },
];

export default function QualitaetSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/unternehmen">Unternehmen</Link><span>/</span>
            <span className="text-white">Qualität & Zertifizierungen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Qualität & Zertifizierungen</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Qualität ist kein Zufall – sie ist das Ergebnis konsequenter Prozesse,
            qualifizierter Mitarbeiter und kontinuierlicher Verbesserung.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Unser Qualitätsversprechen</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bei Altvater GmbH steht Qualität an erster Stelle – in der Fertigung,
                bei der Beratung und im Service. Dieses Versprechen sichern wir durch
                zertifizierte Prozesse, regelmäßige Kontrollen und ein eingespieltes Team.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Unsere Produkte erfüllen alle relevanten DIN/EN-Normen und werden
                ausschließlich aus geprüften Materialien namhafter Hersteller gefertigt.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "ISO 9001", label: "zertifiziert" },
                  { val: "40+", label: "Jahre Erfahrung" },
                  { val: "100%", label: "Ausgangsprüfung" },
                ].map((k) => (
                  <div key={k.label} className="bg-accent-50 border border-accent-100 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-accent-600">{k.val}</div>
                    <div className="text-xs text-gray-500 mt-1">{k.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {ZERTIFIKATE.map((z) => (
                <div key={z.titel} className="card p-6 flex items-start gap-5">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <z.icon size={22} className="text-accent-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-brand-900">{z.titel}</h3>
                      <span className="badge bg-green-100 text-green-700 text-xs">{z.jahr}</span>
                    </div>
                    <p className="text-xs text-accent-600 font-medium mb-1">{z.org}</p>
                    <p className="text-sm text-gray-500">{z.beschreibung}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualitätsmaßnahmen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Unser Qualitätsprozess</h2>
            <p className="section-subtitle mx-auto">Von der Materialannahme bis zur Auslieferung – Qualität an jedem Schritt.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITAETSMASSNAHMEN.map((q, i) => (
              <div key={q.titel} className="card p-6 group hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-accent-600 rounded-lg text-white font-bold text-sm flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-brand-900">{q.titel}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verwendete Materialien */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Unsere Materialien</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { material: "Titanzink", norm: "EN 988", eigenschaft: "Langlebig, selbstheilend" },
              { material: "Kupfer", norm: "EN 1172", eigenschaft: "Edel, patinafähig" },
              { material: "Aluminium", norm: "EN 485", eigenschaft: "Leicht, korrosionsfest" },
              { material: "Edelstahl", norm: "EN 10088", eigenschaft: "Hygienisch, robust" },
            ].map((m) => (
              <div key={m.material} className="card p-5 text-center">
                <div className="text-2xl mb-2">🔩</div>
                <div className="font-bold text-brand-900">{m.material}</div>
                <div className="text-xs text-accent-600 font-medium mb-1">{m.norm}</div>
                <div className="text-xs text-gray-500">{m.eigenschaft}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
