import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({ children, className = '', id = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Content moves slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  // Background effect moves in opposite direction
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <section 
      ref={ref} 
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Parallax Background Layer */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: bgY }}
      >
        {/* Gradient orb - top left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        {/* Gradient orb - bottom right */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Content with parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  )
}
