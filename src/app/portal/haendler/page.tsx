"use client";

import Link from "next/link";
import {
  LayoutDashboard, Package, ShoppingCart, FileText, User, Bell,
  TrendingUp, Clock, CheckCircle2, Truck, AlertCircle, ArrowRight,
  ChevronRight, Search
} from "lucide-react";

const NAV = [
  { label: "Dashboard", href: "/portal/haendler", icon: LayoutDashboard, aktiv: true },
  { label: "Produktkatalog", href: "/portal/haendler/katalog", icon: Package },
  { label: "Bestellungen", href: "/portal/haendler/bestellungen", icon: ShoppingCart },
  { label: "Dokumente", href: "/portal/haendler/dokumente", icon: FileText },
  { label: "Profil", href: "/portal/haendler/profil", icon: User },
];

const BESTELLUNGEN = [
  { id: "ORD-2026-4782", datum: "09.09.2026", betrag: "847,50 €", status: "versandt", statusLabel: "Versandt", color: "bg-blue-100 text-blue-700" },
  { id: "ORD-2026-4765", datum: "03.09.2026", betrag: "324,00 €", status: "geliefert", statusLabel: "Geliefert", color: "bg-green-100 text-green-700" },
  { id: "ORD-2026-4741", datum: "28.08.2026", betrag: "1.240,00 €", status: "geliefert", statusLabel: "Geliefert", color: "bg-green-100 text-green-700" },
];

const SCHNELLZUGRIFF = [
  { name: "Entwässerungsrinnen", artNr: "ALT-1000", lager: 87, status: "bg-green-500" },
  { name: "Flachdachabläufe DN 100", artNr: "ALT-4521", lager: 142, status: "bg-green-500" },
  { name: "Kieskörbe Edelstahl", artNr: "ALT-3010", lager: 8, status: "bg-amber-500" },
];

export default function HaendlerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-900 text-white flex flex-col fixed top-0 left-0 h-full z-40 hidden lg:flex">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent-600 rounded-lg flex items-center justify-center">
              <span className="font-black text-lg">A</span>
            </div>
            <div>
              <div className="font-bold text-sm leading-none">ALTVATER</div>
              <div className="text-xs text-gray-400 mt-0.5">Händlerportal</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                item.aktiv
                  ? "bg-accent-600 text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-accent-600/30 rounded-full flex items-center justify-center text-sm font-bold">M</div>
            <div>
              <div className="text-sm font-medium">Muster GmbH</div>
              <div className="text-xs text-gray-400">Händler A</div>
            </div>
          </div>
          <Link href="/portal" className="mt-2 flex items-center gap-2 px-3 py-2 text-xs text-gray-400 hover:text-white transition-colors">
            ← Abmelden
          </Link>
        </div>
      </aside>

      {/* Hauptbereich */}
      <main className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-brand-900">Dashboard</h1>
              <p className="text-xs text-gray-400">Willkommen zurück, Muster GmbH</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-500 hover:text-brand-900 transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-9 h-9 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* KPI-Karten */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Offene Bestellungen", val: "3", icon: ShoppingCart, trend: "", color: "text-blue-600 bg-blue-50" },
              { label: "In Lieferung", val: "1", icon: Truck, trend: "", color: "text-amber-600 bg-amber-50" },
              { label: "Geliefert (30 Tage)", val: "7", icon: CheckCircle2, trend: "+2", color: "text-green-600 bg-green-50" },
              { label: "Offene Rechnungen", val: "1", icon: FileText, trend: "", color: "text-red-600 bg-red-50" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 font-medium">{kpi.label}</span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${kpi.color}`}>
                    <kpi.icon size={18} />
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-brand-900">{kpi.val}</span>
                  {kpi.trend && <span className="text-sm text-green-600 font-medium mb-1">{kpi.trend}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Letzte Bestellungen */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <h2 className="font-bold text-brand-900">Letzte Bestellungen</h2>
                <Link href="/portal/haendler/bestellungen" className="text-sm text-accent-600 hover:underline flex items-center gap-1">
                  Alle <ChevronRight size={14} />
                </Link>
              </div>
              <div className="divide-y divide-gray-100">
                {BESTELLUNGEN.map((b) => (
                  <div key={b.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                    <div>
                      <div className="font-medium text-brand-900 text-sm">{b.id}</div>
                      <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                        <Clock size={11} />{b.datum}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-brand-900 text-sm">{b.betrag}</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${b.color}`}>{b.statusLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schnellsuche & Lager */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="p-5 border-b border-gray-100">
                <h2 className="font-bold text-brand-900 mb-3">Schnellsuche</h2>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Artikelnummer oder Name…"
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Zuletzt bestellt</h3>
                <div className="space-y-3">
                  {SCHNELLZUGRIFF.map((a) => (
                    <div key={a.artNr} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-brand-900">{a.name}</div>
                        <div className="text-xs text-gray-400">{a.artNr}</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className={`w-2 h-2 rounded-full ${a.status}`} />
                        <span className="text-gray-600">{a.lager} St.</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/portal/haendler/katalog" className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-accent-50 text-accent-600 rounded-xl text-sm font-semibold hover:bg-accent-100 transition-colors">
                  Zum Katalog <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Schnellbestellung */}
          <div className="bg-gradient-to-r from-accent-700 to-accent-600 rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg mb-1">Schnellbestellung</h3>
                <p className="text-blue-100 text-sm">Artikelnummer direkt eingeben und bestellen</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Artikelnummer z.B. ALT-4521"
                  className="flex-1 md:w-56 px-4 py-2.5 rounded-xl text-brand-900 text-sm focus:outline-none"
                />
                <Link href="/portal/haendler/bestellungen" className="px-5 py-2.5 bg-white text-accent-600 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm whitespace-nowrap">
                  + Warenkorb
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
