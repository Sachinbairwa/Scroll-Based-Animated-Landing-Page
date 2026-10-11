import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Globe, Loader2, Mail, Send } from 'lucide-react'
import { Reveal } from './Reveal'

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (!v.subject.trim()) e.subject = 'Please add a subject.'
  if (!v.message.trim()) e.message = 'Please write a message.'
  else if (v.message.trim().length < 20) e.message = 'Message must be at least 20 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const change = (k) => (ev) => {
    const next = { ...values, [k]: ev.target.value }
    setValues(next)
    if (errors[k]) setErrors({ ...errors, [k]: validate(next)[k] })
  }
  const submit = (ev) => {
    ev.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) { setStatus('idle'); return }
    setStatus('sending')
    setTimeout(() => { setStatus('sent'); setValues(empty) }, 1200)
  }
  const cls = (k) => `mt-1.5 w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/30 ${errors[k] ? 'border-red-400' : 'border-white/10'}`
  const field = (k, label, type = 'text') => (
    <div>
      <label htmlFor={k} className="text-sm font-medium text-white">{label} <span aria-hidden="true">*</span></label>
      <input id={k} name={k} type={type} value={values[k]} onChange={change(k)} aria-required="true" aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} className={cls(k)} />
      {errors[k] && <p id={`${k}-err`} role="alert" className="mt-1 text-sm text-red-400">{errors[k]}</p>}
    </div>
  )
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-5">
        <Reveal x={-40} y={0} className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">Let’s build what’s next</h2>
          <p className="mt-4 text-slate-400">Tell us about your project and we’ll get back to you quickly.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Mail size={18} className="text-cyan" aria-hidden="true" /><a href="mailto:hr@algoryx.in" className="hover:text-white">hr@algoryx.in</a></li>
            <li className="flex items-center gap-3"><Globe size={18} className="text-cyan" aria-hidden="true" /><a href="https://www.algoryx.in" target="_blank" rel="noopener noreferrer" className="hover:text-white">www.algoryx.in</a></li>
          </ul>
        </Reveal>
        <Reveal x={40} y={0} className="lg:col-span-3">
          <form noValidate onSubmit={submit} aria-label="Contact form" className="glass space-y-5 rounded-3xl p-6 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">{field('name', 'Name')}{field('email', 'Email', 'email')}</div>
            {field('subject', 'Subject')}
            <div>
              <label htmlFor="message" className="text-sm font-medium text-white">Message <span aria-hidden="true">*</span></label>
              <textarea id="message" name="message" rows="5" value={values.message} onChange={change('message')} aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} className={cls('message')} />
              {errors.message && <p id="message-err" role="alert" className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
              {status === 'sending' ? <><Loader2 size={16} className="spin" aria-hidden="true" /> Sending…</> : <>Send message <Send size={16} aria-hidden="true" /></>}
            </button>
            <AnimatePresence>
              {status === 'sent' && (
                <motion.p role="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 rounded-xl bg-cyan/10 p-4 font-medium text-cyan">
                  <CheckCircle2 size={20} aria-hidden="true" /> Thank you! Your message has been sent.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
