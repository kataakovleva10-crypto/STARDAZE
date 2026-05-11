import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-charcoal/50 to-brand-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-neon/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-neon/60">Stay Connected</span>
        <h2 className="section-heading mt-3">Join the <span className="text-gradient">Inner Circle</span></h2>
        <p className="mt-4 text-white/40 text-sm leading-relaxed">
          Get early access to new drops, exclusive discounts, and curated playlists delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-8 glass rounded-2xl p-6 animate-fade-in">
            <p className="text-brand-neon font-medium">You're in! Welcome to the inner circle.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="input-field flex-1"
              required
            />
            <button type="submit" className="btn-primary flex items-center gap-2 shrink-0">
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
