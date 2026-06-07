import { api } from "@/lib/api";

import { PaymentSession }
from "../types/payment.type";

export async function createPayment(
  orderId: string
) {
  const response =
    await api.post<PaymentSession>(
      `/payments`,
      {
        orderId,
      }
    );

  return response.data;
}