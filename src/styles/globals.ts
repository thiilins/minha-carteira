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
  button {
    background-color: transparent;
    border: 0;
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
  @media (max-width: 600px) {
    .card {
      &:not(.walletBox, .history__card, .status__box) {
        grid-template-columns: 1fr 1fr;
      }
      min-width: 90vw;
      & h2 {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 414px) {
    .page__header {
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem;
      gap: 30px;
      h1 {
        font-size: 4rem;
        &::after {
          bottom: -1.5rem;
        }
      }
      > div {
        width: 90vw;
      }
      select {
        flex: 1;
        min-width: 40vw;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 791px) {
    .card {
      min-width: 100%;
      & h2 {
        font-size: 22px;
      }
    }
  }
  @media (min-width: 791px) and (max-width: 820px) {
    .card {
      min-width: 100%;
    }
  }
  @media (min-width: 820px) and (max-width: 950px) {
    .card {
      &:not(.walletBox) {
        min-width: 100%;
      }
      &.history__card h2 {
        font-size: 22px;
      }
      &.walletBox {
        width: 30%;
        min-width: unset;
        & .icon,
        & .icon.big_icon {
          width: 60% !important;
          height: 60% !important;
          bottom: 20%;
          right: 20%;
          top: unset;
          opacity: 0.1;
        }
      }
    }
  }
  @media (min-width: 950px) and (max-width: 1320px) {
    .card {
      &:not(.walletBox, .history__card) {
        min-width: unset;
        width: 48%;
        grid-template-columns: 1fr 1fr;
        .tag {
          font-size: 12px !important;
        }
      }
      &.history__card {
        min-width: unset;
        width: 100% !important;
        padding: 2rem;
      }
      &.status__box {
        grid-template-columns: 120px 1fr !important;
        h1 {
          font-size: 1.8rem;
        }
        span {
          font-size: 1.4rem;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      &.walletBox {
        width: 31%;
        min-width: unset;
        .icon,
        .icon.big_icon {
          opacity: 0.08;
        }
      }
    }
  }
  @media (min-width: 1320px) {
    .card {
      .tag {
        font-size: 14px !important;
        min-width: 70px !important;
      }
      &:not(.walletBox, .history__card) {
        min-width: unset;
        width: 49%;
        grid-template-columns: 1fr 1fr;
      }
      &.history__card {
        min-width: unset;
        width: 100% !important;
      }

      &.status__box {
        grid-template-columns: 1fr 1fr !important;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`}`;
