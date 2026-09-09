"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package, Truck, CheckCircle2, XCircle, Clock, ChevronDown, Search, Plus, Eye } from "lucide-react";

const BESTELLUNGEN = [
  {
    id: "ORD-2026-4782", datum: "09.09.2026", lieferdatum: "11.09.2026",
    status: "versandt", betrag: 847.50,
    positionen: [
      { nr: "ALT-4521", name: "Universal-Regenhut DN 100", menge: 50, preis: 8.50 },
      { nr: "ALT-1001", name: "Kastenrinne 100×100 mm", menge: 20, preis: 18.40 },
    ],
    tracking: "00340434915712345678",
  },
  {
    id: "ORD-2026-4765", datum: "03.09.2026", lieferdatum: "05.09.2026",
    status: "geliefert", betrag: 324.00,
    positionen: [
      { nr: "ALT-2002", name: "Flachdachablauf DN 100", menge: 12, preis: 28.90 },
    ],
    tracking: null,
  },
  {
    id: "ORD-2026-4741", datum: "28.08.2026", lieferdatum: "30.08.2026",
    status: "geliefert", betrag: 1240.00,
    positionen: [
      { nr: "ALT-1002", name: "Kastenrinne 150×150 mm", menge: 30, preis: 24.90 },
      { nr: "ALT-3002", name: "Kieskorb DN 125", menge: 24, preis: 11.20 },
    ],
    tracking: null,
  },
  {
    id: "ORD-2026-4720", datum: "20.08.2026", lieferdatum: "22.08.2026",
    status: "storniert", betrag: 210.00,
    positionen: [
      { nr: "ALT-4601", name: "Attika-Halter 60×60 mm", menge: 100, preis: 3.20 },
    ],
    tracking: null,
  },
];

const STATUS_CONFIG: Record<string, { label: string; cls: string; icon: React.ElementType }> = {
  bestätigt:  { label: "Bestätigt",  cls: "bg-blue-50 text-blue-700",   icon: Clock },
  versandt:   { label: "Versandt",   cls: "bg-amber-50 text-amber-700", icon: Truck },
  geliefert:  { label: "Geliefert",  cls: "bg-green-50 text-green-700", icon: CheckCircle2 },
  storniert:  { label: "Storniert",  cls: "bg-red-50 text-red-700",     icon: XCircle },
};

export default function BestellungenSeite() {
  const [suche, setSuche] = useState("");
  const [offen, setOffen] = useState<string | null>(null);

  const gefiltert = BESTELLUNGEN.filter(
    (b) =>
      b.id.toLowerCase().includes(suche.toLowerCase()) ||
      b.positionen.some((p) => p.name.toLowerCase().includes(suche.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/portal/haendler" className="text-gray-400 hover:text-brand-900 transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-brand-900">Bestellungen</h1>
              <p className="text-xs text-gray-400">{BESTELLUNGEN.length} Bestellungen gesamt</p>
            </div>
          </div>
          <Link href="/portal/haendler/katalog" className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-xl text-sm font-semibold hover:bg-accent-700 transition-colors">
            <Plus size={15} /> Neue Bestellung
          </Link>
        </div>
      </header>

      <div className="p-6 space-y-4">
        {/* Suche */}
        <div className="relative">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Bestellnummer oder Artikel suchen…"
            value={suche}
            onChange={(e) => setSuche(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 shadow-sm"
          />
        </div>

        {/* Bestellungen */}
        <div className="space-y-3">
          {gefiltert.map((b) => {
            const s = STATUS_CONFIG[b.status] ?? STATUS_CONFIG["bestätigt"];
            const istOffen = offen === b.id;
            return (
              <div key={b.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Kopfzeile */}
                <button
                  onClick={() => setOffen(istOffen ? null : b.id)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.cls}`}>
                      <s.icon size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-brand-900">{b.id}</div>
                      <div className="text-xs text-gray-400 flex items-center gap-3 mt-0.5">
                        <span className="flex items-center gap-1"><Clock size={10} />{b.datum}</span>
                        <span>{b.positionen.length} Position{b.positionen.length !== 1 ? "en" : ""}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <div className="font-semibold text-brand-900">{b.betrag.toFixed(2)} €</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.cls}`}>{s.label}</span>
                    </div>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${istOffen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Detail-Drawer */}
                {istOffen && (
                  <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Bestelldatum</div>
                        <div className="text-sm font-medium text-brand-900">{b.datum}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Lieferdatum</div>
                        <div className="text-sm font-medium text-brand-900">{b.lieferdatum}</div>
                      </div>
                      {b.tracking && (
                        <div className="md:col-span-2">
                          <div className="text-xs text-gray-400 mb-1">DHL Tracking</div>
                          <a href={`https://www.dhl.de/de/privatkunden/pakete-empfangen/verfolgen.html?piececode=${b.tracking}`}
                            target="_blank" rel="noopener noreferrer"
                            className="text-sm font-mono text-accent-600 hover:underline">
                            {b.tracking}
                          </a>
                        </div>
                      )}
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-xs text-gray-400 border-b border-gray-200">
                          <th className="text-left pb-2">Artikel</th>
                          <th className="text-right pb-2">Menge</th>
                          <th className="text-right pb-2">E-Preis</th>
                          <th className="text-right pb-2">Gesamt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {b.positionen.map((p) => (
                          <tr key={p.nr}>
                            <td className="py-2">
                              <div className="font-medium text-brand-900">{p.name}</div>
                              <div className="text-xs text-gray-400 font-mono">{p.nr}</div>
                            </td>
                            <td className="py-2 text-right text-gray-600">{p.menge}</td>
                            <td className="py-2 text-right text-gray-600">{p.preis.toFixed(2)} €</td>
                            <td className="py-2 text-right font-semibold text-brand-900">{(p.menge * p.preis).toFixed(2)} €</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-gray-200">
                          <td colSpan={3} className="py-2 text-right font-bold text-brand-900">Gesamt netto</td>
                          <td className="py-2 text-right font-bold text-accent-600">{b.betrag.toFixed(2)} €</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex gap-3 mt-4">
                      <Link href="/portal/haendler/dokumente" className="flex items-center gap-1.5 px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <Eye size={14} /> Rechnung
                      </Link>
                      {b.status === "geliefert" && (
                        <Link href="/portal/haendler/katalog" className="flex items-center gap-1.5 px-4 py-2 text-sm bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors">
                          <Plus size={14} /> Nachbestellen
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
