export interface PaymentSession {
  orderId: string;

  snapToken: string;

  redirectUrl?: string;
}