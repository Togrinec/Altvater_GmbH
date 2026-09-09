"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ClipboardList, FileText, MessageSquare, Download,
  ChevronDown, Clock, CheckCircle2, Truck, AlertCircle,
  Plus, ArrowRight, Eye, Phone
} from "lucide-react";
import { COMPANY } from "@/lib/data";

const AUFTRAEGE = [
  {
    id: "AUF-2026-0912", titel: "Dachrinnen Neubau EFH", datum: "05.09.2026",
    status: "in_arbeit", statusLabel: "In Bearbeitung",
    cls: "bg-blue-50 text-blue-700", icon: Clock,
    beschreibung: "Montage von 42 lfdm Kastenrinne 100×100 mm inkl. Fallrohre",
    termin: "15.09.2026",
  },
  {
    id: "AUF-2026-0841", titel: "Kaminverkleidung Sanierung", datum: "20.08.2026",
    status: "abgeschlossen", statusLabel: "Abgeschlossen",
    cls: "bg-green-50 text-green-700", icon: CheckCircle2,
    beschreibung: "Erneuerung der Kaminverkleidung in Titanzink, 2 Kamine",
    termin: "28.08.2026",
  },
  {
    id: "AUF-2026-0799", titel: "Flachdach-Inspektion", datum: "10.08.2026",
    status: "abgeschlossen", statusLabel: "Abgeschlossen",
    cls: "bg-green-50 text-green-700", icon: CheckCircle2,
    beschreibung: "Jahreswartung Flachdachabdichtung mit Protokoll",
    termin: "12.08.2026",
  },
];

const RECHNUNGEN = [
  { nr: "RE-2026-07821", auftrag: "AUF-2026-0841", datum: "30.08.2026", betrag: 1240.00, faellig: "29.09.2026", status: "offen", cls: "bg-amber-50 text-amber-700" },
  { nr: "RE-2026-07654", auftrag: "AUF-2026-0799", datum: "14.08.2026", betrag: 180.00, faellig: "13.09.2026", status: "bezahlt", cls: "bg-green-50 text-green-700" },
];

const TABS = [
  { id: "auftraege", label: "Meine Aufträge", icon: ClipboardList },
  { id: "anfragen",  label: "Neue Anfrage",   icon: MessageSquare },
  { id: "rechnungen",label: "Rechnungen",     icon: FileText },
];

export default function KundenPortal() {
  const [tab, setTab] = useState("auftraege");
  const [offen, setOffen] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ betreff: "", beschreibung: "", adresse: "", termin: "" });

  function handleAnfrage(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1200);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="font-bold text-brand-900 hidden sm:block">Kundenportal</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-medium text-brand-900">Max Mustermann</div>
              <div className="text-xs text-gray-400">Privatkunde</div>
            </div>
            <Link href="/portal" className="text-xs text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
              Abmelden
            </Link>
          </div>
        </div>

        {/* Tab-Navigation */}
        <div className="flex px-6 gap-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                tab === t.id
                  ? "border-accent-600 text-accent-600"
                  : "border-transparent text-gray-500 hover:text-brand-900"
              }`}
            >
              <t.icon size={15} />
              {t.label}
            </button>
          ))}
        </div>
      </header>

      <div className="p-6 max-w-3xl mx-auto">

        {/* ── TAB: AUFTRÄGE ── */}
        {tab === "auftraege" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-brand-900">Meine Aufträge</h2>
              <button onClick={() => setTab("anfragen")} className="flex items-center gap-1.5 text-sm text-accent-600 font-medium hover:underline">
                <Plus size={14} /> Neue Anfrage
              </button>
            </div>

            {AUFTRAEGE.map((a) => {
              const istOffen = offen === a.id;
              return (
                <div key={a.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOffen(istOffen ? null : a.id)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.cls}`}>
                        <a.icon size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-brand-900">{a.titel}</div>
                        <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                          <span>{a.id}</span>
                          <span>·</span>
                          <span>Anfrage: {a.datum}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium hidden sm:block ${a.cls}`}>
                        {a.statusLabel}
                      </span>
                      <ChevronDown size={16} className={`text-gray-400 transition-transform ${istOffen ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  {istOffen && (
                    <div className="border-t border-gray-100 bg-gray-50 px-5 py-4 space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-xs text-gray-400">Leistung</div>
                          <div className="font-medium text-brand-900 mt-0.5">{a.beschreibung}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Termin / Abschluss</div>
                          <div className="font-medium text-brand-900 mt-0.5">{a.termin}</div>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-1">
                        {a.status === "abgeschlossen" && (
                          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                            <Download size={13} /> Abschlussprotokoll
                          </button>
                        )}
                        <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-accent-50 text-accent-700 rounded-lg hover:bg-accent-100">
                          <Phone size={13} /> Rückfrage
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Support CTA */}
            <div className="bg-brand-800 rounded-2xl p-5 text-white flex items-center justify-between gap-4">
              <div>
                <div className="font-bold mb-0.5">Fragen zu Ihrem Auftrag?</div>
                <div className="text-sm text-gray-300">{COMPANY.hours} · {COMPANY.phone}</div>
              </div>
              <a href={`tel:${COMPANY.phone}`} className="shrink-0 flex items-center gap-2 px-4 py-2 bg-accent-600 rounded-xl text-sm font-semibold hover:bg-accent-700 transition-colors">
                <Phone size={14} /> Anrufen
              </a>
            </div>
          </div>
        )}

        {/* ── TAB: NEUE ANFRAGE ── */}
        {tab === "anfragen" && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-brand-900 mb-5">Neue Serviceanfrage</h2>

            {formStatus === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Anfrage eingegangen!</h3>
                <p className="text-gray-500 mb-6">Wir melden uns innerhalb von 24h bei Ihnen.</p>
                <button onClick={() => { setFormStatus("idle"); setTab("auftraege"); }}
                  className="text-accent-600 font-semibold hover:underline flex items-center gap-1 mx-auto">
                  Zu meinen Aufträgen <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleAnfrage} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-1.5">Art der Anfrage *</label>
                  <select
                    required
                    value={form.betreff}
                    onChange={(e) => setForm({ ...form, betreff: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-accent-500"
                  >
                    <option value="">Bitte wählen…</option>
                    {["Reparatur / Schadensbehebung", "Wartung / Inspektion", "Neubau / Erweiterung", "Kostenvoranschlag", "Terminanfrage Kundendienst", "Sonstiges"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-1.5">Adresse des Objekts *</label>
                  <input
                    type="text"
                    required
                    placeholder="Musterstraße 1, 70173 Stuttgart"
                    value={form.adresse}
                    onChange={(e) => setForm({ ...form, adresse: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-1.5">Beschreibung *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Beschreiben Sie das Problem oder Ihren Bedarf…"
                    value={form.beschreibung}
                    onChange={(e) => setForm({ ...form, beschreibung: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-1.5">Wunschtermin (optional)</label>
                  <input
                    type="date"
                    value={form.termin}
                    onChange={(e) => setForm({ ...form, termin: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-primary w-full justify-center py-3.5"
                >
                  {formStatus === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Wird gesendet…</>
                  ) : (
                    <><MessageSquare size={16} /> Anfrage absenden</>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* ── TAB: RECHNUNGEN ── */}
        {tab === "rechnungen" && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-brand-900">Meine Rechnungen</h2>
            {RECHNUNGEN.map((r) => (
              <div key={r.nr} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl">🧾</div>
                  <div>
                    <div className="font-bold text-brand-900">{r.nr}</div>
                    <div className="text-xs text-gray-400">{r.auftrag} · {r.datum}</div>
                    {r.faellig && (
                      <div className="text-xs text-gray-400">Fällig: {r.faellig}</div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand-900 text-lg">{r.betrag.toFixed(2)} €</div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${r.cls}`}>{r.status}</span>
                </div>
                <button className="p-2 text-gray-400 hover:text-accent-600 transition-colors rounded-lg hover:bg-accent-50">
                  <Download size={18} />
                </button>
              </div>
            ))}
            <div className="text-center py-4">
              <p className="text-sm text-gray-400">Ältere Rechnungen auf Anfrage: <a href={`mailto:${COMPANY.email}`} className="text-accent-600 hover:underline">{COMPANY.email}</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
