import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integrate with EmailJS or Formspree here
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative z-10 bg-bg-deep py-28 border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">// get in touch</p>
          <h2 className="section-title">Let's <em>Connect</em></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-ink-muted leading-relaxed mb-8 text-[0.95rem]">
              I'm currently open to full-time roles, freelance projects, or collaborations.
              Whether you have an ERP challenge, a .NET project, or just want to say hi — reach out!
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: HiEnvelope, label: 'Email',    value: 'vishnu@example.com',   href: 'mailto:vishnu@example.com' },
                { icon: HiPhone,    label: 'Phone',    value: '+91 00000 00000',       href: 'tel:+910000000000' },
                { icon: HiMapPin,   label: 'Location', value: 'Kerala, India',         href: '#' },
              ].map(c => (
                <a key={c.label} href={c.href}
                   className="flex items-center gap-4 group cursor-none">
                  <div className="w-10 h-10 border border-gold-border flex items-center justify-center
                                  group-hover:border-gold group-hover:bg-gold-dim transition-all duration-200 shrink-0">
                    <c.icon className="text-gold text-base" />
                  </div>
                  <div>
                    <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ink-muted">{c.label}</div>
                    <div className="text-ink-primary text-sm group-hover:text-gold transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { icon: SiGithub,   href: 'https://github.com/vishnupm',   label: 'GitHub' },
                { icon: SiLinkedin, href: 'https://linkedin.com/in/vishnupm', label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 border border-gold-border px-4 py-2.5
                              font-mono text-[0.72rem] tracking-wider text-ink-muted
                              hover:border-gold hover:text-gold transition-all cursor-none">
                  <s.icon size={14} /> {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {[
              { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
              { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block font-mono text-[0.68rem] tracking-[0.15em] uppercase text-ink-muted mb-2">
                  {f.label}
                </label>
                <input
                  id={f.id} type={f.type} placeholder={f.placeholder} required
                  className="w-full bg-bg-card border border-gold-border px-4 py-3 text-ink-primary text-sm
                             placeholder:text-ink-muted/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block font-mono text-[0.68rem] tracking-[0.15em] uppercase text-ink-muted mb-2">
                Message
              </label>
              <textarea
                id="message" rows={5} placeholder="Tell me about your project..." required
                className="w-full bg-bg-card border border-gold-border px-4 py-3 text-ink-primary text-sm
                           placeholder:text-ink-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-gold w-full justify-center py-4">
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
