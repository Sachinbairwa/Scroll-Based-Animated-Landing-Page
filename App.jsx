import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Logo from './components/Logo'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && (
          <motion.div key="loader" role="status" aria-label="Loading Algoryx" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ink">
            <Logo size={64} />
            <span className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.span initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 0.9, ease: 'easeInOut' }} className="block h-full w-full bg-gradient-to-r from-brand to-cyan" />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
