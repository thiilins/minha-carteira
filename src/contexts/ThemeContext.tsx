import React, { createContext, useContext, useCallback } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import {DefaultTheme as ITheme} from 'styled-components'
import usePersistedState from "@/hooks/usePersistedState";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
  title: string;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
interface IThemeProvider {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<ITheme>(dark, "defaultTheme");
  const toggleTheme = useCallback(() => {
    if (theme.title === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, [setTheme, theme]);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme: theme,
        title: theme.title,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
