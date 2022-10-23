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
    success: "#4caf50",
    info: "#1565c0",
    error: "#d32f2f",
    warning: "#ffc400",
    primaryText: "#fdfdfd",
  },
};
