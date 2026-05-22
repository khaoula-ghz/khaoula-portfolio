import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

interface NavbarProps {
  scrollY: number
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ scrollY }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm shadow-blush-100/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-blush-500 group-hover:rotate-12 transition-transform" />
            <span className="font-serif text-xl font-semibold text-slate-800">
              Khaoula<span className="text-blush-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blush-600 rounded-full hover:bg-blush-50 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/khaoula-ghimouze-933b07410"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn-secondary text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/khaoula-ghz"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn-primary text-sm"
            >
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-blush-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-blush-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-blush-600 hover:bg-blush-50 rounded-xl transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/khaoula-ghz"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 mt-2 text-center btn-primary text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
