import TopHUD from "./TopHUD";
import BottomHUD from "./BottomHUD";

import {
  useHUDStore,
} from "../stores/hudStore";

export default function HUD() {
  const showHUD =
    useHUDStore(
      (state) =>
        state.showHUD
    );

  if (!showHUD)
    return null;

  return (
    <>
      <TopHUD />

      <BottomHUD />
    </>
  );
}