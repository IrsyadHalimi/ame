import {
  useCart,
} from "@/features/cart/hooks/useCart";
import { useCreateOrder } from "@/features/order/hooks/useCreateOrder";
import Button from "@/components/ui/Button/Button";
import { useOrderStore } from "@/features/order/store/orderStore";

export default function CheckoutOverlay() {
  const {
    items,
    subtotal,
  } = useCart();

  const {
    mutateAsync,
    isPending,
  } = useCreateOrder();

  const payload = {
    items: items.map(
      (item) => ({
        productId:
          item.product.id,

        quantity:
          item.quantity,
      })
    ),
  };

  const handleCheckout =
    async () => {
      await mutateAsync(
        payload
      );

      const setCurrentOrder =
        useOrderStore.getState()
          .setCurrentOrder;

      const order =
        await mutateAsync(
          payload
        );

      setCurrentOrder(order);
    };

  return (
    <div className="p-4">
      <h2
        className="
        text-xl
        font-bold
        mb-4
        "
      >
        Checkout
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={
              item.product.id
            }
          >
            <div>
              {
                item.product
                  .name
              }
            </div>

            <div>
              Qty:
              {
                item.quantity
              }
            </div>
          </div>
        ))}
      </div>

      <div
        className="
        mt-6
        font-bold
        "
      >
        Total:
        Rp
        {subtotal.toLocaleString()}
      </div>
      <Button
        onClick={
          handleCheckout
        }
      >
        Buat Pesanan
      </Button>
    </div>
  );
}