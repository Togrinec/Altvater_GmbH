import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default function DatenschutzSeite() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent-600 transition-colors">Startseite</Link>
          <span>/</span>
          <span>Datenschutz</span>
        </div>
        <h1 className="text-3xl font-bold text-brand-900 mb-10">Datenschutzerklärung</h1>
        <div className="space-y-8 text-gray-700">
          {[
            {
              title: "1. Datenschutz auf einen Blick",
              content: `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.`,
            },
            {
              title: "2. Verantwortlicher",
              content: `Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n\nAltvater GmbH\n${COMPANY.street}\n${COMPANY.city}\n\nTelefon: ${COMPANY.phone}\nE-Mail: ${COMPANY.email}`,
            },
            {
              title: "3. Datenerfassung auf dieser Website",
              content: `Unsere Website erhebt bei jedem Seitenaufruf automatisch bestimmte Daten (Server-Log-Dateien), die Ihr Browser übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.`,
            },
            {
              title: "4. Kontaktformular",
              content: `Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.`,
            },
            {
              title: "5. Ihre Rechte",
              content: `Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Daten, auf Berichtigung unrichtiger Daten, auf Löschung (Recht auf Vergessenwerden), auf Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit. Wenden Sie sich hierzu an: ${COMPANY.email}`,
            },
          ].map((sec) => (
            <div key={sec.title}>
              <h2 className="text-xl font-bold text-brand-900 mb-3">{sec.title}</h2>
              <p className="leading-relaxed whitespace-pre-line">{sec.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
