import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `}
`;
export const TitleContainer = styled.div`
  ${({ theme }) => css`
    > h1 {
      position: relative;
      &::after {
        content: " ";
        display: block;
        background-color: ${theme.colors.info};
        width: 7rem;
        position: absolute;
        bottom: -1rem;
        border-radius: 1rem;
        height: 0.5rem;
      }
    }
  `}
`;
export const Controls = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
  `}
`;
