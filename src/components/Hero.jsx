import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-[#070709]">
      {/* Deep space gradient backdrop (darker, bolder) */}
      <div className="absolute inset-0 bg-[radial-gradient(1400px_700px_at_20%_-10%,rgba(255,179,71,0.20),transparent),radial-gradient(1000px_600px_at_90%_10%,rgba(255,94,98,0.16),transparent),radial-gradient(900px_600px_at_60%_120%,rgba(77,255,192,0.12),transparent)]" />

      {/* Dense grain for luxe texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Strong vignette and darker veil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.75))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Floating particles (slightly brighter, fewer but larger) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white/70"
            initial={{ opacity: 0, x: Math.random() * 1200, y: Math.random() * 900, scale: Math.random() * 0.9 + 0.6 }}
            animate={{ opacity: [0, 1, 0], y: ["0%", "-45%", "-90%"], x: ["0%", "18%", "36%"], scale: [1, 1.25, 1] }}
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
          className="inline-flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
          ALCOHOL‑FREE • PRE‑LAUNCH
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-[64px] leading-[1.02] md:text-[96px] font-black tracking-[0.16em] text-white"
        >
          ISHTAR
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-emerald-300 drop-shadow-[0_0_30px_rgba(255,179,71,0.35)]">
            The Oil of Eternal Evening
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-5 max-w-2xl text-white/85 text-lg md:text-xl leading-relaxed"
        >
          Velvet‑dark. Skin‑true. A glow from within — sandalwood warmth, sun‑kissed petals, a whisper of spice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white/85 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          Hand‑poured. Small batch. Waitlist now open.
        </motion.div>
      </div>
    </section>
  )
}
