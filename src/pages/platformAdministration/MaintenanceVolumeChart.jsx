import { useEffect, useRef, useState } from "react";
import { ChartLine } from "@gravity-ui/icons";
import AdminPanel from "./AdminPanel";
// Dependency-free SVG line chart (the project has no chart library).
// Prop: data = [{ month, volume }]. The SVG is drawn at the real container
// width (measured with ResizeObserver) so text stays readable on mobile.
const HEIGHT = 260; // keep in sync with the h-[260px] wrapper (220 on phones)
const PAD = { top: 14, right: 18, bottom: 28, left: 46 };
const Y_MIN = 400;
const Y_MAX = 2000;
const Y_STEP = 200;

// Smooth curve through the points (Catmull-Rom converted to Bezier).
function smoothPath(points) {
  return points.reduce((path, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const p0 = points[i - 2] ?? points[i - 1];
    const p1 = points[i - 1];
    const p3 = points[i + 1] ?? p;
    const c1x = p1.x + (p.x - p0.x) / 6;
    const c1y = p1.y + (p.y - p0.y) / 6;
    const c2x = p.x - (p3.x - p1.x) / 6;
    const c2y = p.y - (p3.y - p1.y) / 6;
    return `${path} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p.x} ${p.y}`;
  }, "");
}

function MaintenanceVolumeChart({ data }) {
  const wrapperRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = wrapperRef.current;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const innerW = width - PAD.left - PAD.right;
  const innerH = HEIGHT - PAD.top - PAD.bottom;
  const xFor = (i) =>
    PAD.left +
    (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW);
  const yFor = (v) =>
    PAD.top + innerH - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * innerH;

  const points = data.map((d, i) => ({ x: xFor(i), y: yFor(d.volume) }));
  const baseY = PAD.top + innerH;
  const linePath = points.length ? smoothPath(points) : "";
  const areaPath = points.length
    ? `${linePath} L ${points[points.length - 1].x} ${baseY} L ${points[0].x} ${baseY} Z`
    : "";
  const ticks = [];
  for (let v = Y_MIN; v <= Y_MAX; v += Y_STEP) ticks.push(v);

  return (
    <AdminPanel
      title="Monthly Maintenance Volume"
      icon={<ChartLine width={18} height={18} />}
    >
      <div className="h-[260px] w-full max-[480px]:h-[220px]" ref={wrapperRef}>
        {width > 0 && (
          <svg
            width={width}
            height={HEIGHT}
            role="img"
            aria-label="Line chart of monthly maintenance volume"
          >
            <defs>
              <linearGradient id="paVolumeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {ticks.map((v) => (
              <g key={v}>
                <line
                  x1={PAD.left}
                  x2={width - PAD.right}
                  y1={yFor(v)}
                  y2={yFor(v)}
                  className="stroke-slate-400/15"
                />
                <text
                  x={PAD.left - 8}
                  y={yFor(v) + 4}
                  textAnchor="end"
                  className="fill-slate-400 text-[11px]"
                >
                  {v.toLocaleString("en-US")}
                </text>
              </g>
            ))}
            {data.map((d, i) => (
              <g key={d.month}>
                <line
                  x1={xFor(i)}
                  x2={xFor(i)}
                  y1={PAD.top}
                  y2={baseY}
                  className="stroke-slate-400/15"
                />
                <text
                  x={xFor(i)}
                  y={HEIGHT - 8}
                  textAnchor="middle"
                  className="fill-slate-400 text-[11px]"
                >
                  {d.month}
                </text>
              </g>
            ))}
            <path d={areaPath} fill="url(#paVolumeFill)" />
            <path
              d={linePath}
              className="fill-none stroke-sky-400"
              strokeWidth="2"
            />
            {data.map((d, i) => (
              <circle
                key={d.month}
                cx={points[i].x}
                cy={points[i].y}
                r="4"
                className="fill-sky-400"
              >
                <title>{`${d.month}: ${d.volume.toLocaleString("en-US")} bookings`}</title>
              </circle>
            ))}
          </svg>
        )}
      </div>
    </AdminPanel>
  );
}

export default MaintenanceVolumeChart;
