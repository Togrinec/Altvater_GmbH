"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/data";

const BETREFFE = [
  "Produktanfrage",
  "Angebot anfordern",
  "Technische Frage",
  "Händlerregistrierung",
  "Kundendienst / Reparatur",
  "Sonstiges",
];

export default function KontaktSeite() {
  const [form, setForm] = useState({
    name: "", firma: "", email: "", telefon: "", betreff: "", nachricht: "", datenschutz: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Platzhalter – hier API-Call einbauen
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-white">Kontakt</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Kontakt</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Wir sind für Sie da – schreiben Sie uns, rufen Sie an oder besuchen Sie uns
            in Nufringen.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Kontaktdaten */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-900 mb-6">So erreichen Sie uns</h2>
              </div>

              {[
                { icon: Phone, label: "Telefon", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: Mail, label: "E-Mail", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="card p-5 flex items-start gap-4 group hover:-translate-y-0.5 transition-transform"
                >
                  <div className="w-11 h-11 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-600 transition-colors">
                    <c.icon size={20} className="text-accent-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">{c.label}</div>
                    <div className="font-semibold text-brand-900">{c.value}</div>
                  </div>
                </a>
              ))}

              <div className="card p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Adresse</div>
                  <div className="font-semibold text-brand-900">{COMPANY.street}</div>
                  <div className="text-gray-600">{COMPANY.city}</div>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-accent-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Öffnungszeiten</div>
                  <div className="font-semibold text-brand-900">{COMPANY.hours}</div>
                  <div className="text-sm text-gray-500">Sa + So geschlossen</div>
                </div>
              </div>

              {/* Händlerportal */}
              <div className="p-5 bg-accent-600 rounded-2xl text-white">
                <div className="font-bold mb-1">Sie sind Fachbetrieb?</div>
                <p className="text-sm text-blue-100 mb-3">
                  Beantragen Sie Ihr Händlerkonto und profitieren Sie von exklusiven Konditionen.
                </p>
                <Link href="/portal" className="inline-flex items-center gap-2 bg-white text-accent-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                  🔐 Händlerportal
                </Link>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-brand-900 mb-6">Nachricht senden</h2>

                {status === "sent" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-900 mb-2">Nachricht gesendet!</h3>
                    <p className="text-gray-500">
                      Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-900 mb-1.5">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Max Mustermann"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-900 mb-1.5">
                          Firma
                        </label>
                        <input
                          type="text"
                          name="firma"
                          value={form.firma}
                          onChange={handleChange}
                          placeholder="Muster GmbH"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-900 mb-1.5">
                          E-Mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="max@muster.de"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-900 mb-1.5">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="telefon"
                          value={form.telefon}
                          onChange={handleChange}
                          placeholder="+49 711 ..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">
                        Betreff <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="betreff"
                        required
                        value={form.betreff}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all bg-white"
                      >
                        <option value="">Bitte wählen…</option>
                        {BETREFFE.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">
                        Nachricht <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="nachricht"
                        required
                        rows={5}
                        value={form.nachricht}
                        onChange={handleChange}
                        placeholder="Beschreiben Sie Ihr Anliegen…"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="datenschutz"
                        name="datenschutz"
                        required
                        checked={form.datenschutz}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-accent-600 rounded border-gray-300 focus:ring-accent-500"
                      />
                      <label htmlFor="datenschutz" className="text-sm text-gray-600">
                        Ich habe die{" "}
                        <Link href="/datenschutz" className="text-accent-600 underline hover:text-accent-700">
                          Datenschutzerklärung
                        </Link>{" "}
                        gelesen und stimme der Verarbeitung meiner Daten zu. <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Wird gesendet…
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Nachricht senden
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
