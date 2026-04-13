type UtilityTickerBandProps = {
  items: string[];
  tone?: "orange" | "teal" | "mixed";
};

export function UtilityTickerBand({
  items,
  tone = "mixed",
}: UtilityTickerBandProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={`ticker-band ticker-band--${tone}`} aria-hidden="true">
      <div className="ticker-band__track">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-band__item">
            <span className="ticker-band__dot" />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
