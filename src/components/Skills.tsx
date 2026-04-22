import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiDotnet, SiCsharp, SiMicrosoftsqlserver, SiEntityframework,
  SiHtml5, SiCss3, SiJavascript, SiBootstrap,
  SiGit, SiGithub, SiVisualstudio,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: [
      { name: 'C#',            icon: SiCsharp,              desc: 'OOP, LINQ, async/await, clean architecture' },
      { name: 'JavaScript',    icon: SiJavascript,          desc: 'DOM manipulation, fetch, ES6+' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: '.NET 6/7',      icon: SiDotnet,              desc: 'Latest .NET framework features' },
      { name: 'ASP.NET Core',  icon: SiDotnet,              desc: 'REST APIs, middleware, DI, auth pipelines' },
      { name: 'ASP.NET MVC',   icon: SiDotnet,              desc: 'Razor views, filters, model binding' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5',         icon: SiHtml5,               desc: 'Semantic markup, accessibility' },
      { name: 'CSS3',          icon: SiCss3,                desc: 'Responsive layouts, animations' },
      { name: 'Bootstrap',     icon: SiBootstrap,           desc: 'Rapid UI, grid system, components' },
      { name: 'jQuery',        icon: SiJavascript,          desc: 'DOM manipulation, AJAX' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'ASP.NET Core',  icon: SiDotnet,              desc: 'REST APIs, middleware, DI, auth pipelines' },
      { name: 'ASP.NET MVC',   icon: SiDotnet,              desc: 'Razor views, filters, model binding' },
      { name: '.NET Framework', icon: SiDotnet,             desc: 'Legacy .NET applications' },
      { name: 'Web API',       icon: SiDotnet,              desc: 'RESTful services' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL Server',    icon: SiMicrosoftsqlserver,  desc: 'Complex queries, stored procs, indexes' },
      { name: 'MySQL',         icon: SiMicrosoftsqlserver,  desc: 'Open source database management' },
    ],
  },
  {
    category: 'ORM',
    skills: [
      { name: 'Entity Framework', icon: SiEntityframework,  desc: 'Code-first, migrations, query optimisation' },
      { name: 'LINQ',          icon: SiCsharp,              desc: 'Language Integrated Query' },
    ],
  },
  {
    category: 'Authentication',
    skills: [
      { name: 'JWT',           icon: SiDotnet,              desc: 'JSON Web Tokens for auth' },
      { name: 'ASP.NET Identity', icon: SiDotnet,           desc: 'User management and security' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Visual Studio', icon: SiVisualstudio,        desc: 'Debugging, profiling, extensions' },
      { name: 'Git',           icon: SiGit,                 desc: 'Version control, branching, PRs' },
      { name: 'GitHub',        icon: SiGithub,              desc: 'Collaboration, CI workflows' },
      { name: 'Azure',         icon: VscAzure,              desc: 'App Service, SQL, deployments' },
      { name: 'IIS',           icon: SiDotnet,              desc: 'Internet Information Services' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="relative z-10 bg-bg-deep py-28 border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">// expertise</p>
          <h2 className="section-title">Core <em>Skills</em></h2>
        </motion.div>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group, gi) => (
            <div key={group.category}>
              <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted mb-4 pl-1">
                {group.category}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-border border border-gold-border">
                {group.skills.map((skill, i) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: gi * 0.1 + i * 0.06 }}
                      data-hover
                      className="group relative bg-bg-card px-6 py-7 hover:bg-bg-hover transition-colors duration-200 overflow-hidden"
                    >
                      {/* Bottom border reveal on hover */}
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                      <Icon className="text-2xl text-gold mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="font-mono text-[0.78rem] text-gold tracking-wider mb-1.5">{skill.name}</div>
                      <div className="text-ink-muted text-[0.8rem] leading-relaxed">{skill.desc}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
