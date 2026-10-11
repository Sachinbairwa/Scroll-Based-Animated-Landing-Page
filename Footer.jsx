import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Logo from './Logo'

const nav = [['About', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Testimonials', '#testimonials'], ['Contact', '#contact']]
const social = [[Linkedin, 'LinkedIn', 'https://www.linkedin.com'], [Github, 'GitHub', 'https://github.com'], [Twitter, 'Twitter', 'https://twitter.com']]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="wrap grid gap-10 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-[0.18em] text-white" aria-label="Algoryx home"><Logo size={32} /> ALGORYX</a>
          <p className="mt-4 max-w-xs text-sm text-slate-400">Building the future with code and intelligence.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">{nav.map(([l, h]) => <li key={h}><a href={h} className="text-slate-400 transition hover:text-white">{l}</a></li>)}</ul>
        </nav>
        <div>
          <h2 className="font-semibold text-white">Connect</h2>
          <p className="mt-4 flex items-center gap-2 text-sm"><Mail size={16} aria-hidden="true" /> hr@algoryx.in</p>
          <ul className="mt-4 flex gap-3">
            {social.map(([Icon, label, href]) => <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:scale-110 hover:text-cyan"><Icon size={18} /></a></li>)}
          </ul>
        </div>
      </div>
      <p className="wrap mt-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Algoryx Technologies. All rights reserved.</p>
    </footer>
  )
}
