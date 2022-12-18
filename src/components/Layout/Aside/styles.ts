import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
interface IContainerProps {
  menuIsOpen?: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${({ theme, menuIsOpen }) => css`
    grid-area: AS;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.primaryText}30;
    position: relative;
    div.toggle {
      display: none;
      padding-left: 1rem;
    }
    .content {
      display: flex;
      height: 100%;
      padding: 3rem 0;
      flex-direction: column;
      justify-content: space-between;
    }
    @media (max-width: 790px) {
      position: fixed;
      z-index: 5;
      width: 250px;
      height: ${menuIsOpen ? "100vh" : "70px"};
      ${!menuIsOpen
        ? css`
            border: none;
            border-bottom: 1px solid ${theme.colors.primaryText}30;
            div.toggle {
              display: none;
            }

            overflow: hidden;
            background-color: transparent;
            .content {
              display: none;
            }
          `
        : css`
            ${MenuContainer} {
              display: flex;
            }
            div.toggle {
              display: flex;
            }
            .content {
              display: flex;
            }
          `};
    }
  `}
`;
export const Header = styled.header`
  ${({ theme }) => css`
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    gap: 1rem;
    color: ${theme.colors.primaryText};
    @media (max-width: 790px) {
      gap: none;
      h2 {
        display: none;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
  `}
`;
export const LogoImage = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    @media (max-width: 790px) {
      display: none;
    }
  `}
`;
export const ToggleMenu = styled.button`
  ${({ theme }) => css`
    font-size: 4rem;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: 1px solid ${theme.colors.warning};
    background-color: ${theme.colors.warning};
    color: ${theme.colors.primaryText};
    border-radius: 1rem;
    @media (min-width: 790px) {
      display: none;
    }
  `}
`;
export const MenuContainer = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 790px) {
      display: none;
    }
  `}
`;

export const MenuItem = styled(NavLink)`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.primaryText};
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    gap: 1rem;
    transition: all 0.3s;
    font-weight: ${theme.fonts.weight.semiBold};
    padding-left: 1rem;
    &.active {
      padding: 1.5rem;
      color: #fff !important;
      font-size: 2.1rem;
      font-weight: ${theme.fonts.weight.bold};
      width: 110%;
      position: relative;
      border-radius: 0 3rem 3rem 0;
      background-color: ${theme.colors.tealDark};
      svg {
        background: red;
        font-size: 3rem;
        padding: 0.5rem;
        border-radius: 2rem;
        color: ${theme.colors.tealDark};
        background-color: #fff;
      }
    }
    &:visited {
      color: ${theme.colors.primaryText};
    }
    &:hover {
      opacity: 0.7;
      color: ${theme.colors.warning};
      font-weight: ${theme.fonts.weight.bold};
    }
  `}
`;
export const MenuBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.primaryText};
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    gap: 1rem;
    transition: all 0.3s;
    font-weight: ${theme.fonts.weight.semiBold};
    padding-left: 1rem;
    &.active {
      padding: 1.5rem;
      color: #fff !important;
      font-size: 2.1rem;
      font-weight: ${theme.fonts.weight.bold};
      width: 110%;
      position: relative;
      border-radius: 0 3rem 3rem 0;
      background-color: ${theme.colors.tealDark};
      svg {
        background: red;
        font-size: 3rem;
        padding: 0.5rem;
        border-radius: 2rem;
        color: ${theme.colors.tealDark};
        background-color: #fff;
      }
    }
    &:visited {
      color: ${theme.colors.primaryText};
    }
    &:hover {
      opacity: 0.7;
      color: ${theme.colors.warning};
      font-weight: ${theme.fonts.weight.bold};
    }
  `}
`;
