import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { artists } from '../data/artists';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CollectionPage() {
  const { slug } = useParams();
  const artist = artists.find(a => a.slug === slug);
  const collectionProducts = products.filter(p => p.artistId === artist?.id);

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40">Collection not found</p>
          <Link to="/collections" className="btn-outline mt-4 inline-block text-sm">View All Collections</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className={`relative h-[60vh] min-h-[400px] flex items-end overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${artist.gradient}`} />
        <img
          src={artist.image}
          alt={artist.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/collections" className="hover:text-white transition-colors">Collections</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">{artist.name}</span>
          </nav>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{artist.mood}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-2">{artist.name}</h1>
          <p className="text-lg italic text-white/50 mt-2">{artist.tagline}</p>
          <p className="text-sm text-white/30 mt-4 max-w-lg">{artist.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold">
            {collectionProducts.length} <span className="text-gradient">Products</span>
          </h2>
        </div>

        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {collectionProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/30">No products in this collection yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}
