import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumSeite() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent-600 transition-colors">Startseite</Link>
          <span>/</span>
          <span>Impressum</span>
        </div>
        <h1 className="text-3xl font-bold text-brand-900 mb-10">Impressum</h1>
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-bold text-brand-900 mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Altvater GmbH<br />
              {COMPANY.street}<br />
              {COMPANY.city}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-900 mb-3">Kontakt</h2>
            <p>
              Telefon: {COMPANY.phone}<br />
              Telefax: {COMPANY.fax}<br />
              E-Mail: {COMPANY.email}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-900 mb-3">Handelsregister</h2>
            <p>
              Registergericht: Amtsgericht Stuttgart<br />
              Registernummer: HRB 244229
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-900 mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              DE [wird nachgetragen]
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-900 mb-3">Verantwortlich für den Inhalt</h2>
            <p>
              Altvater GmbH<br />
              {COMPANY.street}<br />
              {COMPANY.city}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
