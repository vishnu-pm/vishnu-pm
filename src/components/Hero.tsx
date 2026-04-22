import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { HiCodeBracket } from 'react-icons/hi2'
import { Link } from 'react-scroll'
// Replace with your actual photo import:
// import profilePhoto from '../assets/profile.jpg'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 24 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-bg-deep overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-glow/8 blur-[120px]" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gold/6 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center pt-20 pb-40">
        {/* ── LEFT ── */}
        <div>
          <motion.p {...fadeUp(0.2)} className="section-label mb-5">
            Full Stack .NET Developer · ERP Systems · ASP.NET Core · SQL Server
          </motion.p>

          <motion.h1 {...fadeUp(0.35)} className="font-display text-5xl lg:text-7xl font-black leading-[1.05] mb-6">
            Hi, I'm<br />
            <em className="text-gold not-italic">Vishnu PM</em>
          </motion.h1>

          <motion.p {...fadeUp(0.5)} className="text-ink-muted text-base leading-relaxed max-w-lg mb-10">
            <span className="text-ink-primary font-medium">Full Stack .NET Developer</span> with 1.5+ years of
            experience building ERP systems, billing software, and scalable business applications
            using ASP.NET Core, ASP.NET MVC, C#, SQL Server, and Entity Framework.
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download className="btn-gold">
              <HiDownload size={15} />
              Download Resume
            </a>
            <Link to="projects" smooth duration={500} offset={-70}>
              <button className="btn-outline">
                <HiCodeBracket size={15} />
                View Projects
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative w-[340px] lg:w-[380px]">
            {/* Corner decorations */}
            <span className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-gold/60" />
            <span className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-gold/60" />

            {/* Gradient border frame */}
            <div className="relative p-[2px] bg-gradient-to-br from-gold via-transparent to-glow">
              <div className="bg-bg-card aspect-[4/5] flex items-center justify-center overflow-hidden">
                <img src="/profile.jpg" alt="Vishnu PM" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-bg-deep border border-gold-border px-4 py-2.5 font-mono text-[0.7rem] tracking-widest text-gold">
              Available for Work
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip — overlaps bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-8 lg:px-16"
      >
        <div className="grid grid-cols-3 border border-gold-border bg-bg-surface/80 backdrop-blur-md divide-x divide-gold-border">
          {[
            { num: '1.5+', label: 'Years Experience' },
            { num: '10+',  label: 'Projects Delivered' },
            { num: '5+',   label: 'Core Technologies' },
          ].map(s => (
            <div key={s.label} className="px-6 lg:px-10 py-5">
              <div className="font-display text-3xl font-bold text-gold">{s.num}</div>
              <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-ink-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
