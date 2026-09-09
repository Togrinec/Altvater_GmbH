import { NextRequest, NextResponse } from "next/server";

// ─── Typen ────────────────────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  firma?: string;
  email: string;
  telefon?: string;
  betreff: string;
  nachricht: string;
  datenschutz: boolean;
}

// ─── Validierung ──────────────────────────────────────────────────────────────

function validate(data: Partial<ContactPayload>): string | null {
  if (!data.name || data.name.trim().length < 2) return "Name ist zu kurz.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Ungültige E-Mail-Adresse.";
  if (!data.betreff || data.betreff.trim().length < 2) return "Betreff fehlt.";
  if (!data.nachricht || data.nachricht.trim().length < 10) return "Nachricht ist zu kurz (min. 10 Zeichen).";
  if (!data.datenschutz) return "Datenschutzzustimmung fehlt.";
  return null;
}

// ─── E-Mail HTML ──────────────────────────────────────────────────────────────

function buildEmailHtml(d: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><style>
  body { font-family: Arial, sans-serif; color: #2C2C2C; margin: 0; padding: 0; }
  .header { background: #1E4D8C; color: white; padding: 24px 32px; }
  .header h1 { margin: 0; font-size: 20px; }
  .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.8; }
  .body { padding: 32px; }
  .row { margin-bottom: 16px; }
  .label { font-size: 11px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.05em; }
  .value { font-size: 15px; color: #111827; margin-top: 2px; }
  .nachricht { background: #F9FAFB; border-left: 3px solid #1E4D8C; padding: 16px; border-radius: 4px; }
  .footer { background: #F3F4F6; padding: 16px 32px; font-size: 12px; color: #9CA3AF; }
</style></head>
<body>
<div class="header">
  <h1>Neue Kontaktanfrage</h1>
  <p>Eingegangen über altvater.de · ${new Date().toLocaleString("de-DE")}</p>
</div>
<div class="body">
  <div class="row"><div class="label">Name</div><div class="value">${escHtml(d.name)}</div></div>
  ${d.firma ? `<div class="row"><div class="label">Firma</div><div class="value">${escHtml(d.firma)}</div></div>` : ""}
  <div class="row"><div class="label">E-Mail</div><div class="value"><a href="mailto:${escHtml(d.email)}">${escHtml(d.email)}</a></div></div>
  ${d.telefon ? `<div class="row"><div class="label">Telefon</div><div class="value"><a href="tel:${escHtml(d.telefon)}">${escHtml(d.telefon)}</a></div></div>` : ""}
  <div class="row"><div class="label">Betreff</div><div class="value">${escHtml(d.betreff)}</div></div>
  <div class="row">
    <div class="label">Nachricht</div>
    <div class="nachricht">${escHtml(d.nachricht).replace(/\n/g, "<br>")}</div>
  </div>
</div>
<div class="footer">
  Diese E-Mail wurde automatisch über das Kontaktformular auf altvater.de generiert.<br>
  Altvater GmbH · Carl-Zeiss-Str. 9 · 71154 Nufringen
</div>
</body>
</html>`;
}

function buildAutoReplyHtml(d: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><style>
  body { font-family: Arial, sans-serif; color: #2C2C2C; margin: 0; padding: 0; }
  .header { background: #1E4D8C; color: white; padding: 24px 32px; }
  .header h1 { margin: 0; font-size: 20px; }
  .body { padding: 32px; line-height: 1.7; }
  .highlight { background: #DBEAFE; border-radius: 8px; padding: 16px; margin: 16px 0; }
  .footer { background: #F3F4F6; padding: 16px 32px; font-size: 12px; color: #9CA3AF; }
</style></head>
<body>
<div class="header"><h1>Ihre Anfrage ist eingegangen</h1></div>
<div class="body">
  <p>Guten Tag ${escHtml(d.name)},</p>
  <p>vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns
  innerhalb von <strong>24 Stunden</strong> (Mo–Fr) bei Ihnen melden.</p>
  <div class="highlight">
    <strong>Ihre Anfrage:</strong><br/>
    <em>${escHtml(d.nachricht)}</em>
  </div>
  <p>Bei dringenden Anliegen erreichen Sie uns telefonisch:<br/>
  <strong>+49 (0) 70 32 / 8 94 51-0</strong> · Mo–Fr 07:00–17:00 Uhr</p>
  <p>Mit freundlichen Grüßen,<br/><strong>Altvater GmbH</strong></p>
</div>
<div class="footer">
  Altvater GmbH · Carl-Zeiss-Str. 9 · 71154 Nufringen · info@altvater.de
</div>
</body>
</html>`;
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ─── Rate-Limiting (einfach, in-memory) ──────────────────────────────────────

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 }); // 1 Minute Fenster
    return false;
  }
  if (entry.count >= 5) return true; // max 5 Anfragen/Minute
  entry.count++;
  return false;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // Rate Limit prüfen
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte warten Sie eine Minute." },
        { status: 429 }
      );
    }

    // Body parsen
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Ungültiger Request-Body." }, { status: 400 });
    }

    // Validieren
    const validationError = validate(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 422 });
    }

    const data = body as ContactPayload;

    // ── E-Mail senden via Resend (oder Nodemailer/SendGrid) ──────────────────
    //
    // OPTION A: Resend (empfohlen für Vercel)
    //   npm install resend
    //   Umgebungsvariable: RESEND_API_KEY
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@altvater.de",
    //   to: "info@altvater.de",
    //   replyTo: data.email,
    //   subject: `[Kontaktanfrage] ${data.betreff} – ${data.name}`,
    //   html: buildEmailHtml(data),
    // });
    // await resend.emails.send({
    //   from: "noreply@altvater.de",
    //   to: data.email,
    //   subject: "Ihre Anfrage bei Altvater GmbH",
    //   html: buildAutoReplyHtml(data),
    // });
    //
    // OPTION B: Nodemailer (SMTP, z.B. IONOS / Strato)
    //   npm install nodemailer @types/nodemailer
    //   Umgebungsvariablen: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    //
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? 587),
    //   secure: false,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"Website" <${process.env.SMTP_USER}>`,
    //   to: "info@altvater.de",
    //   replyTo: data.email,
    //   subject: `[Kontaktanfrage] ${data.betreff} – ${data.name}`,
    //   html: buildEmailHtml(data),
    // });

    // In Entwicklung: Anfrage nur loggen
    if (process.env.NODE_ENV === "development") {
      console.log("📬 Kontaktanfrage:", {
        von: `${data.name} <${data.email}>`,
        firma: data.firma,
        betreff: data.betreff,
        nachricht: data.nachricht.substring(0, 100) + "…",
      });
    }

    return NextResponse.json(
      { success: true, message: "Ihre Nachricht wurde erfolgreich übermittelt." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Kontaktformular-Fehler:", err);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}

// GET ist nicht erlaubt
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
