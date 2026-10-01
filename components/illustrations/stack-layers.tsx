import { boxFaces, iso, rect } from "@/lib/iso";

const SIZE = 240;
const GAP = 180;
const SLAB = 7;
const EDGE = SIZE * Math.cos(Math.PI / 6);
const REQUEST: [number, number] = [180, 170];
const BOX_TOP = 26;

const nodes: [number, number][] = [
  [40, 50],
  [120, 35],
  [205, 60],
  [65, 125],
  [150, 105],
  REQUEST,
  [35, 200],
  [115, 185],
  [210, 215],
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 6],
  [3, 7],
  [4, 5],
  [4, 7],
  [6, 7],
  [7, 5],
  [5, 8],
  [7, 8],
];

const boxes: {
  box: [x: number, y: number, w: number, d: number, h: number];
  accent?: true;
}[] = [
  { box: [35, 35, 70, 60, 30] },
  { box: [130, 30, 75, 45, 18] },
  { box: [45, 140, 55, 65, 44] },
  { box: [150, 130, 60, 60, BOX_TOP], accent: true },
];

function Slab({ z }: { z: number }) {
  const faces = boxFaces(0, 0, SIZE, SIZE, -SLAB, z);
  return (
    <>
      <polygon
        points={faces.left}
        className="fill-muted stroke-foreground/45"
      />
      <polygon
        points={faces.right}
        className="fill-border stroke-foreground/45"
      />
      <polygon
        points={rect(0, 0, SIZE, SIZE, z)}
        className="fill-surface stroke-foreground/60"
      />
    </>
  );
}

function Corners({ from, to }: { from: number; to: number }) {
  return (
    <>
      {(
        [
          [0, SIZE],
          [SIZE, SIZE],
          [SIZE, 0],
        ] as const
      ).map(([x, y]) => {
        const [x1, y1] = iso([x, y, from]);
        const [x2, y2] = iso([x, y, to - SLAB]);
        return (
          <line
            key={`${x}-${y}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeDasharray="3 4"
            className="stroke-foreground/30"
          />
        );
      })}
    </>
  );
}

function Network({ z }: { z: number }) {
  return (
    <>
      <Slab z={z} />
      {links.map(([a, b]) => {
        const [x1, y1] = iso([...nodes[a], z]);
        const [x2, y2] = iso([...nodes[b], z]);
        return (
          <line
            key={`${a}-${b}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            className="stroke-foreground/35"
          />
        );
      })}
      {nodes.map(([x, y], index) => {
        const accent = index === 5;
        const size = accent ? 12 : 8;
        return (
          <polygon
            key={`${x}-${y}`}
            points={rect(x - size / 2, y - size / 2, size, size, z)}
            className={
              accent
                ? "fill-brand stroke-brand"
                : "fill-background stroke-foreground/70"
            }
          />
        );
      })}
    </>
  );
}

function Systems({ z }: { z: number }) {
  const ordered = [...boxes].sort(
    (a, b) => a.box[0] + a.box[1] - (b.box[0] + b.box[1]),
  );

  return (
    <>
      <Slab z={z} />
      {ordered.map(({ box: [x, y, w, d, h], accent }) => {
        const faces = boxFaces(x, y, w, d, h, z);
        return (
          <g key={`${x}-${y}`}>
            <polygon
              points={faces.left}
              className="fill-muted stroke-foreground/60"
            />
            <polygon
              points={faces.right}
              className="fill-border stroke-foreground/60"
            />
            <polygon
              points={faces.top}
              className={
                accent
                  ? "fill-surface stroke-brand"
                  : "fill-surface stroke-foreground/60"
              }
            />
          </g>
        );
      })}
    </>
  );
}

function Interface({ z }: { z: number }) {
  const shape = (
    x: number,
    y: number,
    w: number,
    d: number,
    className: string,
  ) => <polygon points={rect(x, y, w, d, z)} className={className} />;
  const [rx1, ry1] = iso([24, 50, z]);
  const [rx2, ry2] = iso([216, 50, z]);

  return (
    <>
      <Slab z={z} />
      {shape(24, 24, 192, 192, "fill-background stroke-foreground/50")}
      <line
        x1={rx1}
        y1={ry1}
        x2={rx2}
        y2={ry2}
        className="stroke-foreground/50"
      />
      {shape(34, 33, 7, 8, "fill-ochre stroke-ochre")}
      {shape(46, 33, 7, 8, "fill-muted stroke-foreground/50")}
      {shape(58, 33, 7, 8, "fill-muted stroke-foreground/50")}
      {shape(40, 66, 110, 10, "fill-foreground/80 stroke-none")}
      {shape(40, 84, 76, 6, "fill-foreground/25 stroke-none")}
      {shape(40, 110, 70, 90, "fill-surface stroke-foreground/50")}
      {shape(48, 120, 54, 5, "fill-foreground/30 stroke-none")}
      {shape(48, 132, 40, 5, "fill-foreground/20 stroke-none")}
      {shape(48, 144, 46, 5, "fill-foreground/20 stroke-none")}
      {shape(124, 110, 78, 34, "fill-surface stroke-foreground/50")}
      {shape(132, 120, 50, 5, "fill-foreground/30 stroke-none")}
      {shape(132, 130, 34, 5, "fill-foreground/20 stroke-none")}
      {shape(154, 160, 52, 24, "fill-brand stroke-brand")}
    </>
  );
}

function Request({ from, to }: { from: number; to: number }) {
  const [x, y1] = iso([...REQUEST, from]);
  const [, y2] = iso([...REQUEST, to]);

  return (
    <line
      x1={x}
      y1={y1}
      x2={x}
      y2={y2}
      strokeDasharray="1.5 5"
      strokeLinecap="round"
      strokeWidth={2}
      className="stroke-ochre"
    />
  );
}

export function StackLayers({
  alt,
  labels,
  className,
}: {
  alt: string;
  labels: { interface: string; systems: string; network: string };
  className?: string;
}) {
  const top = 2 * GAP;
  const minX = -EDGE - 8;
  const maxX = EDGE + 150;
  const minY = -top - 16;
  const maxY = SIZE + SLAB + 12;
  const [signalX] = iso([...REQUEST, 0]);

  const layers = [
    { key: "interface", z: top, label: labels.interface },
    { key: "systems", z: GAP, label: labels.systems },
    { key: "network", z: 0, label: labels.network },
  ] as const;

  return (
    <svg
      viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
      role="img"
      aria-label={alt}
      fill="none"
      strokeWidth={1.1}
      strokeLinejoin="round"
      className={className}
    >
      <Network z={0} />
      <Corners from={0} to={GAP} />
      <Request from={0} to={GAP + BOX_TOP} />
      <Systems z={GAP} />
      <Corners from={GAP} to={top} />
      <Request from={GAP + BOX_TOP} to={top} />
      <Interface z={top} />
      {[0, GAP + BOX_TOP, top].map((z) => (
        <circle
          key={z}
          cx={signalX}
          cy={iso([...REQUEST, z])[1]}
          r={3.6}
          strokeWidth={1.5}
          className="fill-ochre stroke-background"
        />
      ))}

      <g
        className="fill-muted-foreground font-mono text-[11px] uppercase"
        style={{ letterSpacing: "0.14em" }}
      >
        {layers.map(({ key, z, label }) => {
          const [x, y] = iso([SIZE, 0, z]);
          return (
            <g key={key}>
              <line
                x1={x + 10}
                y1={y}
                x2={x + 40}
                y2={y}
                className="stroke-foreground/40"
              />
              <text x={x + 48} y={y + 4} stroke="none">
                {label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
