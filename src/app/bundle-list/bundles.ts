// Define the Product interface
interface Bundle {
  id: number;
  name: string;
  price: number;
  active: boolean;
  productCode: number;
  wholesalePrice: number;
  retailPrice: number;
  currency: string;
  margin: number;
  quantity: number;
  note: string;
  tags: string;
  category: string;
  description: string;
  totalPrice: number;
}

// Array of Product objects
const bundle: Bundle[] = [
  {
    id: 1,
    name: 'Aperitif Bamboo Board Gift Basket',
    price: 85,
    active: true,
    productCode: 101,
    wholesalePrice: 60.5,
    retailPrice: 85.0,
    currency: 'USD',
    margin: 24.5,
    totalPrice: 20,
    quantity: 50,
    note: 'Bestseller',
    tags: 'eco-friendly, bamboo',
    category: 'kitchenware',
    description: 'A beautifully crafted bamboo board, perfect for an aperitif.'
  },
  {
    id: 2,
    name: 'Celeste Gift Basket',
    price: 100,
    active: true,
    productCode: 102,
    wholesalePrice: 70.0,
    retailPrice: 100.0,
    totalPrice: 22,
    currency: 'USD',
    margin: 30.0,
    quantity: 40,
    note: 'Limited edition',
    tags: 'luxury, exclusive',
    category: 'gifts',
    description: 'An exclusive selection of celestial-themed items, ideal for special occasions.'
  },
  {
    id: 3,
    name: 'Baby Step Stool Gift Basket',
    price: 120,
    active: true,
    productCode: 103,
    totalPrice: 23,
    wholesalePrice: 80.0,
    retailPrice: 120.0,
    currency: 'USD',
    margin: 40.0,
    quantity: 30,
    note: 'For toddlers',
    tags: 'child-friendly, safe',
    category: 'childcare',
    description: 'A sturdy and safe step stool for babies learning to walk.'
  }
];

// Export the products array if it needs to be used in other modules
export { bundle };
