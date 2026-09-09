import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { REFERENZEN } from "@/lib/data";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Abgeschlossene Projekte der Altvater GmbH – Gewerbebau, Privatbau und öffentliche Bauten in Baden-Württemberg.",
};

const KATEGORIEN = ["Alle", ...Array.from(new Set(REFERENZEN.map((r) => r.kategorie)))];

export default function ReferenzenSeite() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-white">Referenzen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Referenzprojekte</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Einblicke in unsere abgeschlossenen Projekte – von der Dachrinne am Einfamilienhaus
            bis zur kompletten Fassadenverkleidung eines Gewerbegebäudes.
          </p>
        </div>
      </section>

      {/* Kategorie-Filter (statisch) */}
      <section className="border-b border-gray-200 bg-white sticky top-[88px] z-30">
        <div className="container-custom py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {KATEGORIEN.map((kat) => (
            <span
              key={kat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                kat === "Alle"
                  ? "bg-accent-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {kat}
            </span>
          ))}
        </div>
      </section>

      {/* Projekt-Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REFERENZEN.map((ref) => (
              <article key={ref.slug} className="card group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="badge bg-accent-600 text-white text-xs">{ref.kategorie}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-brand-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {ref.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent-500" />
                      {ref.ort}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-accent-500" />
                      {ref.jahr}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{ref.leistung}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-accent-600 rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ihr Projekt als nächste Referenz?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Wir freuen uns auf Ihre Anfrage – egal ob kleines Privatprojekt oder
              großes Gewerbeobjekt.
            </p>
            <Link href="/kontakt" className="btn-secondary text-base px-8 py-4">
              Jetzt Kontakt aufnehmen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
