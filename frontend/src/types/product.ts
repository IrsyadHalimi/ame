export interface Product {
  id: string;
  sellerId: string;

  name: string;
  description: string;

  price: number;
  promoPrice?: number;

  stock: number;

  imageUrl: string;

  createdAt: string;
  updatedAt: string;
}