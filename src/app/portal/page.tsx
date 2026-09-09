import type { Metadata } from "next";
import Link from "next/link";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Händlerportal",
  description: "Login zum Altvater Händlerportal – exklusive Konditionen, Live-Lagerbestände und digitale Auftragsabwicklung.",
};

export default function PortalSeite() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-brand-900 text-lg leading-none">ALTVATER</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">GmbH · Händlerportal</div>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-brand-900 mb-2">Händler-Login</h1>
          <p className="text-gray-500 text-sm">Melden Sie sich mit Ihren Zugangsdaten an.</p>
        </div>

        <div className="card p-8">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-brand-900 mb-1.5">E-Mail</label>
              <input
                type="email"
                placeholder="haendler@muster.de"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-900 mb-1.5">Passwort</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
              />
            </div>
            <button className="btn-primary w-full justify-center py-3">
              <Lock size={16} />
              Anmelden
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Noch kein Händlerkonto?{" "}
              <Link href="/kontakt?betreff=Händlerregistrierung" className="text-accent-600 font-semibold hover:underline">
                Jetzt beantragen →
              </Link>
            </p>
          </div>
        </div>

        {/* Feature-Hinweis */}
        <div className="mt-6 p-5 bg-accent-600/10 border border-accent-600/20 rounded-2xl">
          <p className="text-xs font-semibold text-accent-700 mb-3 uppercase tracking-wide">Portal-Features</p>
          <ul className="space-y-2">
            {["Händlerpreise & Konditionen", "Live-Lagerbestände aus ERP", "Digitale Bestellabwicklung", "Rechnungen & Lieferscheine"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-accent-700">
                <CheckCircle2 size={13} className="flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-1">
            ← Zurück zur Website
          </Link>
        </p>
      </div>
    </div>
  );
}
