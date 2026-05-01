export type Category = 'Singles' | 'Bouquets' | 'Sets';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  color: 'pink' | 'lavender' | 'blue' | 'yellow' | 'green';
}

export interface CartItem extends Product {
  quantity: number;
}

export type OrderStatus = 'Processing' | 'Handcrafting' | 'Quality Check' | 'Shipped' | 'Delivered';

export interface Order {
  id: string;
  status: OrderStatus;
  items: CartItem[];
  date: string;
}
