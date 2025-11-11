import Hero from './components/Hero'
import WaitlistForm from './components/WaitlistForm'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-amber-500/30 selection:text-white">
      {/* Luxe Nav (darker, bolder) */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 via-rose-400 to-emerald-300 shadow-[inset_0_0_30px_rgba(255,255,255,0.25)] ring-2 ring-white/20" />
            <span className="font-black tracking-[0.4em] text-sm md:text-base">ISHTAR</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs text-white/70">
            <a href="#scent" className="hover:text-white transition">Scent</a>
            <a href="#ethos" className="hover:text-white transition">Ethos</a>
            <a href="#join" className="hover:text-white transition">Join</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Scent section: darker with heavy contrast */}
      <section id="scent" className="relative -mt-24 z-20 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_10%_0%,rgba(255,179,71,0.14),transparent),radial-gradient(800px_550px_at_100%_120%,rgba(77,255,192,0.1),transparent)]" />
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                <img src="https://images.unsplash.com/photo-1759156632043-eab44e007e67?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3RhbmljYWwlMjBpbmdyZWRpZW50c3xlbnwwfDB8fHwxNzYyODUyMTQ3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Botanical ingredients" className="h-full w-full object-cover scale-[1.02]" />
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Nature, distilled into night</h2>
              <p className="mt-4 text-white/75 text-lg leading-relaxed">
                Our alcohol‑free attar rests on sandalwood and luminous florals. Slow‑infused for hours, then weeks, until
                the oil breathes with your skin — intimate, enduring, unmistakably yours.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-white/75">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/>Alcohol‑free</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400"/>Vegan</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-400"/>Long‑lasting</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-300"/>Skin‑friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos cards (heavier glass, more contrast) */}
      <section id="ethos" className="relative py-28">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_450px_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Craft',
                text: 'Small‑batch, slow‑infused, and tuned for a sensuous dry‑down that feels like silk at dusk.'
              },
              {
                title: 'Purity',
                text: 'No alcohol. No parabens. Only botanical oils and absolutes — a ritual of care for skin and soul.'
              },
              {
                title: 'Design',
                text: 'A modern relic: warm glass, vintage atomizer, soft glow. Built to live on your vanity forever.'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.1 * i }}
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-8 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
              >
                <div className="pointer-events-none absolute -inset-1 opacity-25 blur-2xl" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(255,179,71,0.3), rgba(255,94,98,0.2), rgba(77,255,192,0.22), transparent)' }} />
                <h3 className="relative text-2xl font-black mb-3">{card.title}</h3>
                <p className="relative text-white/75 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="join" className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_550px_at_0%_100%,rgba(255,179,71,0.14),transparent),radial-gradient(1000px_650px_at_100%_50%,rgba(255,94,98,0.14),transparent)]" />
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Be first to smell Ishtar</h2>
              <p className="mt-4 text-white/75 text-lg">Join the waitlist for early access, launch drops, and limited pre‑release samples.</p>
            </div>
            <div>
              <WaitlistForm />
              <p className="mt-4 text-xs text-white/60">By joining you agree to receive product updates. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-10 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Ishtar. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
