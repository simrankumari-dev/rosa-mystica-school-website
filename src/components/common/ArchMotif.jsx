import "./ArchMotif.css";

export default function ArchMotif({
  size = 64,
  tone = "gold",
}) {
  const grad = tone === "gold" ? "archGold" : "archMaroon";

  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 64 70"
      className="arch-motif"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="archGold"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#F3D18A" />
          <stop offset="100%" stopColor="#C9982F" />
        </linearGradient>

        <linearGradient
          id="archMaroon"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#C97B8A" />
          <stop offset="100%" stopColor="#8B2635" />
        </linearGradient>
      </defs>

      <path
        d="M8 66 V30 A24 24 0 0 1 56 30 V66"
        fill="none"
        stroke={`url(#${grad})`}
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M20 66 V32 A12 12 0 0 1 44 32 V66"
        fill="none"
        stroke={`url(#${grad})`}
        strokeWidth="2"
        opacity="0.6"
      />

      <circle
        cx="32"
        cy="9"
        r="4"
        fill={`url(#${grad})`}
      />
    </svg>
  );
}