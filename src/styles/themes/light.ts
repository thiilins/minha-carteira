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
    info: "#4E41F0",
    error: "#E44C4E",

    warning: "#ffb71b",
  },
};
