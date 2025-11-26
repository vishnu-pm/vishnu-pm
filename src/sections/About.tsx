import { motion } from 'framer-motion';

export const About = () => (
  <section id="about" className="py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr,1.2fr] gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          About
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full" />
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          Results-driven Full Stack Developer experienced in building ERP systems,
          billing software, and custom web applications. Skilled in ASP.NET MVC,
          C#, JavaScript, and SQL Server with hands-on experience in API
          integration, layered architecture, and Azure deployment. Strong at
          problem-solving, collaborating with team environments, and delivering
          scalable, high-performance solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="grid sm:grid-cols-3 gap-4 text-sm"
      >
        <div className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm">
          <p className="text-xs font-medium text-primary/80 mb-1 uppercase">
            Focus
          </p>
          <p className="font-semibold text-slate-900">ERP &amp; Billing Systems</p>
          <p className="text-xs text-slate-500 mt-1">
            End-to-end modules for inventory, billing, and reporting.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm">
          <p className="text-xs font-medium text-primary/80 mb-1 uppercase">
            Backend
          </p>
          <p className="font-semibold text-slate-900">ASP.NET &amp; SQL Server</p>
          <p className="text-xs text-slate-500 mt-1">
            REST APIs, database design, and performance optimization.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm">
          <p className="text-xs font-medium text-primary/80 mb-1 uppercase">
            Deployment
          </p>
          <p className="font-semibold text-slate-900">Azure</p>
          <p className="text-xs text-slate-500 mt-1">
            Application hosting, configuration, and monitoring.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
