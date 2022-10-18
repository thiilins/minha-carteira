import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: CT;
    background-color: ${theme.colors.pageBackground};
    /* color: ${theme.colors.secondaryText}; */
    padding: 3rem;
  `}
`;
