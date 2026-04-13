import { HomePage } from "../pages/home";
import { ThemeProvider } from "./theme";

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
