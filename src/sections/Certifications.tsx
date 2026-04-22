import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiTrendingUp } from 'react-icons/fi';

const certifications = [
  {
    title: 'Data Analytics',
    institution: 'ExcelR Institute',
    location: 'Online',
    year: '2024',
    status: 'Completed',
    highlights: ['Data Analysis', 'Statistical Methods', 'Data Visualization', 'Business Intelligence'],
    icon: FiTrendingUp,
  },
];

export const Certifications = () => (
  <section id="certifications" className="py-24 relative z-10" style={{ backgroundColor: '#080a0f' }}>
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
          Professional Development
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          <span className="text-accent">Certifications</span>
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
      </motion.div>

      {/* Premium Certification Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {certifications.map((cert, idx) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 0 40px 4px rgba(201,168,76,0.25)',
                borderColor: 'rgba(201,168,76,0.5)'
              }}
              className="premium-certification-card group cursor-pointer"
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
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ mixBlendMode: 'overlay' }}
              />

              <div className="flex items-start gap-6 relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 flex-shrink-0">
                  <Icon className="text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-accent font-semibold text-lg">{cert.institution}</p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
                      {cert.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={16} className="text-accent" />
                      <span>{cert.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiAward size={16} className="text-accent" />
                      <span>{cert.location}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-accent"></span>
                      Skills Acquired
                      <span className="w-6 h-0.5 bg-accent"></span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-400 pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
