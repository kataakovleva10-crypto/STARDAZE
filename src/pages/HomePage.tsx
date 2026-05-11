import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { artists } from '../data/artists';
import { products, testimonials } from '../data/products';
import ProductCard from '../components/ProductCard';
import ArtistCard from '../components/ArtistCard';
import Newsletter from '../components/Newsletter';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HomePage() {
  const [scrollPos, setScrollPos] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { ref: trendingRef, isVisible: trendingVisible } = useScrollAnimation();
  const { ref: artistsRef, isVisible: artistsVisible } = useScrollAnimation();
  const { ref: bestRef, isVisible: bestVisible } = useScrollAnimation();
  const { ref: testRef, isVisible: testVisible } = useScrollAnimation();

  useEffect(() => {
    const onScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollCarousel = (dir: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  const trendingProducts = products.filter(p => p.isTrending);
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-black to-brand-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-neon/5 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-pink/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="absolute inset-0" style={{ transform: `translateY(${scrollPos * 0.3}px)` }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(177,140,255,0.03)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <Sparkles size={12} className="text-brand-neon" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">New Drops Weekly</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight animate-fade-up">
            <span className="text-gradient-silver">STAR</span>
            <span className="text-gradient">DAZE</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/40 font-light max-w-2xl mx-auto animate-fade-up stagger-2">
            Fan-inspired fashion for the culture obsessed.
            <br />
            <span className="text-white/60">Wear your fandom. Own your aesthetic.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Link to="/shop" className="btn-primary flex items-center gap-2">
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link to="/collections" className="btn-outline flex items-center gap-2">
              Explore Collections
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-white/20 animate-fade-up stagger-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white/60">50K+</p>
              <p className="text-[10px] uppercase tracking-wider mt-1">Happy Fans</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white/60">200+</p>
              <p className="text-[10px] uppercase tracking-wider mt-1">Products</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white/60">8</p>
              <p className="text-[10px] uppercase tracking-wider mt-1">Collections</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Shop by Artist */}
      <section ref={artistsRef} className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${artistsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-neon/60">Curated For You</span>
          <div className="flex items-end justify-between mt-2">
            <h2 className="section-heading">Shop by <span className="text-gradient">Artist</span></h2>
            <Link to="/collections" className="nav-link flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {artists.slice(0, 8).map((artist, i) => (
            <ArtistCard key={artist.id} artist={artist} index={i} />
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section ref={trendingRef} className="py-24 bg-brand-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`transition-all duration-700 ${trendingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-pink/60">Hot Right Now</span>
            <div className="flex items-end justify-between mt-2">
              <h2 className="section-heading">Trending <span className="text-gradient">Now</span></h2>
              <div className="flex gap-2">
                <button onClick={() => scrollCarousel(-1)} className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => scrollCarousel(1)} className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {trendingProducts.map((product, i) => (
              <div key={product.id} className="min-w-[260px] max-w-[260px] snap-start">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section ref={bestRef} className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${bestVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60">Fan Favorites</span>
          <div className="flex items-end justify-between mt-2">
            <h2 className="section-heading">Best <span className="text-gradient">Sellers</span></h2>
            <Link to="/shop" className="nav-link flex items-center gap-1">
              Shop All <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {bestSellers.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testRef} className="py-24 bg-brand-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`transition-all duration-700 ${testVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">What Fans Say</span>
            <h2 className="section-heading mt-2">Loved by the <span className="text-gradient">Community</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={t.id}
                className={`glass rounded-2xl p-6 transition-all duration-700 ${
                  testVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-white/60 leading-relaxed">"{t.text}"</p>
                <p className="mt-4 text-xs text-white/30 font-medium">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
