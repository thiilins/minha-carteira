import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
  `}
`;

export const FormContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 2rem;
    width: 400px;
    background-color: ${theme.colors.secondary};
  `}
`;
export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 300px;
    padding: 2rem;
    background-color: ${theme.colors.warning};
    border-radius: 1rem;
    gap: 1rem;
    > h2 {
      color: ${theme.colors.primaryText};
      font-size: 2.5rem;
    }
    > img {
      width: 60px;
      height: 60px;
    }
  `}
`;

export const Form = styled.form`
  ${() => css`
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `}
`;
export const DemoData = styled.table`
  ${({ theme }) => css`
    width: 90%;
    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 70px;
      border-bottom: 1px solid ${theme.colors.warning};
      &.colSpan {
        grid-template-columns: 100%;
        border: 1px solid ${theme.colors.warning}30;
        background-color: ${theme.colors.warning}30;
      }
      th {
        padding: 1rem;
      }
      td,
      th {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `}
`;

export const FormTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primaryText};
    &:after {
      content: "";
      display: block;
      width: 55px;
      height: 2rem;
      border-bottom: 8px solid ${theme.colors.warning};
    }
  `}
`;
