/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "dhruv-theme";

type ThemeContextValue = {
  mode: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  return storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : null;
}

export function resolveInitialTheme(): ThemeMode {
  return readStoredTheme() ?? "dark";
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.dataset.theme = mode;
  document.documentElement.style.colorScheme = mode;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(resolveInitialTheme);

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const setTheme = (nextMode: ThemeMode) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextMode);
    }

    setModeState(nextMode);
  };

  const toggleTheme = () => {
    setTheme(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ mode, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}
