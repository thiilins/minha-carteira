import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
