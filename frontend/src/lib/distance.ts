export function distance(
  x1: number,
  z1: number,
  x2: number,
  z2: number
) {
  return Math.sqrt(
    (x2 - x1) ** 2 +
    (z2 - z1) ** 2
  );
}