import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: CT;
    background-color: ${theme.colors.pageBackground};
    /* color: ${theme.colors.secondaryText}; */
    padding: 3rem;
    overflow-y: auto;
    height: calc(100vh - 70px);
    ::-webkit-scrollbar {
      width: 1.5rem;
    }
    ::-webkit-scrollbar-corner {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.pageBackground}90;
      border-radius: 1rem;
      border-left: 0.5rem solid ${theme.colors.headerBackground};
      border-right: 0.5rem solid ${theme.colors.headerBackground};
    }
    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.headerBackground};
    }
  `}
`;
