import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Factory,
  Wrench,
  Truck,
  Award,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS, REFERENZEN, COMPANY } from "@/lib/data";

const USPS = [
  {
    icon: Factory,
    title: "Eigene Fertigung in Deutschland",
    desc: "Alle Produkte werden in unserer Fertigungsstätte in Nufringen produziert – keine Importe, volle Qualitätskontrolle.",
  },
  {
    icon: Wrench,
    title: "Sonderanfertigungen",
    desc: "Kein Standardmaß passt? Wir fertigen exakt nach Ihrer Zeichnung – Einzelstücke bis Kleinserie.",
  },
  {
    icon: Truck,
    title: "Schnelle Lieferung deutschlandweit",
    desc: "Lagerware ab Werk in 1–2 Werktagen. Sonderanfertigungen nach Absprache.",
  },
  {
    icon: Award,
    title: "Zertifizierter Fachbetrieb",
    desc: "Jahrzehnte Erfahrung, zertifizierte Verarbeitung und qualifizierte Mitarbeiter im Klempnerhandwerk.",
  },
];

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const featuredReferenzen = REFERENZEN.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-900">
        {/* Hintergrundbild */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Metallverarbeitung Altvater GmbH"
            fill
            className="object-cover opacity-25"
            priority
          />
          {/* Gradient-Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-transparent" />
        </div>

        {/* Dekoratives Gitter */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-custom relative z-10 py-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600/20 border border-accent-600/40 rounded-full text-accent-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              Metallverarbeitung seit {COMPANY.founded}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Präzision
              <br />
              <span className="text-accent-400">in Metall.</span>
              <br />
              <span className="text-3xl md:text-4xl font-bold text-gray-300">
                Zuverlässigkeit im Bau.
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Ihr Spezialist für Entwässerungssysteme, Flachdachzubehör, Fassaden
              und Sonderanfertigungen aus Nufringen – für Gewerbe und Privat,
              deutschlandweit.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/produkte" className="btn-primary text-base px-8 py-4">
                Produkte entdecken
                <ArrowRight size={18} />
              </Link>
              <Link href="/kontakt" className="btn-outline-white text-base px-8 py-4">
                Angebot anfragen
              </Link>
            </div>

            {/* Schnellkennzahlen */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { val: COMPANY.founded, label: "Gegründet" },
                { val: COMPANY.employees, label: "Mitarbeiter" },
                { val: COMPANY.projects, label: "Projekte" },
                { val: "DE-weit", label: "Liefergebiet" },
              ].map((kpi) => (
                <div key={kpi.label}>
                  <div className="text-2xl font-bold text-white">{kpi.val}</div>
                  <div className="text-sm text-gray-400">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll-Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scrollen</span>
          <div className="w-0.5 h-10 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── USPs ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Warum Altvater?</h2>
            <p className="section-subtitle mx-auto">
              Über vier Jahrzehnte Erfahrung, moderne Fertigung und ein engagiertes Team –
              das sind unsere Versprechen an Sie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USPS.map((usp) => (
              <div
                key={usp.title}
                className="card p-7 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-600 transition-colors">
                  <usp.icon size={22} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-brand-900 mb-2 text-base">{usp.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUKT-HIGHLIGHTS ───────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="section-title">Unsere Produkte</h2>
              <p className="section-subtitle">
                Vom Standardartikel bis zur Sonderanfertigung –
                alles aus einer Hand.
              </p>
            </div>
            <Link
              href="/produkte"
              className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:gap-3 transition-all shrink-0"
            >
              Alle Produkte <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/produkte/${product.slug}`}
                className="card group overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-900 text-lg mb-2 group-hover:text-accent-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {product.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={13} className="text-accent-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:gap-2 transition-all">
                    Mehr erfahren <ChevronRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Weiterer Produkt-Grid (kleinere Karten) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
            {PRODUCTS.slice(3).map((product) => (
              <Link
                key={product.slug}
                href={`/produkte/${product.slug}`}
                className="card p-5 flex items-center gap-4 group hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-600 transition-colors">
                  <ArrowRight size={16} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-brand-900 group-hover:text-accent-600 transition-colors">
                    {product.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ───────────────────────────────────────────── */}
      <section className="section-padding bg-brand-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Unsere Leistungen</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Von der Planung bis zur Montage – wir begleiten Ihr Projekt im Gewerbe- und Privatbau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gewerbebau */}
            <Link href="/leistungen#gewerbebau" className="group relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Gewerbebau"
                width={800}
                height={450}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="badge bg-accent-600/20 text-accent-400 border border-accent-600/30 mb-3">Gewerbebau</div>
                <h3 className="text-2xl font-bold text-white mb-2">Fassaden, Dächer & Abdichtungen</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Professionelle Metallbaulösungen für Industrie, Handel und öffentliche Gebäude.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                  Leistungen ansehen <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Privatbau */}
            <Link href="/leistungen#privatbau" className="group relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Privatbau"
                width={800}
                height={450}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="badge bg-white/10 text-white border border-white/20 mb-3">Privatbau</div>
                <h3 className="text-2xl font-bold text-white mb-2">Blechdach, Rinnen & Kundendienst</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Handwerkliche Qualität für Ihr Zuhause – von der Dachrinne bis zur Kaminverkleidung.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                  Leistungen ansehen <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── REFERENZEN ───────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="section-title">Referenzprojekte</h2>
              <p className="section-subtitle">
                Einblicke in abgeschlossene Projekte aus Baden-Württemberg und darüber hinaus.
              </p>
            </div>
            <Link
              href="/referenzen"
              className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:gap-3 transition-all shrink-0"
            >
              Alle Referenzen <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReferenzen.map((ref) => (
              <Link
                key={ref.slug}
                href={`/referenzen/${ref.slug}`}
                className="card group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-accent-600 text-white text-xs">{ref.kategorie}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-900 mb-1 group-hover:text-accent-600 transition-colors">
                    {ref.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">
                    {ref.ort} · {ref.jahr}
                  </p>
                  <p className="text-sm text-gray-500">{ref.leistung}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HÄNDLERPORTAL CTA ────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-accent-700 to-accent-600 text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="badge bg-white/10 border border-white/20 text-white mb-4">
                Für Fachbetriebe
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sie sind Dachdecker, Klempner oder Generalunternehmer?
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Registrieren Sie sich für unser Händlerportal und profitieren Sie von
                exklusiven Konditionen, Live-Lagerständen direkt aus unserem ERP-System
                und digitaler Auftragsabwicklung.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Händlerpreise sofort einsehen",
                  "Echtzeit-Lagerbestände",
                  "Digitale Bestellabwicklung",
                  "Rechnungen & Lieferscheine im Portal",
                  "Persönlicher Ansprechpartner",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-blue-100">
                    <CheckCircle2 size={16} className="text-white flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/portal" className="btn-secondary">
                  Händlerkonto beantragen
                  <ArrowRight size={16} />
                </Link>
                <Link href="/kontakt" className="btn-outline-white">
                  Fragen? Jetzt kontaktieren
                </Link>
              </div>
            </div>

            {/* Statistik-Box */}
            <div className="grid grid-cols-2 gap-4 shrink-0">
              {[
                { val: "50+", label: "aktive Händler", sub: "in der Region" },
                { val: "< 48h", label: "Reaktionszeit", sub: "auf Anfragen" },
                { val: "Live", label: "Lagerbestände", sub: "aus dem ERP" },
                { val: "100%", label: "Digital", sub: "Auftragsabwicklung" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-white">{s.val}</div>
                  <div className="text-sm font-semibold text-blue-100 mt-1">{s.label}</div>
                  <div className="text-xs text-blue-200">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KONTAKT-SCHNELLZUGANG ────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Sprechen Sie uns an</h2>
            <p className="section-subtitle mx-auto">
              Wir sind für Sie da – telefonisch, per E-Mail oder persönlich in Nufringen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a
              href={`tel:${COMPANY.phone}`}
              className="card p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent-600 transition-colors">
                <Phone size={24} className="text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-brand-900 mb-1">Telefon</h3>
              <p className="text-accent-600 font-semibold">{COMPANY.phone}</p>
              <p className="text-xs text-gray-400 mt-1">{COMPANY.hours}</p>
            </a>

            <a
              href={`mailto:${COMPANY.email}`}
              className="card p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent-600 transition-colors">
                <Mail size={24} className="text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-brand-900 mb-1">E-Mail</h3>
              <p className="text-accent-600 font-semibold">{COMPANY.email}</p>
              <p className="text-xs text-gray-400 mt-1">Antwort innerhalb von 24h</p>
            </a>

            <div className="card p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-4">
                <MapPin size={24} className="text-accent-600" />
              </div>
              <h3 className="font-bold text-brand-900 mb-1">Adresse</h3>
              <p className="text-gray-600 text-sm">
                {COMPANY.street}<br />
                {COMPANY.city}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/kontakt" className="btn-primary text-base px-10 py-4">
              Kontaktformular öffnen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
