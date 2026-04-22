import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      
      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.toLowerCase())
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300
        ${scrolled ? 'border-b border-accent/20 nav-blur' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Premium Logo */}
        <div className="flex items-center">
          <Link
            to="home"
            smooth
            duration={800}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-all duration-300">
              VP
            </div>
            <span className="font-display text-xl font-bold text-white hidden sm:block">
              Vishnu PM
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth
                spy
                offset={-80}
                duration={800}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer
                  ${activeSection === link 
                    ? 'text-accent' 
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  initial={activeSection === link ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={{ scaleX: activeSection === link ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-lg bg-bg-card border border-white/10 flex items-center justify-center text-gray-300 hover:bg-accent/10 hover:text-accent transition-all cursor-pointer"
        >
          {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-bg-deep/95 backdrop-blur-lg border-t border-accent/20 lg:hidden"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link}
                      to={link.toLowerCase()}
                      smooth
                      spy
                      offset={-80}
                      duration={800}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer
                        ${activeSection === link 
                          ? 'bg-accent/20 text-accent' 
                          : 'text-gray-300 hover:bg-bg-card hover:text-white'
                        }`}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
