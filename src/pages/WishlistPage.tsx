import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-pink/60">Your Favorites</span>
        <h1 className="section-heading mt-2">Wish<span className="text-gradient">list</span></h1>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={48} className="mx-auto text-white/10 mb-4" />
            <p className="text-white/30">Your wishlist is empty</p>
            <Link to="/shop" className="btn-outline mt-4 inline-block text-sm">Browse Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {wishlistProducts.map((product, i) => (
              <div key={product.id} className="product-card opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative aspect-square overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </Link>
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="w-9 h-9 bg-brand-pink rounded-full flex items-center justify-center text-white"
                    >
                      <Heart size={16} fill="currentColor" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-white/90 truncate">{product.name}</h3>
                  <span className="text-sm font-semibold text-white mt-1 block">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full py-2 bg-white text-black text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 hover:bg-brand-neon hover:text-white transition-colors"
                  >
                    <ShoppingBag size={12} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
