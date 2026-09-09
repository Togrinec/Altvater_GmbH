import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Kaminverkleidungen – Privatbau",
  description: "Passgenaue Kaminverkleidungen aus Titanzink, Kupfer und Edelstahl – wetterfest und langlebig von Altvater GmbH.",
};

const AUSFUEHRUNGEN = [
  { name: "Titanzink-Verkleidung", desc: "Robuste, wartungsfreie Verkleidung – entwickelt eine natürliche Patina und fügt sich harmonisch ins Dachbild ein.", emoji: "🔘" },
  { name: "Kupfer-Verkleidung", desc: "Edles Erscheinungsbild mit charakteristischer Grünspan-Patina – die Premiumlösung für anspruchsvolle Architektur.", emoji: "🟤" },
  { name: "Edelstahl-Verkleidung", desc: "Modern, silbrig, zeitlos – Edelstahl V2A oder V4A bietet maximalen Witterungsschutz ohne Patinierung.", emoji: "⚪" },
];

export default function KaminverkleidungenSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Kaminverkleidungen</span>
          </div>
          <div className="badge bg-gray-600/30 border border-gray-500/30 text-gray-300 mb-4">Privatbau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Kaminverkleidungen</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Passgenaue Kaminverkleidungen aus Titanzink, Kupfer und Edelstahl –
            dicht, wetterfest und dauerhaft schön.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-14">
            <div>
              <h2 className="section-title">Warum ist die Kaminverkleidung so wichtig?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Der Kamin ist eine der kritischsten Stellen am Dach. Wasser, das am Übergang
                Kamin–Dach eindringt, verursacht massive Schäden an Dachkonstruktion,
                Dämmung und Innenräumen.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Eine fachgerecht ausgeführte Kaminverkleidung aus Metall ist die
                dauerhafteste und zuverlässigste Lösung.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Passgenaue Anfertigung nach Aufmaß",
                  "Alle kritischen Anschlüsse sauber gelötet",
                  "Inklusive Kaminkappe und Abdeckung",
                  "Montage durch erfahrene Klempnermeister",
                  "Auch Sanierung schadhafter Verkleidungen",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />{p}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Kaminverkleidung anfragen <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80" alt="Kaminverkleidung" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {AUSFUEHRUNGEN.map((a) => (
              <div key={a.name} className="card p-6 hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-4">{a.emoji}</div>
                <h3 className="font-bold text-brand-900 mb-2">{a.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Bestandteile */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
              <Flame size={20} className="text-accent-600" /> Bestandteile einer Kaminverkleidung
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Kaminkappe / -haube", "Kaminmantel vorne & hinten", "Seitenwangen", "Kehlanschlüsse", "Vorderer Wandanschluss", "Seitenabschlüsse", "Regenbleche", "Dichtprofile"].map((t) => (
                <div key={t} className="bg-white rounded-xl p-3 text-center text-sm font-medium text-brand-900 border border-gray-100 shadow-sm">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
