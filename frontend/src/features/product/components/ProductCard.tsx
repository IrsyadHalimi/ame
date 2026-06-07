import { Product }
from "../types/product.type";
import { useCartStore } from "@/features/cart/store/cartStore";
import Button from "@/components/ui/Button/Button";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  const addItem =
  useCartStore(
    (state) =>
      state.addItem
  );
  
  return (
    <div
      className="
      rounded-xl
      border
      border-slate-800
      overflow-hidden
      "
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="
        h-40
        w-full
        object-cover
        "
      />

      <div className="p-4">
        <h3 className="font-medium">
          {product.name}
        </h3>

        <p
          className="
          mt-2
          text-green-400
          font-bold
          "
        >
          {product?.price?.toLocaleString("id-ID", {
            minimumFractionDigits: 0,
            currency: "IDR",
          })}
        </p>
      </div>
      <div className="mt-4">
        <Button
          onClick={() =>
            addItem({
              product,
              quantity: 1,
            })
          }
        >
          Tambah ke Keranjang
        </Button>
      </div>
    </div>
  );
}