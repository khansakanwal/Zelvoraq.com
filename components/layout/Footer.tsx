import Link from "next/link";
import { BrandMark } from "@/components/ui/Icons";
import { solutions } from "@/lib/solutions-data";

const footerNav = [
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-borderc mt-30">
      <div className="max-w-container mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-3">
            <BrandMark />
            <span className="font-mono font-semibold text-[14px] tracking-[0.12em]">ZELVORAQ</span>
          </div>
          <p className="text-secondary text-[13.5px] leading-relaxed max-w-[220px]">
            AI Systems That Work For Your Business
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.08em] uppercase text-tertiary mb-4">Solutions</h4>
          <ul className="flex flex-col gap-2.5">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="text-secondary text-[13.5px] hover:text-primary transition-colors">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.08em] uppercase text-tertiary mb-4">Company</h4>
          <ul className="flex flex-col gap-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-secondary text-[13.5px] hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.08em] uppercase text-tertiary mb-4">Legal & Contact</h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link href="/privacy-policy" className="text-secondary text-[13.5px] hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="text-secondary text-[13.5px] hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><a href="mailto:hello@zelvoraq.com" className="text-secondary text-[13.5px] hover:text-primary transition-colors">hello@zelvoraq.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-borderc">
        <div className="max-w-container mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-tertiary text-[12.5px]">© {new Date().getFullYear()} Zelvoraq. All rights reserved.</p>
          <p className="text-tertiary text-[12.5px] font-mono">Built for businesses, not for hype.</p>
        </div>
      </div>
    </footer>
  );
}
