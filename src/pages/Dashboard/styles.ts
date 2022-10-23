import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    min-width: 100%;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `}
`;
