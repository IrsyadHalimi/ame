export interface AvatarPosition {
  x: number;
  y: number;
  z: number;
}

export interface Avatar {
  id: string;
  username: string;

  position: AvatarPosition;

  rotation: number;
}