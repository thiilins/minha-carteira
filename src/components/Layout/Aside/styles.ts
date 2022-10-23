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
    gap: 3rem;
    border-right: 1px solid ${theme.colors.primaryText}30;
    position: relative;
    div.toggle {
      padding: 0 10px;
      display: none;
    }
    @media (max-width: 600px) {
      padding-left: 7px;
      position: fixed;
      z-index: 5;
      overflow: hidden;
      width: 250px;
      height: ${menuIsOpen ? "100vh" : "70px"};
      ${!menuIsOpen
        ? css`
            border: none;
            border-bottom: 1px solid ${theme.colors.primaryText}30;
          `
        : css`
            ${MenuContainer} {
              display: flex;
            }
            ${Header} {
              display: flex;
            }
          `};
    }
    @media (max-width: 790px) {
      min-height: 100%;
      & div.content {
        min-height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      div.toggle {
        padding: 0 10px;
        display: ${menuIsOpen ? "flex" : "none"};
        display: flex;
      }
    }
  `}
`;
export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${theme.colors.primaryText};
    padding: 1.5rem;
    h2 {
      display: none;
    }

    @media (max-width: 791px) {
      justify-content: center;
      h2 {
        display: none;
      }
      img {
        width: 80px;
        height: 80px;
      }
    }
    @media (max-width: 600px) {
      display: none;
    }
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
    gap: 1rem;
    @media (max-width: 600px) {
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
