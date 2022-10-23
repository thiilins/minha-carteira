import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 49%;
    height: 250px;
    position: relative;
    padding: 2rem 3rem;

    border-radius: 1rem;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 30% 60%;
    gap: 2rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primaryText};
    > img {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      max-height: 200px;
    }
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    padding: 1rem 0;
    h1 {
      font-size: 2.5rem;
    }
    small {
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.2;
      font-weight: ${theme.fonts.weight.semiBold};
      padding: 1rem;
      border: 1px solid ${theme.colors.primaryText};
      color: ${theme.colors.primary};
      background-color: ${theme.colors.primaryText};
      border-radius: 1rem;
    }
    span {
      font-size: 2rem;
      line-height: 1.3;
    }
  `}
`;
