import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Brain, Cloud, Globe, Layers, ShieldCheck } from 'lucide-react'
import { Heading } from './Reveal'

const services = [
  [Globe, 'Web & Mobile Development', 'Fast, accessible web apps and mobile products built to scale.'],
  [Cloud, 'Cloud Solutions & DevOps', 'Resilient infrastructure and CI/CD pipelines that ship daily.'],
  [Brain, 'AI / ML & Automation', 'Intelligent features and automation that remove repetitive work.'],
  [ShieldCheck, 'Cybersecurity & System Protection', 'Threat modeling, audits and hardening for critical systems.'],
  [BarChart3, 'Data Engineering & Analytics', 'Pipelines and dashboards that turn raw data into decisions.'],
  [Layers, 'Product Engineering & Consulting', 'From idea to roadmap to launch with senior engineering guidance.'],
]

function spot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="wrap">
        <Heading eyebrow="Services" title="Everything you need to build and scale" text="Six practices working as one team, from first prototype to production." />
        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={{ show: { transition: { staggerChildren: 0.09 } } }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, title, text]) => (
            <motion.li key={title} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="list-none">
              <div onMouseMove={spot} className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition hover:border-cyan/40">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(47,111,228,.25), transparent 70%)' }} />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-brand text-white"><Icon size={22} aria-hidden="true" /></span>
                <h3 className="relative mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
                <a href="#contact" className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan">Discuss this <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
