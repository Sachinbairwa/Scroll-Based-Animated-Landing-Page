import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Heading } from './Reveal'

const items = [
  { name: 'Priya Sharma', role: 'Head of Product, Finlytics', text: 'Algoryx shipped our platform in six weeks. Conversion rose 38% and the codebase was a joy for our team to inherit.' },
  { name: 'Daniel Reyes', role: 'Founder, Northwind Labs', text: 'The cleanest handover we have had from any vendor. Documented, fast and genuinely thoughtful engineering.' },
  { name: 'Meera Kapoor', role: 'CTO, Orbit Health', text: 'Their DevOps work cut our deployment time to minutes and the security review caught issues we had missed for years.' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const go = (n) => { setDir(n); setI((v) => (v + n + items.length) % items.length) }
  const t = items[i]
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="wrap">
        <Heading eyebrow="Testimonials" title="Trusted by teams that ship" />
        <div className="mx-auto mt-14 max-w-3xl" role="region" aria-roledescription="carousel" aria-label="Customer testimonials">
          <div className="relative min-h-[17rem] overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure key={i} initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -60 }} transition={{ duration: 0.35 }} aria-live="polite" className="glass rounded-3xl p-8 md:p-12">
                <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={18} className="fill-cyan text-cyan" />)}</div>
                <blockquote className="mt-5 text-lg leading-relaxed text-white md:text-xl">“{t.text}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy to-cyan font-bold text-white">{t.name.split(' ').map((w) => w[0]).join('')}</span>
                  <span><span className="block font-semibold text-white">{t.name}</span><span className="text-sm text-slate-400">{t.role}</span></span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="glass flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10"><ChevronLeft size={20} /></button>
            <div className="flex gap-2">{items.map((x, n) => <button key={x.name} type="button" onClick={() => { setDir(n > i ? 1 : -1); setI(n) }} aria-label={`Show testimonial ${n + 1}`} aria-current={n === i} className={`h-2.5 rounded-full transition-all ${n === i ? 'w-8 bg-cyan' : 'w-2.5 bg-white/20'}`} />)}</div>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="glass flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
