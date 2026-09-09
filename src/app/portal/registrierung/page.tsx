"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Building2, User, MapPin, FileText } from "lucide-react";

const SCHRITTE = ["Unternehmenstyp", "Firmendaten", "Kontakt", "Bestätigung"];

export default function RegistrierungSeite() {
  const [schritt, setSchritt] = useState(0);
  const [typ, setTyp] = useState<"haendler" | "kunde" | null>(null);
  const [gesendet, setGesendet] = useState(false);
  const [form, setForm] = useState({
    firma: "", ustid: "", strasse: "", plz: "", ort: "",
    vorname: "", nachname: "", email: "", telefon: "", nachricht: "",
    datenschutz: false,
  });

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  function weiter() { setSchritt((s) => Math.min(s + 1, 3)); }
  function zurueck() { setSchritt((s) => Math.max(s - 1, 0)); }

  function absenden(e: React.FormEvent) {
    e.preventDefault();
    setGesendet(true);
  }

  if (gesendet) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-brand-900 mb-3">Antrag eingegangen!</h1>
          <p className="text-gray-600 mb-2">
            Vielen Dank für Ihre Registrierungsanfrage. Unser Vertriebsteam prüft
            Ihren Antrag und meldet sich innerhalb von <strong>1–2 Werktagen</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-8">Eine Bestätigung wurde an <strong>{form.email}</strong> gesendet.</p>
          <Link href="/" className="btn-primary">
            Zurück zur Website <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-brand-900 text-lg leading-none">ALTVATER</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Portal-Registrierung</div>
            </div>
          </Link>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8 px-2">
          {SCHRITTE.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                i < schritt ? "bg-accent-600 text-white" :
                i === schritt ? "bg-accent-600 text-white ring-4 ring-accent-100" :
                "bg-gray-200 text-gray-400"
              }`}>
                {i < schritt ? <CheckCircle2 size={16} /> : i + 1}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${i === schritt ? "text-accent-600" : "text-gray-400"}`}>{s}</span>
              {i < SCHRITTE.length - 1 && <div className={`flex-1 h-0.5 mx-2 hidden sm:block ${i < schritt ? "bg-accent-600" : "bg-gray-200"}`} style={{ width: 24 }} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">

          {/* Schritt 0 – Typ */}
          {schritt === 0 && (
            <div>
              <h2 className="text-xl font-bold text-brand-900 mb-2">Für wen registrieren Sie sich?</h2>
              <p className="text-gray-500 text-sm mb-6">Wählen Sie den passenden Kontentyp aus.</p>
              <div className="space-y-3 mb-6">
                {[
                  { val: "haendler", icon: Building2, titel: "Händler / Fachbetrieb", desc: "Dachdecker, Klempner, Generalunternehmer – für Großhandelspreise und digitale Bestellabwicklung." },
                  { val: "kunde", icon: User, titel: "Privatkunde", desc: "Hausbesitzer und Bauherren – für Auftragsverfolgung und Serviceanfragen." },
                ].map((o) => (
                  <button
                    key={o.val}
                    onClick={() => setTyp(o.val as "haendler" | "kunde")}
                    className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      typ === o.val ? "border-accent-600 bg-accent-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${typ === o.val ? "bg-accent-600 text-white" : "bg-gray-100 text-gray-500"}`}>
                      <o.icon size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-900">{o.titel}</div>
                      <div className="text-sm text-gray-500">{o.desc}</div>
                    </div>
                    {typ === o.val && <CheckCircle2 size={18} className="text-accent-600 ml-auto flex-shrink-0 mt-1" />}
                  </button>
                ))}
              </div>
              <button onClick={weiter} disabled={!typ} className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                Weiter <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Schritt 1 – Firmendaten */}
          {schritt === 1 && (
            <div>
              <h2 className="text-xl font-bold text-brand-900 mb-5 flex items-center gap-2">
                <Building2 size={20} className="text-accent-600" />
                {typ === "haendler" ? "Firmendaten" : "Ihre Daten"}
              </h2>
              <div className="space-y-4">
                {typ === "haendler" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">Firmenname *</label>
                      <input type="text" name="firma" required value={form.firma} onChange={update}
                        placeholder="Muster GmbH" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">USt-ID</label>
                      <input type="text" name="ustid" value={form.ustid} onChange={update}
                        placeholder="DE123456789" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                    </div>
                  </>
                )}
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-1.5">Straße & Nr. *</label>
                  <input type="text" name="strasse" required value={form.strasse} onChange={update}
                    placeholder="Musterstraße 12" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-brand-900 mb-1.5">PLZ *</label>
                    <input type="text" name="plz" required value={form.plz} onChange={update}
                      placeholder="70173" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-brand-900 mb-1.5">Ort *</label>
                    <input type="text" name="ort" required value={form.ort} onChange={update}
                      placeholder="Stuttgart" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={zurueck} className="btn-secondary flex-1 justify-center">← Zurück</button>
                <button onClick={weiter} className="btn-primary flex-1 justify-center">Weiter <ArrowRight size={16} /></button>
              </div>
            </div>
          )}

          {/* Schritt 2 – Kontaktdaten */}
          {schritt === 2 && (
            <form onSubmit={(e) => { e.preventDefault(); weiter(); }}>
              <h2 className="text-xl font-bold text-brand-900 mb-5 flex items-center gap-2">
                <User size={20} className="text-accent-600" /> Kontaktperson
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-brand-900 mb-1.5">Vorname *</label>
                    <input type="text" name="vorname" required value={form.vorname} onChange={update}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-900 mb-1.5">Nachname *</label>
                    <input type="text" name="nachname" required value={form.nachname} onChange={update}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-1.5">E-Mail *</label>
                  <input type="email" name="email" required value={form.email} onChange={update}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-900 mb-1.5">Telefon</label>
                  <input type="tel" name="telefon" value={form.telefon} onChange={update}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
                </div>
                {typ === "haendler" && (
                  <div>
                    <label className="block text-sm font-medium text-brand-900 mb-1.5">Anmerkung (optional)</label>
                    <textarea name="nachricht" rows={3} value={form.nachricht} onChange={update}
                      placeholder="z.B. erwartetes monatliches Bestellvolumen, Hauptprodukte…"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 resize-none" />
                  </div>
                )}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="datenschutz" required checked={form.datenschutz} onChange={update}
                    className="mt-1 w-4 h-4 text-accent-600 rounded" />
                  <span className="text-sm text-gray-600">
                    Ich habe die <Link href="/datenschutz" className="text-accent-600 underline">Datenschutzerklärung</Link> gelesen. *
                  </span>
                </label>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={zurueck} className="btn-secondary flex-1 justify-center">← Zurück</button>
                <button type="submit" className="btn-primary flex-1 justify-center">Weiter <ArrowRight size={16} /></button>
              </div>
            </form>
          )}

          {/* Schritt 3 – Bestätigung */}
          {schritt === 3 && (
            <div>
              <h2 className="text-xl font-bold text-brand-900 mb-5 flex items-center gap-2">
                <FileText size={20} className="text-accent-600" /> Zusammenfassung
              </h2>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-6 text-sm">
                {[
                  { label: "Kontentyp", val: typ === "haendler" ? "Händler / Fachbetrieb" : "Privatkunde" },
                  { label: "Firma", val: form.firma || "—" },
                  { label: "Adresse", val: `${form.strasse}, ${form.plz} ${form.ort}` },
                  { label: "Kontakt", val: `${form.vorname} ${form.nachname}` },
                  { label: "E-Mail", val: form.email },
                  { label: "Telefon", val: form.telefon || "—" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-4">
                    <span className="text-gray-400">{row.label}</span>
                    <span className="font-medium text-brand-900 text-right">{row.val}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Nach dem Absenden prüfen wir Ihren Antrag und schalten Ihr Konto
                innerhalb von <strong>1–2 Werktagen</strong> frei.
              </p>
              <div className="flex gap-3">
                <button onClick={zurueck} className="btn-secondary flex-1 justify-center">← Zurück</button>
                <button onClick={absenden} className="btn-primary flex-1 justify-center">
                  Antrag absenden <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center mt-6">
          <Link href="/portal" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← Zurück zum Login
          </Link>
        </p>
      </div>
    </div>
  );
}
