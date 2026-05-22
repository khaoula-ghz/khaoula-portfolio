import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Globe, Database, BarChart3 } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const highlights = [
    {
      icon: Brain,
      title: 'NLP Expertise',
      desc: 'Deep knowledge in transformer architectures, fine-tuning strategies, and ensemble methods for text classification.',
    },
    {
      icon: Globe,
      title: 'Multilingual Focus',
      desc: 'Specialized in Arabic, Algerian Darija, and English NLP — bridging gaps in low-resource language AI.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      desc: 'Proficient in SQL, data cleaning, and building pipelines for analysis and machine learning workflows.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      desc: 'Experienced with Power BI, Tableau, and Python for creating dashboards and data-driven reports.',
    },
  ]

  return (
    <section id="about" className="section-padding relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blush-500 font-medium text-sm tracking-wider uppercase">Get to know me</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-800 mt-3 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 sm:p-10">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-6">
                Data Scientist with a passion for <span className="text-blush-500">NLP</span> 
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm a Data Scientist with a focus on NLP — particularly in low-resource language settings like Algerian dialect.
                  My master's thesis focused on cyberbullying detection across English, Arabic, 
                  and Algerian Darija using transformer-based hybrid models.
                </p>
                <p>
                  I fine-tuned and evaluated <strong className="text-slate-700">10+ transformer models</strong> including BERT, RoBERTa, 
                  HateBERT, AraBERT, MARBERT, and DziriBERT, achieving an F1 score of <strong className="text-slate-700">95.55%</strong> on English text.
                </p>
                <p>
                  I also built <strong className="text-slate-700">DZBullying</strong>, an original 4,008-sample annotated dataset 
                  for Algerian dialect cyberbullying detection — one of the first of its kind.
                </p>
                <p>
                  Beyond NLP, I bring strong data analytics skills with Power BI, Tableau, SQL, and Python 
                  for building dashboards and analysis reports that drive decision-making.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass-card p-6 hover:shadow-xl hover:shadow-blush-100/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blush-100 to-mauve-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-blush-600" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
