// Símbolo da JeitinhoAI: carinha piscando dentro de um quadrado arredondado.
export function LogoMark({ size = 48, variant = "dark", className }) {
  const bg = variant === "dark" ? "var(--navy)" : "var(--yellow)";
  const fg = variant === "dark" ? "var(--yellow)" : "var(--navy)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="JeitinhoAI"
    >
      <rect width="100" height="100" rx="27" fill={bg} />
      <circle cx="34" cy="40" r="7.5" fill={fg} />
      <path
        d="M57 43 Q65.5 30 74 42"
        fill="none"
        stroke={fg}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <path
        d="M26 59 Q49 83 76 57"
        fill="none"
        stroke={fg}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ variant = "dark", tagline = false, size = 44 }) {
  return (
    <span className={`logo logo--${variant}`}>
      <LogoMark size={size} variant={variant === "dark" ? "dark" : "light"} />
      <span className="logo__text">
        <span className="logo__word">
          jeitinho <span className="logo__badge">AI</span>
        </span>
        {tagline && <span className="logo__tagline">de um jeitinho aí</span>}
      </span>
    </span>
  );
}
