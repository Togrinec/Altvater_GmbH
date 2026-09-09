# Altvater GmbH – Website

Moderner Website-Relaunch auf Basis von **Next.js 14**, **TypeScript** und **Tailwind CSS**.

## Schnellstart

### Voraussetzungen
- Node.js 18+ (https://nodejs.org)
- npm 9+

### Installation & Start

```bash
# Im Ordner website/ ausführen:
npm install
npm run dev
```

Dann http://localhost:3000 im Browser öffnen.

### Build für Produktion

```bash
npm run build
npm start
```

---

## Projektstruktur

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root-Layout (Header + Footer)
│   │   ├── page.tsx                # Startseite
│   │   ├── not-found.tsx           # 404-Seite
│   │   ├── (public)/               # Öffentliche Seiten (Route Group)
│   │   │   ├── produkte/
│   │   │   │   ├── page.tsx        # Produktübersicht
│   │   │   │   └── [slug]/page.tsx # Produktdetailseite (dynamisch)
│   │   │   ├── leistungen/page.tsx # Leistungen (Gewerbe + Privat)
│   │   │   ├── referenzen/page.tsx # Referenzprojekte
│   │   │   ├── kontakt/page.tsx    # Kontaktformular
│   │   │   └── unternehmen/page.tsx# Über uns, Timeline, Werte
│   │   ├── portal/page.tsx         # Händlerportal Login (Placeholder)
│   │   ├── impressum/page.tsx
│   │   └── datenschutz/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky Header mit Dropdown + Mobile
│   │   │   └── Footer.tsx          # 4-spaltiger Footer
│   │   ├── ui/                     # Wiederverwendbare UI-Komponenten
│   │   └── sections/               # Page-Sections
│   └── lib/
│       ├── data.ts                 # Alle Inhaltsdaten (später durch CMS/API ersetzen)
│       └── utils.ts                # Hilfsfunktionen (cn)
├── public/images/                  # Statische Assets
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Nächste Schritte

1. **Node.js installieren** → https://nodejs.org → `npm install` ausführen
2. **Eigene Bilder** in `public/images/` ablegen und in `data.ts` referenzieren
3. **Kontaktformular** – API-Route unter `src/app/api/contact/route.ts` implementieren
4. **Google Maps** – in `unternehmen/page.tsx` Karten-Embed eintragen
5. **CMS** (Sanity/Storyblok) – `data.ts` schrittweise durch API-Calls ersetzen
6. **Händlerportal** – Keycloak-Auth und Portal-Backend anbinden (Phase 2 lt. Konzept)
