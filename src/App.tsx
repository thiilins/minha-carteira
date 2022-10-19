import React from "react";

import usePersistedState from "@hooks/usePersistedState";
import GlobalStyles from "@styles/globals";
import dark from "@styles/themes/dark";
import light from "@styles/themes/light";
import Routes from "@/routes";
import { ThemeProvider } from "styled-components";
export const App: React.FC = () => {
  const [userTheme] = usePersistedState<"light" | "dark">(
    "dark",
    "defaultTheme",
    true
  );
  return (
    <>
      <ThemeProvider theme={userTheme === "dark" ? dark : light}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
