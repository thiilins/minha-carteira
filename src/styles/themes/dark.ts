import defaultTheme from "./default";
/* eslint-disable import/no-anonymous-default-export */
export default {
  ...defaultTheme,
  title: "dark",
  colors: {
    ...defaultTheme.colors,
    primary: "#00181d",
    secondary: "#002a2e",
    secondaryText: "#aecfd2",
    error: "#d32f2f",
    success: "#4caf50",
    warning: "#F7931B",
    info: "#1565c0",
    primaryText: "#fdfdfd",
  },
};
