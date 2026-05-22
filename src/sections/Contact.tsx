import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Phone, Github, Send, Sparkles, Linkedin } from 'lucide-react'
import { SiHuggingface } from 'react-icons/si'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="contact" className="section-padding relative z-10 bg-white/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blush-500 font-medium text-sm tracking-wider uppercase">Get in Touch</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-800 mt-3 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blush-400 to-mauve-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-500 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-6">
                Contact <span className="text-blush-500">Information</span>
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:khaoulaghimouze@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-blush-50 hover:bg-blush-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blush-400 to-mauve-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium text-slate-700">khaoulaghimouze@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-mauve-50 hover:bg-mauve-100 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mauve-400 to-blush-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-slate-700">Constantine, Algeria</p>
                  </div>
                </div>
                <a
                  href="https://github.com/khaoula-ghz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage-400 to-cream-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">GitHub</p>
                    <p className="text-sm font-medium text-slate-700">github.com/khaoula-ghz</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/khaoula-ghimouze-933b07410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-cream-50 hover:bg-cream-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cream-400 to-blush-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">LiknedIn</p>
                    <p className="text-sm font-medium text-slate-700">linkedin.com/in/khaoula-ghimouze</p>
                  </div>
                </a>   
                <a
                  href="https://huggingface.co/khaoula-ghz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-blush-50 hover:bg-blush-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blush-400 to-mauve-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <SiHuggingface className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Hugging Face</p>
                    <p className="text-sm font-medium text-slate-700">huggingface.co/khaoula-ghz</p>
                  </div>
                </a>                              
              </div>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-2">
                Send a <span className="text-mauve-500">Message</span>
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Have a project in mind? Let's talk about it.
              </p>

              <form
                action="https://formspree.io/f/mbdboywk"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white/50 focus:border-blush-400 focus:ring-2 focus:ring-blush-100 outline-none transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white/50 focus:border-blush-400 focus:ring-2 focus:ring-blush-100 outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white/50 focus:border-blush-400 focus:ring-2 focus:ring-blush-100 outline-none transition-all text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-blush-50 rounded-xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blush-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500">
                  <strong className="text-slate-700">Tip:</strong> You can also reach me directly at{' '}
                  <a href="mailto:khaoulaghimouze@gmail.com" className="text-blush-600 hover:underline">
                    khaoulaghimouze@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
