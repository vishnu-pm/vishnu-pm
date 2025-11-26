import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    icon: FiCode,
    title: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS'],
  },
  {
    icon: FiServer,
    title: 'Backend',
    skills: ['ASP.NET MVC', 'C#', 'REST APIs', 'Entity Framework', 'LINQ'],
  },
  {
    icon: FiDatabase,
    title: 'Database',
    skills: ['SQL Server', 'Database Design', 'Query Optimization', 'Stored Procedures'],
  },
  {
    icon: FiTool,
    title: 'Tools & Platforms',
    skills: ['Azure', 'Git', 'Visual Studio', 'Postman', 'Docker'],
  },
];

export const Skills = () => (
  <section id="skills" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Skills
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-primary text-2xl" />
                <h3 className="font-semibold text-slate-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-slate-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
