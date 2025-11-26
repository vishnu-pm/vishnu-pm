import { motion } from 'framer-motion';
import { FiDownload, FiCode } from 'react-icons/fi';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center bg-gradient-to-b from-blue-50 to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm font-medium tracking-wide text-primary/80 uppercase">
            Full Stack Developer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Hi, I'm <span className="text-primary">Vishnu PM</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Building scalable ERP &amp; Billing solutions using ASP.NET, C#, and SQL
            Server.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-primary text-primary text-sm font-medium hover:bg-blue-50 cursor-pointer transition-colors"
            >
              <FiCode />
              <span>View Projects</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 via-blue-200/40 to-white shadow-lg" />
            <div className="absolute -inset-1 rounded-3xl border border-dashed border-primary/40" />
            <img
              src="/profile.jpg"
              alt="Vishnu PM"
              className="relative w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

