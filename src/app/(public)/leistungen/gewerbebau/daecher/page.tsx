import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dächer – Gewerbebau",
  description: "Stehfalzdächer, Doppelstehfalz und Strangfalz in Titanzink, Kupfer und Aluminium – Gewerbedächer von Altvater GmbH.",
};

const DACHARTEN = [
  {
    titel: "Stehfalzdach",
    desc: "Der Klassiker im Metallbau – ein Stehfalzdach aus Titanzink, Kupfer oder Aluminium ist langlebig, dicht und architektonisch ausdrucksstark. Geeignet für Flach- und Steildach.",
    bild: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    merkmale: ["Nahtlose, wasserführende Verbindung", "Thermische Ausdehnung kompensiert", "Lebenserwartung 80–100 Jahre (Titanzink)", "Individuell anpassbar"],
  },
  {
    titel: "Doppelstehfalzdach",
    desc: "Die doppelt gefalzte Variante bietet noch höhere Dichtigkeit und wird besonders für flache Neigungen ab 3° eingesetzt.",
    bild: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    merkmale: ["Geeignet ab 3° Dachneigung", "Doppelte Dichtsicherheit", "Ideal für Flachdächer mit Gefälle", "Kupfer, Titanzink, Aluminium"],
  },
  {
    titel: "Strangfalzdach",
    desc: "Horizontal geführte Falze ermöglichen besondere gestalterische Akzente und eignen sich hervorragend für geschwungene Dachformen.",
    bild: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    merkmale: ["Horizontale Falzführung", "Für geschwungene Formen", "Modernes Erscheinungsbild", "Individuelle Feldbreiten"],
  },
];

const MATERIALIEN = [
  { name: "Titanzink", detail: "RHEINZINK / VM ZINC", eigen: "Selbstheilend, patiniert grau-blau, 80–100 Jahre Lebensdauer", preis: "€€€" },
  { name: "Kupfer", detail: "KME / Aurubis", eigen: "Edle Patina, architektonisch hochwertig, 100+ Jahre", preis: "€€€€" },
  { name: "Aluminium", detail: "Elval / Novelis", eigen: "Leicht, farbig beschichtet, korrosionsfest, 50+ Jahre", preis: "€€" },
  { name: "Edelstahl", detail: "VA 1.4301 / 1.4404", eigen: "Hygienisch, silbrig, industriell, 50+ Jahre", preis: "€€€" },
];

export default function DaecherSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/leistungen">Leistungen</Link><span>/</span>
            <span className="text-white">Dächer</span>
          </div>
          <div className="badge bg-accent-600/20 border border-accent-600/30 text-accent-400 mb-4">Gewerbebau</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Metalldächer</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Stehfalz, Doppelstehfalz und Strangfalz – präzise gefertigt und montiert für
            Gewerbegebäude, Industriehallen und öffentliche Bauten.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-12">
          {DACHARTEN.map((d, i) => (
            <div key={d.titel} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl font-bold text-brand-900 mb-3">{d.titel}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{d.desc}</p>
                <ul className="space-y-2 mb-6">
                  {d.merkmale.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />{m}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className="btn-primary text-sm">
                  Anfrage stellen <ArrowRight size={15} />
                </Link>
              </div>
              <div className={`relative h-72 rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={d.bild} alt={d.titel} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Materialvergleich</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="text-left px-5 py-3 rounded-tl-xl">Material</th>
                  <th className="text-left px-5 py-3">Hersteller</th>
                  <th className="text-left px-5 py-3">Eigenschaften</th>
                  <th className="text-left px-5 py-3 rounded-tr-xl">Preissegment</th>
                </tr>
              </thead>
              <tbody>
                {MATERIALIEN.map((m, i) => (
                  <tr key={m.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-semibold text-brand-900">{m.name}</td>
                    <td className="px-5 py-3 text-gray-500">{m.detail}</td>
                    <td className="px-5 py-3 text-gray-600">{m.eigen}</td>
                    <td className="px-5 py-3 text-accent-600 font-bold">{m.preis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
