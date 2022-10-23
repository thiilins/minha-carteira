import { createGlobalStyle, css } from "styled-components";
export default createGlobalStyle`${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Ubuntu", sans-serif;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    &:disabled {
      text-decoration: none;
      pointer-events: none;
      cursor: default;
      user-select: none;
    }
  }
  html {
    overflow: hidden;
    font-size: 62.5%;
    font-family: "Ubuntu", sans-serif;
    color: ${theme.colors.primaryText};
  }

  fieldset {
    border: none;
  }
  textarea {
    resize: both;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  dd {
    margin: 0 0 0 40px;
  }
  nav ul,
  nav ol {
    list-style: none;
    list-style-image: none;
    margin: 0;
    padding: 0;
  }
  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
  }
  svg:not(:root) {
    overflow: hidden;
  }

  h1 {
    font-size: ${theme.fonts.size.xLarge};
    font-weight: ${theme.fonts.weight.bold};
    margin: 0;
  }
  figure {
    margin: 0;
  }

  h2 {
    font-size: ${theme.fonts.size.large};
    font-weight: ${theme.fonts.weight.bold};
    margin: 0;
  }

  h3 {
    font-size: ${theme.fonts.size.medium};
    font-weight: ${theme.fonts.weight.bold};
    margin: 0;
  }

  h4 {
    font-size: ${theme.fonts.size.small};
    font-weight: ${theme.fonts.weight.bold};
    margin: 0;
  }

  h5 {
    font-size: ${theme.fonts.size.xSmall};
    font-weight: ${theme.fonts.weight.bold};
    margin: 0;
  }

  h6 {
    font-size: ${theme.fonts.size.xxSmall};
    font-weight: ${theme.fonts.weight.bold};
    margin: 0;
  }

  strong {
    font-weight: ${theme.fonts.weight.bold};
  }

  a {
    text-decoration: none;
  }

  body {
    font-weight: ${theme.fonts.weight.regular};
    font-size: ${theme.fonts.size.xSmall};
    color: ${theme.colors.primaryText};
    line-height: 1;
  }
  @media screen and (max-width: 500px) and (min-width: 414px) {
    html {
      font-size: 55%;
    }
    small {
      font-size: 12px !important;
    }
    .card {
      min-width: calc(100vw - 50px) !important;
      padding-left: 25px;
      padding-right: 25px;
    }
  }
  @media screen and (max-width: 413px) {
    html {
      font-size: 55%;
    }
    small {
      font-size: 12px !important;
    }
    .card {
      min-width: 380px !important;
      padding-left: 25px;
      padding-right: 25px;
    }
  }
`}`;
