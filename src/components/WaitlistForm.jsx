import { useState } from 'react'
import { motion } from 'framer-motion'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [status, setStatus] = useState({ type: null, message: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: null, message: '' })

    if (!email || !name) {
      setStatus({ type: 'error', message: 'Please enter your name and email.' })
      return
    }

    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, note })
      })

      if (!res.ok) throw new Error('Failed to join waitlist')

      setStatus({ type: 'success', message: 'You are on the list. We will be in touch soon ✨' })
      setName(''); setEmail(''); setNote('')
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl space-y-3"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/40 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/40 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        />
      </div>
      <input
        type="text"
        placeholder="Preferred notes (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full rounded-xl border border-white/15 bg-black/40 text-white placeholder-white/40 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
      />
      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-black text-white ring-1 ring-white/15 px-6 py-3 font-semibold shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition focus:outline-none disabled:opacity-60"
      >
        <span className="absolute inset-0 bg-[radial-gradient(600px_200px_at_0%_50%,rgba(255,179,71,0.35),transparent_70%),radial-gradient(600px_200px_at_100%_50%,rgba(77,255,192,0.35),transparent_70%)] opacity-60" />
        <span className="absolute inset-0 -translate-x-full bg-white/10 transition group-hover:translate-x-0" />
        <span className="relative">{loading ? 'Joining…' : 'Join the Waitlist'}</span>
      </button>
      {status.type && (
        <p className={status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}>
          {status.message}
        </p>
      )}
    </motion.form>
  )
}
