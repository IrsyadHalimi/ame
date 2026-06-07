import { booths } from "../booths/data/booths";

export const interactables =
  booths.map((booth: any) => ({
    id: booth.id,

    type: "seller-booth",

    radius: 5,

    position: booth.position,
  }));