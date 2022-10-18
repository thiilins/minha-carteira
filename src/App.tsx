import React from "react";
import Layout from "@components/Layout";
import usePersistedState from "@hooks/usePersistedState";
import GlobalStyles from "@styles/globals";
import dark from "@styles/themes/dark";
import light from "@styles/themes/light";
import Dashboard from "@pages/Dashboard";
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
        <Layout>
          <Dashboard />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
