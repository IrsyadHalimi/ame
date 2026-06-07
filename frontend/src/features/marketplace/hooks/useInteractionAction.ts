import { useEffect } from "react";

import {
  useInteractionStore,
} from "../stores/interactionStore";
import { useOverlayStore } from "../stores/overlayStore";

export default function useInteractionAction() {
  const activeObjectId =
    useInteractionStore(
      (state) =>
        state.activeObjectId
    );

  const openOverlay =
  useOverlayStore.getState()
    .openOverlay;

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.code !== "KeyE")
        return;

      if (!activeObjectId)
        return;

      openOverlay(
        "product",
        {
          boothId: activeObjectId,
        }
      );
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeObjectId]);
}