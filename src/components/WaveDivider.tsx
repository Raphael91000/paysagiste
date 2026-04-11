interface WaveDividerProps {
  from: string;
  to: string;
}

// Chaque séparateur est unique grâce à un index passé depuis page.tsx
const PATHS = [
  "M0,90 L1440,90 L1440,52 C1200,8 960,80 720,40 C480,0 240,70 0,30 Z",
  "M0,90 L1440,90 L1440,38 C1100,85 880,5 600,50 C320,95 160,18 0,55 Z",
  "M0,90 L1440,90 L1440,60 C1300,15 1000,75 720,35 C440,-5 180,65 0,25 Z",
  "M0,90 L1440,90 L1440,45 C1050,90 840,10 540,55 C280,90 140,22 0,48 Z",
  "M0,90 L1440,90 L1440,55 C1180,10 900,82 660,38 C400,2 200,68 0,32 Z",
];

export default function WaveDivider({ from, to, index = 0 }: WaveDividerProps & { index?: number }) {
  const path = PATHS[index % PATHS.length];

  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: 80, display: "block", marginTop: -1, marginBottom: -1 }}
      aria-hidden="true"
    >
      <rect width="1440" height="90" fill={from} />
      <path d={path} fill={to} />
    </svg>
  );
}
