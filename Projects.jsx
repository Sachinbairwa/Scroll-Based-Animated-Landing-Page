import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Cloud, Globe, ShieldCheck } from 'lucide-react'
import { Heading } from './Reveal'

const icons = { Web: Globe, AI: Bot, Cloud, Security: ShieldCheck }
const projects = [
  { name: 'Nimbus Commerce', cat: 'Web', text: 'Headless storefront with sub-second page loads and a custom checkout.', tags: ['React', 'Node'], g: 'from-navy to-brand' },
  { name: 'Cortex Assistant', cat: 'AI', text: 'Support copilot that resolves routine tickets and escalates the rest.', tags: ['LLM', 'Python'], g: 'from-brand to-cyan' },
  { name: 'Atlas Pipeline', cat: 'Cloud', text: 'Zero-downtime CI/CD platform cutting release time from hours to minutes.', tags: ['Docker', 'AWS'], g: 'from-navy to-cyan' },
  { name: 'Sentinel Shield', cat: 'Security', text: 'Continuous monitoring dashboard with automated threat response.', tags: ['SIEM', 'Zero Trust'], g: 'from-slate-700 to-brand' },
  { name: 'Orbit Mobile', cat: 'Web', text: 'Cross-platform field-service app that works fully offline.', tags: ['React Native', 'Sync'], g: 'from-brand to-navy' },
  { name: 'Pulse Analytics', cat: 'AI', text: 'Forecasting engine turning sales data into weekly action plans.', tags: ['ML', 'Dashboards'], g: 'from-cyan to-brand' },
]
const filters = ['All', 'Web', 'AI', 'Cloud', 'Security']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.cat === filter)
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="wrap">
        <Heading eyebrow="Projects" title="Selected work" text="A snapshot of the kinds of products we build. Sample projects shown for demonstration." />
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${filter === f ? 'bg-brand text-white' : 'glass text-slate-300 hover:text-white'}`}>{f}</button>
          ))}
        </div>
        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => {
              const Icon = icons[p.cat]
              return (
                <motion.li key={p.name} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35 }} whileHover={{ y: -8 }} className="glass group list-none overflow-hidden rounded-3xl">
                  <div aria-hidden="true" className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${p.g}`}>
                    <div className="grid-bg absolute inset-0" />
                    <Icon size={56} className="relative text-white/90 transition duration-500 group-hover:scale-125" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-cyan">{p.cat}</span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{p.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{p.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</li>)}</ul>
                  </div>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
