import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-black text-gray-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-brand-900 mb-3">Seite nicht gefunden</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="btn-primary">
          Zurück zur Startseite <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
