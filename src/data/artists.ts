export interface Artist {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  gradient: string;
  textColor: string;
  accentColor: string;
  image: string;
  mood: string;
}

export const artists: Artist[] = [
  {
    id: 'lady-gaga',
    name: 'Lady Gaga',
    slug: 'lady-gaga',
    tagline: 'Born This Way',
    description: 'Channel the avant-garde energy of Mother Monster. Bold, theatrical, and unapologetically unique — just like Gaga herself.',
    gradient: 'from-red-900/40 via-black to-purple-900/30',
    textColor: 'text-red-300',
    accentColor: '#dc2626',
    image: 'https://images.pexels.com/pexels/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Avant-garde Glamour',
  },
  {
    id: 'taylor-swift',
    name: 'Taylor Swift',
    slug: 'taylor-swift',
    tagline: 'Eras of Elegance',
    description: 'From folklore to Midnights, carry the poetic spirit of every era. Soft, romantic, and timelessly enchanting.',
    gradient: 'from-pink-900/30 via-black to-amber-900/20',
    textColor: 'text-pink-300',
    accentColor: '#ec4899',
    image: 'https://images.pexels.com/pexels/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Soft Romantic',
  },
  {
    id: 'olivia-rodrigo',
    name: 'Olivia Rodrigo',
    slug: 'olivia-rodrigo',
    tagline: 'Brutal & Beautiful',
    description: 'Feel the raw emotion of Gen Z\'s most authentic voice. Purple tears, heartbreak anthems, and unfiltered truth.',
    gradient: 'from-purple-900/40 via-black to-blue-900/30',
    textColor: 'text-purple-300',
    accentColor: '#a855f7',
    image: 'https://images.pexels.com/pexels/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Emotional Rebellion',
  },
  {
    id: 'lana-del-rey',
    name: 'Lana Del Rey',
    slug: 'lana-del-rey',
    tagline: 'Vintage Dreams',
    description: 'Step into the hazy golden hour of Lana\'s world. Vintage glamour, melancholic beauty, and old Hollywood dreams.',
    gradient: 'from-amber-900/30 via-black to-yellow-900/20',
    textColor: 'text-amber-300',
    accentColor: '#d97706',
    image: 'https://images.pexels.com/pexels/photos/1648296/pexels-photo-1648296.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Vintage Dreamy',
  },
  {
    id: 'billie-eilish',
    name: 'Billie Eilish',
    slug: 'billie-eilish',
    tagline: 'Happier Than Ever',
    description: 'Embrace the dark oversized aesthetic of pop\'s most enigmatic star. Neon green meets midnight black.',
    gradient: 'from-green-900/30 via-black to-emerald-900/20',
    textColor: 'text-green-300',
    accentColor: '#22c55e',
    image: 'https://images.pexels.com/pexels/photos/1644686/pexels-photo-1644686.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Dark Streetwear',
  },
  {
    id: 'justin-bieber',
    name: 'Justin Bieber',
    slug: 'justin-bieber',
    tagline: 'Purpose & Changes',
    description: 'From teen sensation to mature artist. Clean, modern streetwear with a touch of faith and reflection.',
    gradient: 'from-sky-900/30 via-black to-indigo-900/20',
    textColor: 'text-sky-300',
    accentColor: '#0ea5e9',
    image: 'https://images.pexels.com/pexels/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Modern Streetwear',
  },
  {
    id: 'charli-xcx',
    name: 'Charli XCX',
    slug: 'charli-xcx',
    tagline: 'Brat Summer Forever',
    description: 'Hyperpop energy meets futuristic fashion. Neon, glitch, and unapologetic chaos — the brat way.',
    gradient: 'from-lime-900/30 via-black to-fuchsia-900/30',
    textColor: 'text-lime-300',
    accentColor: '#84cc16',
    image: 'https://images.pexels.com/pexels/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Futuristic Hyperpop',
  },
  {
    id: 'ariana-grande',
    name: 'Ariana Grande',
    slug: 'ariana-grande',
    tagline: 'Sweetener & Positions',
    description: 'Clouds, ponytails, and sweet vibes. Pastel dreams with a powerful vocal energy that moves mountains.',
    gradient: 'from-violet-900/30 via-black to-pink-900/20',
    textColor: 'text-violet-300',
    accentColor: '#8b5cf6',
    image: 'https://images.pexels.com/pexels/photos/3756153/pexels-photo-3756153.jpeg?auto=compress&cs=tinysrgb&w=800',
    mood: 'Pastel Clouds',
  },
];
