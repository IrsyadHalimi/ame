import ProductCard
from "./ProductCard";

import {
  useProducts,
} from "../hooks/useProducts";

interface Props {
  sellerId: string;
}

export default function ProductList({
  sellerId,
}: Props) {
  const {
    data,
    isLoading,
  } = useProducts(sellerId);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
      grid
      gap-4
      "
    >
      {data?.map(
        (product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      )}
    </div>
  );
}