import { redirect } from "next/navigation";

// Weiterleitung zur Leistungsübersicht mit Privatbau-Anker
export default function PrivatbauIndex() {
  redirect("/leistungen#privatbau");
}
