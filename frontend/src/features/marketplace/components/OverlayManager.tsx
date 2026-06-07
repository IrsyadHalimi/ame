import OverlayContainer
from "./OverlayContainer";

import ProductOverlay
from "../overlays/ProductOverlay";

import {
  useOverlayStore,
} from "../stores/overlayStore";

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
    </OverlayContainer>
  );
}