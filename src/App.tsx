/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  Plus, 
  Minus, 
  X, 
  Sparkles, 
  Truck, 
  Heart,
  Instagram,
  Twitter,
  Facebook,
  Menu,
  ChevronRight,
  Send
} from 'lucide-react';
import { Product, CartItem, Category, OrderStatus } from './types';
import { PRODUCTS, CATEGORIES } from './constants';

// --- Components ---

const Navbar = ({ cartCount, onOpenCart, onOpenTrack }: { cartCount: number, onOpenCart: () => void, onOpenTrack: () => void }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-macaron-pink border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Heart className="w-6 h-6 fill-black" />
          </div>
          <span className="font-display text-2xl font-black uppercase tracking-tighter hidden sm:block">Velvet Season</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase text-sm">
          <a href="#shop" className="hover:text-macaron-pink transition-colors">Shop</a>
          <button onClick={onOpenTrack} className="hover:text-macaron-lavender transition-colors cursor-pointer uppercase">Track</button>
          <a href="#story" className="hover:text-macaron-blue transition-colors">Story</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 border-4 border-black bg-white hover:bg-macaron-blue transition-all shadow-[2px_2px_0px_0px_black] active:shadow-none translate-y-[-2px] active:translate-y-[2px]">
          <Search className="w-6 h-6" />
        </button>
        <button 
          onClick={onOpenCart}
          className="relative p-2 border-4 border-black bg-white hover:bg-macaron-lavender transition-all shadow-[2px_2px_0px_0px_black] active:shadow-none translate-y-[-2px] active:translate-y-[2px]"
        >
          <ShoppingBag className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-3 -right-3 w-6 h-6 bg-macaron-pink border-4 border-black rounded-full flex items-center justify-center text-[10px] font-black">
              {cartCount}
            </span>
          )}
        </button>
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative px-6 py-20 bg-macaron-blue/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl leading-none">
              Velvet <br />
              <span className="bg-macaron-pink px-4 border-4 border-black inline-block mt-2">Season</span><br />
              Is Here
            </h1>
          </motion.div>
          <p className="text-xl font-medium max-w-lg">
            Premium handcrafted velvet bouquets that nunca fade. Soft colors hand-picked for every sweet moment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#shop" className="brutalist-button py-4 px-8 text-lg bg-macaron-pink">
              Discover the Blooms <ChevronRight className="inline-block ml-2 w-6 h-6" />
            </a>
            <div className="bg-macaron-yellow border-4 border-black p-4 brutalist-card rotate-[-2deg] flex items-center gap-4">
               <div>
                 <p className="font-display font-black text-3xl">10k+</p>
                 <p className="text-[10px] font-bold uppercase">Blooms Tied</p>
               </div>
               <div className="w-[2px] h-10 bg-black" />
               <div>
                 <p className="font-display font-black text-3xl">50+</p>
                 <p className="text-[10px] font-bold uppercase">Unique Colors</p>
               </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
           <motion.div 
             initial={{ rotate: 10, scale: 0.8, opacity: 0 }}
             animate={{ rotate: 5, scale: 1, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full relative z-10 brutalist-card aspect-[4/5] bg-macaron-lavender flex items-center justify-center p-8 overflow-hidden"
           >
              <img 
                src="https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1200" 
                alt="Velvet Flowers"
                className="w-full h-full object-cover grayscale transition-all hover:grayscale-0"
              />
              <div className="absolute inset-0 border-8 border-black pointer-events-none" />
              <div className="absolute top-4 left-4 bg-white border-4 border-black p-2 font-display font-black uppercase text-sm">
                Eternal Blooms
              </div>
           </motion.div>
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-macaron-pink border-4 border-black rounded-full -z-0 hidden lg:block" />
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-macaron-yellow border-4 border-black rotate-12 -z-0 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap border-y-4 border-black">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-20 font-display font-black uppercase text-xl"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center gap-4">
            Hand-twisted in Austin <Sparkles className="w-5 h-5 text-macaron-yellow" /> 
            Velvet Pipe Cleaners <Sparkles className="w-5 h-5 text-macaron-pink" /> 
            Everlasting Blooms <Sparkles className="w-5 h-5 text-macaron-blue" />
            Ships Worldwide
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: (p: Product) => void, key?: string }) => {
  const bgColorMap = {
    pink: 'bg-macaron-pink',
    lavender: 'bg-macaron-lavender',
    blue: 'bg-macaron-blue',
    yellow: 'bg-macaron-yellow',
    green: 'bg-macaron-green'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="brutalist-card group overflow-hidden"
    >
      <div className={`relative aspect-square overflow-hidden border-b-4 border-black ${bgColorMap[product.color]}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white border-4 border-black px-3 py-1 font-display font-black text-xs uppercase">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl leading-tight">{product.name}</h3>
          <span className="font-display font-black text-xl">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-700 line-clamp-2">
          {product.description}
        </p>
        <div className="flex gap-2">
          <button 
            onClick={() => onAddToCart(product)}
            className="flex-1 brutalist-button py-2 bg-macaron-blue flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" /> Add
          </button>
          <button className="p-2 border-4 border-black hover:bg-macaron-pink transition-all">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  
  // Tracking State
  const [orderId, setOrderId] = useState('');
  const [trackingResult, setTrackingResult] = useState<OrderStatus | null>(null);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'ALL') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleTrack = () => {
    if (!orderId) return;
    // Mock tracking logic
    const statuses: OrderStatus[] = ['Handcrafting', 'Quality Check', 'Shipped'];
    setTrackingResult(statuses[Math.floor(Math.random() * statuses.length)]);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenTrack={() => setIsTrackOpen(true)}
      />
      
      <main className="flex-grow">
        <Hero />
        <Marquee />

        {/* Shop Section */}
        <section id="shop" className="px-6 py-24 max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-6xl">Velvet Stand</h2>
               <p className="text-xl text-gray-600 max-w-md italic">Pick your favorite handmade beauties.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`brutalist-button px-4 py-2 text-sm shadow-[2px_2px_0px_0px_black] hover:shadow-[4px_4px_0px_0px_black] ${
                    activeCategory === cat ? 'bg-macaron-blue border-black' : 'bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <div className="brutalist-card overflow-hidden rotate-[-2deg]">
                  <img src="https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&q=80" alt="Process" />
               </div>
               <div className="absolute -bottom-8 -right-8 brutalist-card bg-macaron-blue p-6 w-48 text-center rotate-[4deg]">
                   <p className="font-display font-black text-xl">HAND-TWISTED</p>
                   <p className="text-xs font-bold">In Our Austin Studio</p>
               </div>
            </div>
            <div className="space-y-8">
               <h2 className="text-5xl">Our Story</h2>
               <p className="text-xl leading-relaxed">
                  It started with a single pipe cleaner and a vision of flowers that could last as long as the memories they create. 
                  Every petal you see is handcrafted with intention. We use premium velvet-finish materials to ensure a tactile experience as soft as it looks.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 border-4 border-black bg-macaron-pink">
                     <h4 className="text-xl">Eco-Friendly</h4>
                     <p className="text-sm">Never wilts, zero waste.</p>
                  </div>
                  <div className="p-6 border-4 border-black bg-white">
                     <h4 className="text-xl">Artisanal</h4>
                     <p className="text-sm">100% human-made.</p>
                  </div>
               </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <h2 className="text-4xl italic">Velvet Season</h2>
            <p className="text-gray-600 max-w-md">
               Crafting everlasting joy through velvet. Based in Austin, shipping world-wide to flower lovers.
            </p>
            <div className="flex gap-4">
               <button className="w-12 h-12 border-4 border-black flex items-center justify-center hover:bg-macaron-pink transition-colors"><Instagram /></button>
               <button className="w-12 h-12 border-4 border-black flex items-center justify-center hover:bg-macaron-blue transition-colors"><Twitter /></button>
               <button className="w-12 h-12 border-4 border-black flex items-center justify-center hover:bg-macaron-lavender transition-colors"><Facebook /></button>
            </div>
          </div>
          <div className="space-y-4">
             <h4 className="border-b-4 border-black pb-2">Shop</h4>
             <ul className="space-y-2 font-bold uppercase text-sm">
                <li><a href="#" className="hover:underline">All Products</a></li>
                <li><a href="#" className="hover:underline">Single Blooms</a></li>
                <li><a href="#" className="hover:underline">Gift Bundles</a></li>
                <li><a href="#" className="hover:underline">Custom Orders</a></li>
             </ul>
          </div>
          <div className="space-y-4">
             <h4 className="border-b-4 border-black pb-2">Happiness</h4>
             <ul className="space-y-2 font-bold uppercase text-sm">
                <li><a href="#" className="hover:underline">Shipping Policy</a></li>
                <li><a href="#" className="hover:underline">Care Guide</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-black uppercase">
           <p>© 2024 Velvet Season. Art That Lasts.</p>
           <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
           </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      
      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l-4 border-black z-[70] flex flex-col pt-24"
            >
              <div className="absolute top-6 left-6 flex items-center gap-4">
                 <button onClick={() => setIsCartOpen(false)} className="p-2 border-4 border-black hover:bg-macaron-pink transition-colors">
                   <X className="w-6 h-6" />
                 </button>
                 <h2 className="text-3xl uppercase">Your Basket</h2>
              </div>

              <div className="flex-grow overflow-y-auto px-6 py-8 space-y-6">
                 {cart.length === 0 ? (
                   <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                     <ShoppingBag className="w-16 h-16" />
                     <p className="font-display font-bold uppercase">Empty as a winter garden</p>
                     <button onClick={() => setIsCartOpen(false)} className="brutalist-button text-xs py-2">Start Shopping</button>
                   </div>
                 ) : (
                   cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 border-4 border-black bg-macaron-blue/10">
                      <img src={item.image} className="w-20 h-20 object-cover border-4 border-black" />
                      <div className="flex-grow space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm">{item.name}</h4>
                          <span className="font-black">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border-2 border-black">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-macaron-pink"><Minus className="w-4 h-4" /></button>
                            <span className="px-3 font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-macaron-green"><Plus className="w-4 h-4" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                   ))
                 )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t-4 border-black space-y-4 bg-macaron-pink/10">
                  <div className="flex justify-between text-2xl font-black">
                     <span>Total</span>
                     <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full brutalist-button bg-macaron-lavender py-5 text-xl">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Track Dialog */}
      <AnimatePresence>
        {isTrackOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/60"
               onClick={() => setIsTrackOpen(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-white border-4 border-black p-10 z-10 space-y-8"
            >
              <button 
                onClick={() => setIsTrackOpen(false)}
                className="absolute top-4 right-4 p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="space-y-4">
                <h2 className="text-4xl">Order Journey</h2>
                <p className="text-gray-600 font-medium italic">Witness the status of your handcrafted gift.</p>
              </div>

              <div className="space-y-6">
                 <div className="flex gap-4">
                   <input 
                     type="text" 
                     placeholder="Enter Order ID (e.g. VS-9921)"
                     value={orderId}
                     onChange={(e) => setOrderId(e.target.value)}
                     className="flex-grow brutalist-input uppercase font-black"
                   />
                   <button 
                     onClick={handleTrack}
                     className="brutalist-button py-2 bg-macaron-blue"
                   >
                     Track
                   </button>
                 </div>

                 {trackingResult && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="p-8 bg-macaron-green/20 border-4 border-black space-y-6"
                   >
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center">
                            <Truck className="w-6 h-6" />
                         </div>
                         <div>
                            <p className="text-xs uppercase font-black opacity-50">Current Status</p>
                            <p className="text-xl uppercase font-black">{trackingResult}</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-2 h-4 w-full border-2 border-black p-1 overflow-hidden">
                         <div className={`h-full border-r-2 border-black bg-black ${['Processing', 'Handcrafting', 'Quality Check', 'Shipped'].includes(trackingResult) ? 'w-1/4' : 'w-0'}`} />
                         <div className={`h-full border-r-2 border-black bg-black ${['Handcrafting', 'Quality Check', 'Shipped'].includes(trackingResult) ? 'w-1/4' : 'w-0'}`} />
                         <div className={`h-full border-r-2 border-black bg-black ${['Quality Check', 'Shipped'].includes(trackingResult) ? 'w-1/4' : 'w-0'}`} />
                         <div className={`h-full bg-black ${trackingResult === 'Shipped' ? 'w-1/4' : 'w-0'}`} />
                      </div>
                   </motion.div>
                 )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

