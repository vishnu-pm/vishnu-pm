import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'

// ── Update with your actual projects ──
const PROJECTS = [
  {
    title:    'ERP Billing System',
    badge:    'Featured',
    featured:  true,
    desc:     'End-to-end enterprise resource planning solution with billing, inventory, and reporting modules. Built with a clean layered architecture for scalability and maintainability.',
    stack:    ['ASP.NET Core', 'SQL Server', 'Entity Framework', 'C#', 'Bootstrap'],
    github:   'https://github.com/vishnupm',
    live:     '',
  },
  {
    title:    'Inventory Manager',
    badge:    'Web App',
    featured:  false,
    desc:     'Real-time stock tracking with automated alerts, supplier management, and an analytics dashboard.',
    stack:    ['ASP.NET MVC', 'SQL Server', 'Bootstrap'],
    github:   'https://github.com/vishnupm',
    live:     '',
  },
  {
    title:    'REST API Service',
    badge:    'API',
    featured:  false,
    desc:     'Microservice-style REST API with JWT authentication, Swagger docs, and clean response models.',
    stack:    ['ASP.NET Core', 'JWT', 'Swagger'],
    github:   'https://github.com/vishnupm',
    live:     '',
  },
  {
    title:    'Student Portal',
    badge:    'Full Stack',
    featured:  false,
    desc:     'Academic management portal with role-based access for students, teachers, and admins.',
    stack:    ['ASP.NET MVC', 'SQL Server', 'C#'],
    github:   'https://github.com/vishnupm',
    live:     '',
  },
]

function ProjectCard({ project, index, inView }: { project: typeof PROJECTS[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      data-hover
      className={`group relative bg-bg-card border border-gold-border hover:bg-bg-hover
                  transition-colors duration-200 flex flex-col
                  ${project.featured ? 'lg:col-span-2' : ''}`}
    >
      {/* Top gold line reveal */}
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-7 flex flex-col flex-1">
        {/* Badge */}
        <span className="inline-block font-mono text-[0.65rem] tracking-[0.15em] uppercase
                         bg-gold-dim text-gold border border-gold/20 px-2.5 py-0.5 mb-4 self-start">
          {project.badge}
        </span>

        <h3 className={`font-display font-bold text-ink-primary mb-3
                        ${project.featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
          {project.title}
        </h3>

        <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-6">{project.desc}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(s => <span key={s} className="tag-chip">{s}</span>)}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 font-mono text-[0.72rem] tracking-wider text-ink-muted hover:text-gold transition-colors cursor-none">
              <SiGithub size={14} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 font-mono text-[0.72rem] tracking-wider text-ink-muted hover:text-gold transition-colors cursor-none">
              <HiArrowTopRightOnSquare size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="relative z-10 bg-bg-deep py-28 border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">// selected work</p>
          <h2 className="section-title">Featured <em>Projects</em></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-border border border-gold-border">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
