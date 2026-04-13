import { useTheme } from "../../app/theme";

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23 5.46 5.46"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();
  const nextMode = mode === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextMode} mode`}
      aria-pressed={mode === "dark"}
      onClick={toggleTheme}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] px-4 text-sm font-medium text-[color:var(--text-strong)] shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--surface-hover)] motion-reduce:transition-none"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--chip-bg)] text-[color:var(--chip-text)]">
        {mode === "light" ? <MoonIcon /> : <SunIcon />}
      </span>
      <span className="hidden sm:inline">
        {mode === "light" ? "Dark mode" : "Light mode"}
      </span>
    </button>
  );
}
