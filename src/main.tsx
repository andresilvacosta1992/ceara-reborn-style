import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

// Preload critical CSS
const criticalCSS = `
  body { margin: 0; font-family: Inter, sans-serif; }
  .loading { display: flex; justify-content: center; align-items: center; height: 100vh; }
`;

// Inject critical CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);