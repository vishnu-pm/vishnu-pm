import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    period: 'Jan 2023 - Present',
    description: [
      'Architected and developed scalable ERP modules handling 10,000+ daily transactions',
      'Designed REST APIs with ASP.NET Core, reducing response time by 40%',
      'Implemented SQL Server database optimization, improving query performance by 60%',
      'Led team of 3 developers in billing system overhaul',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd.',
    location: 'Bangalore, India',
    period: 'Jun 2021 - Dec 2022',
    description: [
      'Developed end-to-end billing and inventory management system using ASP.NET MVC',
      'Created responsive UI with HTML5, CSS3, and JavaScript',
      'Integrated third-party payment gateways and APIs',
      'Deployed applications on Azure App Service with CI/CD pipelines',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    location: 'Bangalore, India',
    period: 'Jan 2020 - May 2021',
    description: [
      'Built web applications using ASP.NET Framework and C#',
      'Wrote SQL queries and stored procedures for data management',
      'Participated in code reviews and agile development cycles',
      'Debugged and resolved production issues',
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Experience
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 border-l-2 border-primary/30 pb-8"
          >
            <div className="absolute -left-3.5 top-0 w-6 h-6 rounded-full bg-primary border-4 border-slate-50" />

            <div className="mb-2 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <FiCalendar size={16} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMapPin size={16} />
                <span>{exp.location}</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-1">
              {exp.title}
            </h3>
            <p className="text-primary font-medium mb-3 flex items-center gap-2">
              <FiBriefcase size={16} />
              {exp.company}
            </p>

            <ul className="space-y-2">
              {exp.description.map((point, i) => (
                <li key={i} className="text-slate-600 text-sm flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
