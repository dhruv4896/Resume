type SectionHeadingProps = {
  intro?: string;
  label: string;
  title: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  intro,
  label,
  title,
  tone = "dark",
}: SectionHeadingProps) {
  const muted =
    tone === "light"
      ? "text-slate-600/90"
      : "text-[color:rgba(222,225,247,0.7)]";
  const labelTone =
    tone === "light"
      ? "text-slate-500/80"
      : "text-[color:rgba(222,225,247,0.52)]";
  const titleTone =
    tone === "light" ? "text-slate-950" : "text-ivory";

  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <div className="space-y-4">
        <p className={`section-kicker ${labelTone}`}>{label}</p>
        <h2 className={`section-title max-w-xl ${titleTone}`}>{title}</h2>
      </div>
      {intro ? (
        <p className={`max-w-2xl text-base leading-8 md:text-lg ${muted}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
