import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-neon/60">Get in Touch</span>
        <h1 className="section-heading mt-2">Contact <span className="text-gradient">Us</span></h1>
        <p className="mt-3 text-white/40 text-sm max-w-lg">
          Have a question, suggestion, or just want to say hi? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-brand-neon/10 flex items-center justify-center mb-4">
                <Mail size={18} className="text-brand-neon" />
              </div>
              <h3 className="font-medium text-white">Email</h3>
              <p className="text-sm text-white/40 mt-1">hello@stardaze.co</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center mb-4">
                <MessageSquare size={18} className="text-brand-pink" />
              </div>
              <h3 className="font-medium text-white">Social</h3>
              <p className="text-sm text-white/40 mt-1">DM us on Instagram or Twitter</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-medium text-white mb-2">Response Time</h3>
              <p className="text-sm text-white/40">We typically respond within 24-48 hours.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-2xl p-12 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                <p className="text-sm text-white/40 mt-2">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="input-field mt-1.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="input-field mt-1.5"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="input-field mt-1.5"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="input-field mt-1.5 resize-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
