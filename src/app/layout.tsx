import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Altvater GmbH – Metallverarbeitung",
    default: "Altvater GmbH – Präzision in Metall. Zuverlässigkeit im Bau.",
  },
  description:
    "Altvater GmbH aus Nufringen – Ihr Spezialist für Entwässerungssysteme, Flachdachzubehör, Fassaden und Sonderanfertigungen aus Metall. Seit 1985 in Baden-Württemberg.",
  keywords: [
    "Metallverarbeitung",
    "Entwässerungsrinnen",
    "Flachdachzubehör",
    "Fassadenbau",
    "Dachrinnen",
    "Nufringen",
    "Baden-Württemberg",
    "Altvater GmbH",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.altvater.de",
    siteName: "Altvater GmbH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
