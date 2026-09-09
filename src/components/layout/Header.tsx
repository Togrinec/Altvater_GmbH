"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

const PRODUKTE_DROPDOWN = [
  { label: "Entwässerungsrinnen", href: "/produkte/entwaesserungs-rinnen" },
  { label: "Wasserspeier & Abläufe", href: "/produkte/wasserspeier-ablaeufe" },
  { label: "Flachdachzubehör", href: "/produkte/flachdachzubehoer" },
  { label: "Kieskörbe & Stichkanäle", href: "/produkte/kieskoerbe-stichkanaele" },
  { label: "Kiesfangleisten", href: "/produkte/kiesfangleisten" },
  { label: "Müllboxen & Sonderanfertigungen", href: "/produkte/muellboxen" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [produkteOpen, setProduktOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      {/* Top-Bar */}
      <div className="bg-brand-800 text-white text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center py-2">
          <span className="text-gray-300">{COMPANY.street}, {COMPANY.city}</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <Phone size={13} />
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-accent-400 transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center group-hover:bg-accent-600 transition-colors">
              <span className="text-white font-black text-lg leading-none">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-brand-900 text-lg leading-none">ALTVATER</div>
              <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">GmbH · Metallverarbeitung</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              if (item.label === "Produkte") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setProduktOpen(true)}
                    onMouseLeave={() => setProduktOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                        pathname.startsWith("/produkte")
                          ? "text-accent-600 bg-accent-100"
                          : "text-brand-700 hover:text-accent-600 hover:bg-gray-50"
                      )}
                    >
                      {item.label}
                      <ChevronDown size={14} className={cn("transition-transform", produkteOpen && "rotate-180")} />
                    </Link>
                    {/* Dropdown */}
                    {produkteOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        {PRODUKTE_DROPDOWN.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="block px-4 py-2.5 text-sm text-brand-700 hover:bg-gray-50 hover:text-accent-600 transition-colors"
                          >
                            {p.label}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <Link
                            href="/produkte"
                            className="block px-4 py-2.5 text-sm font-semibold text-accent-600 hover:bg-accent-100 transition-colors"
                          >
                            Alle Produkte →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-accent-600 bg-accent-100"
                      : "text-brand-700 hover:text-accent-600 hover:bg-gray-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/portal"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent-600 border border-accent-600 rounded-lg hover:bg-accent-600 hover:text-white transition-all"
            >
              🔐 Händler-Login
            </Link>
            <Link href="/kontakt" className="hidden lg:inline-flex btn-primary text-sm px-4 py-2">
              Angebot anfragen
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menü"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg font-medium transition-colors",
                  pathname === item.href
                    ? "text-accent-600 bg-accent-100"
                    : "text-brand-700 hover:bg-gray-50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
              <Link href="/portal" className="block px-4 py-3 text-accent-600 font-semibold">
                🔐 Händler-Login
              </Link>
              <Link href="/kontakt" className="btn-primary w-full justify-center">
                Angebot anfragen
              </Link>
              <div className="px-4 pt-2">
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-brand-700">
                  <Phone size={16} />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
