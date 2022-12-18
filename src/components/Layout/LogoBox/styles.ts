import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: 1rem;
    padding-left: 1rem;
    color: ${theme.colors.primaryText};
  `}
`;

export const LogoImage = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
  `}
`;
