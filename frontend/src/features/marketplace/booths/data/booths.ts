import { Booth } from "../types/booth.type";

export const booths: Booth[] = [
  {
    id: "booth-1",

    sellerId: "seller-1",

    sellerName: "Jersey Store",

    position: {
      x: 10,
      y: 1.5,
      z: 0,
    },
  },

  {
    id: "booth-2",

    sellerId: "seller-2",

    sellerName: "Football Gear",

    position: {
      x: -10,
      y: 1.5,
      z: 0,
    },
  },
];