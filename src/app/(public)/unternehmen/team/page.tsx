import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Team",
  description: "Das Team der Altvater GmbH – erfahrene Handwerker, Techniker und Vertriebsspezialisten.",
};

const TEAM = [
  {
    name: "Thomas Altvater",
    position: "Geschäftsführer",
    bereich: "Geschäftsleitung",
    bild: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Thomas Altvater führt das Familienunternehmen in zweiter Generation. Mit über 25 Jahren Erfahrung im Metallbau steht er für die Werte, die Altvater GmbH seit 1985 auszeichnen.",
    email: "t.altvater@altvater.de",
    telefon: "+49 7032 894510",
  },
  {
    name: "Markus Weber",
    position: "Technischer Leiter",
    bereich: "Produktion",
    bild: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Markus Weber verantwortet die Fertigung und Qualitätssicherung. Sein Team sorgt dafür, dass jedes Produkt unseren hohen Standards entspricht.",
    email: "m.weber@altvater.de",
    telefon: "+49 7032 894512",
  },
  {
    name: "Sandra Hoffmann",
    position: "Vertrieb & Kundenbetreuung",
    bereich: "Vertrieb",
    bild: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Sandra Hoffmann ist Ihre erste Ansprechpartnerin für Angebote und Produktanfragen. Sie kennt das Sortiment in- und auswendig.",
    email: "s.hoffmann@altvater.de",
    telefon: "+49 7032 894513",
  },
  {
    name: "Klaus Brenner",
    position: "Projektleiter Gewerbebau",
    bereich: "Gewerbebau",
    bild: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Klaus Brenner koordiniert komplexe Gewerbeprojekte – von der Planung bis zur Abnahme. Über 300 erfolgreiche Projekte sprechen für sich.",
    email: "k.brenner@altvater.de",
    telefon: "+49 7032 894514",
  },
  {
    name: "Anna Schulz",
    position: "Buchhaltung & Verwaltung",
    bereich: "Verwaltung",
    bild: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Anna Schulz sorgt für reibungslose administrative Abläufe und ist Ansprechpartnerin für alle kaufmännischen Fragen.",
    email: "a.schulz@altvater.de",
    telefon: "+49 7032 894515",
  },
  {
    name: "Michael Roth",
    position: "Meister Klempnertechnik",
    bereich: "Produktion",
    bild: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Michael Roth ist Klempnermeister mit 20 Jahren Berufserfahrung. Er leitet die Montagekolonnen und sorgt für fachgerechte Ausführung auf der Baustelle.",
    email: "m.roth@altvater.de",
    telefon: "+49 7032 894516",
  },
];

const BEREICHE = ["Alle", ...Array.from(new Set(TEAM.map((t) => t.bereich)))];

export default function TeamSeite() {
  return (
    <>
      <section className="bg-brand-900 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/">Startseite</Link><span>/</span>
            <Link href="/unternehmen">Unternehmen</Link><span>/</span>
            <span className="text-white">Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Unser Team</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Hinter jedem Produkt stecken Menschen mit Leidenschaft für ihr Handwerk.
            Lernen Sie das Team kennen, das Ihre Projekte möglich macht.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((person) => (
              <div key={person.name} className="card overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={person.bild}
                    alt={person.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="badge bg-accent-600/80 text-white text-xs backdrop-blur">
                      {person.bereich}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-brand-900">{person.name}</h2>
                  <p className="text-accent-600 font-medium text-sm mb-3">{person.position}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{person.bio}</p>
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent-600 transition-colors">
                      <Mail size={14} className="text-accent-500" />{person.email}
                    </a>
                    <a href={`tel:${person.telefon}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent-600 transition-colors">
                      <Phone size={14} className="text-accent-500" />{person.telefon}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stellenanzeige CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-brand-800 rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Werden Sie Teil unseres Teams</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Wir wachsen und suchen engagierte Fachkräfte im Klempner- und Metallbauhandwerk.
            </p>
            <Link href="/unternehmen/karriere" className="btn-primary">
              Offene Stellen ansehen →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
