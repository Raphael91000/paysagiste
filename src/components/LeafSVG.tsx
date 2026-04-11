import type { CSSProperties } from "react";

interface LeafSVGProps {
  className?: string;
  style?: CSSProperties;
  /** Rotation en degrés */
  rotate?: number;
  /** Couleur de remplissage */
  color?: string;
  /** Opacité globale (0–1) */
  opacity?: number;
}

export default function LeafSVG({
  className = "",
  style,
  rotate = 0,
  color = "#A8C97F",
  opacity = 1,
}: LeafSVGProps) {
  return (
    <svg
      viewBox="0 0 100 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, opacity, ...style }}
      aria-hidden="true"
    >
      {/* Corps de la feuille */}
      <path
        d="M50 178 C50 178 6 134 4 86 C2 38 22 5 50 5 C78 5 98 38 96 86 C94 134 50 178 50 178 Z"
        fill={color}
      />

      {/* Nervure centrale */}
      <path
        d="M50 12 L50 174"
        stroke="#1A2E1F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Nervures gauche */}
      <path d="M49 42 C38 50 24 53 12 51" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M49 65 C38 73 24 76 12 74" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M49 90 C39 97 27 99 15 97"  stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M49 114 C40 120 29 122 19 120" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M49 137 C42 142 33 143 25 141" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />

      {/* Nervures droite */}
      <path d="M51 42 C62 50 76 53 88 51" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M51 65 C62 73 76 76 88 74" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M51 90 C61 97 73 99 85 97"  stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M51 114 C60 120 71 122 81 120" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M51 137 C58 142 67 143 75 141" stroke="#1A2E1F" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />

      {/* Tige */}
      <path
        d="M50 178 L50 185"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
