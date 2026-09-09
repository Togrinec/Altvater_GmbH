import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Download, Phone, ChevronLeft } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.shortDesc,
  };
}

export default function ProduktDetailSeite({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent-600 transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/produkte" className="hover:text-accent-600 transition-colors">Produkte</Link>
          <span>/</span>
          <span className="text-brand-900 font-medium">{product.title}</span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <Link
            href="/produkte"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-accent-600 mb-8 transition-colors"
          >
            <ChevronLeft size={16} /> Zurück zu allen Produkten
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bild */}
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-brand-900 mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {product.shortDesc}
              </p>

              {/* Leistungsumfang */}
              <div className="mb-8">
                <h2 className="font-bold text-brand-900 mb-4 text-lg">Leistungsumfang</h2>
                <ul className="space-y-3">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verfügbarkeit Badge */}
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-8">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <div className="font-semibold text-green-800 text-sm">Verfügbar ab Lager</div>
                  <div className="text-xs text-green-700">Lieferzeit: 1–3 Werktage (Standardmaße)</div>
                </div>
              </div>

              {/* Downloads */}
              <div className="mb-8 p-5 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-brand-900 mb-3 text-sm">Downloads</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-accent-600 hover:text-accent-600 transition-colors">
                    <Download size={14} />
                    Technisches Datenblatt (PDF)
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-accent-600 hover:text-accent-600 transition-colors">
                    <Download size={14} />
                    CAD-Datei (.dwg)
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn-primary">
                  Angebot anfragen <ArrowRight size={16} />
                </Link>
                <a href="tel:+4970328945100" className="btn-secondary">
                  <Phone size={16} />
                  Direkt anrufen
                </a>
              </div>

              {/* Händler-Hinweis */}
              <div className="mt-6 p-4 bg-accent-100 border border-accent-200 rounded-xl">
                <p className="text-sm text-accent-700">
                  <strong>Fachbetrieb?</strong> Im Händlerportal sehen Sie Ihre persönlichen Konditionen
                  und den aktuellen Lagerbestand in Echtzeit.{" "}
                  <Link href="/portal" className="underline font-semibold hover:text-accent-900">
                    Jetzt einloggen →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ähnliche Produkte */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-900 mb-8">Weitere Produkte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/produkte/${p.slug}`} className="card group overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-900 group-hover:text-accent-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{p.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
