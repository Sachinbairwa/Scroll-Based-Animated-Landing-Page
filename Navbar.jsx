import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [['About', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Impact', '#stats'], ['Testimonials', '#testimonials'], ['Contact', '#contact']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'glass bg-ink/70 py-2' : 'py-4'}`}>
      <motion.div role="progressbar" aria-label="Page scroll progress" style={{ scaleX }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brand to-cyan" />
      <div className="wrap flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-[0.18em] text-white" aria-label="Algoryx home"><Logo size={34} /> ALGORYX</a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="text-sm font-medium text-slate-300 transition hover:text-white">{l}</a>)}
        </nav>
        <a href="#contact" className="btn-primary hidden !py-2.5 md:inline-flex">Get in touch</a>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="wrap mt-3 flex flex-col gap-1 pb-3 md:hidden">
            {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10">{l}</a>)}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Get in touch</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
