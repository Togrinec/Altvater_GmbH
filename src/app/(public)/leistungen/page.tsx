import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Home, Shield, Settings, Flame, Wrench, Droplets } from "lucide-react";
import { LEISTUNGEN } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Gewerbebau und Privatbau – Fassaden, Dächer, Abdichtungen, Dachrinnen, Kaminverkleidungen und Sonderanfertigungen von der Altvater GmbH.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  building2: Building2,
  home: Home,
  shield: Shield,
  settings: Settings,
  flame: Flame,
  wrench: Wrench,
  droplets: Droplets,
};

export default function LeistungenSeite() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-white">Leistungen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Unsere Leistungen</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Von der Planung bis zur Montage – wir begleiten Ihr Projekt im Gewerbebau
            und im Privatbau mit handwerklicher Präzision.
          </p>
        </div>
      </section>

      {/* Gewerbebau */}
      <section id="gewerbebau" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="badge bg-accent-100 text-accent-600 mb-4">Gewerbebau</span>
              <h2 className="section-title">{LEISTUNGEN.gewerbebau.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {LEISTUNGEN.gewerbebau.subtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {["Industrie- und Gewerbegebäude", "Büro- und Verwaltungsgebäude", "Öffentliche Bauten", "Logistikzentren", "Parkhäuser und Tiefgaragen"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-accent-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Gewerbeprojekt anfragen <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={LEISTUNGEN.gewerbebau.image}
                alt="Gewerbebau Altvater GmbH"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bereiche Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ...LEISTUNGEN.gewerbebau.bereiche[0], href: "/leistungen/gewerbebau/fassaden" },
              { ...LEISTUNGEN.gewerbebau.bereiche[1], href: "/leistungen/gewerbebau/daecher" },
              { ...LEISTUNGEN.gewerbebau.bereiche[2], href: "/leistungen/gewerbebau/abdichtungen" },
              { ...LEISTUNGEN.gewerbebau.bereiche[3], href: "/leistungen/gewerbebau/sonderanfertigungen" },
            ].map((bereich) => {
              const Icon = ICON_MAP[bereich.icon] ?? Building2;
              return (
                <Link key={bereich.title} href={bereich.href} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-600 transition-colors">
                    <Icon size={22} className="text-accent-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-brand-900 mb-2 group-hover:text-accent-600 transition-colors">{bereich.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{bereich.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-accent-600 font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Mehr erfahren →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-100 h-2" />

      {/* Privatbau */}
      <section id="privatbau" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={LEISTUNGEN.privatbau.image}
                alt="Privatbau Altvater GmbH"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="badge bg-gray-100 text-gray-600 border border-gray-200 mb-4">Privatbau</span>
              <h2 className="section-title">{LEISTUNGEN.privatbau.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {LEISTUNGEN.privatbau.subtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {["Einfamilienhäuser", "Mehrfamilienhäuser", "Dachausbauten & Sanierungen", "Historische Gebäude", "Terrassen & Balkone"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-accent-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Privatprojekt anfragen <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Bereiche Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ...LEISTUNGEN.privatbau.bereiche[0], href: "/leistungen/privatbau/blechdach" },
              { ...LEISTUNGEN.privatbau.bereiche[1], href: "/leistungen/privatbau/dachrinnen" },
              { ...LEISTUNGEN.privatbau.bereiche[2], href: "/leistungen/privatbau/kaminverkleidungen" },
              { ...LEISTUNGEN.privatbau.bereiche[3], href: "/leistungen/privatbau/kundendienst" },
            ].map((bereich) => {
              const Icon = ICON_MAP[bereich.icon] ?? Home;
              return (
                <Link key={bereich.title} href={bereich.href} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-800 transition-colors">
                    <Icon size={22} className="text-brand-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-brand-900 mb-2 group-hover:text-accent-600 transition-colors">{bereich.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{bereich.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-accent-600 font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Mehr erfahren →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">So arbeiten wir</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Von der ersten Anfrage bis zur fertigen Montage – strukturiert, transparent, zuverlässig.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Verbindungslinie (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-accent-600/30" />
            {[
              { step: "01", title: "Anfrage & Beratung", desc: "Sie kontaktieren uns – telefonisch, per E-Mail oder über das Formular. Wir melden uns innerhalb von 24h." },
              { step: "02", title: "Aufmaß & Angebot", desc: "Bei Bedarf kommen wir vor Ort, nehmen Maß und erstellen ein detailliertes, transparentes Angebot." },
              { step: "03", title: "Fertigung", desc: "Nach Auftragserteilung beginnt die Fertigung in unserer Werkstatt in Nufringen – präzise und termingerecht." },
              { step: "04", title: "Lieferung & Montage", desc: "Wir liefern und montieren – oder liefern frei Baustelle. Abnahme und Dokumentation inklusive." },
            ].map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-accent-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-5 z-10 relative">
                  {s.step}
                </div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="section-title">Bereit für Ihr Projekt?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Kontaktieren Sie uns – wir beraten Sie kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Jetzt Kontakt aufnehmen <ArrowRight size={18} />
            </Link>
            <Link href="/referenzen" className="btn-secondary text-base px-8 py-4">
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
