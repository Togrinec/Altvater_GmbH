import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY, NAV_ITEMS, PRODUCTS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Spalte 1 – Logo + About */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-lg leading-none">ALTVATER</div>
                <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">GmbH · Metallverarbeitung</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Ihr Spezialist für Metallverarbeitung im Bau. Seit {COMPANY.founded} stehen wir
              für Präzision, Qualität und Zuverlässigkeit in Baden-Württemberg und deutschlandweit.
            </p>
            {/* Kennzahlen */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{COMPANY.employees}</div>
                <div className="text-xs text-gray-400 mt-0.5">Mitarbeiter</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">{COMPANY.projects}</div>
                <div className="text-xs text-gray-400 mt-0.5">Projekte</div>
              </div>
            </div>
          </div>

          {/* Spalte 2 – Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                    <ArrowRight size={13} className="text-accent-500 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/downloads" className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ArrowRight size={13} className="text-accent-500 group-hover:translate-x-1 transition-transform" />
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3 – Produkte */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produkte</h3>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/produkte/${p.slug}`} className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                    <ArrowRight size={13} className="text-accent-500 group-hover:translate-x-1 transition-transform" />
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 4 – Kontakt */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  {COMPANY.street}<br />
                  {COMPANY.city}
                </span>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone size={16} className="text-accent-500 flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail size={16} className="text-accent-500 flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.hours}</span>
              </li>
            </ul>
            {/* Händlerportal CTA */}
            <div className="mt-6 p-4 bg-accent-600/20 border border-accent-600/30 rounded-xl">
              <p className="text-xs text-gray-300 mb-2">Fachbetrieb? Jetzt registrieren:</p>
              <Link href="/portal" className="text-sm font-semibold text-accent-400 hover:text-white transition-colors flex items-center gap-1">
                🔐 Händlerportal
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Altvater GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <Link href="/kontakt" className="hover:text-gray-300 transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
