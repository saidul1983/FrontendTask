export interface Product {
  id: number;
  name: string;
  slug: string;
  categoryId: number;
  price: number;
  oldPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  shortDescription: string;
}

export interface ProductDetails extends Product {
  fullDescription: string;
  sku: string;
  manufacturer: string;
  availability: string;
  deliveryDate: string;
  attributes: ProductAttribute[];
  specifications: ProductSpecification[];
  relatedProducts: number[];
  images: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface ProductAttribute {
  id: number;
  name: string;
  values: string[];
  required: boolean;
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;
}

export interface CartItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  image: string;
  attributes: { [key: string]: string };
}

export interface Order {
  id: number;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: number;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  country: string;
  state: string;
  city: string;
  address1: string;
  address2?: string;
  zipCode: string;
  phoneNumber: string;
}
