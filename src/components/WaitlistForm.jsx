import { useState } from 'react'

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
    <form onSubmit={submit} className="w-full max-w-xl space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/30 bg-white/70 backdrop-blur placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/30 bg-white/70 backdrop-blur placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
      <input
        type="text"
        placeholder="Preferred notes (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full rounded-xl border border-white/30 bg-white/70 backdrop-blur placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-semibold px-6 py-3 shadow-lg shadow-amber-600/30 transition"
      >
        {loading ? 'Joining…' : 'Join the Waitlist'}
      </button>
      {status.type && (
        <p className={status.type === 'success' ? 'text-green-700' : 'text-red-700'}>
          {status.message}
        </p>
      )}
    </form>
  )
}
