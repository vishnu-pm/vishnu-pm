import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative z-10 bg-bg-surface py-28 border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">// about me</p>
            <h2 className="section-title mb-6">
              Building <em>Scalable</em><br />Business Systems
            </h2>
            <span className="gold-line" />

            <div className="space-y-4 text-ink-muted leading-relaxed text-[0.95rem]">
              <p>
                I'm a <span className="text-ink-primary font-medium">Full Stack .NET Developer</span> based in Kerala, India,
                specialising in enterprise-grade ERP systems and billing software that handle real-world
                business complexity.
              </p>
              <p>
                With hands-on experience in <span className="text-gold">ASP.NET Core</span>, <span className="text-gold">ASP.NET MVC</span>,
                and <span className="text-gold">SQL Server</span>, I build layered architectures that are
                maintainable, performant, and ready to scale.
              </p>
              <p>
                I care deeply about clean code, efficient database design, and delivering software
                that actually solves business problems — not just looks good on paper.
              </p>
            </div>
          </motion.div>

          {/* Right — info grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-px bg-gold-border border border-gold-border"
          >
            {[
              { label: 'Name',       value: 'Vishnu PM' },
              { label: 'Role',       value: 'Full Stack .NET Dev' },
              { label: 'Location',   value: 'Kerala, India' },
              { label: 'Experience', value: '1.5+ Years' },
              { label: 'Focus',      value: 'ERP / Billing Systems' },
              { label: 'Status',     value: 'Open to Opportunities' },
            ].map(item => (
              <div key={item.label} className="bg-bg-card p-6 hover:bg-bg-hover transition-colors">
                <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-gold mb-1.5">{item.label}</div>
                <div className="text-ink-primary text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
