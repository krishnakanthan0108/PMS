"use client";
import { useState } from "react";
const contactInfo = [
  { label: "Mobile no", value: "9940201218", icon: "◈" },
  { label: "Mail", value: "pmsglobalelites@gmail.com", icon: "◇" },
  { label: "Founded", value: "19 January 2026", icon: "◉" },
  { label: "Service Mode", value: "Online / Remote Services", icon: "◎" },
];

const services = [
  "Web Design & Digital Solutions",
  "Financial & Accounting Support",
  "Advertising & Digital Promotion",
  "Travel & Booking Assistance",
  "Office & Administrative Support",
  "General Inquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #0A0A0B",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <p className="text-gold text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
              Get in Touch
            </p>
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <h1 className="font-display text-6xl lg:text-8xl font-light text-pearl leading-none mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Let&apos;s <em className="gold-text not-italic font-medium">Connect</em>
          </h1>
          <p className="text-mist text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your business and we&apos;ll get back to you with the right solution — typically within 24 hours.
          </p>
        </div>
      </section>

      <div className="gold-line" />

      <section className="py-24 bg-carbon">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="section-num mb-6">Company Information</p>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 border-b border-white/5 pb-6">
                    <span className="text-gold text-xl shrink-0">{info.icon}</span>
                    <div>
                      <p className="text-smoke text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {info.label}
                      </p>
                      <p className="text-silver text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-gold/20 p-8" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)" }}>
                <p className="section-num mb-4">Our Promise</p>
                <p className="text-pearl text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
                  &ldquo;Every inquiry is treated with the same professionalism and discretion as our ongoing client relationships.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-8 h-px bg-gold/50" />
                  <span className="text-gold text-xs tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>PMS TEAM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center min-h-96 text-center border border-gold/20 p-16" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)" }}>
                  <div className="w-16 h-16 border border-gold flex items-center justify-center mb-8">
                    <span className="text-gold text-2xl">✓</span>
                  </div>
                  <h2 className="font-display text-4xl text-pearl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Message <em className="gold-text not-italic">Received</em>
                  </h2>
                  <p className="text-mist leading-relaxed max-w-sm">
                    Thank you for reaching out. Our team will review your inquiry and respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="section-num mb-6">Send an Enquiry</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-smoke text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="input-dark" />
                    </div>
                    <div>
                      <label className="block text-smoke text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="input-dark" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-smoke text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Business / Organisation</label>
                    <input type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Your business name (optional)" className="input-dark" />
                  </div>

                  <div>
                    <label className="block text-smoke text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Service of Interest *</label>
                    <select name="service" required value={formData.service} onChange={handleChange} className="input-dark" style={{ appearance: "none", cursor: "pointer" }}>
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#1A1A1E" }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-smoke text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Your Message *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your requirements, challenges, or questions..." className="input-dark resize-none" />
                  </div>

                  {error && (
                    <div className="border border-red-500/30 bg-red-500/5 px-4 py-3">
                      <p className="text-red-400 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>✕ {error}</p>
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="btn-gold w-full justify-center" style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                    <span>{loading ? "Sending..." : "Send Enquiry"}</span>
                    {!loading && <span>→</span>}
                  </button>

                  <p className="text-smoke text-xs text-center leading-relaxed" style={{ fontFamily: "'DM Mono', monospace" }}>
                    We handle all inquiries with strict confidentiality.
                    <br />
                    Typically respond within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-num mb-4">Quick Answers</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-pearl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Frequently <em className="gold-text not-italic font-medium">Asked</em>
            </h2>
          </div>
          <div className="gold-line mb-0" />
          <div className="divide-y divide-white/5">
            {[
              { q: "How quickly can PMS start working with me?", a: "Once we receive your inquiry and complete an initial consultation, most engagements begin within 2–5 business days, depending on the service scope." },
              { q: "Do you work with businesses outside India?", a: "We are an India-based, Udyam-registered firm primarily serving Indian clients. For international inquiries, please contact us to discuss feasibility." },
              { q: "Are your services available on a retainer basis?", a: "Yes. Many of our services — especially financial support and administrative assistance — can be engaged on a monthly retainer for continuous support." },
              { q: "How do you ensure confidentiality?", a: "We operate under strict professional confidentiality standards. All client data is handled securely and never shared with third parties without explicit consent." },
            ].map((faq, i) => (
              <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <h3 className="text-pearl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem" }}>{faq.q}</h3>
                <p className="text-mist text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
