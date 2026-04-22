import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const experiences = [
  {
    title: 'Developer',
    company: 'Codeedex Technologies',
    location: 'Perinthalmanna, Kerala',
    period: '09/2025 - Present',
    type: 'Full-time',
    description: [
      'Developed 5+ ERP modules including inventory, billing, customer management, and reporting',
      'Designed RESTful APIs for secure data exchange between ERP modules',
      'Optimized SQL Server queries and stored procedures for better performance',
      'Built features using Razor, JavaScript, and ASP.NET MVC',
      'Maintained Azure deployments and cloud infrastructure'
    ],
    achievements: ['ERP System Architecture', 'API Design', 'Database Optimization', 'Cloud Deployment'],
  },
  {
    title: 'Developer',
    company: 'Tactiot Solutions',
    location: 'Thrissur, Kerala',
    period: '04/2024 - 09/2025',
    type: 'Full-time',
    description: [
      'Designed scalable web applications using C#, SQL, and ASP.NET',
      'Delivered enterprise solutions with clean architecture',
      'Resolved deployment issues and optimized application performance',
      'Learned and adopted new technologies for project requirements'
    ],
    achievements: ['Web Application Development', 'Clean Architecture', 'Performance Optimization', 'Technology Adoption'],
  },
];

export const Experience = () => (
  <section id="experience" className="py-24 relative z-10" style={{ backgroundColor: '#080a0f' }}>
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
          Professional Journey
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Work <span className="text-accent">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
      </motion.div>

      {/* Premium Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative mb-16"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-5 h-5 bg-accent rounded-full border-4 border-bg-deep shadow-lg shadow-accent/50">
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ 
                y: -5, 
                boxShadow: '0 0 40px 4px rgba(201,168,76,0.25)',
                borderColor: 'rgba(201,168,76,0.5)'
              }}
              className="premium-experience-card ml-20 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #13161e 0%, #1a1d2a 100%)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '1rem',
                padding: '2rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400"
                style={{ mixBlendMode: 'overlay' }}
              />

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 relative z-10">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30">
                      <FiBriefcase className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-accent font-semibold text-lg">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={16} className="text-accent" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={16} className="text-accent" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium">
                      {exp.type}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FiAward className="text-accent" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent/60 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-accent/30 transition-all duration-400 pointer-events-none" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
          <span className="text-accent font-medium">1.5+ Years Professional Experience</span>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-accent font-medium">2 Companies</span>
        </div>
      </motion.div>
    </div>
  </section>
);
