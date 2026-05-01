import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Blueberry Whisper',
    price: 18,
    description: 'A single, delicate blue poppy hand-twisted with soft velvet cord. Perfect for a minimalist desk piece.',
    image: 'https://images.unsplash.com/photo-1525281113066-3aa25399acd2?auto=format&fit=crop&q=80&w=800',
    category: 'Singles',
    color: 'blue'
  },
  {
    id: '2',
    name: 'Macaron Dream Cone',
    price: 45,
    description: 'A whimsical cone filled with pastel tulips and daisies, hand-twisted in soft macaron shades.',
    image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800',
    category: 'Bouquets',
    color: 'pink'
  },
  {
    id: '3',
    name: 'Pastel Meadow Bunch',
    price: 64,
    description: 'Our signature lush arrangement featuring lavender sprigs, pink peonies, and bluebells.',
    image: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800',
    category: 'Bouquets',
    color: 'lavender'
  },
  {
    id: '4',
    name: 'Lemon Twist Duo',
    price: 32,
    description: 'A vibrant set of two sunny yellow sunflowers, guaranteed to brighten any corner of your room.',
    image: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&q=80&w=800',
    category: 'Sets',
    color: 'yellow'
  },
  {
    id: '5',
    name: 'Minty Fresh Bloom',
    price: 22,
    description: 'An elegant green hydrangea bloom, representing growth and renewal. Velvet-soft texture.',
    image: 'https://images.unsplash.com/photo-1455642300327-04664952093e?auto=format&fit=crop&q=80&w=800',
    category: 'Singles',
    color: 'green'
  },
  {
    id: '6',
    name: 'Lavender Fields Trio',
    price: 48,
    description: 'Three bundled stems of aromatic-looking velvet lavender. A touch of provence in a bottle.',
    image: 'https://images.unsplash.com/photo-1524220556514-958564e9a3a9?auto=format&fit=crop&q=80&w=800',
    category: 'Sets',
    color: 'lavender'
  }
];

export const CATEGORIES: ('ALL' | 'Singles' | 'Bouquets' | 'Sets')[] = ['ALL', 'Singles', 'Bouquets', 'Sets'];
