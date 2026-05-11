import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useStore();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setCartOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-charcoal/95 backdrop-blur-xl border-l border-white/5 z-50 flex flex-col animate-slide-in">
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-brand-neon" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <span className="text-sm text-white/40">({cartCount})</span>
          </div>
          <button onClick={() => setCartOpen(false)} className="p-1 text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
            <ShoppingBag size={48} className="text-white/10" />
            <p className="text-white/40">Your cart is empty</p>
            <button onClick={() => setCartOpen(false)} className="btn-outline text-sm">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map(item => (
                <div key={item.product.id} className="flex gap-4 glass rounded-xl p-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.product.name}</h3>
                    <p className="text-sm text-brand-neon mt-1">${item.product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 glass rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 glass rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-white/20 hover:text-red-400 transition-colors self-start"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Subtotal</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-white/5">
                <span>Total</span>
                <span className="text-gradient">${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setCartOpen(false)}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Checkout <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
