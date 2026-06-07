export interface Booth {
  id: string;

  sellerId: string;

  sellerName: string;

  position: {
    x: number;
    y: number;
    z: number;
  };
}