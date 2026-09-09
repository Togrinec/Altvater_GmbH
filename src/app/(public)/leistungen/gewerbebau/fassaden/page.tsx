import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Fassaden – Gewerbebau",
  description: "Vorgehängte hinterlüftete Fassaden in Zink, Aluminium und Edelstahl von der Altvater GmbH – Planung, Fertigung und Montage aus einer Hand.",
};

const SYSTEME = [
  {
    titel: "Stehfalzfassade",
    material: "Titanzink / Kupfer / Aluminium",
    bild: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    vorteile: ["Langlebig und wartungsarm", "Hohe Windlastbeständigkeit", "Architektonisch vielseitig", "Breite Materialauswahl"],
  },
  {
    titel: "Kassettenfassade",
    material: "Aluminium / Edelstahl",
    bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    vorteile: ["Modulares System", "Schnelle Montage", "Einfacher Austausch einzelner Felder", "Auch für Sanierungen"],
  },
  {
    titel: "Verbundplatten",
    material: "Aluminium-Verbundplatten",
    bild: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    vorteile: ["Leicht und stabil", "Großformatige Platten möglich", "Viele Farben und Oberflächen", "Kostengünstig"],
  },
];

const PROZESS = [
  { nr: "01", titel: "Beratung & Planung", desc: "Gemeinsam mit Ihrem Architekten erarbeiten wir die ideale Fassadenlösung – technisch und gestalterisch." },
  { nr: "02", titel: "Aufmaß vor Ort", desc: "Unsere Techniker nehmen präzise Maß und erstellen eine vollständige Dokumentation der Fassadenflächen." },
  { nr: "03", titel: "Fertigung", desc: "Alle Bauteile werden in unserer Werkstatt in Nufringen millimetergenau gefertigt und vorbehandelt." },
  { nr: "04", titel: "Montage", desc: "Unser eigenes Montageteam montiert die Fassade termingerecht und fachgerecht – inklusive Abnahme." },
];

export default function FassadenSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Fassaden</span>
          </div>
          <div className="badge bg-accent-600/20 border border-accent-600/30 text-accent-400 mb-4">Gewerbebau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Fassadensysteme</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Vorgehängte hinterlüftete Fassaden in Zink, Aluminium, Kupfer und Edelstahl –
            vom Entwurf bis zur schlüsselfertigen Montage.
          </p>
        </div>
      </section>

      {/* Systeme */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title mb-10">Fassadensysteme im Überblick</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SYSTEME.map((s) => (
              <div key={s.titel} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.bild} alt={s.titel} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-900 text-lg mb-1">{s.titel}</h3>
                  <p className="text-xs text-accent-600 font-medium mb-4">{s.material}</p>
                  <ul className="space-y-2">
                    {s.vorteile.map((v) => (
                      <li key={v} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={13} className="text-accent-500 flex-shrink-0" />{v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Von der Planung bis zur Montage</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROZESS.map((p) => (
              <div key={p.nr} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">{p.nr}</div>
                <h3 className="font-bold text-brand-900 mb-2">{p.titel}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normen */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Normen & Vorschriften</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Alle Fassadenarbeiten werden nach aktuellen DIN/EN-Normen und den Regeln
                des Klempnerhandwerks ausgeführt. Wir sind zertifizierter Fachbetrieb
                und arbeiten mit anerkannten Systemanbietern zusammen.
              </p>
              <ul className="space-y-3">
                {["DIN 18516 – Außenwandbekleidungen", "DIN EN 14782 – Selbsttragende Metallprofile", "Flachdachrichtlinie ZVDH", "Fachregeln des Klempnerhandwerks"].map((n) => (
                  <li key={n} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />{n}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8 bg-accent-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Fassadenprojekt anfragen</h3>
              <p className="text-blue-100 mb-6">Beschreiben Sie uns Ihr Vorhaben – wir erstellen ein individuelles Angebot.</p>
              <div className="space-y-3">
                <Link href="/kontakt" className="btn-secondary w-full justify-center">
                  Anfrage stellen <ArrowRight size={16} />
                </Link>
                <a href="tel:+4970328945100" className="btn-outline-white w-full justify-center">
                  <Phone size={16} /> Direkt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
