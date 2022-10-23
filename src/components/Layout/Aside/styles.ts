import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: AS;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.secondary};
    padding: 2rem;
    gap: 3rem;
    border-right: 1px solid ${theme.colors.white}30;
  `}
`;
export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${theme.colors.white};
  `}
`;
export const LogoImage = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
  `}
`;
export const MenuContainer = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1.5rem;
  `}
`;
export const MenuItem = styled(NavLink)`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    transition: all 0.4s;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    cursor: pointer;
    &.active {
      color: ${theme.colors.warning} !important;
    }
    &:visited {
      color: ${theme.colors.white};
    }
    &:hover {
      opacity: 0.7;
      color: ${theme.colors.warning};
    }
  `}
`;
