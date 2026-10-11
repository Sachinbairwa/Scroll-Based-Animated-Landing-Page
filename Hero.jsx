import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react'
import Logo from './Logo'

const dots = Array.from({ length: 16 }, (_, i) => ({ left: `${(i * 37) % 97}%`, top: `${(i * 53) % 90}%`, delay: `${(i % 7) * 0.8}s`, s: 3 + (i % 3) * 2 }))

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const k = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches ? 1 : 0
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200 * k])
  const midY = useTransform(scrollYProgress, [0, 1], [0, 80 * k])
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -130 * k])

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <motion.div style={{ y: bgY }} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-navy/50 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan/20 blur-[120px]" />
        {dots.map((d, i) => <span key={i} className="drift absolute rounded-full bg-cyan" style={{ left: d.left, top: d.top, width: d.s, height: d.s, animationDelay: d.delay }} />)}
      </motion.div>
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
            <span className="h-2 w-2 rounded-full bg-cyan" /> Next-generation digital solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }} className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Build. Innovate. <span className="text-grad">Deliver. Impact.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.15 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Algoryx Technologies builds intelligent systems and high-performance platforms that solve real-world problems, scalable, secure and efficient for modern businesses.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.3 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Start a project <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#projects" className="btn-ghost">View our work</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.1 }} className="relative mx-auto flex w-full max-w-md items-center justify-center py-10" aria-hidden="true">
          <motion.div style={{ y: midY }} className="glass relative flex aspect-square w-4/5 items-center justify-center rounded-[2.5rem] shadow-2xl shadow-brand/20">
            <div className="absolute inset-6 rounded-[2rem] border border-cyan/20" />
            <div className="float"><Logo size={150} /></div>
          </motion.div>
          <motion.div style={{ y: fastY }} className="absolute left-0 top-4 sm:-left-6"><div className="glass float flex items-center gap-2 rounded-2xl bg-ink/60 px-4 py-3 text-sm font-semibold text-white"><Cpu size={16} className="text-cyan" /> AI-powered</div></motion.div>
          <motion.div style={{ y: fastY }} className="absolute bottom-2 right-0 sm:-right-6"><div className="glass float flex items-center gap-2 rounded-2xl bg-ink/60 px-4 py-3 text-sm font-semibold text-white" style={{ animationDelay: '1.5s' }}><ShieldCheck size={16} className="text-cyan" /> Secure by design</div></motion.div>
          <motion.div style={{ y: midY }} className="absolute -top-2 right-10"><div className="glass float flex items-center gap-2 rounded-2xl bg-ink/60 px-4 py-3 text-sm font-semibold text-white" style={{ animationDelay: '3s' }}><Zap size={16} className="text-cyan" /> Fast</div></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
