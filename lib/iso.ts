const COS = Math.cos(Math.PI / 6);

export type Point3 = readonly [x: number, y: number, z?: number];

export function iso([x, y, z = 0]: Point3): [number, number] {
  return [(x - y) * COS, (x + y) / 2 - z];
}

const round = (value: number) => Math.round(value * 100) / 100;

export function polygon(points: Point3[], z = 0): string {
  return points
    .map(([x, y, pz = 0]) =>
      iso([x, y, pz + z])
        .map(round)
        .join(","),
    )
    .join(" ");
}

export function rect(
  x: number,
  y: number,
  w: number,
  d: number,
  z = 0,
): string {
  return polygon(
    [
      [x, y],
      [x + w, y],
      [x + w, y + d],
      [x, y + d],
    ],
    z,
  );
}

export function boxFaces(
  x: number,
  y: number,
  w: number,
  d: number,
  h: number,
  z = 0,
) {
  return {
    top: rect(x, y, w, d, z + h),
    right: polygon(
      [
        [x + w, y, 0],
        [x + w, y + d, 0],
        [x + w, y + d, h],
        [x + w, y, h],
      ],
      z,
    ),
    left: polygon(
      [
        [x, y + d, 0],
        [x + w, y + d, 0],
        [x + w, y + d, h],
        [x, y + d, h],
      ],
      z,
    ),
  };
}
