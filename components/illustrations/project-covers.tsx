import type { ReactNode } from "react";

import type { ProjectCover } from "@/content/projects";

function Canvas({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 250"
      aria-hidden="true"
      fill="none"
      strokeWidth={1.2}
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      {children}
    </svg>
  );
}

function SiteCover() {
  return (
    <Canvas>
      <rect
        x="56"
        y="26"
        width="288"
        height="206"
        rx="6"
        className="fill-surface stroke-foreground/55"
      />
      <path d="M56 52H344" className="stroke-foreground/55" />
      <circle cx="70" cy="39" r="3" className="fill-ochre" />
      <circle cx="82" cy="39" r="3" className="fill-foreground/20" />
      <circle cx="94" cy="39" r="3" className="fill-foreground/20" />
      <rect
        x="260"
        y="35"
        width="64"
        height="8"
        rx="4"
        className="fill-foreground/10"
      />
      <rect
        x="78"
        y="76"
        width="132"
        height="14"
        rx="2"
        className="fill-foreground/85"
      />
      <rect
        x="78"
        y="98"
        width="92"
        height="14"
        rx="2"
        className="fill-foreground/85"
      />
      <rect x="78" y="124" width="28" height="2.5" className="fill-brand" />
      <rect
        x="78"
        y="138"
        width="130"
        height="5"
        rx="2.5"
        className="fill-foreground/20"
      />
      <rect
        x="78"
        y="149"
        width="104"
        height="5"
        rx="2.5"
        className="fill-foreground/20"
      />
      <rect
        x="246"
        y="72"
        width="78"
        height="86"
        rx="3"
        className="fill-foreground/85"
      />
      <circle cx="285" cy="102" r="14" className="fill-surface" />
      <path d="M259 158C259 134 311 134 311 158Z" className="fill-surface" />
      <rect
        x="78"
        y="174"
        width="72"
        height="38"
        rx="3"
        className="stroke-foreground/45"
      />
      <rect
        x="164"
        y="174"
        width="72"
        height="38"
        rx="3"
        className="stroke-foreground/45"
      />
      <rect
        x="250"
        y="174"
        width="74"
        height="38"
        rx="3"
        className="fill-brand/15 stroke-brand"
      />
      <path d="M88 190H120M88 199H108" className="stroke-foreground/30" />
      <path d="M174 190H206M174 199H194" className="stroke-foreground/30" />
      <path d="M260 190H292M260 199H280" className="stroke-brand/70" />
    </Canvas>
  );
}

function WaveCover() {
  return (
    <Canvas>
      <rect
        x="40"
        y="96"
        width="82"
        height="46"
        rx="6"
        className="fill-surface stroke-foreground/45"
      />
      <circle cx="58" cy="119" r="9" className="fill-foreground/15" />
      <path d="M74 113H108M74 124H98" className="stroke-foreground/35" />
      <path
        d="M122 119C140 119 142 108 156 108"
        strokeDasharray="2 5"
        strokeLinecap="round"
        strokeWidth={2}
        className="stroke-ochre"
      />
      <rect
        x="152"
        y="16"
        width="100"
        height="218"
        rx="16"
        className="fill-surface stroke-foreground/60"
      />
      <rect
        x="188"
        y="25"
        width="28"
        height="5"
        rx="2.5"
        className="fill-foreground/20"
      />
      <rect
        x="166"
        y="48"
        width="34"
        height="4"
        rx="2"
        className="fill-foreground/25"
      />
      <rect
        x="166"
        y="58"
        width="66"
        height="13"
        rx="2"
        className="fill-foreground/85"
      />
      <circle cx="180" cy="102" r="13" className="fill-brand stroke-brand" />
      <circle cx="224" cy="102" r="13" className="stroke-foreground/55" />
      <path
        d="M175 102H185M181 98L185 102L181 106"
        strokeLinecap="round"
        className="stroke-brand-foreground"
      />
      <path
        d="M219 102H229M223 98L219 102L223 106"
        strokeLinecap="round"
        className="stroke-foreground/70"
      />
      <path d="M170 124H190M214 124H234" className="stroke-foreground/25" />
      {[150, 176, 202].map((y) => (
        <g key={y}>
          <circle cx="174" cy={y} r="8" className="fill-foreground/12" />
          <rect
            x="188"
            y={y - 6}
            width="34"
            height="4"
            rx="2"
            className="fill-foreground/35"
          />
          <rect
            x="188"
            y={y + 2}
            width="22"
            height="3"
            rx="1.5"
            className="fill-foreground/18"
          />
          <rect
            x="220"
            y={y - 2}
            width="14"
            height="4"
            rx="2"
            className="fill-foreground/35"
          />
        </g>
      ))}
      <rect
        x="282"
        y="136"
        width="78"
        height="46"
        rx="6"
        className="fill-surface stroke-foreground/45"
      />
      <circle cx="304" cy="159" r="10" className="fill-ochre/20 stroke-ochre" />
      <path
        d="M299 159L303 163L310 155"
        strokeLinecap="round"
        className="stroke-ochre"
      />
      <path d="M322 153H350M322 164H342" className="stroke-foreground/35" />
      <path
        d="M252 150C266 150 268 159 282 159"
        strokeDasharray="2 5"
        strokeLinecap="round"
        strokeWidth={2}
        className="stroke-ochre"
      />
    </Canvas>
  );
}

function ModernizeCover() {
  const rows = [
    { y: 64, kind: "context", width: 120 },
    { y: 88, kind: "removed", width: 150 },
    { y: 112, kind: "removed", width: 108 },
    { y: 136, kind: "removed", width: 170 },
    { y: 160, kind: "added", width: 138 },
    { y: 184, kind: "added", width: 94 },
    { y: 208, kind: "context", width: 64 },
  ] as const;

  return (
    <Canvas>
      <rect
        x="56"
        y="22"
        width="288"
        height="212"
        rx="6"
        className="fill-surface stroke-foreground/55"
      />
      <path d="M56 46H344" className="stroke-foreground/55" />
      <circle cx="70" cy="34" r="3" className="fill-ochre" />
      <circle cx="82" cy="34" r="3" className="fill-foreground/20" />
      <circle cx="94" cy="34" r="3" className="fill-foreground/20" />
      {rows.map(({ y, kind, width }) => (
        <g key={y}>
          {kind !== "context" && (
            <rect
              x="57"
              y={y - 9}
              width="286"
              height="22"
              className={kind === "removed" ? "fill-ochre/15" : "fill-brand/15"}
              stroke="none"
            />
          )}
          <path
            d={kind === "added" ? "M72 59V69M67 64H77" : "M67 64H77"}
            transform={`translate(0 ${y - 64})`}
            strokeLinecap="round"
            className={
              kind === "removed"
                ? "stroke-ochre"
                : kind === "added"
                  ? "stroke-brand"
                  : "stroke-transparent"
            }
          />
          <rect
            x="96"
            y={y - 3}
            width={width}
            height="6"
            rx="3"
            className={
              kind === "removed"
                ? "fill-ochre/55"
                : kind === "added"
                  ? "fill-brand/75"
                  : "fill-foreground/25"
            }
          />
        </g>
      ))}
    </Canvas>
  );
}

const tree = {
  root: { x: 200, y: 22, w: 124, label: "192.168.0.0/24" },
  levels: [
    [
      { x: 120, y: 86, w: 84, label: "/25", split: true },
      { x: 280, y: 86, w: 84, label: "/25" },
    ],
    [
      { x: 76, y: 150, w: 68, label: "/26" },
      { x: 164, y: 150, w: 68, label: "/26", split: true },
    ],
    [
      { x: 130, y: 208, w: 52, label: "/27" },
      { x: 198, y: 208, w: 52, label: "/27" },
    ],
  ],
  links: [
    [200, 48, 120, 86],
    [200, 48, 280, 86],
    [120, 112, 76, 150],
    [120, 112, 164, 150],
    [164, 176, 130, 208],
    [164, 176, 198, 208],
  ],
} as const;

function VlsmCover() {
  const h = 26;
  const nodes = [{ ...tree.root, split: true }, ...tree.levels.flat()] as {
    x: number;
    y: number;
    w: number;
    label: string;
    split?: boolean;
  }[];

  return (
    <Canvas>
      {tree.links.map(([x1, y1, x2, y2]) => {
        const mid = (y1 + y2) / 2;
        return (
          <path
            key={`${x1}-${y1}-${x2}-${y2}`}
            d={`M${x1} ${y1}V${mid}H${x2}V${y2}`}
            className="stroke-foreground/40"
          />
        );
      })}
      {nodes.map(({ x, y, w, label, split }) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x - w / 2}
            y={y}
            width={w}
            height={h}
            rx="3"
            className={
              split
                ? "fill-surface stroke-foreground/55"
                : "fill-brand/15 stroke-brand"
            }
          />
          <text
            x={x}
            y={y + h / 2 + 3.5}
            textAnchor="middle"
            stroke="none"
            className={`font-mono text-[10px] ${split ? "fill-foreground/80" : "fill-brand"}`}
          >
            {label}
          </text>
        </g>
      ))}
    </Canvas>
  );
}

const covers: Record<ProjectCover, () => ReactNode> = {
  modernize: ModernizeCover,
  site: SiteCover,
  wave: WaveCover,
  vlsm: VlsmCover,
};

export function ProjectCoverArt({ cover }: { cover: ProjectCover }) {
  const Cover = covers[cover];
  return <Cover />;
}
