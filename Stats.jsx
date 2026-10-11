import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

const stats = [[120, '+', 'Projects delivered'], [45, '+', 'Engineers and designers'], [98, '%', 'Client satisfaction'], [12, '', 'Countries served']]

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: (n) => setV(Math.round(n)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}{suffix}</span>
}

export default function Stats() {
  return (
    <section id="stats" aria-label="Algoryx in numbers" className="py-16">
      <div className="wrap">
        <motion.dl initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="glass grid grid-cols-2 gap-8 rounded-3xl bg-gradient-to-br from-navy/30 to-transparent p-8 md:grid-cols-4 md:p-12">
          {stats.map(([n, s, l]) => (
            <motion.div key={l} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="flex flex-col-reverse text-center">
              <dt className="mt-2 text-sm text-slate-400">{l}</dt>
              <dd className="text-grad text-4xl font-extrabold md:text-5xl"><Counter to={n} suffix={s} /></dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
