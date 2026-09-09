import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, File, Table, ArrowRight, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Technische Datenblätter, CAD-Dateien und Preislisten der Altvater GmbH – kostenlos zum Download.",
};

const DOWNLOADS = [
  {
    kategorie: "Technische Datenblätter",
    icon: FileText,
    farbe: "bg-blue-50 border-blue-100",
    iconFarbe: "text-blue-600 bg-blue-100",
    dateien: [
      { name: "Datenblatt Entwässerungsrinnen", typ: "PDF", groesse: "1,2 MB", artikel: "ALT-1000 ff.", frei: true },
      { name: "Datenblatt Flachdachzubehör", typ: "PDF", groesse: "2,4 MB", artikel: "ALT-4500 ff.", frei: true },
      { name: "Datenblatt Wasserspeier & Abläufe", typ: "PDF", groesse: "0,8 MB", artikel: "ALT-2000 ff.", frei: true },
      { name: "Datenblatt Kieskörbe & Stichkanäle", typ: "PDF", groesse: "0,6 MB", artikel: "ALT-3000 ff.", frei: true },
      { name: "Datenblatt Kiesfangleisten", typ: "PDF", groesse: "0,5 MB", artikel: "ALT-3500 ff.", frei: true },
      { name: "Datenblatt Müllboxen", typ: "PDF", groesse: "1,1 MB", artikel: "ALT-6000 ff.", frei: true },
    ],
  },
  {
    kategorie: "CAD-Dateien",
    icon: File,
    farbe: "bg-purple-50 border-purple-100",
    iconFarbe: "text-purple-600 bg-purple-100",
    dateien: [
      { name: "CAD Entwässerungsrinnen (DWG)", typ: "DWG", groesse: "3,1 MB", artikel: "ALT-1000 ff.", frei: true },
      { name: "CAD Flachdachzubehör (DWG)", typ: "DWG", groesse: "5,2 MB", artikel: "ALT-4500 ff.", frei: true },
      { name: "CAD Gesamtkatalog (DXF)", typ: "DXF", groesse: "8,7 MB", artikel: "Alle Artikel", frei: false },
      { name: "Revit-Familien Entwässerung (RFA)", typ: "RFA", groesse: "12,3 MB", artikel: "ALT-1000 ff.", frei: false },
    ],
  },
  {
    kategorie: "Preislisten & Kataloge",
    icon: Table,
    farbe: "bg-green-50 border-green-100",
    iconFarbe: "text-green-600 bg-green-100",
    dateien: [
      { name: "Produktkatalog 2025/2026", typ: "PDF", groesse: "18,4 MB", artikel: "Alle Produkte", frei: true },
      { name: "Preisliste Endkunden 2025", typ: "PDF", groesse: "0,9 MB", artikel: "Alle Artikel", frei: true },
      { name: "Preisliste Händler 2025", typ: "PDF", groesse: "1,1 MB", artikel: "Alle Artikel", frei: false },
      { name: "Sonderpreisliste Großprojekte", typ: "PDF", groesse: "0,7 MB", artikel: "ab 5.000 € Auftragswert", frei: false },
    ],
  },
  {
    kategorie: "Montageanleitungen",
    icon: FileText,
    farbe: "bg-orange-50 border-orange-100",
    iconFarbe: "text-orange-600 bg-orange-100",
    dateien: [
      { name: "Montageanleitung Dachrinnen", typ: "PDF", groesse: "2,3 MB", artikel: "ALT-1000 ff.", frei: true },
      { name: "Montageanleitung Flachdachzubehör", typ: "PDF", groesse: "3,1 MB", artikel: "ALT-4500 ff.", frei: true },
      { name: "Verarbeitungsrichtlinie Titanzink", typ: "PDF", groesse: "1,8 MB", artikel: "Alle Zink-Produkte", frei: true },
      { name: "Verarbeitungsrichtlinie Kupfer", typ: "PDF", groesse: "1,6 MB", artikel: "Alle Kupfer-Produkte", frei: true },
    ],
  },
];

export default function DownloadsSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-white">Downloads</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Downloads</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Technische Datenblätter, CAD-Dateien, Montageanleitungen und Preislisten –
            alles kostenlos für Planer, Architekten und Fachbetriebe.
          </p>
        </div>
      </section>

      {/* Hinweis gesperrte Dateien */}
      <div className="bg-accent-50 border-b border-accent-100">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-accent-700">
            <Lock size={16} className="flex-shrink-0" />
            <span>
              Dateien mit <Lock size={12} className="inline" /> sind nur für registrierte Händler verfügbar.
            </span>
          </div>
          <Link href="/portal" className="text-sm font-semibold text-accent-600 hover:text-accent-800 flex items-center gap-1 shrink-0">
            🔐 Händlerportal Login <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom space-y-12">
          {DOWNLOADS.map((gruppe) => (
            <div key={gruppe.kategorie}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${gruppe.iconFarbe}`}>
                  <gruppe.icon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-brand-900">{gruppe.kategorie}</h2>
              </div>

              <div className={`rounded-2xl border p-1 ${gruppe.farbe}`}>
                <div className="bg-white rounded-xl overflow-hidden">
                  {gruppe.dateien.map((datei, i) => (
                    <div
                      key={datei.name}
                      className={`flex items-center justify-between gap-4 px-6 py-4 ${
                        i < gruppe.dateien.length - 1 ? "border-b border-gray-100" : ""
                      } ${!datei.frei ? "opacity-60" : "hover:bg-gray-50 transition-colors"}`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-gray-500">{datei.typ}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-brand-900 truncate">{datei.name}</div>
                          <div className="text-xs text-gray-400">{datei.artikel} · {datei.groesse}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {datei.frei ? (
                          <button className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white text-sm font-medium rounded-lg hover:bg-accent-700 transition-colors">
                            <Download size={14} /> Download
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 text-sm rounded-lg">
                            <Lock size={14} /> Händler-Login
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Händler CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-brand-800 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Alle Dateien freischalten</h2>
              <p className="text-gray-300">
                Als registrierter Händler haben Sie Zugriff auf alle CAD-Dateien,
                Preislisten und exklusive Dokumente.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/portal" className="btn-primary">🔐 Händler-Login</Link>
              <Link href="/portal/registrierung" className="btn-outline-white">Konto beantragen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
