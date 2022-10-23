import defaultTheme from "./default";
/* eslint-disable import/no-anonymous-default-export */
export default {
  ...defaultTheme,
  title: "light",
  colors: {
    ...defaultTheme.colors,
    primary: "#DCDCDC",
    secondary: "#FFFFFF",
    primaryText: "#000",
    secondaryText: "#333333",
    success: "#00c853",
    info: "#3a9cd4",
    error: "#f44336",
    warning: "#f49e00",
  },
};
