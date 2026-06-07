import {
  useCart,
} from "@/features/cart/hooks/useCart";
import { useOverlayStore } from "../stores/overlayStore";
import Button from "@/components/ui/Button/Button";

export default function CartOverlay() {
  const {
    items,
    subtotal,
  } = useCart();

  const openOverlay =
  useOverlayStore(
    (state) =>
      state.openOverlay
  );

  return (
    <div className="p-4">
      <h2
        className="
        text-xl
        font-bold
        mb-4
        "
      >
        Keranjang
      </h2>

      <div className="space-y-4">
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
        onClick={() =>
          openOverlay(
            "checkout"
          )
        }
      >
        Checkout
      </Button>
    </div>
  );
}