import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'IT Department Intern',
    company: 'Algeria Post Office',
    location: 'Constantine, Algeria',
    period: 'Feb – Mar 2025',
    description: [
      'Assisted in managing network infrastructure including switches, routers, and IP/MAC addressing',
      'Performed basic system administration within an enterprise environment',
      'Gained hands-on experience with enterprise IT operations and network security',
    ],
    icon: Briefcase,
    color: 'bg-blush-100 text-blush-600',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="experience" className="section-padding relative z-10 bg-white/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blush-500 font-medium text-sm tracking-wider uppercase">My Journey</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-800 mt-3 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush-300 to-mauve-300 rounded-full" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-3 sm:left-5 top-2 w-7 h-7 rounded-full ${exp.color} flex items-center justify-center shadow-lg`}>
                <exp.icon className="w-4 h-4" />
              </div>

              <div className="glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-blush-100/50 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-serif text-xl font-semibold text-slate-800">{exp.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium bg-blush-100 text-blush-700 rounded-full">
                    Internship
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-blush-400" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blush-400" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blush-400" />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blush-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
