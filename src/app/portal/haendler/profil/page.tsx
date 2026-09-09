"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Building2, User, MapPin, CreditCard, Bell, Shield } from "lucide-react";

export default function ProfilSeite() {
  const [gespeichert, setGespeichert] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setGespeichert(true);
    setTimeout(() => setGespeichert(false), 2500);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/portal/haendler" className="text-gray-400 hover:text-brand-900 transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-brand-900">Profil & Einstellungen</h1>
              <p className="text-xs text-gray-400">Muster Dachdeckerei GmbH · Händler A</p>
            </div>
          </div>
          {gespeichert && (
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-2 rounded-xl">
              ✓ Gespeichert
            </div>
          )}
        </div>
      </header>

      <div className="p-6 max-w-3xl space-y-6">
        {/* Unternehmensdaten */}
        <form onSubmit={handleSave}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <Building2 size={18} className="text-accent-600" />
              <h2 className="font-bold text-brand-900">Unternehmensdaten</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Firmenname", name: "firma", val: "Muster Dachdeckerei GmbH", type: "text" },
                { label: "Kundennummer", name: "kundennr", val: "H-00471", type: "text", disabled: true },
                { label: "USt-ID", name: "ustid", val: "DE123456789", type: "text" },
                { label: "Handelsregister", name: "hr", val: "HRB 12345 Stuttgart", type: "text" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    defaultValue={f.val}
                    disabled={f.disabled}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Kontaktperson */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <User size={18} className="text-accent-600" />
              <h2 className="font-bold text-brand-900">Kontaktperson</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Vorname", val: "Max", name: "vn" },
                { label: "Nachname", val: "Mustermann", name: "nn" },
                { label: "E-Mail", val: "m.mustermann@muster-dach.de", name: "email" },
                { label: "Telefon", val: "+49 711 123456", name: "tel" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">{f.label}</label>
                  <input
                    type="text"
                    defaultValue={f.val}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lieferadresse */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <MapPin size={18} className="text-accent-600" />
              <h2 className="font-bold text-brand-900">Standard-Lieferadresse</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Straße & Hausnummer", val: "Musterstraße 12", name: "str", colSpan: true },
                { label: "PLZ", val: "70173", name: "plz" },
                { label: "Ort", val: "Stuttgart", name: "ort" },
                { label: "Land", val: "Deutschland", name: "land" },
              ].map((f) => (
                <div key={f.name} className={f.colSpan ? "md:col-span-2" : ""}>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">{f.label}</label>
                  <input
                    type="text"
                    defaultValue={f.val}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Konditionen (readonly) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <CreditCard size={18} className="text-accent-600" />
              <h2 className="font-bold text-brand-900">Ihre Konditionen</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Preisstufe", val: "Händler A" },
                { label: "Zahlungsziel", val: "30 Tage netto" },
                { label: "Kreditlimit", val: "15.000 €" },
              ].map((k) => (
                <div key={k.label} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-1">{k.label}</div>
                  <div className="font-semibold text-brand-900">{k.val}</div>
                </div>
              ))}
            </div>
            <p className="px-6 pb-4 text-xs text-gray-400">
              Konditionen können nur durch Altvater GmbH geändert werden.{" "}
              <Link href="/kontakt" className="text-accent-600 hover:underline">Kontakt aufnehmen →</Link>
            </p>
          </div>

          {/* Passwort */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <Shield size={18} className="text-accent-600" />
              <h2 className="font-bold text-brand-900">Sicherheit</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Neues Passwort</label>
                <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Passwort bestätigen</label>
                <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors"
          >
            <Save size={16} /> Änderungen speichern
          </button>
        </form>
      </div>
    </div>
  );
}
