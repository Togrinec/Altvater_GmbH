import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Entwässerungsrinnen, Flachdachzubehör, Wasserspeier, Kieskörbe und Sonderanfertigungen – das komplette Produktsortiment der Altvater GmbH.",
};

export default function ProdukteSeite() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-white">Produkte</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Unsere Produkte</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Präzise gefertigt in Nufringen – vom Standardartikel bis zur komplexen
            Sonderanfertigung nach Ihrer Zeichnung.
          </p>
        </div>
      </section>

      {/* Produkt-Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/produkte/${product.slug}`}
                className="card group overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-accent-600 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {product.shortDesc}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={13} className="text-accent-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:gap-2 transition-all">
                    Details ansehen <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sonderanfertigungen CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-brand-800 rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Nichts Passendes gefunden?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Kein Problem – wir fertigen nach Ihren Maßen und Plänen.
              Sonderanfertigungen sind eine unserer größten Stärken.
            </p>
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Sonderanfertigung anfragen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
