import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Gauge, Lock, Rocket, Target } from 'lucide-react'
import { Reveal } from './Reveal'

const pillars = [
  [Target, 'Data-driven strategy', 'Every decision is backed by measurable outcomes.'],
  [Rocket, 'Engineering excellence', 'Clean architecture and code that ships with confidence.'],
  [Lock, 'Secure by default', 'Security is designed in from the first line, not bolted on.'],
  [Gauge, 'Built for performance', 'Efficient systems that stay fast as you scale.'],
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 60])
  return (
    <section id="about" ref={ref} className="py-24 md:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <Reveal x={-50} y={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">About Algoryx</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">Technology that solves real problems</h2>
          <p className="mt-5 leading-relaxed text-slate-400">Algoryx is a technology company focused on next-generation digital solutions, intelligent systems and high-performance platforms. We combine innovation, engineering excellence and data-driven strategy to deliver scalable, secure and efficient products.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map(([Icon, t, d]) => (
              <li key={t} className="glass rounded-2xl p-5 transition hover:border-cyan/40">
                <Icon size={20} className="text-cyan" aria-hidden="true" />
                <h3 className="mt-3 font-semibold text-white">{t}</h3>
                <p className="mt-1 text-sm text-slate-400">{d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal x={50} y={0}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md" aria-hidden="true">
            <motion.div style={{ y: y1 }} className="absolute inset-x-6 top-0 h-3/5 rounded-3xl bg-gradient-to-br from-navy to-brand shadow-2xl shadow-brand/30"><div className="grid-bg absolute inset-0 rounded-3xl" /></motion.div>
            <motion.div style={{ y: y2 }} className="glass absolute bottom-0 left-0 right-12 rounded-3xl bg-ink/70 p-6">
              <p className="text-xs uppercase tracking-widest text-cyan">Our approach</p>
              <p className="mt-2 text-lg font-semibold text-white">Know the problem. Build the right thing. Ship it well.</p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand to-cyan" /></div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
