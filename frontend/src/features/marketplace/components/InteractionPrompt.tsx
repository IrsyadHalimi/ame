import {
  useInteractionStore,
} from "../stores/interactionStore";

export default function InteractionPrompt() {
  const activeObjectId =
    useInteractionStore(
      (state) =>
        state.activeObjectId
    );

  if (!activeObjectId)
    return null;

  return (
    <div
      className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      rounded-xl
      bg-slate-900
      px-6
      py-3
      "
    >
      Tekan E untuk melihat produk
    </div>
  );
}