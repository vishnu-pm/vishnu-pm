import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiTool, FiGlobe, FiCpu, FiLock, FiSettings, FiTrendingUp } from 'react-icons/fi';

const skillCategories = [
  {
    icon: FiCode,
    title: 'Languages',
    skills: ['C#', 'JavaScript'],
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: FiServer,
    title: 'Frameworks',
    skills: ['.NET 6/7', 'ASP.NET Core', 'ASP.NET MVC'],
    color: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: FiGlobe,
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
    color: 'from-green-500/20 to-green-600/10',
    borderColor: 'border-green-500/30',
  },
  {
    icon: FiCpu,
    title: 'Backend',
    skills: ['ASP.NET Core', 'ASP.NET MVC', '.NET Framework', 'Web API'],
    color: 'from-orange-500/20 to-orange-600/10',
    borderColor: 'border-orange-500/30',
  },
  {
    icon: FiDatabase,
    title: 'Database',
    skills: ['SQL Server', 'MySQL'],
    color: 'from-cyan-500/20 to-cyan-600/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    icon: FiSettings,
    title: 'ORM',
    skills: ['Entity Framework', 'LINQ'],
    color: 'from-pink-500/20 to-pink-600/10',
    borderColor: 'border-pink-500/30',
  },
  {
    icon: FiLock,
    title: 'Authentication',
    skills: ['JWT', 'ASP.NET Identity'],
    color: 'from-red-500/20 to-red-600/10',
    borderColor: 'border-red-500/30',
  },
  {
    icon: FiTool,
    title: 'Tools',
    skills: ['Visual Studio', 'Git', 'GitHub', 'Azure', 'IIS'],
    color: 'from-indigo-500/20 to-indigo-600/10',
    borderColor: 'border-indigo-500/30',
  },
  {
    icon: FiTrendingUp,
    title: 'Core Competencies',
    skills: ['ERP Development', 'API Development', 'API Integration', 'Database Optimization', 'Authentication & Authorization', 'Agile Development', 'Scalable Application Architecture'],
    color: 'from-yellow-500/20 to-yellow-600/10',
    borderColor: 'border-yellow-500/30',
  },
];

export const Skills = () => (
  <section id="skills" className="py-24 relative z-10" style={{ backgroundColor: '#080a0f' }}>
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
          Technical Skills
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Technology <span className="text-accent">Stack</span>
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
      </motion.div>

      {/* Premium Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 0 40px 4px rgba(201,168,76,0.25)',
                borderColor: 'rgba(201,168,76,0.5)'
              }}
              className="premium-skill-card group cursor-pointer"
              style={{
                background: `linear-gradient(135deg, #13161e 0%, #1a1d2a 100%)`,
                border: `1px solid ${category.borderColor.replace('border-', 'rgba(').replace('30', '0.3)')}`,
                borderRadius: '1rem',
                padding: '1.5rem',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                style={{ mixBlendMode: 'overlay' }}
              />
              
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-accent border ${category.borderColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                  <Icon className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-accent/50 mt-1"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors duration-300"></div>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-400 pointer-events-none" />
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
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/25">
          <span className="text-accent font-medium">9+ Years Combined Experience</span>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  </section>
);
