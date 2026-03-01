import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting & Financial Services",
  description:
    "PMS Global Elites offers bookkeeping, GST filing, bank reconciliation, MIS reporting, cash flow management, financial consulting and more — all delivered remotely for SMEs and startups in India.",
  alternates: { canonical: "https://www.pmsglobalelites.in/services" },
  openGraph: {
    title: "Accounting & Financial Services | PMS Global Elites",
    description:
      "Bookkeeping, GST, bank reconciliation, MIS reporting and financial consulting — remote accounting services for Indian businesses.",
    url: "https://www.pmsglobalelites.in/services",
  },
};
const services = [
  {
    num: "01",
    title: "Web Design & Digital Solutions",
    icon: "◈",
    tagline: "Your Digital Presence, Crafted with Precision",
    description:
      "We design and develop professional, purpose-built websites that communicate your brand identity, engage your audience, and support your business goals. From corporate websites to service portals, our digital solutions are built for performance and clarity.",
    offerings: [
      "Business website development",
      "Service portal creation",
      "IT support & troubleshooting",
      "Data processing & management",
      "Digital documentation handling",
      "Online presence optimization",
    ],
  },
  {
    num: "02",
    title: "Financial & Accounting Support",
    icon: "◇",
    tagline: "Clarity in Every Number",
    description:
      "Accurate financial management is the backbone of any successful business. Our accounting support services ensure your books are clean, your compliance data is organized, and your financial visibility is sharp — without the overhead of an in-house team.",
    offerings: [
      "Bookkeeping & ledger maintenance",
      "Financial statement preparation (internal use)",
      "GST data support & organization",
      "Bank reconciliation",
      "MIS reporting & dashboards",
      "Budgeting & cash flow management",
    ],
  },
  {
    num: "03",
    title: "Advertising & Digital Promotion",
    icon: "◉",
    tagline: "Visibility that Converts",
    description:
      "We help businesses build a meaningful digital footprint through structured promotion strategies, branding support, and coordinated marketing efforts. Whether you're launching a brand or scaling an existing one, we align your messaging with your market.",
    offerings: [
      "Business promotion assistance",
      "Online branding support",
      "Digital marketing coordination",
      "Advertising planning & guidance",
      "Social media presence support",
      "Content strategy consultation",
    ],
  },
  {
    num: "04",
    title: "Travel & Online Booking Assistance",
    icon: "◎",
    tagline: "Seamless Journeys, Managed End to End",
    description:
      "We handle the complexity of travel coordination so your team can focus on what matters. From planning routes to managing bookings and documentation, our travel assistance service keeps your business travel smooth and stress-free.",
    offerings: [
      "Travel planning & itinerary creation",
      "Online booking coordination",
      "Trip management assistance",
      "Travel documentation guidance",
      "Hotel & transport arrangement support",
      "Corporate travel tracking",
    ],
  },
  {
    num: "05",
    title: "Office & Administrative Support",
    icon: "▲",
    tagline: "Your Back Office, Handled Professionally",
    description:
      "Administrative overhead can quietly drain your business's most valuable resource: time. Our structured administrative support services take care of documentation, form processing, and coordination tasks — so your front office can operate without friction.",
    offerings: [
      "Documentation assistance",
      "Back-office support services",
      "Udayam Registration Proccess",
      "Structured administrative coordination",
      "Email & correspondence management",
      "Record keeping & filing",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #0A0A0B",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <p
              className="text-gold text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              What We Offer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <h1
              className="font-display text-6xl lg:text-8xl font-light text-pearl leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our
              <br />
              <em className="gold-text not-italic font-medium">Services</em>
            </h1>
            <div>
              <p className="text-silver text-lg leading-relaxed mb-6">
                Five integrated service pillars designed to support every dimension 
                of your business operations — from digital to financial, administrative to promotional.
              </p>
              <Link href="/contact" className="btn-gold">
                <span>Enquire Now</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      <section className="bg-carbon">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {services.map((service, i) => (
            <div
              key={service.num}
              className={`py-20 ${i < services.length - 1 ? "border-b border-white/5" : ""}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                  <span
                    className="text-smoke text-sm"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {service.num}
                  </span>
                  <span className="text-gold text-3xl">{service.icon}</span>
                </div>

                <div className="lg:col-span-7">
                  <p
                    className="text-gold text-xs tracking-widest uppercase mb-3"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {service.tagline}
                  </p>
                  <h2
                    className="font-display text-4xl lg:text-5xl font-light text-pearl mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-mist leading-relaxed text-[0.9375rem]">
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <p
                    className="text-smoke text-xs tracking-widest uppercase mb-5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {service.offerings.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-gold/60 mt-0.5 shrink-0 text-xs">◆</span>
                        <span className="text-silver text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-32"
        style={{
          background: "linear-gradient(180deg, #0A0A0B 0%, #111113 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-num mb-4">How It Works</p>
            <h2
              className="font-display text-5xl lg:text-6xl font-light text-pearl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our{" "}
              <em className="gold-text not-italic font-medium">Process</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: "01", title: "Consultation", desc: "We understand your needs and goals through an initial discussion." },
              { step: "02", title: "Proposal", desc: "We define a clear scope of work with transparent pricing." },
              { step: "03", title: "Execution", desc: "Our team delivers the service with regular updates and quality checks." },
              { step: "04", title: "Review", desc: "We ensure your complete satisfaction and provide ongoing support." },
            ].map((item, i) => (
              <div key={i} className="relative border border-white/5 p-8 hover:bg-white/[0.02] transition-colors duration-300">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-px w-px h-8 bg-gold/30 z-10" />
                )}
                <p
                  className="gold-text font-display text-5xl font-light mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.step}
                </p>
                <h3 className="text-pearl font-medium mb-3">{item.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-carbon border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2
            className="font-display text-4xl lg:text-5xl font-light text-pearl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Not Sure What You{" "}
            <em className="gold-text not-italic font-medium">Need?</em>
          </h2>
          <p className="text-mist mb-10 max-w-lg mx-auto leading-relaxed">
            Reach out and we&apos;ll help you identify the right combination of services 
            for your specific business stage and goals.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Get a Free Consultation</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
