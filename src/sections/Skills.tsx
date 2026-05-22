import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, BarChart3, Cloud, Wrench, Languages } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming & ML',
    color: 'from-blush-100 to-blush-50',
    iconColor: 'text-blush-600',
    skills: [
      'Python (NumPy, Pandas, Scikit-learn)',
      'PyTorch & TensorFlow',
      'SQL & HTML/CSS',
      'Jupyter, Google Colab, VS Code',
    ],
  },
  {
    icon: Languages,
    title: 'NLP & Transformers',
    color: 'from-mauve-100 to-mauve-50',
    iconColor: 'text-mauve-600',
    skills: [
      'BERT, RoBERTa, HateBERT, BERTweet',
      'AraBERT, MARBERT, QARiB, DziriBERT',
      'QLoRA, LoRA, PEFT',
      'Contrastive Learning, Ensemble Methods',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    color: 'from-cream-200 to-cream-100',
    iconColor: 'text-cream-700',
    skills: [
      'Power BI (DAX, Power Query)',
      'Tableau & Excel Dashboards',
      'Matplotlib, Seaborn, EDA',
      'Statistical Analysis',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Big Data',
    color: 'from-sage-100 to-sage-50',
    iconColor: 'text-sage-600',
    skills: [
      'AWS Cloud Foundations',
      'Docker Fundamentals',
      'Hadoop & Apache Spark Basics',
      'AWS IoT Core, Lambda, DynamoDB',
    ],
  },
  {
    icon: Database,
    title: 'Tools & Platforms',
    color: 'from-blush-50 to-mauve-50',
    iconColor: 'text-blush-500',
    skills: [
      'Hugging Face Hub & Transformers',
      'Optuna Hyperparameter Tuning',
      'Git/GitHub Version Control',
      'LaTeX Documentation',
    ],
  },
  {
    icon: Wrench,
    title: 'Soft Skills',
    color: 'from-cream-100 to-blush-50',
    iconColor: 'text-cream-600',
    skills: [
      'Research & Problem Solving',
      'Technical Writing',
      'Cross-cultural Communication',
      'Project Management',
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding relative z-10 bg-white/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blush-500 font-medium text-sm tracking-wider uppercase">My Toolkit</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-800 mt-3 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 hover:shadow-xl hover:shadow-blush-100/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-6 h-6 ${category.iconColor}`} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blush-400 mt-2 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
