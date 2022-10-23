import React from "react";
import GlobalStyles from "@styles/globals";
import Routes from "@/routes";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
export const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
