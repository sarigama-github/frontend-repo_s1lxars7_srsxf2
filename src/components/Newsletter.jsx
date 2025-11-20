import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="relative py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Keep in touch</p>
        <h3 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">Join our newsletter</h3>
        <p className="mt-3 text-slate-600">Occasional letters with studio news, early drops and private events.</p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-96 rounded-full border border-slate-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-emerald-600">Thanks for subscribing. Welcome to the studio.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-rose-600">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;