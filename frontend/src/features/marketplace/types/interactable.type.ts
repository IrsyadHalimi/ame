export type InteractableType =
  | "seller-booth"
  | "checkout"
  | "help-center";

export interface Interactable {
  id: string;
  type: InteractableType;
  radius: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
}