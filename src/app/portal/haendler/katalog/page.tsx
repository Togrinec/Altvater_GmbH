"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, ShoppingCart, CheckCircle2, AlertCircle, XCircle, ChevronDown, ArrowLeft } from "lucide-react";

const ARTIKEL = [
  { nr: "ALT-1001", name: "Kastenrinne 100×100 mm", kategorie: "Entwässerung", preis: 18.40, einheit: "lfdm", lager: 87, status: "available" },
  { nr: "ALT-1002", name: "Kastenrinne 150×150 mm", kategorie: "Entwässerung", preis: 24.90, einheit: "lfdm", lager: 34, status: "available" },
  { nr: "ALT-1003", name: "Kastenrinne 200×200 mm", kategorie: "Entwässerung", preis: 34.50, einheit: "lfdm", lager: 8, status: "low" },
  { nr: "ALT-1004", name: "Kastenrinne 250×250 mm", kategorie: "Entwässerung", preis: 48.00, einheit: "lfdm", lager: 0, status: "out" },
  { nr: "ALT-2001", name: "Wasserspeier classic 80 mm", kategorie: "Wasserspeier", preis: 12.20, einheit: "Stk", lager: 45, status: "available" },
  { nr: "ALT-2002", name: "Flachdachablauf DN 100", kategorie: "Abläufe", preis: 28.90, einheit: "Stk", lager: 142, status: "available" },
  { nr: "ALT-2003", name: "Flachdachablauf DN 125", kategorie: "Abläufe", preis: 34.50, einheit: "Stk", lager: 97, status: "available" },
  { nr: "ALT-3001", name: "Kieskorb Edelstahl DN 100", kategorie: "Kieskörbe", preis: 8.50, einheit: "Stk", lager: 8, status: "low" },
  { nr: "ALT-3002", name: "Kieskorb Edelstahl DN 125", kategorie: "Kieskörbe", preis: 11.20, einheit: "Stk", lager: 56, status: "available" },
  { nr: "ALT-4521", name: "Universal-Regenhut DN 100", kategorie: "Flachdach", preis: 8.50, einheit: "Stk", lager: 142, status: "available" },
  { nr: "ALT-4522", name: "Universal-Regenhut DN 125", kategorie: "Flachdach", preis: 10.90, einheit: "Stk", lager: 8, status: "low" },
  { nr: "ALT-4601", name: "Attika-Halter 60×60 mm", kategorie: "Flachdach", preis: 3.20, einheit: "Stk", lager: 320, status: "available" },
];

const KATEGORIEN = ["Alle", ...Array.from(new Set(ARTIKEL.map((a) => a.kategorie)))];

const STATUSBADGE: Record<string, { label: string; cls: string; icon: React.ElementType }> = {
  available: { label: "Verfügbar", cls: "text-green-700 bg-green-50", icon: CheckCircle2 },
  low: { label: "Geringe Menge", cls: "text-amber-700 bg-amber-50", icon: AlertCircle },
  out: { label: "Nicht verfügbar", cls: "text-red-700 bg-red-50", icon: XCircle },
};

export default function HaendlerKatalog() {
  const [suche, setSuche] = useState("");
  const [kat, setKat] = useState("Alle");
  const [nurLager, setNurLager] = useState(false);
  const [warenkorb, setWarenkorb] = useState<Record<string, number>>({});

  const gefiltert = ARTIKEL.filter((a) => {
    const matchSuche = a.name.toLowerCase().includes(suche.toLowerCase()) || a.nr.toLowerCase().includes(suche.toLowerCase());
    const matchKat = kat === "Alle" || a.kategorie === kat;
    const matchLager = !nurLager || a.lager > 0;
    return matchSuche && matchKat && matchLager;
  });

  const anzahlWarenkorb = Object.values(warenkorb).reduce((s, v) => s + v, 0);

  function addToCart(nr: string) {
    setWarenkorb((prev) => ({ ...prev, [nr]: (prev[nr] ?? 0) + 1 }));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/portal/haendler" className="text-gray-400 hover:text-brand-900 transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-brand-900">Produktkatalog</h1>
              <p className="text-xs text-gray-400">Live-Lagerbestände aus ERP</p>
            </div>
          </div>
          <Link href="/portal/haendler/bestellungen" className="relative flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-xl text-sm font-semibold hover:bg-accent-700 transition-colors">
            <ShoppingCart size={16} />
            Warenkorb
            {anzahlWarenkorb > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                {anzahlWarenkorb}
              </span>
            )}
          </Link>
        </div>
      </header>

      <div className="p-6">
        {/* Filter */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Artikelnummer oder Bezeichnung…"
              value={suche}
              onChange={(e) => setSuche(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500"
            />
          </div>
          <div className="relative">
            <select
              value={kat}
              onChange={(e) => setKat(e.target.value)}
              className="appearance-none pl-4 pr-9 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-accent-500"
            >
              {KATEGORIEN.map((k) => <option key={k}>{k}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer px-3">
            <input type="checkbox" checked={nurLager} onChange={(e) => setNurLager(e.target.checked)} className="w-4 h-4 text-accent-600 rounded" />
            Nur verfügbare
          </label>
        </div>

        {/* Tabelle */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
            <span className="text-xs text-gray-500 font-medium">{gefiltert.length} Artikel</span>
            <span className="text-xs text-gray-400">Preise = Ihre Händlerkonditionen, netto</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  {["Artikel-Nr.", "Bezeichnung", "Kategorie", "Ihr Preis", "Lager", "Status", ""].map((h) => (
                    <th key={h} className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {gefiltert.map((a) => {
                  const s = STATUSBADGE[a.status];
                  return (
                    <tr key={a.nr} className={`hover:bg-gray-50 transition-colors ${a.status === "out" ? "opacity-50" : ""}`}>
                      <td className="px-5 py-3 font-mono text-xs text-gray-500">{a.nr}</td>
                      <td className="px-5 py-3 font-medium text-brand-900">{a.name}</td>
                      <td className="px-5 py-3">
                        <span className="badge bg-gray-100 text-gray-600 text-xs">{a.kategorie}</span>
                      </td>
                      <td className="px-5 py-3 font-semibold text-accent-700">{a.preis.toFixed(2)} € / {a.einheit}</td>
                      <td className="px-5 py-3 text-gray-600">{a.lager} {a.einheit}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${s.cls}`}>
                          <s.icon size={11} />{s.label}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <button
                          onClick={() => addToCart(a.nr)}
                          disabled={a.status === "out"}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-600 text-white text-xs font-semibold rounded-lg hover:bg-accent-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <ShoppingCart size={12} /> Hinzufügen
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {gefiltert.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <Search size={32} className="mx-auto mb-2 opacity-30" />
                <p>Keine Artikel gefunden</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
