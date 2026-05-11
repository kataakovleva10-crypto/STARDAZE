import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Heart, ShoppingBag, Star, ChevronRight, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
import { products, reviews } from '../data/products';
import { artists } from '../data/artists';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40">Product not found</p>
          <Link to="/shop" className="btn-outline mt-4 inline-block text-sm">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const artist = artists.find(a => a.id === product.artistId);
  const productReviews = reviews.filter(r => r.productId === product.id);
  const related = products.filter(p => p.artistId === product.artistId && p.id !== product.id).slice(0, 4);
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight size={12} />
          {artist && (
            <>
              <Link to={`/collection/${artist.slug}`} className="hover:text-white transition-colors">{artist.name}</Link>
              <ChevronRight size={12} />
            </>
          )}
          <span className="text-white/60">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden glass">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === i ? 'border-brand-neon' : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {artist && (
              <Link
                to={`/collection/${artist.slug}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/40 hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: artist.accentColor }} />
                {artist.name} Collection
              </Link>
            )}

            <h1 className="font-display text-3xl md:text-4xl font-bold mt-3">{product.name}</h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-white/10'}
                  />
                ))}
              </div>
              <span className="text-sm text-white/40">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-bold text-gradient">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-white/30 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
              {product.originalPrice && (
                <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="mt-6 text-sm text-white/50 leading-relaxed">{product.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {product.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 glass rounded-full text-[10px] uppercase tracking-wider text-white/40">
                  {tag}
                </span>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-3 glass rounded-xl px-3 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-white/40 hover:text-white transition-colors">
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-white/40 hover:text-white transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product); }}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  wishlisted ? 'bg-brand-pink/20 text-brand-pink' : 'glass text-white/40 hover:text-white'
                }`}
              >
                <Heart size={20} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: Shield, label: 'Secure Payment' },
                { icon: RotateCcw, label: '30-Day Returns' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="glass rounded-xl p-3 text-center">
                  <Icon size={16} className="mx-auto text-white/30 mb-1.5" />
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-10">
              <div className="flex gap-6 border-b border-white/5">
                {(['description', 'reviews'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab ? 'text-white border-b-2 border-brand-neon' : 'text-white/30 hover:text-white/60'
                    }`}
                  >
                    {tab} {tab === 'reviews' && `(${productReviews.length})`}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {activeTab === 'description' ? (
                  <div className="space-y-4 text-sm text-white/50 leading-relaxed">
                    <p>{product.description}</p>
                    <p>Each piece is carefully designed and produced with premium materials. Our fan-inspired designs celebrate the artistry and aesthetic of pop culture icons while maintaining originality and quality.</p>
                    <p>All products are unofficial fan-made inspired items and are not affiliated with or endorsed by any celebrity or their management.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {productReviews.length > 0 ? productReviews.map(review => (
                      <div key={review.id} className="glass rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-brand-neon/20 flex items-center justify-center text-xs font-bold text-brand-neon">
                              {review.author[0]}
                            </div>
                            <span className="text-sm font-medium">{review.author}</span>
                          </div>
                          <div className="flex gap-0.5">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-white/50">{review.text}</p>
                        <p className="mt-2 text-[10px] text-white/20">{review.date}</p>
                      </div>
                    )) : (
                      <p className="text-white/30 text-sm">No reviews yet for this product.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold">You May Also <span className="text-gradient">Like</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
