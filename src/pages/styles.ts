import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${theme.colors.secondaryText};
  `}
`;
