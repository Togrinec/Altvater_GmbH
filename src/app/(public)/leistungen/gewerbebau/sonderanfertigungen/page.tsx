import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Upload, CheckCircle2, Cog } from "lucide-react";

export const metadata: Metadata = {
  title: "Sonderanfertigungen – Gewerbebau",
  description: "Komplexe Metallbaukonstruktionen nach Architektenzeichnung – Einzelstücke und Serien von Altvater GmbH.",
};

const BEISPIELE = [
  { titel: "Architekturbleche", desc: "Individuelle Blechprofile und -formteile nach CAD-Zeichnung oder Architektenplan.", emoji: "📐" },
  { titel: "Verkleidungselemente", desc: "Maßgefertigte Verkleidungen für Stützen, Träger, Technikaufbauten und Übergänge.", emoji: "🏗️" },
  { titel: "Schirme & Vordächer", desc: "Metall-Vordächer, Überdachungen und Wetterschutzanlagen nach statischen Vorgaben.", emoji: "☂️" },
  { titel: "Lüftungsaufbauten", desc: "Verkleidungen und Einhausungen für Lüftungstechnik, Kälteanlagen und technische Aufbauten.", emoji: "🌀" },
  { titel: "Geländer & Abschlüsse", desc: "Brüstungsbleche, Attika-Abdeckungen, Wandabschlüsse in allen Materialien und Formen.", emoji: "🔲" },
  { titel: "Serienteile", desc: "Wenn Sie regelmäßig gleiche Bauteile benötigen – wir richten Serienproduktion ein.", emoji: "🔄" },
];

export default function SonderanfertigungenSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Sonderanfertigungen</span>
          </div>
          <div className="badge bg-accent-600/20 border border-accent-600/30 text-accent-400 mb-4">Gewerbebau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Sonderanfertigungen</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Wenn kein Standardprodukt passt – wir fertigen nach Ihrer Zeichnung, Ihren Maßen
            und Ihren Materialvorgaben. Einzelstück oder Kleinserie.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="section-title">Ihre Idee. Unsere Fertigung.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Unsere CNC-gestützte Fertigung ermöglicht Präzisionsteile nach CAD-Zeichnung,
                PDF oder sogar nach Handskizze. Ob ein einzelnes Teil oder eine Kleinserie –
                wir setzen es um.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Einfach Zeichnung oder Beschreibung per E-Mail schicken –
                wir melden uns innerhalb von 24h mit einem Angebot.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Cog size={18} className="text-accent-500" />
                  <span>CNC-Abkantpresse bis 4.000 mm Länge</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Cog size={18} className="text-accent-500" />
                  <span>Rollformanlage für Profile in Serie</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Cog size={18} className="text-accent-500" />
                  <span>Wasserstrahl- und Plasmaschneiden</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Cog size={18} className="text-accent-500" />
                  <span>Schweißen: WIG, MIG, MAG</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80" alt="Sonderanfertigungen" fill className="object-cover" />
            </div>
          </div>

          <h2 className="section-title mb-8">Was wir fertigen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BEISPIELE.map((b) => (
              <div key={b.titel} className="card p-6 hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-3">{b.emoji}</div>
                <h3 className="font-bold text-brand-900 mb-2">{b.titel}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Anfrage-CTA */}
          <div className="bg-gradient-to-br from-accent-700 to-accent-600 rounded-3xl p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sonderanfertigung anfragen</h3>
                <p className="text-blue-100 mb-2">Schicken Sie uns Ihre Zeichnung oder Beschreibung – wir antworten innerhalb von 24h.</p>
                <p className="text-blue-100 text-sm">Formate: DWG, DXF, PDF, JPG oder Freitext</p>
              </div>
              <div className="space-y-3">
                <Link href="/kontakt" className="btn-secondary w-full justify-center">
                  <Upload size={16} /> Zeichnung & Anfrage senden
                </Link>
                <a href="mailto:info@altvater.de?subject=Sonderanfertigung" className="btn-outline-white w-full justify-center">
                  Per E-Mail anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
