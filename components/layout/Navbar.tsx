"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { BrandMark, ChevronDown, solutionIconMap } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { solutions } from "@/lib/solutions-data";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-base/90 backdrop-blur border-b border-borderc">
      <div className="max-w-container mx-auto px-6 md:px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <BrandMark />
          <span className="font-mono font-semibold text-[14px] tracking-[0.12em]">ZELVORAQ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Solutions
              <ChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[320px] bg-elevated border border-borderc-strong rounded-md2 p-2.5 shadow-soft">
                {solutions.map((s) => {
                  const Icon = solutionIconMap[s.icon];
                  return (
                    <Link
                      key={s.slug}
                      href={`/solutions/${s.slug}`}
                      className="flex items-center gap-3 px-2.5 py-2.5 rounded-[8px] hover:bg-elevated2 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="w-[26px] h-[26px] rounded-[6px] bg-elevated2 flex items-center justify-center text-accent shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span>
                        <span className="block text-[13.5px] font-semibold text-primary">{s.navLabel}</span>
                        <span className="block text-[11.5px] text-secondary">{s.navDescription}</span>
                      </span>
                    </Link>
                  );
                })}
                <Link
                  href="/solutions"
                  className="block text-center font-mono text-[11px] tracking-[0.06em] uppercase text-accent pt-2.5 mt-1 border-t border-borderc"
                  onClick={() => setDropdownOpen(false)}
                >
                  View All Solutions
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" className="!text-[13.5px] !py-2.5 !px-4">
            Get Your AI Opportunity Assessment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[3px] p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`w-[18px] h-[2px] bg-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`w-[18px] h-[2px] bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-[18px] h-[2px] bg-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-borderc bg-base px-6 py-6 flex flex-col gap-1">
          <Link href="/" className="py-2.5 text-primary" onClick={() => setMobileOpen(false)}>Home</Link>

          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-tertiary pt-3 pb-1">Solutions</span>
          {solutions.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`} className="py-2.5 pl-3 text-secondary" onClick={() => setMobileOpen(false)}>
              {s.navLabel}
            </Link>
          ))}
          <Link href="/solutions" className="py-2.5 pl-3 text-accent text-[13px] font-semibold" onClick={() => setMobileOpen(false)}>
            View All Solutions
          </Link>

          <div className="pt-2 border-t border-borderc mt-2" />
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="py-2.5 text-primary" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}

          <Button href="/contact" variant="primary" className="w-full justify-center mt-4" onClick={() => setMobileOpen(false)}>
            Get Your AI Opportunity Assessment
          </Button>
        </div>
      )}
    </header>
  );
}
