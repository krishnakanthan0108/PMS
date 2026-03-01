import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-carbon border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-gold/60 flex items-center justify-center">
                <span className="gold-text font-display text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>PMS</span>
              </div>
              <div>
                <p className="text-pearl text-sm font-medium leading-tight">PMS</p>
                <p className="text-mist text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Global Elites</p>
              </div>
            </div>
            <p className="text-mist text-sm leading-relaxed max-w-xs">
              Simplifying Business. Digitally. Professionally. Reliably.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs text-mist" style={{ fontFamily: "'DM Mono', monospace" }}>Est. 19 January 2026</span>
            </div>
          </div>
          <div>
            <p className="section-num mb-6">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mist hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-num mb-6">Core Services</p>
            <ul className="space-y-3">
              {[
                "Web Design & Digital Solutions",
                "Financial & Accounting Support",
                "Advertising & Promotion",
                "Travel Booking Assistance",
                "Office & Admin Support",
              ].map((s) => (
                <li key={s}>
                  <span className="text-mist text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-smoke text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            © 2026 PMS Global Elites Services. All Rights Reserved.
          </p>
          <p className="text-smoke text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            Registered under Udyam · India
          </p>
        </div>
      </div>
    </footer>
  );
}
