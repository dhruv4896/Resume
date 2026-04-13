type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const eyebrowColor = inverse
    ? "text-[color:var(--strong-accent)]"
    : "text-[color:var(--section-eyebrow)]";
  const titleColor = inverse
    ? "text-[color:var(--strong-text)]"
    : "text-[color:var(--heading)]";

  return (
    <div className={alignment}>
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl italic tracking-[-0.02em] sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
}
