import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-24 relative">
      {/* Glow blob */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-accent/10 border border-accent/25 text-accent px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Full Stack .NET Developer
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-6xl font-bold text-white leading-tight"
        >
          Hi, I'm <span className="text-accent">Vishnu PM</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl leading-relaxed"
        >
          Full Stack .NET Developer with <span className="text-white font-medium">1.5+ years</span> of experience building 
          <span className="text-white font-medium"> ERP systems</span>, 
          <span className="text-white font-medium"> billing software</span>, and scalable business applications using 
          <span className="text-white font-medium"> ASP.NET Core</span>, 
          <span className="text-white font-medium"> ASP.NET MVC</span>, 
          <span className="text-white font-medium"> C#</span>, 
          <span className="text-white font-medium"> SQL Server</span>, and 
          <span className="text-white font-medium"> Entity Framework</span>.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => window.open('/Vishnu_De.pdf', '_blank')}
            className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-lg font-semibold text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors"
          >
            Download Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          <Link
            to="projects"
            smooth
            duration={500}
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 px-6 py-3 rounded-lg font-medium text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
          >
            View Projects
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-8 lg:gap-12 pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white">1.5<span className="text-accent">+</span></div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white">20<span className="text-accent">+</span></div>
            <div className="text-sm text-gray-400 mt-1">ERP Modules</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white">15<span className="text-accent">+</span></div>
            <div className="text-sm text-gray-400 mt-1">Tech Stack</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-sm mx-auto lg:mx-0"
      >
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-accent/20 rounded-2xl overflow-hidden aspect-[3/4]">
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50 rounded-tl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50 rounded-br-lg"></div>
          
          <img
            src="/profile_picture.jpg.png"
            alt="Vishnu PM"
            className="w-full h-full object-cover object-center"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.style.display = 'none'
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement
              if (nextElement) {
                nextElement.style.display = 'flex'
              }
            }}
          />
          
          {/* Placeholder */}
          <div className="hidden w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 border-2 border-accent/50 flex items-center justify-center text-4xl font-bold text-accent">
              VP
            </div>
            <p className="text-sm text-gray-400">Add photo</p>
          </div>
          
          {/* Badge */}
          <div className="absolute bottom-5 left-5 right-5 bg-black/80 backdrop-blur-md border border-accent/20 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-lg">
              ⚡
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Available for Work</div>
              <div className="text-xs text-gray-300">Open to full-time & freelance</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
