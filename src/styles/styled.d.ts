import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      primaryText: string;
      secondaryText: string;
      success: string;
      info: string;
      error: string;
      warning: string;
      pageBackground: string;
      headerBackground: string;
    };

    fonts: {
      family: string;
      size: {
        xxSmall: string;
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
        xxLarge: string;
      };
      weight: {
        extraLight: number;
        regular: number;
        semiBold: number;
        bold: number;
      };
    };
    borders: {
      small: string;
      medium: string;
      large: string;
      full: string;
    };
    spacings: {
      xSmall: string;
      small: string;
      base: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}
