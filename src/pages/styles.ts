import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    color: ${theme.colors.secondaryText};
  `}
`;
