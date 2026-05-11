import casegaga2 from '../assets/casegaga2.jpg'
import hoodie_gaga from '../assets/hoodie_gaga.jfif'
import postergaga from '../assets/postergaga.jpg'
import hoodietaylor from '../assets/hoodietaylor.jpg'
import stickertaylor from '../assets/stickertaylor.jpg'
import totebag from '../assets/totebag.jpg'
import sourposter from '../assets/sourposter.jpg'
import gutsolivia from '../assets/gutsolivia.jpg'
import brutalmug from '../assets/brutalmug.jpg'
import lanaprint from '../assets/lanaprint.jpg'
import nfrlana from '../assets/nfrlana.jpg'
import lanatote from '../assets/lanatote.jpg'
import hoodiebillie from '../assets/hoodiebillie.jpg'
import laptopskin from '../assets/laptopskin.jpg'
import billiesticker from '../assets/billiesticker.jpg'
import justinhoodie from '../assets/justinhoodie.jpg'
import phonecasejustin from '../assets/phonecasejustin.jpg'
import mugbib from '../assets/mugbib.jpg'
import brathoodie from '../assets/brathoodie.jpg'
import charliesticker from '../assets/charliesticker.jpg'
import crashposter from '../assets/crashposter.jpg'
import arianacase from '../assets/arianacase.jpg'
import keyariana from '../assets/keyariana.jpg'
import grandeposter from '../assets/grandeposter.jpg'
import vinylariana from '../assets/vinylariana.jpg'
export interface Product {
  id: string;
  name: string;
  artistId: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  tags: string[];
  isNew?: boolean;
  isTrending?: boolean;
  isBestSeller?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const products: Product[] = [
  // Lady Gaga
  {
    id: 'lg-hoodie-01', name: 'Born This Way Oversized Hoodie', artistId: 'lady-gaga', category: 'hoodies',
    price: 68.00, originalPrice: 85.00, rating: 4.9, reviews: 234,
    image: hoodie_gaga, images: [hoodie_gaga],
    description: 'Premium oversized hoodie featuring bold Born This Way inspired graphics. Heavyweight cotton blend with a relaxed streetwear fit.',
    tags: ['oversized', 'streetwear', 'bold'], isNew: true, isTrending: true, isBestSeller: true,
  },
  {
    id: 'lg-poster-01', name: 'Chromatica Art Print', artistId: 'lady-gaga', category: 'posters',
    price: 28.00, rating: 4.8, reviews: 156,
    image: postergaga, images: [postergaga],
    description: 'Museum-quality giclée print on archival paper. Chromatica-inspired abstract art with metallic accents.',
    tags: ['art', 'wall-decor', 'limited'], isTrending: true,
  },
  {
    id: 'lg-phone-01', name: 'Poker Face Phone Case', artistId: 'lady-gaga', category: 'phone-cases',
    price: 32.00, rating: 4.7, reviews: 89,
    image: casegaga2, images: [casegaga2],
    description: 'Matte finish phone case with Poker Face inspired design. Shock-absorbent TPU bumper with hard polycarbonate back.',
    tags: ['phone', 'protective', 'matte'], isNew: true,
  },
  // Taylor Swift
  {
    id: 'ts-hoodie-01', name: 'Midnights Star Hoodie', artistId: 'taylor-swift', category: 'hoodies',
    price: 72.00, rating: 5.0, reviews: 412,
    image: hoodietaylor, images: [hoodietaylor],
    description: 'Cozy star-embroidered hoodie inspired by the Midnights era. Soft fleece interior with celestial detailing.',
    tags: ['cozy', 'celestial', 'embroidered'], isBestSeller: true, isTrending: true,
  },
  {
    id: 'ts-sticker-01', name: 'Eras Tour Sticker Pack', artistId: 'taylor-swift', category: 'stickers',
    price: 12.00, rating: 4.9, reviews: 567,
    image: stickertaylor, images: [stickertaylor],
    description: 'Set of 20 waterproof vinyl stickers representing every era. Perfect for laptops, water bottles, and journals.',
    tags: ['waterproof', 'vinyl', 'set'], isBestSeller: true,
  },
  {
    id: 'ts-tote-01', name: 'Folklore Canvas Tote', artistId: 'taylor-swift', category: 'tote-bags',
    price: 34.00, rating: 4.8, reviews: 198,
    image: totebag, images: [totebag],
    description: 'Heavy-duty canvas tote with Folklore-inspired botanical illustrations. Reinforced handles and interior pocket.',
    tags: ['canvas', 'botanical', 'eco-friendly'], isNew: true,
  },
  // Olivia Rodrigo
  {
    id: 'or-poster-01', name: 'SOUR Heartbreak Poster', artistId: 'olivia-rodrigo', category: 'posters',
    price: 24.00, rating: 4.8, reviews: 145,
    image: sourposter, images: [sourposter],
    description: 'Emotional heartbreak-inspired poster with purple and black aesthetics. Printed on premium 200gsm matte paper.',
    tags: ['emotional', 'purple', 'matte'], isTrending: true,
  },
  {
    id: 'or-keychain-01', name: 'GUTS Keychain', artistId: 'olivia-rodrigo', category: 'keychains',
    price: 16.00, rating: 4.6, reviews: 78,
    image: gutsolivia, images: [gutsolivia],
    description: 'Enamel keychain with GUTS-inspired design. Gold-plated hardware with a soft enamel fill.',
    tags: ['enamel', 'gold', 'compact'], isNew: true,
  },
  {
    id: 'or-mug-01', name: 'Brutal Morning Mug', artistId: 'olivia-rodrigo', category: 'mugs',
    price: 22.00, rating: 4.7, reviews: 112,
    image: brutalmug, images: [brutalmug],
    description: 'Ceramic mug with "brutal" lettering and purple gradient. Microwave and dishwasher safe. 11oz capacity.',
    tags: ['ceramic', 'gradient', 'daily'], isBestSeller: true,
  },
  // Lana Del Rey
  {
    id: 'ldr-artprint-01', name: 'Vintage Hollywood Art Print', artistId: 'lana-del-rey', category: 'art-prints',
    price: 38.00, rating: 4.9, reviews: 203,
    image: lanaprint, images: [lanaprint],
    description: 'Dreamy vintage Hollywood-inspired art print. Soft sepia tones with gold foil accents on textured paper.',
    tags: ['vintage', 'gold-foil', 'textured'], isBestSeller: true, isTrending: true,
  },
  {
    id: 'ldr-vinyl-01', name: 'NFR Vinyl Decoration', artistId: 'lana-del-rey', category: 'vinyl-decorations',
    price: 26.00, rating: 4.7, reviews: 67,
    image: nfrlana, images: [nfrlana],
    description: 'Vinyl record-style wall decoration with Norman Fucking Rockwell inspired artwork. Includes mounting hardware.',
    tags: ['vinyl', 'wall-decor', 'retro'],
  },
  {
    id: 'ldr-tote-01', name: 'Ride Canvas Tote', artistId: 'lana-del-rey', category: 'tote-bags',
    price: 36.00, rating: 4.8, reviews: 134,
    image: lanatote, images: [lanatote],
    description: 'Distressed canvas tote with vintage Americana vibes. Washed finish with retro typography.',
    tags: ['distressed', 'americana', 'retro'], isNew: true,
  },
  // Billie Eilish
  {
    id: 'be-hoodie-01', name: 'Happier Than Ever Hoodie', artistId: 'billie-eilish', category: 'hoodies',
    price: 75.00, rating: 4.9, reviews: 345,
    image: hoodiebillie, images: [hoodiebillie],
    description: 'Ultra-oversized hoodie in signature dark aesthetic. Heavyweight 400gsm cotton with neon green embroidery.',
    tags: ['oversized', 'neon', 'heavyweight'], isBestSeller: true, isTrending: true,
  },
  {
    id: 'be-laptop-01', name: 'Dark Aesthetic Laptop Skin', artistId: 'billie-eilish', category: 'laptop-skins',
    price: 28.00, rating: 4.6, reviews: 92,
    image: laptopskin, images: [laptopskin],
    description: 'Full-wrap laptop skin with dark moody aesthetic. Precision-cut for 13-15" laptops. Residue-free removal.',
    tags: ['laptop', 'dark', 'precision-cut'], isNew: true,
  },
  {
    id: 'be-sticker-01', name: 'Blohsh Sticker Pack', artistId: 'billie-eilish', category: 'stickers',
    price: 14.00, rating: 4.8, reviews: 289,
    image: billiesticker, images: [billiesticker],
    description: '12 waterproof holographic stickers featuring iconic Billie-inspired imagery. UV-resistant coating.',
    tags: ['holographic', 'waterproof', 'UV-resistant'], isBestSeller: true,
  },
  // Justin Bieber
  {
    id: 'jb-hoodie-01', name: 'Purpose Streetwear Hoodie', artistId: 'justin-bieber', category: 'hoodies',
    price: 65.00, rating: 4.7, reviews: 178,
    image: justinhoodie, images: [justinhoodie],
    description: 'Clean minimal hoodie with Purpose-inspired cross graphic. Premium cotton blend with ribbed cuffs.',
    tags: ['minimal', 'cross', 'premium'], isTrending: true,
  },
  {
    id: 'jb-phone-01', name: 'Changes Phone Case', artistId: 'justin-bieber', category: 'phone-cases',
    price: 30.00, rating: 4.5, reviews: 56,
    image: phonecasejustin, images: [phonecasejustin],
    description: 'Sleek phone case with Changes-inspired gradient design. Slim profile with military-grade protection.',
    tags: ['slim', 'gradient', 'protective'],
  },
  {
    id: 'jb-mug-01', name: 'Peaches Ceramic Mug', artistId: 'justin-bieber', category: 'mugs',
    price: 20.00, rating: 4.6, reviews: 98,
    image: mugbib, images: [mugbib],
    description: 'Warm peach-toned ceramic mug with subtle gradient. Perfect for your morning coffee ritual.',
    tags: ['peach', 'ceramic', 'warm'], isNew: true,
  },
  // Charli XCX
  {
    id: 'cx-hoodie-01', name: 'Brat Neon Hoodie', artistId: 'charli-xcx', category: 'hoodies',
    price: 70.00, rating: 4.8, reviews: 167,
    image: brathoodie, images: [brathoodie],
    description: 'Electric neon hoodie with Brat-inspired slime green accents. Cropped oversized fit with raw hem.',
    tags: ['neon', 'cropped', 'raw-hem'], isNew: true, isTrending: true,
  },
  {
    id: 'cx-sticker-01', name: 'Hyperpop Sticker Set', artistId: 'charli-xcx', category: 'stickers',
    price: 15.00, rating: 4.7, reviews: 134,
    image: charliesticker, images: [charliesticker],
    description: 'Glitch-art sticker set with hyperpop aesthetics. 15 die-cut vinyl stickers with holographic effects.',
    tags: ['glitch', 'holographic', 'die-cut'], isBestSeller: true,
  },
  {
    id: 'cx-poster-01', name: 'Crash Futuristic Poster', artistId: 'charli-xcx', category: 'posters',
    price: 26.00, rating: 4.6, reviews: 45,
    image: crashposter, images: [crashposter],
    description: 'Futuristic chrome-effect poster with Crash-inspired visuals. Printed on metallic finish paper.',
    tags: ['chrome', 'metallic', 'futuristic'], isNew: true,
  },
  // Ariana Grande
  {
    id: 'ag-phone-01', name: 'Cloud Phone Case', artistId: 'ariana-grande', category: 'phone-cases',
    price: 34.00, rating: 4.9, reviews: 267,
    image: arianacase, images: [arianacase],
    description: 'Dreamy cloud-pattern phone case with soft pastel gradient. Flexible TPU with raised bezel protection.',
    tags: ['cloud', 'pastel', 'protective'], isBestSeller: true, isTrending: true,
  },
  {
    id: 'ag-keychain-01', name: 'Moonlight Keychain', artistId: 'ariana-grande', category: 'keychains',
    price: 18.00, rating: 4.7, reviews: 156,
    image: keyariana, images: [keyariana],
    description: 'Crescent moon keychain with iridescent finish. Silver-plated with enamel cloud details.',
    tags: ['moon', 'iridescent', 'silver'], isNew: true,
  },
  {
    id: 'ag-artprint-01', name: 'Positions Art Print', artistId: 'ariana-grande', category: 'art-prints',
    price: 36.00, rating: 4.8, reviews: 89,
    image: grandeposter, images: [grandeposter],
    description: 'Elegant art print with Positions-inspired celestial imagery. Soft lavender tones on premium cotton rag paper.',
    tags: ['celestial', 'lavender', 'cotton-rag'],
  },
  {
    id: 'ag-vinyl-01', name: 'Sweetener Vinyl Decor', artistId: 'ariana-grande', category: 'vinyl-decorations',
    price: 30.00, rating: 4.5, reviews: 43,
    image: vinylariana, images: [vinylariana],
    description: 'Pastel vinyl record decoration with Sweetener-inspired artwork. Includes display stand.',
    tags: ['pastel', 'display', 'vinyl'],
  },
];

export const reviews: Review[] = [
  { id: 'r1', productId: 'ts-hoodie-01', author: 'SwiftieForever', rating: 5, text: 'The quality is insane! So soft and the star embroidery is beautiful. Best merch I own.', date: '2025-12-15' },
  { id: 'r2', productId: 'ts-hoodie-01', author: 'MidnightsGirl', rating: 5, text: 'Obsessed with this hoodie. Fits perfectly oversized just how I like it.', date: '2025-11-28' },
  { id: 'r3', productId: 'ts-hoodie-01', author: 'ErasTourFan', rating: 5, text: 'Wore this to the concert and got so many compliments!', date: '2025-11-10' },
  { id: 'r4', productId: 'be-hoodie-01', author: 'BillieVibes', rating: 5, text: 'The neon green embroidery pops so hard. Super thick and cozy.', date: '2025-12-20' },
  { id: 'r5', productId: 'be-hoodie-01', author: 'DarkAesthetic', rating: 4, text: 'Love the design, runs a bit large even for oversized. Size down!', date: '2025-12-01' },
  { id: 'r6', productId: 'ts-sticker-01', author: 'StickerCollector', rating: 5, text: 'These are gorgeous! The waterproof quality is legit. Covered my whole laptop.', date: '2025-12-18' },
  { id: 'r7', productId: 'ag-phone-01', author: 'ArianaLover', rating: 5, text: 'The cloud design is so cute! Fits perfectly and protects well.', date: '2025-11-30' },
  { id: 'r8', productId: 'ldr-artprint-01', author: 'VintageSoul', rating: 5, text: 'This print is absolutely stunning. The gold foil details are chef\'s kiss.', date: '2025-12-22' },
  { id: 'r9', productId: 'cx-hoodie-01', author: 'BratSummer', rating: 5, text: 'THE brat hoodie. Neon green is electric. Charli would approve.', date: '2026-01-05' },
  { id: 'r10', productId: 'or-mug-01', author: 'SOURfan', rating: 4, text: 'Love the purple gradient! Perfect for my morning coffee.', date: '2025-12-10' },
];

export const categories = [
  'All', 'Hoodies', 'Posters', 'Phone Cases', 'Stickers', 'Tote Bags', 'Keychains', 'Mugs', 'Laptop Skins', 'Art Prints', 'Vinyl Decorations',
];

export const testimonials = [
  { id: 't1', author: 'Maya K.', text: 'STARDAZE is literally my favorite store. The quality of every piece is unreal — it feels like wearing art.', rating: 5 },
  { id: 't2', author: 'Jordan R.', text: 'Finally, fan merch that actually looks good. No cringe designs, just aesthetic perfection.', rating: 5 },
  { id: 't3', author: 'Aria L.', text: 'I\'ve ordered 5 times now and every package feels like a gift. The packaging alone is worth it.', rating: 5 },
  { id: 't4', author: 'Sam T.', text: 'The Billie hoodie is my entire personality now. Oversized, cozy, and the neon details go crazy.', rating: 5 },
  { id: 't5', author: 'Luna M.', text: 'My Lana art print is the centerpiece of my room. Everyone asks where I got it.', rating: 5 },
];
