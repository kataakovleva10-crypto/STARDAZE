import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { artists } from '../data/artists';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArtist, setSelectedArtist] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedArtist !== 'All') {
      result = result.filter(p => p.artistId === selectedArtist);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [search, selectedCategory, selectedArtist, sortBy]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-neon/60">Browse</span>
          <h1 className="section-heading mt-2">The <span className="text-gradient">Shop</span></h1>
          <p className="mt-3 text-white/40 text-sm">Curated fan-inspired pieces for every aesthetic.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              className="input-field pl-11"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                <X size={14} />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="input-field w-auto sm:w-44 cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low</option>
            <option value="price-high">Price: High</option>
            <option value="rating">Top Rated</option>
          </select>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`btn-outline flex items-center gap-2 ${showFilters ? 'border-brand-neon/50 text-brand-neon' : ''}`}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="glass rounded-2xl p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        selectedCategory === cat
                          ? 'bg-white text-black'
                          : 'glass text-white/50 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-3">Artist</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedArtist('All')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedArtist === 'All' ? 'bg-white text-black' : 'glass text-white/50 hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  {artists.map(a => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedArtist(a.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        selectedArtist === a.id ? 'bg-white text-black' : 'glass text-white/50 hover:text-white'
                      }`}
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {(selectedCategory !== 'All' || selectedArtist !== 'All') && (
              <button
                onClick={() => { setSelectedCategory('All'); setSelectedArtist('All'); }}
                className="mt-4 text-xs text-brand-neon hover:text-white transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="text-xs text-white/30 mb-6">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/30">No products found matching your criteria.</p>
            <button
              onClick={() => { setSearch(''); setSelectedCategory('All'); setSelectedArtist('All'); }}
              className="btn-outline mt-4 text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
