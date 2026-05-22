import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Simulate loading for smooth entry
    const timer = setTimeout(() => setIsLoading(false), 800)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-cream-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full border-4 border-blush-200 border-t-blush-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <FloatingShapes />
          <Navbar scrollY={scrollY} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
          <Analytics />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
