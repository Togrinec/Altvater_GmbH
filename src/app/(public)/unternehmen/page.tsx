import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, MapPin, Award, Target, Heart, Zap } from "lucide-react";
// MapPin wird für den Standort-Placeholder und Location-Badge verwendet
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Altvater GmbH aus Nufringen – Ihr Metallverarbeitungsspezialist seit 1985. Erfahren Sie mehr über unser Unternehmen, unser Team und unsere Werte.",
};

const WERTE = [
  { icon: Award, title: "Qualität", desc: "Jedes Produkt verlässt unsere Werkstatt erst, wenn es unseren hohen Qualitätsstandards entspricht. Kein Kompromiss." },
  { icon: Target, title: "Präzision", desc: "Millimetergenauigkeit ist keine Option – sie ist unser Anspruch. Vom Maßnehmen bis zur Auslieferung." },
  { icon: Heart, title: "Verlässlichkeit", desc: "Termine und Zusagen halten wir ein. Unsere Kunden sollen sich auf uns verlassen können – immer." },
  { icon: Zap, title: "Innovation", desc: "Wir kombinieren bewährtes Handwerk mit moderner Technik und digitalisierten Prozessen für mehr Effizienz." },
];

const TIMELINE = [
  { jahr: "1985", ereignis: "Gründung der Altvater GmbH in Nufringen durch Heinrich Altvater" },
  { jahr: "1993", ereignis: "Erweiterung der Werkstatt und Ausbau des Produktionssortiments" },
  { jahr: "2001", ereignis: "Zertifizierung als Fachbetrieb für Klebesysteme von Fassadenelementen" },
  { jahr: "2008", ereignis: "Einführung von CNC-gestützter Fertigung für Sonderanfertigungen" },
  { jahr: "2015", ereignis: "30-jähriges Firmenjubiläum – über 1.000 abgeschlossene Projekte" },
  { jahr: "2020", ereignis: "Digitalisierungsoffensive: neue ERP-Software und Prozessoptimierung" },
  { jahr: "2024", ereignis: "Start der Entwicklung des neuen Händler- und Kundenportals" },
];

export default function UnternehmenSeite() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-white">Unternehmen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Über uns</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Seit {COMPANY.founded} stehen wir für Präzision in Metall – als Familienunternehmen
            aus Nufringen mit Kunden in ganz Deutschland.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Metallverarbeitung mit Leidenschaft</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Die Altvater GmbH ist ein mittelständisches Familienunternehmen mit Sitz im
                baden-württembergischen Nufringen. Seit der Gründung {COMPANY.founded} haben wir uns zu
                einem der führenden Spezialisten für Dach- und Fassadentechnik,
                Entwässerungssysteme und Metallsonderanfertigungen in der Region entwickelt.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Unser Team aus {COMPANY.employees} qualifizierten Mitarbeitern vereint jahrzehntelanges
                handwerkliches Know-how mit modernen Fertigungstechniken. Mehr als {COMPANY.projects} abgeschlossene
                Projekte sprechen für sich – von der einfachen Dachrinne bis zur komplexen
                Industriefassade.
              </p>

              {/* KPI-Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: COMPANY.founded, label: "Gegründet", icon: "📅" },
                  { val: COMPANY.employees, label: "Mitarbeiter", icon: "👥" },
                  { val: COMPANY.projects, label: "Projekte", icon: "🏗️" },
                  { val: "DE-weit", label: "Liefergebiet", icon: "🚚" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
                    <span className="text-2xl">{kpi.icon}</span>
                    <div>
                      <div className="text-2xl font-black text-brand-900">{kpi.val}</div>
                      <div className="text-sm text-gray-500">{kpi.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Altvater GmbH Werkstatt"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/30 to-transparent" />
              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg">
                <MapPin size={16} className="text-accent-600" />
                <span className="text-sm font-semibold text-brand-900">Nufringen, Baden-Württemberg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Unsere Werte</h2>
            <p className="section-subtitle mx-auto">
              Was uns antreibt – und was unsere Kunden von uns erwarten können.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WERTE.map((w) => (
              <div key={w.title} className="card p-7 group hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-600 transition-colors">
                  <w.icon size={22} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Unsere Geschichte</h2>
            <p className="section-subtitle mx-auto">
              Vier Jahrzehnte Wachstum, Innovation und Verlässlichkeit.
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertikale Linie */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={item.jahr} className="relative flex items-start gap-8 pl-20">
                  {/* Kreis auf der Linie */}
                  <div className={`absolute left-5 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10
                    ${i === TIMELINE.length - 1
                      ? "bg-accent-600 border-accent-600"
                      : "bg-white border-gray-300"}`}
                  >
                    {i === TIMELINE.length - 1 && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div className="card p-5 flex-1">
                    <span className="badge bg-accent-100 text-accent-700 mb-2 text-xs font-bold">{item.jahr}</span>
                    <p className="text-gray-700">{item.ereignis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-accent-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Mehr über uns</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Lernen Sie unser Team kennen, informieren Sie sich über unsere Qualitätsstandards
              oder schauen Sie sich unsere offenen Stellen an.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { href: "/unternehmen/team",      emoji: "👥", titel: "Unser Team",              desc: "Lernen Sie die Menschen hinter Altvater GmbH kennen." },
              { href: "/unternehmen/qualitaet", emoji: "🏆", titel: "Qualität & Zertifikate",  desc: "ISO 9001, Certfix und weitere Zertifizierungen." },
              { href: "/unternehmen/karriere",  emoji: "💼", titel: "Karriere",                desc: "Offene Stellen und Initiativbewerbung." },
            ].map((k) => (
              <Link key={k.href} href={k.href}
                className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-6 text-center group transition-all hover:-translate-y-1">
                <div className="text-3xl mb-3">{k.emoji}</div>
                <h3 className="font-bold text-white mb-1 group-hover:text-accent-300 transition-colors">{k.titel}</h3>
                <p className="text-sm text-gray-400">{k.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-accent-400 font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Unser Standort</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Wir sind zentral in Baden-Württemberg ansässig und damit ideal erreichbar
                aus dem Großraum Stuttgart, Böblingen, Herrenberg und darüber hinaus.
                Besuchen Sie uns gerne – nach vorheriger Absprache.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { emoji: "📍", text: `${COMPANY.street}, ${COMPANY.city}` },
                  { emoji: "📞", text: COMPANY.phone },
                  { emoji: "✉️", text: COMPANY.email },
                  { emoji: "🕐", text: COMPANY.hours },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-700">
                    <span className="text-lg w-6 flex-shrink-0">{item.emoji}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/kontakt" className="btn-primary">
                Route planen <ArrowRight size={16} />
              </Link>
            </div>
            {/* Karten-Placeholder */}
            <div className="h-80 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-400">
                <MapPin size={40} className="mx-auto mb-3 text-gray-300" />
                <p className="font-medium text-gray-500">Google Maps</p>
                <p className="text-sm">Carl-Zeiss-Str. 9, 71154 Nufringen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
