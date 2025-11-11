import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/70" />

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center rounded-full bg-emerald-700/10 text-emerald-900 px-3 py-1 text-xs font-semibold backdrop-blur"
        >
          Non‑Alcoholic Attar • Coming Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-5xl md:text-7xl font-black leading-tight tracking-tight text-emerald-950"
        >
          ISHTAR
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-500 to-emerald-600"> Attar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 max-w-xl text-emerald-900/80 text-lg md:text-xl"
        >
          A modern homage to timeless ritual. Crafted without alcohol for a soft, enduring aura.
        </motion.p>
      </div>
    </section>
  )
}
