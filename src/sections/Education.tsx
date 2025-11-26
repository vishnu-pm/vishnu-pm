import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Indian Institute of Technology',
    location: 'Delhi, India',
    year: '2016 - 2020',
    gpa: '3.8/4.0',
    highlights: ['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering'],
  },
  {
    degree: 'Advanced Diploma in Web Development',
    institution: 'National Institute of Technology',
    location: 'Bangalore, India',
    year: '2015 - 2016',
    gpa: '9.2/10',
    highlights: ['Full Stack Development', 'ASP.NET', 'JavaScript', 'Database Design'],
  },
  {
    degree: 'Certification - Azure Developer Associate',
    institution: 'Microsoft',
    location: 'Online',
    year: '2022',
    gpa: 'Passed',
    highlights: ['Azure App Service', 'Azure SQL Database', 'Azure DevOps', 'Cloud Architecture'],
  },
];

export const Education = () => (
  <section id="education" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Education
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-lg border border-slate-200 bg-gradient-to-r from-blue-50/50 to-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <FiAward className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium text-sm">{edu.institution}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-primary bg-blue-100 px-3 py-1 rounded-full">
                {edu.gpa}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4 ml-9">
              <div className="flex items-center gap-1">
                <FiCalendar size={16} />
                <span>{edu.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMapPin size={16} />
                <span>{edu.location}</span>
              </div>
            </div>

            <div className="ml-9">
              <p className="text-xs font-medium text-slate-700 mb-2 uppercase">
                Key Courses
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-block px-2.5 py-1 rounded-full text-xs bg-slate-200 text-slate-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
