import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import { SiHuggingface } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blush-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-semibold text-slate-800">
              Khaoula<span className="text-blush-500">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/khaoula-ghz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blush-50 text-blush-600 hover:bg-blush-100 hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
            href="https://huggingface.co/khaoula-ghz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blush-50 text-blush-600 hover:bg-blush-100 hover:scale-110 transition-all"
          >
            <SiHuggingface className="w-4 h-4" />
              
            </a>
            <a
              href="https://www.linkedin.com/in/khaoula-ghimouze-933b07410"
              className="p-2 rounded-full bg-blush-50 text-blush-600 hover:bg-blush-100 hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:khaoulaghimouze@gmail.com"
              className="p-2 rounded-full bg-blush-50 text-blush-600 hover:bg-blush-100 hover:scale-110 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-blush-500 fill-blush-500" /> by Khaoula 
          </p>
        </div>
      </div>
    </footer>
  )
}
