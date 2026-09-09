import { redirect } from "next/navigation";

// Weiterleitung zur Leistungsübersicht mit Gewerbebau-Anker
export default function GewerbebauIndex() {
  redirect("/leistungen#gewerbebau");
}
