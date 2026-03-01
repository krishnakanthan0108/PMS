import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PMS Global Elites is a professional accounting and financial services firm founded in January 2026. We deliver remote bookkeeping, GST, MIS reporting and financial consulting with transparency and professionalism.",
  alternates: { canonical: "https://www.pmsglobalelites.in/about" },
  openGraph: {
    title: "About PMS Global Elites | Accounting Firm India",
    description:
      "Founded January 2026. Expert accounting and financial support for SMEs, startups and entrepreneurs across India.",
    url: "https://www.pmsglobalelites.in/about",
  },
};
const values = [
  {
    num: "01",
    title: "Transparency",
    desc: "We operate with complete clarity — no hidden charges, no vague commitments. Every service we offer is explained thoroughly before engagement.",
  },
  {
    num: "02",
    title: "Technology First",
    desc: "Our workflows are built on modern digital tools that ensure accuracy, speed, and consistency in every deliverable.",
  },
  {
    num: "03",
    title: "Confidentiality",
    desc: "We treat your data with the highest level of discretion. Your business information is handled with professional secrecy and ethical responsibility.",
  },
  {
    num: "04",
    title: "Reliability",
    desc: "Our clients depend on us for consistent, structured support. We deliver what we promise — on time, every time.",
  },
];

const goals = [
  "Reduce operational burden",
  "Improve documentation accuracy",
  "Support financial clarity",
  "Enhance digital presence",
  "Strengthen administrative efficiency",
];

export default function About() {
  return (
    <>
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #0A0A0B",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <p
              className="text-gold text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Our Story
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1
                className="font-display text-6xl lg:text-8xl font-light text-pearl leading-none mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                About
                <br />
                <em className="gold-text not-italic font-medium">PMS</em>
              </h1>
            </div>
            <div className="pt-4">
              <p className="text-silver text-lg leading-relaxed mb-6">
                We are a professionally managed online service platform delivering integrated 
                business, digital, financial, and administrative solutions under one roof.
              </p>
              <p className="text-mist leading-relaxed">
                Our mission is to support individuals, startups, and small businesses with 
                reliable, transparent, and technology-driven services that simplify operations 
                and improve efficiency.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="px-4 py-2 border border-gold/20 bg-gold/5">
                  <p className="text-gold text-xs tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>EST. 19 JAN 2026</p>
                </div>
                <div className="px-4 py-2 border border-white/10">
                  <p className="text-mist text-xs tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>UDYAM REGISTERED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />
      <section className="py-32 bg-carbon">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <p className="section-num mb-4">Our Mission</p>
              <h2
                className="font-display text-4xl lg:text-5xl font-light text-pearl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Purpose &{" "}
                <em className="gold-text not-italic">Goals</em>
              </h2>
            </div>

            <div className="lg:col-span-2">
              <p className="text-silver text-lg leading-relaxed mb-10">
                PMS was born from the recognition that businesses — especially emerging ones — 
                are often overwhelmed by the complexity of managing multiple service providers. 
                We set out to change that by becoming a single, trusted partner across all 
                operational domains.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1 shrink-0">—</span>
                    <p className="text-silver text-sm leading-relaxed">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-num mb-4">Core Values</p>
            <h2
              className="font-display text-5xl lg:text-6xl font-light text-pearl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What We{" "}
              <em className="gold-text not-italic font-medium">Stand For</em>
            </h2>
          </div>

          <div className="gold-line mb-0" />

          <div className="divide-y divide-white/5">
            {values.map((val) => (
              <div
                key={val.num}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 hover:bg-white/[0.02] px-4 -mx-4 transition-all duration-300"
              >
                <span
                  className="text-smoke text-sm md:col-span-1 font-mono group-hover:text-gold/50 transition-colors"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {val.num}
                </span>
                <h3
                  className="text-pearl text-2xl font-medium md:col-span-3 group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}
                >
                  {val.title}
                </h3>
                <p className="text-mist text-sm leading-relaxed md:col-span-8">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-32 relative"
        style={{
          background: "linear-gradient(180deg, #111113 0%, #0A0A0B 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative border border-white/5 p-12"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)",
              }}
            >
              <p className="section-num mb-6">Business Profile</p>
              <div className="space-y-6">
                {[
                  { label: "Company Name", value: "Integrated Business & Digital Services" },
                  { label: "Founded", value: "19 January 2026" },
                  { label: "Registration", value: "Udyam Registered (MSME)" },
                  { label: "Service Mode", value: "Online / Remote" },
                  { label: "Sector", value: "Business & Digital Services" },
                  { label: "Clients", value: "Startups, SMEs, Entrepreneurs" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span
                      className="text-smoke text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-silver text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-num mb-4">Our Approach</p>
              <h2
                className="font-display text-4xl lg:text-5xl font-light text-pearl mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                One Platform,
                <br />
                <em className="gold-text not-italic font-medium">Every Solution</em>
              </h2>
              <p className="text-mist leading-relaxed mb-6">
                Rather than working with multiple fragmented service providers, PMS gives you 
                access to a unified platform where all your business support needs are handled 
                by a single, accountable team.
              </p>
              <p className="text-mist leading-relaxed mb-10">
                This integrated approach reduces communication gaps, accelerates delivery timelines, 
                and gives you a clearer view of your operations — all while keeping costs under control.
              </p>
              <Link href="/services" className="btn-gold">
                <span>Explore Our Services</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-carbon border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2
            className="font-display text-4xl lg:text-5xl font-light text-pearl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to Work{" "}
            <em className="gold-text not-italic font-medium">Together?</em>
          </h2>
          <p className="text-mist mb-10">
            Let&apos;s discuss how PMS can support your business goals.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Contact Us Today</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
