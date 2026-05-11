import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import type { Product } from '../data/products';

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const wishlisted = isInWishlist(product.id);

  return (
    <div
      className="product-card opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2 py-0.5 bg-brand-neon/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
              New
            </span>
          )}
          {product.isTrending && (
            <span className="px-2 py-0.5 bg-brand-pink/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
              Trending
            </span>
          )}
          {product.originalPrice && (
            <span className="px-2 py-0.5 bg-red-500/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
              Sale
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              wishlisted
                ? 'bg-brand-pink text-white'
                : 'glass text-white/60 hover:text-white'
            }`}
          >
            <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <Eye size={16} />
          </Link>
        </div>

        {/* Add to cart overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => addToCart(product)}
            className="w-full py-2.5 bg-white text-black text-sm font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-neon hover:text-white transition-colors duration-300"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-white/10'}
              />
            ))}
          </div>
          <span className="text-[10px] text-white/30">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-semibold text-white">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-white/30 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
