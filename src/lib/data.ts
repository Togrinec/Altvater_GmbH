// Zentrale Datendatei – später durch CMS / API ersetzt

export const COMPANY = {
  name: "Altvater GmbH",
  tagline: "Präzision in Metall. Zuverlässigkeit im Bau.",
  street: "Carl-Zeiss-Str. 9",
  city: "71154 Nufringen",
  phone: "+49 (0) 70 32 / 8 94 51-0",
  fax: "+49 (0) 70 32 / 8 94 51-99",
  email: "info@altvater.de",
  hours: "Mo – Fr: 07:00 – 17:00 Uhr",
  founded: "1985",
  employees: "35+",
  projects: "2.500+",
};

export const PRODUCTS = [
  {
    slug: "entwaesserungs-rinnen",
    title: "Entwässerungsrinnen",
    shortDesc: "Präzise gefertigte Rinnen aus Zink, Kupfer und Edelstahl für dauerhaft zuverlässige Dachentwässerung.",
    icon: "droplets",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    items: [
      "Kastenrinnen nach Maß",
      "Halbrundrinnen DIN EN 612",
      "Rechteckige Hängerinnen",
      "Stehfalzrinnen",
      "Zinkrinnen, Kupferrinnen, Edelstahlrinnen",
    ],
  },
  {
    slug: "wasserspeier-ablaeufe",
    title: "Wasserspeier & Abläufe",
    shortDesc: "Funktionale und architektonisch ansprechende Wasserspeier und Flachdachabläufe für Gewerbe und Privat.",
    icon: "waves",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    items: [
      "Klassische Wasserspeier",
      "Flachdachabläufe DN 50–DN 200",
      "Notabläufe",
      "Laubfangkörbe",
      "Sonderanfertigungen nach Zeichnung",
    ],
  },
  {
    slug: "flachdachzubehoer",
    title: "Flachdachzubehör",
    shortDesc: "Komplettsortiment für professionelle Flachdachkonstruktionen – von der Lüftung bis zur Attika-Abdeckung.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    items: [
      "Sammellüftungs-Verwahrung",
      "Aufzugschacht-Entlüftung",
      "Universal-Regenhut",
      "Flachdach-Durchführungen",
      "Attika-Halter und Stoßverbinder",
      "Wassersammelkasten",
    ],
  },
  {
    slug: "kieskoerbe-stichkanaele",
    title: "Kieskörbe & Stichkanäle",
    shortDesc: "Zuverlässige Lösungen zur Dränung und Wasserführung auf Flachdächern und Terrassen.",
    icon: "filter",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&q=80",
    items: [
      "Edelstahl-Kieskörbe",
      "Verzinkte Kieskörbe",
      "Stichkanäle verschiedener Größen",
      "Laubschutzgitter",
    ],
  },
  {
    slug: "kiesfangleisten",
    title: "Kiesfangleisten",
    shortDesc: "Sicher und dauerhaft – Kiesfangleisten aus Aluminium und Zink für alle gängigen Dachaufbauten.",
    icon: "layers",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    items: [
      "Aluminium-Kiesfangleisten",
      "Zink-Kiesfangleisten",
      "Verschiedene Profile und Höhen",
      "Passende Eckstücke und Verbinder",
    ],
  },
  {
    slug: "muellboxen",
    title: "Müllboxen & Sonderanfertigungen",
    shortDesc: "Individuelle Metallkonstruktionen – von der Müllbox bis zur komplexen Sonderanfertigung nach Ihren Plänen.",
    icon: "box",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    items: [
      "Müllboxen in Stahl und Edelstahl",
      "Abdeckungen und Einhausungen",
      "Sonderprofile nach Zeichnung",
      "Prototypen und Einzelstücke",
      "Serienproduktion auf Anfrage",
    ],
  },
];

export const LEISTUNGEN = {
  gewerbebau: {
    title: "Gewerbebau",
    subtitle: "Professionelle Metallbaulösungen für Industrie, Handel und öffentliche Gebäude.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    bereiche: [
      {
        title: "Fassaden",
        desc: "Vorgehängte hinterlüftete Fassaden, Bekleidungen in Zink, Aluminium und Edelstahl. Wir planen und montieren komplette Fassadensysteme.",
        icon: "building2",
      },
      {
        title: "Dächer",
        desc: "Stehfalzdächer, Doppelstehfalz, Strangfalz – in Zink, Kupfer, Aluminium und Titanzink. Für Flach- und Steildach.",
        icon: "home",
      },
      {
        title: "Abdichtungen",
        desc: "Professionelle Abdichtungsarbeiten an Flachdächern, Terrassen und Balkonen nach aktueller Flachdachrichtlinie.",
        icon: "shield",
      },
      {
        title: "Sonderanfertigungen",
        desc: "Komplexe Metallbaukonstruktionen nach Architektenzeichnung – Einzelstücke und Serien aus einer Hand.",
        icon: "settings",
      },
    ],
  },
  privatbau: {
    title: "Privatbau",
    subtitle: "Handwerkliche Qualität für Ihr Zuhause – von der Dachrinne bis zur Kaminverkleidung.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    bereiche: [
      {
        title: "Blechdach & Verkleidungen",
        desc: "Klassische und moderne Blechdächer, Gaubenverkleidungen, Ortgangbleche und Wandanschlüsse in Top-Qualität.",
        icon: "home",
      },
      {
        title: "Dachrinnen",
        desc: "Hängerinnen und Standrinnen in Zink, Kupfer, Edelstahl und Aluminium – inkl. Montage und Dachanschluss.",
        icon: "droplets",
      },
      {
        title: "Kaminverkleidungen",
        desc: "Passgenaue Kaminverkleidungen aus Zinkblech, Kupferblech oder Edelstahl – wetterfest und langlebig.",
        icon: "flame",
      },
      {
        title: "Kundendienst",
        desc: "Reparatur, Wartung und Sanierung bestehender Metallbauarbeiten – schnell, zuverlässig, regional.",
        icon: "wrench",
      },
    ],
  },
};

export const REFERENZEN = [
  {
    slug: "gewerbezentrum-boeblingen",
    title: "Gewerbezentrum Böblingen",
    kategorie: "Gewerbebau",
    ort: "Böblingen, BW",
    jahr: "2024",
    leistung: "Fassadenverkleidung, Flachdach, Entwässerung",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    slug: "wohnanlage-nufringen",
    title: "Wohnanlage Nufringen",
    kategorie: "Privatbau",
    ort: "Nufringen, BW",
    jahr: "2024",
    leistung: "Dachrinnen, Kaminverkleidungen, Ortgangbleche",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "industriehalle-herrenberg",
    title: "Industriehalle Herrenberg",
    kategorie: "Gewerbebau",
    ort: "Herrenberg, BW",
    jahr: "2023",
    leistung: "Stehfalzdach Titanzink, Entwässerungssystem",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    slug: "schule-sindelfingen",
    title: "Grundschule Sindelfingen",
    kategorie: "Öffentliche Bauten",
    ort: "Sindelfingen, BW",
    jahr: "2023",
    leistung: "Flachdachabdichtung, Attika, Entwässerung",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&q=80",
  },
  {
    slug: "villa-holzgerlingen",
    title: "Privatvilla Holzgerlingen",
    kategorie: "Privatbau",
    ort: "Holzgerlingen, BW",
    jahr: "2023",
    leistung: "Kupferdach, Kupferrinnen, Kaminverkleidung",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
  },
  {
    slug: "buerogebaeude-stuttgart",
    title: "Bürogebäude Stuttgart-West",
    kategorie: "Gewerbebau",
    ort: "Stuttgart, BW",
    jahr: "2022",
    leistung: "Aluminiumfassade, Abdichtung, Sonderanfertigungen",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
];

export const NAV_ITEMS = [
  { label: "Produkte", href: "/produkte" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Kontakt", href: "/kontakt" },
];
