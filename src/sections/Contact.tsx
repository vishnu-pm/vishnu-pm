import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiTwitter, FiMapPin, FiSend } from 'react-icons/fi';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative z-10" style={{ backgroundColor: '#080a0f' }}>
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
            Get In Touch
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Contact <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Premium Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="premium-contact-info">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-accent"></span>
                Let's Connect
                <span className="w-8 h-0.5 bg-accent"></span>
              </h3>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <a
                    href="mailto:pmvishnu7007@gmail.com"
                    className="text-gray-300 hover:text-accent transition-colors text-lg"
                  >
                    pmvishnu7007@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Phone</h4>
                  <a
                    href="tel:+918086858701"
                    className="text-gray-300 hover:text-accent transition-colors text-lg"
                  >
                    8086858701
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Location</h4>
                  <p className="text-gray-300 text-lg">
                    Palakkad, Kerala, India
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="pt-6"
              >
                <h4 className="font-bold text-white mb-6">Connect With Me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/vishnupm17590"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  >
                    <FiLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/vishnu-pm"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/vishnupm"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent border border-accent/30 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  >
                    <FiTwitter size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 0 40px 4px rgba(201,168,76,0.25)',
                borderColor: 'rgba(201,168,76,0.5)'
              }}
              className="premium-contact-form space-y-6 cursor-pointer"
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

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-accent"></span>
                  Send Message
                  <span className="w-8 h-0.5 bg-accent"></span>
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-card/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-card/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-bg-card/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 resize-none transition-all"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-accent to-accent/80 text-black font-bold hover:from-accent/90 hover:to-accent/70 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <FiSend size={18} />
                    Send Message
                  </motion.button>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/20 text-green-400 text-sm font-medium text-center border border-green-500/30"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-accent/30 transition-all duration-400 pointer-events-none" />
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
