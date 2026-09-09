import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar, ChevronLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { REFERENZEN } from "@/lib/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return REFERENZEN.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ref = REFERENZEN.find((r) => r.slug === params.slug);
  if (!ref) return {};
  return {
    title: ref.title,
    description: `${ref.leistung} – ${ref.ort}, ${ref.jahr}`,
  };
}

// Erweiterte Projektdetails (in Produktion aus CMS/DB)
const DETAILS: Record<string, { beschreibung: string; umfang: string[]; material: string[]; dauer: string }> = {
  "gewerbezentrum-boeblingen": {
    beschreibung: "Komplette Metallbauarbeiten für ein neues Gewerbezentrum in Böblingen – von der Fassadenverkleidung über das Flachdach bis zum Entwässerungssystem. Enge Zusammenarbeit mit Architekturbüro und Generalunternehmer.",
    umfang: ["2.400 m² Fassadenverkleidung Titanzink", "Flachdach 1.800 m² inkl. Abdichtung", "Komplettes Entwässerungssystem DN 100–200", "Attika-Abdeckungen und Wandanschlüsse"],
    material: ["Titanzink RHEINZINK", "Bitumenschweißbahn 2-lagig", "Edelstahl-Abläufe"],
    dauer: "6 Monate",
  },
  "wohnanlage-nufringen": {
    beschreibung: "Metallbauarbeiten an einer neuen Wohnanlage direkt am Firmenstandort in Nufringen – Dachrinnen, Kaminverkleidungen und sämtliche Blecharbeiten für 12 Wohneinheiten.",
    umfang: ["380 lfdm Dachrinnen Halbrund DN 100", "12 Kaminverkleidungen Titanzink", "Alle Ortgangbleche und Traufdetails", "Fallrohre und Regeneinläufe"],
    material: ["Titanzink naturfarben", "Verzinkter Stahl für Halter"],
    dauer: "3 Monate",
  },
  "industriehalle-herrenberg": {
    beschreibung: "Großes Industriedachprojekt in Herrenberg – Stehfalzdach aus Titanzink für eine neue Produktionshalle mit anspruchsvollem Entwässerungskonzept für große Niederschlagsmengen.",
    umfang: ["3.200 m² Stehfalzdach Titanzink", "Industrie-Entwässerung DN 150–DN 200", "Wandanschlüsse und Attika-Abdeckung", "Notüberläufe und Laubschutzsysteme"],
    material: ["Titanzink RHEINZINK prePATINA", "Edelstahl-Abläufe Klasse 4"],
    dauer: "4 Monate",
  },
  "schule-sindelfingen": {
    beschreibung: "Sanierung und Neubau der Dachflächen einer Grundschule in Sindelfingen – energetische Sanierung des Flachdachs inklusive neuer Abdichtung und Entwässerungsanlage.",
    umfang: ["1.100 m² Flachdachabdichtung neu", "Attika-Kompletterneuerung", "Neues Entwässerungssystem", "Notüberläufe nach DIN 1986"],
    material: ["PVC-Abdichtungsbahn", "Aluminium-Attikaabdeckung", "Edelstahl-Abläufe"],
    dauer: "8 Wochen (Schulferien)",
  },
  "villa-holzgerlingen": {
    beschreibung: "Exklusiver Privatauftrag in Holzgerlingen – komplettes Kupferdach mit Kupferrinnen und Kaminverkleidung für eine hochwertige Privatvilla im Neubau.",
    umfang: ["280 m² Stehfalzdach Kupfer", "85 lfdm Kastenrinnen Kupfer", "3 Kaminverkleidungen Kupfer", "Alle Anschlussdetails gelötet"],
    material: ["Kupfer 0,6 mm KME", "Alle Lötnähte handgelötet"],
    dauer: "5 Monate",
  },
  "buerogebaeude-stuttgart": {
    beschreibung: "Moderne Aluminiumfassade für ein Bürogebäude im Stuttgarter Westen – Planung, Fertigung und Montage der kompletten Fassadenbekleidung inklusive Abdichtung und Sonderbauteilen.",
    umfang: ["1.800 m² Aluminiumfassade", "Komplette Flachdachabdichtung", "Maßgefertigte Sonderbauteile", "Sonnenschutz-Integrationen"],
    material: ["Aluminium Stucco beschichtet RAL 7016", "TPO-Abdichtungsbahn"],
    dauer: "5 Monate",
  },
};

export default function ReferenzDetailSeite({ params }: Props) {
  const ref = REFERENZEN.find((r) => r.slug === params.slug);
  if (!ref) notFound();

  const detail = DETAILS[ref.slug] ?? {
    beschreibung: `${ref.leistung} – realisiert in ${ref.ort} im Jahr ${ref.jahr}.`,
    umfang: [ref.leistung],
    material: ["Auf Anfrage"],
    dauer: "k.A.",
  };

  const weitere = REFERENZEN.filter((r) => r.slug !== ref.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent-600 transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/referenzen" className="hover:text-accent-600 transition-colors">Referenzen</Link>
          <span>/</span>
          <span className="text-brand-900 font-medium">{ref.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-96 md:h-[500px]">
        <Image src={ref.image} alt={ref.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container-custom">
            <Link href="/referenzen" className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-white mb-4 transition-colors">
              <ChevronLeft size={15} /> Alle Referenzen
            </Link>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="badge bg-accent-600 text-white">{ref.kategorie}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">{ref.title}</h1>
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
              <span className="flex items-center gap-1.5"><MapPin size={14} />{ref.ort}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{ref.jahr}</span>
              <span className="flex items-center gap-1.5">⏱ Bauzeit: {detail.dauer}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Hauptinhalt */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-900 mb-4">Projektbeschreibung</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{detail.beschreibung}</p>

              <h3 className="text-xl font-bold text-brand-900 mb-4">Leistungsumfang</h3>
              <ul className="space-y-3 mb-8">
                {detail.umfang.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{u}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-brand-900 mb-4">Eingesetzte Materialien</h3>
              <div className="flex flex-wrap gap-2">
                {detail.material.map((m) => (
                  <span key={m} className="badge bg-gray-100 text-gray-700 border border-gray-200">{m}</span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-brand-900 mb-4">Projektdaten</h3>
                <dl className="space-y-3">
                  {[
                    { label: "Kategorie", val: ref.kategorie },
                    { label: "Ort", val: ref.ort },
                    { label: "Jahr", val: ref.jahr },
                    { label: "Bauzeit", val: detail.dauer },
                    { label: "Leistung", val: ref.leistung },
                  ].map((d) => (
                    <div key={d.label}>
                      <dt className="text-xs text-gray-400 uppercase tracking-wide">{d.label}</dt>
                      <dd className="font-medium text-brand-900 mt-0.5">{d.val}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-accent-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Ähnliches Projekt?</h3>
                <p className="text-blue-100 text-sm mb-4">Kontaktieren Sie uns – wir erstellen ein individuelles Angebot.</p>
                <Link href="/kontakt" className="btn-secondary text-sm w-full justify-center">
                  Anfrage stellen <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weitere Referenzen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-900 mb-8">Weitere Referenzen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weitere.map((r) => (
              <Link key={r.slug} href={`/referenzen/${r.slug}`} className="card group overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-accent-600 text-white text-xs">{r.kategorie}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-900 group-hover:text-accent-600 transition-colors">{r.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{r.ort} · {r.jahr}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
