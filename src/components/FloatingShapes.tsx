import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Blob 1 */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-blush-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-mauve-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-cream-300/40 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Small decorative circles */}
      <motion.div
        className="absolute top-40 right-20 w-4 h-4 bg-blush-300/50 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-60 left-20 w-3 h-3 bg-mauve-300/50 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-5 h-5 bg-cream-400/50 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
    </div>
  )
}
