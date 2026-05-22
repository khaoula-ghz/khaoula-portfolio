import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Star, GitFork, BookOpen, Brain, Database, Cloud, BarChart3, Layers } from 'lucide-react'

type Project = {
  title: string
  category: string
  repo: string
  tableauLink?: string
  description: string
  tags: string[]
  icon: React.ElementType
  color: string
  bgColor: string
  stats: { stars: number; forks: number }
  highlights: string[]
}

const FILTERS = ['All', 'NLP & AI', 'Machine Learning', 'Data Analytics', 'SQL', 'Cloud & IoT']

const projectsData: Project[] = [
  {
    title: 'Cyberbullying Detection (Thesis)',
    category: 'NLP & AI',
    repo: 'khaoula-ghz/multilingual-cyberbullying-detection',
    description: 'Cyberbullying detection across English, Arabic, and Algerian Darija using Transformer-based hybrid models, contrastive learning, and ensemble methods.',
    tags: ['NLP', 'Transformers', 'Ensemble Learning', 'CNN', 'BERT', 'RoBERTa', 'HateBERT', 'AraBERT', 'MARBERT', 'DziriBERT', 'Contrastive Learning'],
    icon: BookOpen,
    color: 'from-blush-400 to-mauve-400',
    bgColor: 'bg-blush-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      'F1: 95.55% (EN), 68.31% (AR), 85.84% (DZ)',
      'Built DZBullying dataset (4,008 samples)',
      '10+ transformer models fine-tuned',
    ],
  },
  {
    title: 'QLoRA TinyLlama Fine-Tuning',
    category: 'NLP & AI',
    repo: 'khaoula-ghz/qlora-tinyllama-finetune',
    description: 'Fine-tuning TinyLlama-1.1B-Chat on guanaco-llama2-5k with 4-bit QLoRA using PEFT, TRL, and BitsAndBytes.',
    tags: ['LLM', 'QLoRA', 'PEFT', 'Fine-tuning', 'HuggingFace', 'Generative AI'],
    icon: Brain,
    color: 'from-mauve-400 to-blush-400',
    bgColor: 'bg-mauve-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      'Perplexity: 4.56',
      'BERTScore F1: 0.85',
      'LLM-as-Judge evaluation',
    ],
  },
  {
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    repo: 'khaoula-ghz/customer-churn-prediction',
    description: 'Customer churn prediction using XGBoost, LightGBM, and CatBoost with ensemble methods and Optuna hyperparameter tuning.',
    tags: ['Machine Learning', 'XGBoost', 'LightGBM', 'CatBoost', 'Optuna', 'Classification'],
    icon: BarChart3,
    color: 'from-cream-500 to-blush-400',
    bgColor: 'bg-cream-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      'Ensemble of 3 gradient boosting frameworks',
      'Optuna hyperparameter optimization',
      'Comprehensive model comparison',
    ],
  },
  {
    title: 'Smart Home IoT Monitoring',
    category: 'Cloud & IoT',
    repo: 'khaoula-ghz/smart-home-iot-monitoring',
    description: 'Smart home environmental monitoring using ESP32, MQTT, AWS IoT Core, Lambda, DynamoDB, Docker, ECS Fargate, and CloudWatch.',
    tags: ['IoT', 'AWS', 'MQTT', 'Docker', 'ESP32', 'Cloud Computing', 'Lambda'],
    icon: Cloud,
    color: 'from-sage-400 to-cream-400',
    bgColor: 'bg-sage-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      'Full cloud & IoT pipeline',
      'Real-time environmental monitoring',
      'AWS ECS Fargate deployment',
    ],
  },
  {
    title: 'Data Professionals Survey — Power BI',
    category: 'Data Analytics',
    repo: 'khaoula-ghz/data-professionals-survey-powerbi',
    description: '4-page Power BI report analyzing ~630 data professionals survey responses covering compensation, job satisfaction, and demographics.',
    tags: ['Power BI', 'DAX', 'Data Visualization', 'Survey Analysis', 'Business Intelligence'],
    icon: BarChart3,
    color: 'from-blush-300 to-cream-400',
    bgColor: 'bg-blush-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      '4-page interactive dashboard',
      'DAX measures & calculated columns',
      'Dynamic KPI tracking',
    ],
  },
  {
    title: 'Tech Layoffs SQL Analysis',
    category: 'SQL',
    repo: 'khaoula-ghz/layoffs-sql-analysis',
    description: 'End-to-end SQL project cleaning and analyzing global tech layoffs dataset with window functions, CTEs, and advanced queries.',
    tags: ['SQL', 'MySQL', 'Data Cleaning', 'Window Functions', 'EDA'],
    icon: Database,
    color: 'from-mauve-300 to-blush-300',
    bgColor: 'bg-mauve-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      'Duplicates removal & standardization',
      'NULL handling & data cleaning',
      'Advanced window functions',
    ],
  },
  {
    title: 'Free-to-Paid Conversion SQL',
    category: 'SQL',
    repo: 'khaoula-ghz/free-to-paid-conversion-sql',
    description: 'SQL + Python analysis of free-to-paid conversion rates on an e-learning platform measuring student activation and purchase timing.',
    tags: ['SQL', 'Python', 'Conversion Rate', 'Data Analysis', 'MySQL'],
    icon: Layers,
    color: 'from-cream-400 to-sage-400',
    bgColor: 'bg-cream-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      'Multi-table SQL analysis',
      'Student activation speed metrics',
      'Purchase timing insights',
    ],
  },
  {
    title: 'New York City Airbnb Dashboard',
    category: 'Data Analytics',
    repo: '',
    tableauLink: 'https://public.tableau.com/app/profile/khaoula.ghimouze/viz/NewYorkAirbnbMarketAnalysis_17787032613360/Sheet1',
    description: 'Interactive Tableau dashboard analyzing NYC Airbnb listings across geography, pricing, occupancy, and revenue — uncovering where listings cluster, how prices distribute, and which neighborhoods generate the most estimated revenue.',
    tags: ['Tableau', 'Data Visualization', 'Real Estate', 'Dashboard', 'EDA'],
    icon: BarChart3,
    color: 'from-blush-400 to-cream-500',
    bgColor: 'bg-blush-50',
    stats: { stars: 0, forks: 0 },
    highlights: [
      'Geographic distribution of listings and prices across NYC neighborhoods',
      'Price distribution analysis and room type pricing comparison',
      'Occupancy rates and estimated revenue breakdown by neighborhood',
    ],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === active)

  return (
    <section id="projects" className="section-padding relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-blush-500 font-medium text-sm tracking-wider uppercase">Featured Work</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-800 mt-3 mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto">
            A collection of my work spanning NLP, machine learning, data analytics, cloud computing, and IoT.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === filter
                  ? 'bg-blush-500 border-blush-500 text-white shadow-md shadow-blush-100'
                  : 'bg-white border-blush-200 text-slate-500 hover:border-blush-400 hover:text-blush-500'
              }`}
            >
              {filter}
              {filter !== 'All' && (
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  active === filter
                    ? 'bg-white/20 text-white'
                    : 'bg-blush-50 text-blush-400'
                }`}>
                  {projectsData.filter(p => p.category === filter).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:shadow-xl hover:shadow-blush-100/50 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-blush-400">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1 text-xs">
                      <Star className="w-3.5 h-3.5" /> {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <GitFork className="w-3.5 h-3.5" /> {project.stats.forks}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2 group-hover:text-blush-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className={`${project.bgColor} rounded-xl p-3 mb-4`}>
                  <ul className="space-y-1">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 5).map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs font-medium bg-blush-50 text-blush-600 rounded-full border border-blush-100"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2.5 py-1 text-xs font-medium text-slate-400">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.repo && (
                    <a
                      href={`https://github.com/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blush-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.tableauLink && (
                    <a
                      href={project.tableauLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blush-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Dashboard
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/khaoula-ghz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}