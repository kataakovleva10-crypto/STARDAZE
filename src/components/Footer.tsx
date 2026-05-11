import { Link } from 'react-router-dom';
import { Instagram, Twitter, Music, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-gradient">
              STARDAZE
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Fan-inspired fashion and lifestyle brand created for pop culture lovers.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Twitter, Music, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              {['All Products', 'Hoodies', 'Posters', 'Phone Cases', 'Stickers', 'Accessories'].map(item => (
                <Link key={item} to="/shop" className="text-sm text-white/40 hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Collections</h4>
            <div className="flex flex-col gap-2">
              {['Lady Gaga', 'Taylor Swift', 'Billie Eilish', 'Lana Del Rey', 'Charli XCX', 'Ariana Grande'].map(item => (
                <Link key={item} to="/collections" className="text-sm text-white/40 hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Shipping', to: '#' },
                { label: 'Returns', to: '#' },
                { label: 'Privacy Policy', to: '#' },
              ].map(item => (
                <Link key={item.label} to={item.to} className="text-sm text-white/40 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-white/30 leading-relaxed max-w-3xl">
            DISCLAIMER: This website sells unofficial fan-made inspired products and is not affiliated with or endorsed by any celebrity, management company, or official brand. All product designs are original creations inspired by pop culture and are not official merchandise.
          </p>
          <p className="text-xs text-white/20 mt-4">
            &copy; {new Date().getFullYear()} STARDAZE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
