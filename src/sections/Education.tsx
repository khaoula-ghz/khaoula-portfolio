import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, Award, BookOpen, ExternalLink } from 'lucide-react'

const educationData = [
  {
    degree: "Master's Degree in Data Science and Intelligent Systems",
    school: 'University of Constantine 2 — Abdelhamid Mehri',
    location: 'Algeria',
    period: '2023 – 2025',
    description: "My master's is where everything clicked. I went deep into NLP and spent most of it working on multilingual cyberbullying detection — fine-tuning transformer models across English, Arabic, and Algerian dialect, a language that barely has any public datasets.",
    icon: GraduationCap,
    color: 'bg-mauve-100 text-mauve-600',
    achievements: [
      'Built DZBullying from scratch — 4,008 annotated samples for a dialect rarely explored in NLP.',
      'Fine-tuned 10+ models including HateBERT, MARBERT, and DziriBERT across three languages',
      'Pushed performance further with contrastive learning, CNN-Transformer hybrids, and ensemble methods',
    ],
  },
  {
    degree: "Bachelor's Degree in Software Engineering",
    school: 'University of Constantine 2 — Abdelhamid Mehri',
    location: 'Algeria',
    period: '2020 – 2023',
    description: "Where I learned how to actually build things. Three years of algorithms, databases, and web development that gave me the engineering foundation I still rely on today.",
    icon: BookOpen,
    color: 'bg-blush-100 text-blush-600',
    achievements: [
      'Built a full-stack lab management system for my thesis — replaced a fully manual process',
      'Got comfortable with backend development, relational databases, and system design',
      'First time I realized I enjoyed turning messy problems into working software',
    ],
  },
]

const certifications = [
  { 
    name: 'AWS Academy Graduate – Cloud Foundations', 
    org: 'Amazon Web Services', 
    year: '2024', 
    icon: Award,
    link: 'https://www.credly.com/badges/1892c9e9-ec27-4420-83bd-1dc9f33fc6ad/public_url',
  },
  { 
    name: 'Discover Data Analysis', 
    org: 'Microsoft', 
    year: '2025', 
    icon: Award,
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/khaoulagh-9529/7K8FFGJZ?sharingId=21ADEEEB8F35805C',
  },
  { 
    name: 'Introduction to AI concepts', 
    org: 'Microsoft', 
    year: '2025', 
    icon: Award,
    link: 'https://learn.microsoft.com/api/achievements/share/fr-fr/KhaoulaGhimouze-2303/A4UTDSH7?sharingId=3BA1704747F59BC1',
  },
  { 
    name: 'Graphic Elements, Design Principels, Adobe illustrator and photoshop', 
    org: 'BENYANTECH', 
    year: '2023', 
    icon: Award,
  },
  { 
    name: 'Git and GitHub', 
    org: '365 Data Science', 
    year: '2021', 
    icon: Award,
    link: 'https://learn.365datascience.com/c/0e46cb55af/',
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="section-padding relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blush-500 font-medium text-sm tracking-wider uppercase">Academic Background</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-800 mt-3 mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blush-500" />
              Education
            </h3>
            <div className="space-y-8">
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="glass-card p-6 hover:shadow-xl hover:shadow-blush-100/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${edu.color} flex items-center justify-center shrink-0`}>
                      <edu.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-semibold text-slate-800 mb-1">{edu.degree}</h4>
                      <p className="text-sm text-blush-600 font-medium mb-1">{edu.school}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                      <p className="text-sm text-slate-500 mb-3 leading-relaxed">{edu.description}</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((ach, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                            <span className="w-1 h-1 rounded-full bg-blush-400 mt-1.5 shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-blush-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.link}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="glass-card p-5 flex items-center gap-4 hover:shadow-lg hover:shadow-blush-100/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blush-100 to-mauve-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cert.icon className="w-5 h-5 text-blush-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800 text-sm">{cert.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span>{cert.org}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blush-400 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 glass-card p-6"
            >
              <h4 className="font-serif text-lg font-semibold text-slate-800 mb-4">Languages</h4>
              <div className="space-y-3">
                {[
                  { lang: 'Arabic', level: 'Native', width: '100%' },
                  { lang: 'French', level: 'Full Professional Proficiency', width: '90%' },
                  { lang: 'English', level: 'Full Professional Proficiency', width: '90%' },
                ].map((lang, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-700">{lang.lang}</span>
                      <span className="text-xs text-slate-400">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-blush-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: lang.width } : {}}
                        transition={{ duration: 1, delay: 0.7 + i * 0.2 }}
                        className="h-full bg-gradient-to-r from-blush-400 to-mauve-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
