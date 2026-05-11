import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, CreditCard, ArrowLeft, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useStore();
  const [step, setStep] = useState<'info' | 'payment' | 'confirm'>('info');
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', zip: '', country: '',
    cardNumber: '', expiry: '', cvc: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'info') setStep('payment');
    else if (step === 'payment') setStep('confirm');
    else {
      setOrderPlaced(true);
      clearCart();
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-400" />
          </div>
          <h1 className="font-display text-3xl font-bold">Order Confirmed!</h1>
          <p className="text-white/40 mt-3">Thank you for your purchase. Your order is on its way.</p>
          <Link to="/" className="btn-primary mt-8 inline-block">Back to Home</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40">Your cart is empty</p>
          <Link to="/shop" className="btn-outline mt-4 inline-block text-sm">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <h1 className="font-display text-3xl font-bold">Checkout</h1>

        {/* Steps */}
        <div className="flex items-center gap-4 mt-8 mb-10">
          {(['info', 'payment', 'confirm'] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step === s ? 'bg-white text-black' : (['info', 'payment', 'confirm'].indexOf(step) > i ? 'bg-green-500 text-white' : 'glass text-white/30')
              }`}>
                {i + 1}
              </div>
              <span className={`text-sm capitalize ${step === s ? 'text-white' : 'text-white/30'}`}>{s}</span>
              {i < 2 && <div className="w-12 h-px bg-white/10" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 'info' && (
                <div className="glass rounded-2xl p-6 space-y-5 animate-fade-in">
                  <h2 className="font-semibold text-lg">Contact Information</h2>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider">Email</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="input-field mt-1.5" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider">First Name</label>
                      <input type="text" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="input-field mt-1.5" required />
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider">Last Name</label>
                      <input type="text" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="input-field mt-1.5" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider">Address</label>
                    <input type="text" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="input-field mt-1.5" required />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider">City</label>
                      <input type="text" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="input-field mt-1.5" required />
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider">ZIP</label>
                      <input type="text" value={form.zip} onChange={e => setForm({ ...form, zip: e.target.value })} className="input-field mt-1.5" required />
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider">Country</label>
                      <input type="text" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} className="input-field mt-1.5" required />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full">Continue to Payment</button>
                </div>
              )}

              {step === 'payment' && (
                <div className="glass rounded-2xl p-6 space-y-5 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <CreditCard size={18} className="text-brand-neon" />
                    <h2 className="font-semibold text-lg">Payment</h2>
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider">Card Number</label>
                    <input type="text" value={form.cardNumber} onChange={e => setForm({ ...form, cardNumber: e.target.value })} placeholder="4242 4242 4242 4242" className="input-field mt-1.5" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider">Expiry</label>
                      <input type="text" value={form.expiry} onChange={e => setForm({ ...form, expiry: e.target.value })} placeholder="MM/YY" className="input-field mt-1.5" required />
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider">CVC</label>
                      <input type="text" value={form.cvc} onChange={e => setForm({ ...form, cvc: e.target.value })} placeholder="123" className="input-field mt-1.5" required />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <Lock size={12} />
                    <span>Your payment information is encrypted and secure</span>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep('info')} className="btn-outline flex-1">Back</button>
                    <button type="submit" className="btn-primary flex-1">Review Order</button>
                  </div>
                </div>
              )}

              {step === 'confirm' && (
                <div className="glass rounded-2xl p-6 space-y-5 animate-fade-in">
                  <h2 className="font-semibold text-lg">Order Summary</h2>
                  <div className="space-y-3">
                    {cart.map(item => (
                      <div key={item.product.id} className="flex items-center gap-3">
                        <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate">{item.product.name}</p>
                          <p className="text-xs text-white/30">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep('payment')} className="btn-outline flex-1">Back</button>
                    <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-2">
                      <Lock size={14} /> Place Order — ${cartTotal.toFixed(2)}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Sidebar */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 sticky top-28">
              <h3 className="font-semibold mb-4">Your Order</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <img src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-white/30">x{item.quantity}</p>
                    </div>
                    <span className="text-sm">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-white/5">
                  <span>Total</span>
                  <span className="text-gradient">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
