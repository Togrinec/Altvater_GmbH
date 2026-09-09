import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dachrinnen – Privatbau",
  description: "Dachrinnen aus Zink, Kupfer, Edelstahl und Aluminium – Montage und Austausch von Altvater GmbH.",
};

const RINNENFORMEN = [
  { form: "Halbrundrinne", norm: "DIN EN 612", einsatz: "Klassische Form, universell einsetzbar", emoji: "🌙" },
  { form: "Kastenrinne", norm: "nach Maß", einsatz: "Modernes Design, hohe Kapazität", emoji: "⬛" },
  { form: "Trapezrinne", norm: "nach Maß", einsatz: "Industriell, für große Flächen", emoji: "📐" },
];

const MATERIALIEN = [
  { name: "Titanzink", farbe: "Naturgrau / Vorbewittert", lebensdauer: "50–80 Jahre", pflege: "Wartungsfrei" },
  { name: "Kupfer", farbe: "Kupferbraun → Grünspan", lebensdauer: "80–100 Jahre", pflege: "Wartungsfrei" },
  { name: "Edelstahl V2A", farbe: "Silber, matt", lebensdauer: "50+ Jahre", pflege: "Wartungsfrei" },
  { name: "Aluminium", farbe: "Beschichtet, alle RAL", lebensdauer: "30–50 Jahre", pflege: "Minimal" },
];

export default function DachrinnenSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Dachrinnen</span>
          </div>
          <div className="badge bg-gray-600/30 border border-gray-500/30 text-gray-300 mb-4">Privatbau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Dachrinnen</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Hängerinnen und Standrinnen in Zink, Kupfer, Edelstahl und Aluminium –
            Lieferung, Montage und Austausch durch unser erfahrenes Montageteam.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="section-title">Die richtige Rinne für jedes Dach</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Eine korrekt dimensionierte und montierte Dachrinne schützt Ihr Gebäude
                dauerhaft vor Feuchtigkeit. Wir beraten Sie bei der Materialwahl, berechnen
                die nötige Kapazität und montieren fachgerecht.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Kostenlose Beratung und Aufmaß",
                  "Fertigung nach Maß in eigener Werkstatt",
                  "Montage durch qualifizierte Klempner",
                  "Alle gängigen Materialien auf Lager",
                  "Inklusive Fallrohre und Zubehör",
                  "Auch Austausch schadhafter Rinnen",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />{p}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Dachrinnen anfragen <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Dachrinnen" fill className="object-cover" />
            </div>
          </div>

          {/* Rinnenformen */}
          <h2 className="section-title mb-8">Rinnenformen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {RINNENFORMEN.map((r) => (
              <div key={r.form} className="card p-6 text-center hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-3">{r.emoji}</div>
                <h3 className="font-bold text-brand-900 mb-1">{r.form}</h3>
                <p className="text-xs text-accent-600 font-medium mb-2">{r.norm}</p>
                <p className="text-sm text-gray-500">{r.einsatz}</p>
              </div>
            ))}
          </div>

          {/* Materialvergleich */}
          <h2 className="section-title mb-6">Materialvergleich</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-800 text-white">
                  {["Material", "Farbe / Optik", "Lebensdauer", "Pflege"].map((h) => (
                    <th key={h} className="text-left px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATERIALIEN.map((m, i) => (
                  <tr key={m.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-semibold text-brand-900">{m.name}</td>
                    <td className="px-5 py-3 text-gray-500">{m.farbe}</td>
                    <td className="px-5 py-3 text-gray-600">{m.lebensdauer}</td>
                    <td className="px-5 py-3"><span className="badge bg-green-100 text-green-700 text-xs">{m.pflege}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
