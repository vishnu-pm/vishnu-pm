import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    title: 'ERP Management System',
    description: 'Comprehensive ERP solution with inventory, billing, and reporting modules',
    tech: ['ASP.NET MVC', 'SQL Server', 'JavaScript', 'Bootstrap'],
    highlights: ['10,000+ daily transactions', '40% faster queries', 'Real-time reporting'],
    github: '#',
    live: '#',
  },
  {
    title: 'Billing & Invoicing Platform',
    description: 'Cloud-based billing system with automated invoice generation and payment tracking',
    tech: ['ASP.NET Core', 'React', 'Azure', 'Stripe API'],
    highlights: ['Payment gateway integration', 'Email notifications', 'PDF generation'],
    github: '#',
    live: '#',
  },
  {
    title: 'Inventory Management Dashboard',
    description: 'Real-time inventory tracking with analytics and forecasting',
    tech: ['C#', 'SQL Server', 'Chart.js', 'REST API'],
    highlights: ['Real-time updates', 'Advanced analytics', 'Export to Excel'],
    github: '#',
    live: '#',
  },
  {
    title: 'Customer Portal',
    description: 'Self-service portal for customers to track orders and manage accounts',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    highlights: ['Order tracking', 'Account management', 'Support tickets'],
    github: '#',
    live: '#',
  },
  {
    title: 'API Gateway Service',
    description: 'Microservices API gateway with authentication and rate limiting',
    tech: ['ASP.NET Core', 'JWT', 'Docker', 'Azure API Management'],
    highlights: ['JWT authentication', 'Rate limiting', 'API versioning'],
    github: '#',
    live: '#',
  },
  {
    title: 'Data Analytics Tool',
    description: 'Business intelligence tool for data visualization and reporting',
    tech: ['C#', 'SQL Server', 'Power BI', 'Excel Integration'],
    highlights: ['Custom dashboards', 'Scheduled reports', 'Data export'],
    github: '#',
    live: '#',
  },
];

export const Projects = () => (
  <section id="projects" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Projects
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 flex-1">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-medium text-primary/80 mb-2 uppercase">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-slate-700 mb-2">Highlights</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-xs text-slate-600 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50 flex gap-3">
              <a
                href={project.github}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <FiGithub size={16} />
                Code
              </a>
              <a
                href={project.live}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-blue-700 transition-colors"
              >
                <FiExternalLink size={16} />
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
