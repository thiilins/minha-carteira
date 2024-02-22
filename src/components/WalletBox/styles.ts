import styled, { css } from "styled-components";
import { IVariantColor } from "@/@types/colors";
interface IContainerProps {
  bgColor?: IVariantColor;
}
export const Container = styled.div<IContainerProps>`
  ${({ theme, bgColor = "success" }) => css`
    color: ${theme.colors.primaryText};
    width: 32%;
    min-width: 300px;
    background-color: ${theme.colors[bgColor]};
    height: 157px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    padding: 2rem;
    overflow: hidden;
    position: relative;

    .icon {
      position: absolute;
      top: -20px;
      right: 5px;
      height: 130%;
      opacity: 0.15;
      z-index: 0;
      &.big_icon {
        max-height: 90%;
        top: 5px;
        right: -10px;
      }
    }
    &:hover {
      opacity: 0.9;
    }

  `}
`;

export const Footer = styled.small`
  ${({ theme }) => css`
    font-size: 1.1rem;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      font-size: 1.8rem;
    }
    h2 * {
      position: absolute;
      font-size: 3.5rem;
      z-index: 2;
    }
  `}
`;
