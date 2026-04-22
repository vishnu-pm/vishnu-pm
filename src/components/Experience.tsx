import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ── Update this with your actual experience ──
const EXPERIENCES = [
  {
    role:     'Developer',
    company:  'Codeedex Technologies',
    period:   '09/2025 – Present',
    type:     'Full-time',
    bullets: [
      'Developed 5+ ERP modules including inventory, billing, customer management, and reporting systems using ASP.NET MVC and SQL Server',
      'Designed and implemented RESTful APIs for secure communication between ERP modules',
      'Optimized database performance using LINQ queries and SQL stored procedures',
      'Implemented JWT-based authentication and authorization for secure user access',
      'Collaborated with development teams in Agile environments to deliver production-ready applications',
    ],
    stack: ['ASP.NET MVC', 'C#', 'SQL Server', 'Entity Framework', 'LINQ', 'JWT'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="relative z-10 bg-bg-surface py-28 border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">// work history</p>
          <h2 className="section-title">Work <em>Experience</em></h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gold-border hidden lg:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="lg:pl-12 relative"
              >
                {/* Timeline dot */}
                <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-gold hidden lg:block" />

                <div className="border border-gold-border bg-bg-card hover:bg-bg-hover transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 border-b border-gold-border gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-primary">{exp.role}</h3>
                      <p className="font-mono text-[0.75rem] tracking-wider text-gold mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                      <span className="font-mono text-[0.72rem] tracking-widest text-ink-muted">{exp.period}</span>
                      <span className="text-[0.65rem] font-mono tracking-widest uppercase bg-gold-dim text-gold px-2.5 py-0.5 border border-gold/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="p-6 space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <div key={j} className="flex gap-3 text-ink-muted text-[0.88rem] leading-relaxed">
                        <span className="text-gold mt-1 shrink-0">→</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="px-6 pb-6 flex flex-wrap gap-2">
                    {exp.stack.map(s => (
                      <span key={s} className="tag-chip">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
