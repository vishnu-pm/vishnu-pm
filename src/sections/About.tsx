import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer } from 'react-icons/fi';

export const About = () => {
  const professionalCards = [
    {
      icon: FiCode,
      title: 'ERP & Billing Systems',
      description: 'Specialized in developing enterprise-level ERP solutions with comprehensive billing, inventory, and customer management modules.',
      highlights: ['Inventory Management', 'Billing Systems', 'Customer Management', 'Reporting'],
    },
    {
      icon: FiServer,
      title: 'ASP.NET & SQL Server',
      description: 'Expert in building scalable web applications using ASP.NET Core, MVC, and optimizing SQL Server databases for peak performance.',
      highlights: ['ASP.NET Core', 'SQL Server', 'Entity Framework', 'LINQ'],
    },
    {
      icon: FiDatabase,
      title: 'Azure Deployment',
      description: 'Experienced in deploying and managing applications on Azure cloud platform with proper configuration and monitoring.',
      highlights: ['Azure App Service', 'Cloud Architecture', 'Performance Monitoring', 'Security'],
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10" style={{ backgroundColor: '#080a0f' }}>
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
            About Me
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Professional <span className="text-accent">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 lg:gap-20 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Full Stack .NET Developer with <span className="text-white font-semibold">1.5+ years</span> of experience building 
                <span className="text-white font-semibold"> ERP systems</span>, 
                <span className="text-white font-semibold"> billing software</span>, and scalable business applications using 
                <span className="text-white font-semibold"> ASP.NET Core</span>, 
                <span className="text-white font-semibold"> ASP.NET MVC</span>, 
                <span className="text-white font-semibold"> C#</span>, 
                <span className="text-white font-semibold"> SQL Server</span>, and 
                <span className="text-white font-semibold"> Entity Framework</span>. 
                Experienced in designing <span className="text-white font-semibold">RESTful APIs</span>, 
                <span className="text-white font-semibold">authentication systems</span>, 
                <span className="text-white font-semibold">Azure deployment</span>, 
                <span className="text-white font-semibold">LINQ</span> and 
                <span className="text-white font-semibold">SQL stored procedures</span>.
              </p>
            </div>
            
            {/* Career Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-accent"></span>
                Career Highlights
                <span className="w-8 h-0.5 bg-accent"></span>
              </h3>
              <div className="grid gap-4">
                {[
                  'Developed enterprise-level applications using ASP.NET MVC and .NET Core for ERP and CRM systems',
                  'Designed and implemented RESTful APIs for secure data exchange between systems',
                  'Improved database performance by optimizing SQL Server queries and stored procedures',
                  'Implemented authentication and authorization using JWT and ASP.NET Identity',
                  'Collaborated in Agile environments to deliver production-ready applications'
                ].map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Professional Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {professionalCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 0 40px 4px rgba(201,168,76,0.25)' }}
                  className="premium-card group cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #13161e 0%, #1a1d2a 100%)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {card.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
