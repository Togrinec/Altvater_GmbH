"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Search, Filter, Eye } from "lucide-react";

const DOKUMENTE = [
  { id: "RE-2026-08841", typ: "Rechnung",      bestellung: "ORD-2026-4782", datum: "11.09.2026", betrag: 1009.53, faellig: "11.10.2026", status: "offen",     statusCls: "bg-amber-50 text-amber-700" },
  { id: "LS-2026-04782", typ: "Lieferschein",  bestellung: "ORD-2026-4782", datum: "11.09.2026", betrag: null,    faellig: null,          status: "geliefert", statusCls: "bg-green-50 text-green-700" },
  { id: "RE-2026-08798", typ: "Rechnung",      bestellung: "ORD-2026-4765", datum: "05.09.2026", betrag: 385.56,  faellig: "05.10.2026",   status: "bezahlt",   statusCls: "bg-gray-100 text-gray-600" },
  { id: "LS-2026-04765", typ: "Lieferschein",  bestellung: "ORD-2026-4765", datum: "05.09.2026", betrag: null,    faellig: null,          status: "geliefert", statusCls: "bg-green-50 text-green-700" },
  { id: "RE-2026-08741", typ: "Rechnung",      bestellung: "ORD-2026-4741", datum: "30.08.2026", betrag: 1475.60, faellig: "29.09.2026",   status: "bezahlt",   statusCls: "bg-gray-100 text-gray-600" },
  { id: "GU-2026-00014", typ: "Gutschrift",    bestellung: "ORD-2026-4720", datum: "22.08.2026", betrag: -210.00, faellig: null,          status: "erstattet", statusCls: "bg-blue-50 text-blue-700" },
];

const TYP_ICON: Record<string, string> = {
  Rechnung: "🧾",
  Lieferschein: "📦",
  Gutschrift: "💳",
};

export default function DokumenteSeite() {
  const [suche, setSuche] = useState("");
  const [filter, setFilter] = useState("Alle");

  const typen = ["Alle", ...Array.from(new Set(DOKUMENTE.map((d) => d.typ)))];
  const gefiltert = DOKUMENTE.filter(
    (d) =>
      (filter === "Alle" || d.typ === filter) &&
      (d.id.toLowerCase().includes(suche.toLowerCase()) ||
        d.bestellung.toLowerCase().includes(suche.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-6 py-4 flex items-center gap-3">
          <Link href="/portal/haendler" className="text-gray-400 hover:text-brand-900 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-brand-900">Dokumente</h1>
            <p className="text-xs text-gray-400">Rechnungen, Lieferscheine & Gutschriften</p>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-4">
        {/* Filter-Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Dokument- oder Bestellnummer…"
              value={suche}
              onChange={(e) => setSuche(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 shadow-sm"
            />
          </div>
          <div className="flex gap-2">
            {typen.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === t ? "bg-accent-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Dokumente-Liste */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs text-gray-500 uppercase tracking-wide">
                  <th className="text-left px-6 py-3">Typ</th>
                  <th className="text-left px-5 py-3">Dokumentnr.</th>
                  <th className="text-left px-5 py-3">Bestellung</th>
                  <th className="text-left px-5 py-3">Datum</th>
                  <th className="text-right px-5 py-3">Betrag</th>
                  <th className="text-left px-5 py-3">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {gefiltert.map((d) => (
                  <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{TYP_ICON[d.typ] ?? "📄"}</span>
                        <span className="font-medium text-brand-900">{d.typ}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-mono text-xs text-gray-600">{d.id}</td>
                    <td className="px-5 py-4 text-xs text-accent-600">{d.bestellung}</td>
                    <td className="px-5 py-4 text-gray-500">{d.datum}</td>
                    <td className="px-5 py-4 text-right font-semibold text-brand-900">
                      {d.betrag !== null
                        ? <span className={d.betrag < 0 ? "text-green-600" : ""}>{d.betrag.toFixed(2)} €</span>
                        : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${d.statusCls}`}>{d.status}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-brand-900 transition-colors rounded-lg hover:bg-gray-100">
                          <Eye size={15} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-accent-600 transition-colors rounded-lg hover:bg-accent-50">
                          <Download size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {gefiltert.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <FileText size={32} className="mx-auto mb-2 opacity-30" />
                <p>Keine Dokumente gefunden</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
