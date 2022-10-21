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
      red: string;
      redLight: string;
      redDark: string;
      pink: string;
      pinkLight: string;
      pinkDark: string;
      purple: string;
      purpleLight: string;
      purpleDark: string;
      deepPurple: string;
      deepPurpleLight: string;
      deepPurpleDark: string;
      indigo: string;
      indigoLight: string;
      indigoDark: string;
      blue: string;
      blueLight: string;
      blueDark: string;
      blueViolet: string;
      lightBlue: string;
      lightBlueLight: string;
      lightBlueDark: string;
      cyan: string;
      cyanLight: string;
      cyanDark: string;
      teal: string;
      tealLight: string;
      tealDark: string;
      green: string;
      greenLight: string;
      greenDark: string;
      greenLime: string;
      lightGreen: string;
      lightGreenLight: string;
      lightGreenDark: string;
      lime: string;
      limeLight: string;
      limeDark: string;
      yellow: string;
      yellowLight: string;
      yellowDark: string;
      amber: string;
      amberLight: string;
      amberDark: string;
      orange: string;
      orangeLight: string;
      orangeDark: string;
      deepOrange: string;
      deepOrangeLight: string;
      deepOrangeDark: string;
      gray: string;
      grayLight: string;
      grayDark: string;
      disabled: string;
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
