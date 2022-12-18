import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    select {
      padding: 0.7rem;
      border-radius: 0.5rem;
      border: 2px solid ${theme.colors.secondary};
      &:hover,
      &:focus-within {
        outline: 2px solid ${theme.colors.secondary}30;
      }
    }
  `}
`;
