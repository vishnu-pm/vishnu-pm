import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiDatabase, FiCpu, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const projects = [
  {
    title: 'POKY - ERP for Cloth Branding Company',
    category: 'Enterprise ERP',
    description: 'Full ERP system for cloth branding company with comprehensive modules for inventory, billing, customer management, and reporting.',
    tech: ['ASP.NET MVC', 'SQL Server', 'C#', 'Entity Framework'],
    modules: ['Customer Management', 'Expense Tracking', 'Material Movement', 'Warehouse Management', 'Role-based access'],
    businessImpact: 'Streamlined operations for 500+ customers, reduced manual work by 60%',
    icon: FiDatabase,
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    title: 'MADEENA Interlocks - Customized Business Web Application',
    category: 'Business Application',
    description: 'Customized business application for interlocks manufacturing company with comprehensive tracking and management features.',
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Bootstrap'],
    modules: ['Customer Handling', 'Expense Management', 'Material Tracking', 'Payment Monitoring'],
    businessImpact: 'Improved inventory accuracy by 85%, enhanced customer satisfaction',
    icon: FiCpu,
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    title: 'Billing ERP (BSW)',
    category: 'Billing System',
    description: 'Comprehensive billing and inventory management ERP system with advanced features for modern retail operations.',
    tech: ['ASP.NET MVC', 'SQL Server', 'LINQ', 'JavaScript'],
    modules: ['Product Management', 'Vendor Handling', 'Billing', 'Inventory', 'Purchase', 'Reports', 'Barcode/SKU generation', 'GST calculation', 'Invoice printing'],
    businessImpact: 'Automated billing for 1000+ transactions daily, reduced processing time by 70%',
    icon: FiGlobe,
    color: 'from-green-500/20 to-green-600/10',
  },
  {
    title: 'Invobi ERP Software',
    category: 'Complete ERP',
    description: 'Complete enterprise resource planning software with modern architecture and comprehensive business modules.',
    tech: ['ASP.NET Core', 'Web API', 'SQL Server', 'JWT'],
    modules: ['Inventory', 'Billing', 'Sales', 'HR', 'Finance', 'RESTful APIs', 'Role-based authentication'],
    businessImpact: 'Integrated 5 business departments, improved operational efficiency by 45%',
    icon: FiTrendingUp,
    color: 'from-orange-500/20 to-orange-600/10',
  },
];

export const Projects = () => (
  <section id="projects" className="py-24 relative z-10" style={{ backgroundColor: '#080a0f' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Premium Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Portfolio Highlights
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
      </motion.div>

      {/* Premium Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 0 50px 6px rgba(201,168,76,0.3)',
                borderColor: 'rgba(201,168,76,0.6)'
              }}
              className="premium-project-card group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #13161e 0%, #1a1d2a 100%)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative'
              }}
            >
              {/* Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{ mixBlendMode: 'overlay' }}
              />

              {/* Project Header */}
              <div className="p-6 pb-4 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-accent border border-accent/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Business Impact Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {project.businessImpact}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-3 relative z-10">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-accent"></span>
                  Technology Stack
                  <span className="w-6 h-0.5 bg-accent"></span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium hover:bg-accent/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Modules */}
              <div className="px-6 pb-4 relative z-10">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-accent"></span>
                  Key Modules
                  <span className="w-6 h-0.5 bg-accent"></span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.modules.slice(0, 4).map((module) => (
                    <span
                      key={module}
                      className="px-2 py-1 rounded bg-bg-card border border-white/10 text-gray-300 text-xs"
                    >
                      {module}
                    </span>
                  ))}
                  {project.modules.length > 4 && (
                    <span className="px-2 py-1 rounded bg-bg-card border border-white/10 text-gray-400 text-xs">
                      +{project.modules.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 border-t border-white/10 bg-bg-card/50 relative z-10 flex gap-3">
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-bg-card border border-white/10 text-gray-300 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300 text-sm font-medium"
                >
                  <FiGithub size={16} />
                  Code
                </a>
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-black font-medium hover:bg-accent/90 transition-all duration-300 text-sm"
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </a>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-[1.25rem] border-2 border-transparent group-hover:border-accent/40 transition-all duration-500 pointer-events-none" />
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(201,168,76,0.1)',
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
          <span className="text-accent font-medium">4+ ERP Projects Delivered</span>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-accent font-medium">Production Ready</span>
        </div>
      </motion.div>
    </div>
  </section>
);
