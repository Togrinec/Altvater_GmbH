import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blechdach & Verkleidungen – Privatbau",
  description: "Blechdächer, Gaubenverkleidungen und Wandanschlüsse für Privathäuser – handwerklich gefertigt von Altvater GmbH.",
};

const LEISTUNGEN = [
  { titel: "Stehfalzdach", desc: "Klassisches Blechdach aus Titanzink oder Kupfer – langlebig, dicht, architektonisch hochwertig. Ideal für Einfamilienhäuser und Villen.", bild: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { titel: "Gaubenverkleidungen", desc: "Präzise gefertigte Blechverkleidungen für Dachgauben – passgenau und wetterfest in Titanzink, Kupfer oder Aluminium.", bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { titel: "Ortgangbleche & Wandanschlüsse", desc: "Alle Anschlussdetails sauber und dauerhaft – Ortgangbleche, Traufbleche, Wandanschlüsse und Abschlussprofile.", bild: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
];

export default function BlechdachSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Blechdach & Verkleidungen</span>
          </div>
          <div className="badge bg-gray-600/30 border border-gray-500/30 text-gray-300 mb-4">Privatbau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Blechdach & Verkleidungen</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Hochwertige Blechdächer und Verkleidungen für Ihr Zuhause – handwerklich
            präzise, langlebig und gestalterisch ansprechend.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-14">
          {LEISTUNGEN.map((l, i) => (
            <div key={l.titel} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl font-bold text-brand-900 mb-3">{l.titel}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{l.desc}</p>
                <ul className="space-y-2 mb-6">
                  {["Handwerkliche Verarbeitung", "Materialauswahl nach Wunsch", "Montage durch eigenes Team", "Dokumentation und Abnahme"].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className="btn-primary text-sm">
                  Anfrage stellen <ArrowRight size={15} />
                </Link>
              </div>
              <div className={`relative h-72 rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={l.bild} alt={l.titel} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Materialien für Ihr Blechdach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Titanzink", desc: "Der Klassiker – patiniert elegant grau-blau, wartungsarm und 80+ Jahre langlebig.", preis: "€€€", highlight: true },
              { name: "Kupfer", desc: "Das edle Material – entwickelt eine natürliche grüne Patina, 100+ Jahre Lebensdauer.", preis: "€€€€", highlight: false },
              { name: "Aluminium", desc: "Leicht und in vielen Farben verfügbar – ideal für moderne Architektur.", preis: "€€", highlight: false },
            ].map((m) => (
              <div key={m.name} className={`card p-6 ${m.highlight ? "border-2 border-accent-500 relative" : ""}`}>
                {m.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge bg-accent-600 text-white text-xs">Beliebt</span>}
                <h3 className="font-bold text-brand-900 text-lg mb-2">{m.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{m.desc}</p>
                <span className="text-accent-600 font-bold">{m.preis}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
