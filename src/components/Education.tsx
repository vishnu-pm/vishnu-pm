import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'

// ── Update with your actual education ──
const EDUCATION = [
  {
    degree:      'Bachelor of Computer Applications',
    institution: 'Your College Name',
    university:  'University Name',
    period:      '2020 – 2023',
    grade:       'First Class',
    highlights: [
      'Focused on software development, data structures, and database management.',
      'Final year project: ERP module for academic administration.',
    ],
  },
]

const CERTIFICATIONS = [
  { name: 'ASP.NET Core Developer',    issuer: 'Microsoft / Udemy', year: '2023' },
  { name: 'SQL Server Fundamentals',   issuer: 'Microsoft',         year: '2023' },
  { name: 'C# Programming',            issuer: 'Coursera',          year: '2022' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="relative z-10 bg-bg-surface py-28 border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">// background</p>
          <h2 className="section-title">Education & <em>Certifications</em></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted mb-4">Academic</p>
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-gold-border bg-bg-card hover:bg-bg-hover transition-colors"
              >
                <div className="p-6 border-b border-gold-border flex items-start gap-4">
                  <HiAcademicCap className="text-gold text-xl shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-primary">{edu.degree}</h3>
                    <p className="font-mono text-[0.72rem] tracking-wider text-gold mt-1">{edu.institution}</p>
                    <p className="text-ink-muted text-[0.78rem] mt-0.5">{edu.university}</p>
                  </div>
                  <div className="ml-auto text-right shrink-0">
                    <span className="font-mono text-[0.7rem] text-ink-muted">{edu.period}</span>
                    <div className="font-mono text-[0.65rem] tracking-widest uppercase bg-gold-dim text-gold px-2 py-0.5 border border-gold/20 mt-1.5">
                      {edu.grade}
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  {edu.highlights.map((h, j) => (
                    <div key={j} className="flex gap-3 text-ink-muted text-[0.85rem] leading-relaxed">
                      <span className="text-gold shrink-0">→</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted mb-4">Certifications</p>
            <div className="border border-gold-border divide-y divide-gold-border bg-bg-card">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-center justify-between p-5 hover:bg-bg-hover transition-colors group"
                >
                  <div>
                    <div className="text-ink-primary text-sm font-medium group-hover:text-gold transition-colors">{cert.name}</div>
                    <div className="font-mono text-[0.68rem] text-ink-muted tracking-wider mt-0.5">{cert.issuer}</div>
                  </div>
                  <span className="font-mono text-[0.7rem] text-gold border border-gold/20 px-2.5 py-1">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
