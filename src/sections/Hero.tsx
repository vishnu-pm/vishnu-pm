import { motion, useInView } from 'framer-motion'
import { Link } from 'react-scroll'
import { useRef, useEffect, useState } from 'react'
import { FiDownload, FiBriefcase } from 'react-icons/fi'

const Counter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }
      requestAnimationFrame(animateCount)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-24 relative" style={{ backgroundColor: '#080a0f' }}>
      {/* Premium Glow Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />

      <div className="space-y-8 relative z-10">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-accent/10 border border-accent/25 text-accent px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Full Stack .NET Developer
        </motion.div>
        
        {/* Premium Title with Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl lg:text-6xl font-bold text-white leading-tight"
        >
          Hi, I'm <span className="text-accent">Vishnu PM</span>
        </motion.h1>
        
        {/* Enhanced Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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

        {/* Premium Highlight Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {['ERP Systems', 'ASP.NET Core', 'SQL Server', 'Azure'].map((tech, idx) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        
        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => window.open('/Vishnu_De.pdf', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-black font-bold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 cursor-pointer"
          >
            <FiDownload size={18} />
            Download Resume
          </button>
          <Link
            to="projects"
            smooth
            duration={800}
            offset={-80}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/50 text-accent font-bold hover:bg-accent/10 transition-all duration-300 cursor-pointer"
          >
            <FiBriefcase size={18} />
            View Projects
          </Link>
        </motion.div>

        {/* Premium Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-8 lg:gap-12 pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white">
              <Counter end={1} suffix=".5+" />
              <span className="text-accent">+</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white">
              <Counter end={20} suffix="+" />
              <span className="text-accent">+</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">ERP Modules</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white">
              <Counter end={15} suffix="+" />
              <span className="text-accent">+</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">Tech Stack</div>
          </div>
        </motion.div>
      </div>

      {/* Premium Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative max-w-sm mx-auto lg:mx-0"
      >
        {/* Premium Glow Behind Image */}
        <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl"></div>
        
        {/* Profile Image Frame */}
        <div className="relative bg-bg-card border-2 border-accent/30 rounded-2xl p-1">
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
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
            <div className="hidden w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 border-2 border-accent/50 flex items-center justify-center text-4xl font-bold text-accent">
                VP
              </div>
              <p className="text-sm text-gray-400">Professional Photo</p>
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent border border-accent/30"
        >
          <span className="text-xs font-bold">.NET</span>
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent border border-accent/30"
        >
          <span className="text-xs font-bold">SQL</span>
        </motion.div>

        {/* Available for Work Badge */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-accent/20 rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-sm">
              <span className="text-accent">!</span>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Available for Work</div>
              <div className="text-xs text-gray-300">Open to opportunities</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
