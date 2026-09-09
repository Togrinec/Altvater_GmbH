import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, AlertTriangle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Abdichtungen – Gewerbebau",
  description: "Professionelle Flachdach- und Terrassenabdichtungen nach aktueller Flachdachrichtlinie von Altvater GmbH.",
};

const BEREICHE = [
  { titel: "Flachdächer", desc: "Abdichtung und Sanierung von Flachdächern nach Flachdachrichtlinie – Bitumen, Kunststoffbahnen und Flüssigabdichtung.", icon: "🏢" },
  { titel: "Terrassen & Balkone", desc: "Dauerhafte Abdichtung begehbarer Flächen mit geprüften Abdichtungssystemen nach DIN 18531.", icon: "🏠" },
  { titel: "Tiefgaragen", desc: "Lastabtragende Abdichtung unter Verkehrslasten – mit und ohne Dämmung.", icon: "🚗" },
  { titel: "Anschlüsse & Details", desc: "Wandanschlüsse, Attika, Durchdringungen – die kritischen Stellen fachgerecht abgedichtet.", icon: "🔧" },
];

const WARNSIGNALE = [
  "Feuchtigkeitsflecken an der Decke",
  "Blasen oder Risse in der Dachhaut",
  "Stehende Wasserpfützen (> 48h)",
  "Aufstehendes Wasser an Wänden",
  "Schimmel im obersten Geschoss",
];

export default function AbdichtungenSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Abdichtungen</span>
          </div>
          <div className="badge bg-accent-600/20 border border-accent-600/30 text-accent-400 mb-4">Gewerbebau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Abdichtungen</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Professionelle Abdichtungsarbeiten an Flachdächern, Terrassen, Balkonen und
            Tiefgaragen – nach aktueller Norm und Flachdachrichtlinie.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="section-title">Dicht. Dauerhaft. Fachgerecht.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Eine schadhafte Abdichtung ist einer der teuersten Baumängel überhaupt.
                Wir verhindern das durch sorgfältige Planung, zertifizierte Systeme und
                erfahrene Monteure, die die kritischen Details kennen.
              </p>
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Warnsignale – handeln Sie jetzt:</h3>
                    <ul className="space-y-1">
                      {WARNSIGNALE.map((w) => (
                        <li key={w} className="text-sm text-amber-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />{w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <Link href="/kontakt" className="btn-primary">
                Jetzt Schadensbegutachtung anfragen <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&q=80" alt="Flachdachabdichtung" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEREICHE.map((b) => (
              <div key={b.titel} className="card p-6 hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{b.titel}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8">
              <Shield size={28} className="text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">Neubau-Abdichtung</h3>
              <p className="text-gray-600 mb-4">Wir arbeiten eng mit Planern und Generalunternehmern zusammen, um schon in der Planungsphase die optimale Abdichtungslösung zu finden.</p>
              <ul className="space-y-2">
                {["Bitumenschweißbahnen", "PVC/TPO-Kunststoffbahnen", "Flüssigabdichtung", "Wurzelfeste Systeme (Gründach)"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-accent-500" />{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8">
              <Shield size={28} className="text-brand-700 mb-4" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">Sanierung & Reparatur</h3>
              <p className="text-gray-600 mb-4">Schnelle und dauerhafte Schadensbehebung – wir analysieren die Ursache und beseitigen nicht nur das Symptom.</p>
              <ul className="space-y-2">
                {["Leckageortung", "Teilsanierung schadhafter Stellen", "Vollsanierung Dachhaut", "Notabdichtung / Sofortmaßnahmen"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-accent-500" />{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
