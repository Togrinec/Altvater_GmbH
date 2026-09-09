import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Wrench, CheckCircle2, ArrowRight, CalendarCheck } from "lucide-react";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kundendienst – Privatbau",
  description: "Reparatur, Wartung und Sanierung von Dachrinnen, Blechdächern und Kaminverkleidungen – schnell und zuverlässig von Altvater GmbH.",
};

const LEISTUNGEN = [
  { icon: "🔧", titel: "Reparaturen", desc: "Schnelle Schadensbehebung an Dachrinnen, Fallrohren, Blechdächern und Kaminverkleidungen – auch Notfallreparaturen." },
  { icon: "🔍", titel: "Inspektion & Begutachtung", desc: "Wir prüfen den Zustand Ihrer Dachentwässerung und Blecharbeiten und geben eine ehrliche Einschätzung." },
  { icon: "🛠️", titel: "Wartung", desc: "Regelmäßige Wartungsverträge: Laubreinigung, Dichtheitsprüfung, Befestigungskontrolle – einmal jährlich oder nach Bedarf." },
  { icon: "♻️", titel: "Sanierung", desc: "Wenn Reparatur nicht mehr sinnvoll ist: Wir sanieren Ihre Dachentwässerung komplett – neues Material, professionelle Montage." },
  { icon: "📋", titel: "Dokumentation", desc: "Nach jedem Einsatz erhalten Sie eine schriftliche Dokumentation der ausgeführten Arbeiten mit Fotodokumentation." },
  { icon: "📞", titel: "Beratung", desc: "Sie sind unsicher, ob Reparatur oder Neubau sinnvoller ist? Wir beraten Sie ehrlich und transparent." },
];

export default function KundendienstSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Kundendienst</span>
          </div>
          <div className="badge bg-gray-600/30 border border-gray-500/30 text-gray-300 mb-4">Privatbau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Kundendienst & Wartung</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Reparatur, Wartung, Sanierung – wir sind nach dem Kauf für Sie da.
            Schnell, zuverlässig und aus der Region.
          </p>
        </div>
      </section>

      {/* Notfall-Banner */}
      <div className="bg-red-600 text-white">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold">Wasserschaden / Notfall?</p>
              <p className="text-sm text-red-100">Rufen Sie uns sofort an – wir reagieren schnell.</p>
            </div>
          </div>
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 bg-white text-red-600 font-bold px-5 py-2.5 rounded-xl hover:bg-red-50 transition-colors shrink-0">
            <Phone size={16} /> {COMPANY.phone}
          </a>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {LEISTUNGEN.map((l) => (
              <div key={l.titel} className="card p-6 hover:-translate-y-1 transition-transform group">
                <div className="text-3xl mb-4">{l.icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{l.titel}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>

          {/* Wartungsvertrag */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-accent-600 rounded-3xl p-8 text-white">
              <CalendarCheck size={32} className="mb-4" />
              <h3 className="text-2xl font-bold mb-3">Wartungsvertrag</h3>
              <p className="text-blue-100 mb-5">
                Sorgen Sie sich nicht mehr um Ihre Dachentwässerung – mit unserem
                Wartungsvertrag kümmern wir uns jährlich um Inspektion und Reinigung.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "1x jährliche Inspektion & Reinigung",
                  "Bevorzugte Terminvergabe",
                  "10 % Rabatt auf Reparaturen",
                  "Schriftliche Dokumentation",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle2 size={13} className="text-white flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-secondary w-full justify-center">
                Wartungsvertrag anfragen <ArrowRight size={16} />
              </Link>
            </div>

            <div className="card p-8">
              <Wrench size={32} className="text-brand-700 mb-4" />
              <h3 className="text-2xl font-bold text-brand-900 mb-3">Termin vereinbaren</h3>
              <p className="text-gray-600 mb-5">
                Kein Notfall, aber Bedarf? Vereinbaren Sie einen Termin für Inspektion,
                Reparatur oder Beratung.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock size={16} className="text-accent-500" />
                  <span className="text-sm">{COMPANY.hours}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={16} className="text-accent-500" />
                  <a href={`tel:${COMPANY.phone}`} className="text-sm hover:text-accent-600">{COMPANY.phone}</a>
                </div>
              </div>
              <Link href="/kontakt" className="btn-primary w-full justify-center">
                Termin anfragen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
