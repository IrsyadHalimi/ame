export type OrderStatus =
  | "pending"
  | "paid"
  | "cancelled";

export interface OrderItem {
  productId: string;

  productName: string;

  price: number;

  quantity: number;
}

export interface Order {
  id: string;

  userId: string;

  items: OrderItem[];

  subtotal: number;

  status: OrderStatus;

  createdAt: string;
}