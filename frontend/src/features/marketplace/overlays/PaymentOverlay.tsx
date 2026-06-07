import { useOrderStore }
from "@/features/order/store/orderStore";
import { useCreatePayment } from "@/features/payment/hooks/useCreatePayment";
import Button from "@/components/ui/Button/Button";

export default function PaymentOverlay() {
  const order =
    useOrderStore(
      (state) =>
        state.currentOrder
    );

  const {
    mutateAsync,
  } = useCreatePayment();

  if (!order) {
    return null;
  }

  const handlePay =
  async () => {
    const session =
      await mutateAsync(
        order.id
      );

    window.snap.pay(
      session.snapToken,
      {
        onSuccess() {
          console.log(
            "paid"
          );
        },

        onPending() {
          console.log(
            "pending"
          );
        },

        onError() {
          console.log(
            "error"
          );
        },
      }
    );
  };

  return (
    <div className="p-4">
      <h2
        className="
        text-xl
        font-bold
        "
      >
        Pembayaran
      </h2>

      <p>
        Order:
        {order.id}
      </p>

      <p>
        Total:
        Rp
        {order.subtotal.toLocaleString()}
      </p>

      <Button onClick={handlePay}>
        Bayar Sekarang
      </Button>
    </div>
  );
}