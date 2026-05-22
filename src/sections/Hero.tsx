import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, MapPin } from 'lucide-react'
import { SiHuggingface } from 'react-icons/si'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blush-100 text-blush-700 rounded-full text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-blush-500 rounded-full animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-800 mb-6 leading-tight"
        >
          Khaoula{' '}
          <span className="gradient-text italic">Ghimouze</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-light mb-4"
        >
          Data Scientist & NLP Engineer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build multilingual NLP systems, fine-tune large language models, and turn raw data into decisions.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-slate-500 mb-10"
        >
          <MapPin className="w-4 h-4 text-blush-500" />
          <span className="text-sm">Constantine, Algeria</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary flex items-center gap-2">
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/khaoula-ghz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://huggingface.co/khaoula-ghz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <SiHuggingface className="w-4 h-4" />
              Hugging Face
          </a>
          <a
            href="mailto:khaoulaghimouze@gmail.com"
            className="btn-secondary flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-blush-300 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-blush-500 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
