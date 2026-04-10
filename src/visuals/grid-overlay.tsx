type GridOverlayProps = {
  className?: string;
};

export function GridOverlay({ className = "" }: GridOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(112,216,200,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,218,243,0.05)_1px,transparent_1px)] [background-position:center_center] [background-size:120px_120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,218,243,0.22),transparent_30%),radial-gradient(circle_at_70%_35%,rgba(112,216,200,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(223,193,167,0.1),transparent_20%)]" />
      <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_74%)] [background-image:repeating-radial-gradient(circle_at_center,rgba(0,218,243,0.12)_0,rgba(0,218,243,0.12)_1px,transparent_1px,transparent_66px)]" />
    </div>
  );
}
