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
  const isDark = mode === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextMode} mode`}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="theme-toggle-button"
    >
      <span className="theme-toggle-button__dot" data-mode={mode} />
      <span className="theme-toggle-button__icon" aria-hidden="true">
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
      <span className="theme-toggle-button__label">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
