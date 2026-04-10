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
  tone = "light",
}: SectionHeadingProps) {
  const muted = tone === "light" ? "text-stone-600" : "text-stone-600";
  const labelTone = tone === "light" ? "text-stone-500" : "text-stone-500";
  const titleTone = tone === "light" ? "text-stone-900" : "text-stone-900";

  return (
    <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
      <div className="space-y-5">
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
