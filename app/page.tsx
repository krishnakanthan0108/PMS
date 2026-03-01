import Link from "next/link";

const stats = [
  { value: "5+", label: "Core Services" },
  { value: "100%", label: "Digital First" },
  { value: "2026", label: "Established" },
];

const services = [
  {
    num: "01",
    title: "Web Design & Digital Solutions",
    desc: "Business website development, IT support, data processing and digital documentation.",
    icon: "◈",
  },
  {
    num: "02",
    title: "Financial & Accounting Support",
    desc: "Bookkeeping, GST data, bank reconciliation, MIS reporting and cash flow management.",
    icon: "◇",
  },
  {
    num: "03",
    title: "Advertising & Digital Promotion",
    desc: "Business promotion, online branding, digital marketing coordination and planning.",
    icon: "◉",
  },
  {
    num: "04",
    title: "Travel & Booking Assistance",
    desc: "Travel planning, booking coordination, trip management and documentation guidance.",
    icon: "◎",
  },
  {
    num: "05",
    title: "Office & Administrative Support",
    desc: "Documentation assistance, back-office support and structured administrative coordination.",
    icon: "◈",
  },
];

const clients = [
  "Startups",
  "SMEs",
  "Individual Professionals",
  "Entrepreneurs",
  "Online Businesses",
];

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%), #0A0A0B",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #C9A84C, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full opacity-3"
          style={{
            background: "radial-gradient(circle, #C9A84C, transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center pt-32 pb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <p
              className="text-gold text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Est. 19 January 2026
            </p>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h1
            className="font-display text-6xl sm:text-7xl lg:text-9xl font-light leading-none mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="block text-pearl">PMS</span>
            <span className="block gold-shimmer font-medium italic">Global ELites</span>
            {/* <span className="block text-pearl">& Digital</span>
            <span className="block text-silver/60 font-light">Services</span> */}
          </h1>
          <p className="text-mist text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 mt-8">
            Simplifying Business. Digitally. Professionally. Reliably.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="btn-gold">
              <span>Explore Services</span>
              <span>→</span>
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px mt-24 border border-white/5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-graphite/40 backdrop-blur-sm px-8 py-8 text-center hover:bg-graphite/60 transition-colors duration-300"
              >
                <p
                  className="gold-text text-3xl font-semibold mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-mist text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span
            className="text-mist text-xs tracking-widest"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>
      <section className="py-32 bg-carbon">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="section-num mb-4">Our Core Services</p>
              <h2
                className="font-display text-5xl lg:text-6xl font-light text-pearl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What We{" "}
                <em className="gold-text not-italic font-medium">Deliver</em>
              </h2>
            </div>
            <Link href="/services" className="btn-outline shrink-0">
              All Services →
            </Link>
          </div>

          <div className="gold-line mb-0" />

          <div className="divide-y divide-white/5">
            {services.map((service) => (
              <div
                key={service.num}
                className="group flex items-start gap-8 py-8 hover:bg-white/[0.02] px-4 -mx-4 transition-all duration-300 cursor-default"
              >
                <span
                  className="text-smoke font-mono text-sm pt-1 shrink-0 group-hover:text-gold/50 transition-colors duration-300"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {service.num}
                </span>
                <span className="text-gold text-2xl shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </span>
                <div className="flex-1">
                  <h3
                    className="text-pearl text-xl font-medium mb-2 group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.375rem" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-mist text-sm leading-relaxed">{service.desc}</p>
                </div>
                <span className="text-smoke group-hover:text-gold transition-all duration-300 group-hover:translate-x-1 shrink-0">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-32"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 70%), #0A0A0B",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="section-num mb-4">Who We Serve</p>
          <h2
            className="font-display text-5xl lg:text-6xl font-light text-pearl mb-16"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Built for{" "}
            <em className="gold-text not-italic font-medium">Ambitious</em>{" "}
            Businesses
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {clients.map((client, i) => (
              <span
                key={i}
                className="px-6 py-3 border border-white/8 text-mist text-sm hover:border-gold/40 hover:text-pearl transition-all duration-300"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em" }}
              >
                {client.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 bg-carbon">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-num mb-4">Why Choose Us</p>
              <h2
                className="font-display text-5xl lg:text-6xl font-light text-pearl mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The{" "}
                <em className="gold-text not-italic font-medium">PMS</em>{" "}
                Difference
              </h2>
              <p className="text-mist leading-relaxed mb-10">
                We operate as a unified service platform — not a fragmented collection of vendors. 
                Every solution we deliver is built on transparency, technology, and a genuine 
                commitment to your success.
              </p>
              <Link href="/about" className="btn-gold">
                <span>Learn More About Us</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "⬡", text: "Integrated Multi-Service Platform" },
                { icon: "⬡", text: "Technology-Driven Operations" },
                { icon: "⬡", text: "Transparent & Ethical Practices" },
                { icon: "⬡", text: "Confidential Data Handling" },
                { icon: "⬡", text: "Structured Service Approach" },
                { icon: "⬡", text: "Affordable & Scalable Solutions" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border border-white/5 p-5 hover:border-gold/30 transition-all duration-300 card-glow bg-graphite/20"
                >
                  <span className="block text-gold mb-3 text-lg">{item.icon}</span>
                  <p className="text-silver text-sm leading-snug group-hover:text-pearl transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #111113 0%, #1A1A1E 50%, #111113 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="section-num mb-6">Ready to Begin?</p>
          <h2
            className="font-display text-5xl lg:text-7xl font-light text-pearl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let&apos;s{" "}
            <em className="gold-text not-italic font-medium">Elevate</em>
            <br />
            Your Business
          </h2>
          <p className="text-mist mb-10 max-w-xl mx-auto leading-relaxed">
            Partner with PMS and gain access to a complete suite of professional services 
            designed to streamline, strengthen, and scale your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Start Your Journey</span>
              <span>→</span>
            </Link>
            <Link href="/services" className="btn-outline">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
