import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, x = 0, y = 28, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function Heading({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-slate-400">{text}</p>}
    </Reveal>
  )
}
