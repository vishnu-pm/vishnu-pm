import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-accent/20" style={{ backgroundColor: '#080a0f' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-[1fr,2fr,1fr] gap-8 lg:gap-12">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Premium Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-accent/20">
                VP
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Vishnu PM
                </h3>
                <p className="text-accent text-sm font-medium">Full Stack .NET Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Building scalable ERP systems and business applications with ASP.NET Core, SQL Server, and modern web technologies.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <FiMail size={14} className="text-accent" />
                <span>pmvishnu7007@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FiMapPin size={14} className="text-accent" />
                <span>Palakkad, Kerala, India</span>
              </div>
            </div>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Tech Stack Summary */}
            <div className="pt-4 border-t border-white/10">
              <h5 className="text-sm font-semibold text-white mb-3">Core Technologies</h5>
              <div className="flex flex-wrap gap-2">
                {['.NET Core', 'ASP.NET MVC', 'C#', 'SQL Server', 'Azure'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-accent/10 border border-accent/20 text-accent text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/vishnu-pm"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 hover:border-accent/50 transition-all duration-300"
                >
                  <SiGithub size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vishnupm17590"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 hover:border-accent/50 transition-all duration-300"
                >
                  <FiLinkedin size={18} />
                </motion.a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-green-400 font-medium text-sm">Available for Work</p>
                  <p className="text-gray-400 text-xs">Open to full-time & freelance opportunities</p>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('/Vishnu_De.pdf', '_blank')}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-accent to-accent/80 text-black font-medium hover:from-accent/90 hover:to-accent/70 transition-all duration-300 cursor-pointer"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="font-mono text-sm text-gray-400">
            © {new Date().getFullYear()} Vishnu PM. All rights reserved. Built with passion for .NET development.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
