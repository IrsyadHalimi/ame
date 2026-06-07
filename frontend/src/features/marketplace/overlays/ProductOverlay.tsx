import ProductList
from "@/features/product/components/ProductList";

import {
  useOverlayStore,
} from "../stores/overlayStore";

export default function ProductOverlay() {
  const payload =
    useOverlayStore(
      (state) =>
        state.payload
    ) as {
      sellerId: string;
    };

  return (
    <div className="p-4">
      <h2
        className="
        mb-4
        text-xl
        font-bold
        "
      >
        Produk Seller
      </h2>

      <ProductList
        sellerId={
          payload.sellerId
        }
      />
    </div>
  );
}