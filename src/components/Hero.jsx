import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-[#0B0B0F]">
      {/* Deep space gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,179,71,0.18),transparent),radial-gradient(900px_500px_at_90%_20%,rgba(255,94,98,0.12),transparent),radial-gradient(700px_500px_at_60%_120%,rgba(77,255,192,0.08),transparent)]" />

      {/* Shimmering grain for luxe texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette and glass veil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/60"
            initial={{ opacity: 0, x: Math.random() * 1200, y: Math.random() * 800, scale: Math.random() * 0.8 + 0.4 }}
            animate={{ opacity: [0, 1, 0], y: ["0%", "-40%", "-80%"], x: ["0%", "20%", "40%"], scale: [1, 1.2, 1] }}
            transition={{ duration: 12 + Math.random() * 10, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 4 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white/80 shadow-lg shadow-black/30"
        >
          Alcohol‑Free Attar • Pre‑Launch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-[56px] leading-[1.05] md:text-[84px] font-black tracking-tight text-white"
        >
          ISHTAR
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-emerald-300 drop-shadow-[0_2px_30px_rgba(255,179,71,0.25)]">
            The Oil of Eternal Evening
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-5 max-w-2xl text-white/80 text-lg md:text-xl leading-relaxed"
        >
          A velvet‑dark composition that glows from within — sandalwood warmth, sun‑kissed petals, and a whisper of spice.
          Crafted without alcohol for a skin‑true aura that lingers like a memory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur shadow-lg shadow-black/40"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          Hand‑poured. Small batch. Waitlist now open.
        </motion.div>
      </div>
    </section>
  )
}
