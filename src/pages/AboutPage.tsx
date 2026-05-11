import { Sparkles, Heart, Palette, Globe } from 'lucide-react';
import Newsletter from '../components/Newsletter';

export default function AboutPage() {
  const values = [
    { icon: Sparkles, title: 'Original Designs', desc: 'Every piece is an original fan-inspired creation, designed with passion and attention to detail.' },
    { icon: Heart, title: 'Community First', desc: 'Built by fans, for fans. We understand the culture because we are the culture.' },
    { icon: Palette, title: 'Aesthetic Obsessed', desc: 'We don\'t just make merch — we craft aesthetic experiences that elevate your personal style.' },
    { icon: Globe, title: 'Global Fandom', desc: 'Shipping worldwide to pop culture lovers in over 50 countries.' },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/50 to-brand-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-neon/60">Our Story</span>
          <h1 className="section-heading mt-3">About <span className="text-gradient">STARDAZE</span></h1>
          <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            A fan-inspired fashion and lifestyle brand created for pop culture lovers.
          </p>
          <p className="mt-4 text-white/30 leading-relaxed max-w-2xl mx-auto">
            We believe that fandom is more than just liking an artist — it's a lifestyle, an aesthetic, a way of expressing who you are. STARDAZE was born from the desire to create premium, design-forward products that let you wear your fandom with style.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div key={v.title} className="glass rounded-2xl p-6 hover-glow opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="w-12 h-12 rounded-xl bg-brand-neon/10 flex items-center justify-center mb-4">
                <v.icon size={20} className="text-brand-neon" />
              </div>
              <h3 className="font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 bg-brand-charcoal/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            We don't follow trends.<br />
            <span className="text-gradient">We create them.</span>
          </h2>
          <p className="mt-6 text-white/40 leading-relaxed max-w-xl mx-auto">
            STARDAZE is where pop culture meets premium design. Every collection is a love letter to the artists who shape our world — reimagined through the lens of modern fashion and aesthetic culture.
          </p>
          <p className="mt-4 text-xs text-white/20">
            All products are unofficial fan-made inspired items and are not affiliated with or endorsed by any celebrity or their management.
          </p>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
