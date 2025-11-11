import Hero from './components/Hero'
import WaitlistForm from './components/WaitlistForm'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-emerald-900/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 shadow-inner" />
            <span className="font-black tracking-widest text-xl">ISHTAR</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-emerald-900/70">
            <a href="#scent" className="hover:text-emerald-900">Scent</a>
            <a href="#ethos" className="hover:text-emerald-900">Ethos</a>
            <a href="#join" className="hover:text-emerald-900">Join</a>
          </nav>
        </div>
      </header>

      {/* Hero with 3D */}
      <Hero />

      {/* Content sections */}
      <section id="scent" className="relative -mt-24 z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-emerald-900/10">
                <img src="https://images.unsplash.com/photo-1759156632043-eab44e007e67?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3RhbmljYWwlMjBpbmdyZWRpZW50c3xlbnwwfDB8fHwxNzYyODUyMTQ3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Botanical ingredients" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Nature, distilled with devotion</h2>
              <p className="mt-4 text-emerald-900/80 text-lg leading-relaxed">
                Our non‑alcoholic attar is built on a base of sandalwood and ethically sourced florals.
                Each note is slow‑infused to create a long‑lasting, intimate projection that sits close to the skin.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-emerald-900/80">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Alcohol‑free</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500"/>Vegan</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500"/>Long‑lasting</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-700"/>Skin‑friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="ethos" className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/0 via-emerald-50 to-emerald-50/0" />
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Craft',
                text: 'Small‑batch, slow‑infused, and thoughtfully balanced for a sensuous dry‑down.'
              },
              {
                title: 'Purity',
                text: 'No alcohol, no parabens. Just botanical oils and absolutes you can feel good about.'
              },
              {
                title: 'Design',
                text: 'A timeless silhouette with playful warmth — a keepsake object made to live on your vanity.'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.1 * i }}
                className="rounded-3xl bg-white/70 backdrop-blur p-8 ring-1 ring-emerald-900/10 shadow-xl"
              >
                <h3 className="text-2xl font-black mb-3">{card.title}</h3>
                <p className="text-emerald-900/80 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="join" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/60 via-rose-100/40 to-emerald-100/60" />
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Be first to smell Ishtar</h2>
              <p className="mt-4 text-emerald-900/80 text-lg">Join the waitlist for early access, launch drops, and limited pre‑release samples.</p>
            </div>
            <div>
              <WaitlistForm />
              <p className="mt-4 text-xs text-emerald-900/60">By joining you agree to receive product updates. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-900/10">
        <div className="container mx-auto px-6 py-10 text-sm text-emerald-900/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Ishtar. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-900">Instagram</a>
            <a href="#" className="hover:text-emerald-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
