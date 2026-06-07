import OverlayContainer
from "./OverlayContainer";

import ProductOverlay
from "../overlays/ProductOverlay";

import {
  useOverlayStore,
} from "../stores/overlayStore";
import CartOverlay from "../overlays/CartOverlay";
import CheckoutOverlay from "../overlays/CheckoutOverlay";

export default function OverlayManager() {
  const activeOverlay =
    useOverlayStore(
      (state) =>
        state.activeOverlay
    );

  if (!activeOverlay)
    return null;


  return (
    <OverlayContainer>
      {activeOverlay ===
        "product" && (
        <ProductOverlay />
      )}
      {activeOverlay ===
        "cart" && (
        <CartOverlay />
      )}
      {activeOverlay === "checkout" && (
        <CheckoutOverlay />
      )}
    </OverlayContainer>
  );
}