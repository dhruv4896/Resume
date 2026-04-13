import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App";
import { applyTheme, resolveInitialTheme } from "./app/theme";
import "./styles/globals.css";

applyTheme(resolveInitialTheme());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
