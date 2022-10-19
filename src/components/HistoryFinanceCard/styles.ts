import styled, { css } from "styled-components";
import { IVariantColor } from "@/types/colors";

interface ITagProps {
  color: IVariantColor;
}

export const Container = styled.li`
  ${({ theme, color }) => css`
    display: flex;
    background-color: ${theme.colors.headerBackground}90;
    border-radius: 0.5rem;
    padding: 1.2rem 1rem;
    position: relative;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.7;
      transform: translateX(0.6rem) scale(1.03);
    }
  `}
`;
export const Tag = styled.div<ITagProps>`
  ${({ theme, color }) =>
    css`
      background-color: ${theme.colors[color]};
      width: 1.8rem;
      height: 50%;
      position: absolute;
      left: -0.8rem;
      top: 25%;
      bottom: 25%;
      z-index: 10;
      border-radius: 0.5rem;
      border: 4px solid ${theme.colors.pageBackground};
    `}
`;
export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    & span {
      font-size: 1.8rem;
      font-weight: ${theme.fonts.weight.semiBold};
      line-height: 1;
      padding-bottom: 0.4rem;
    }
    & small {
      font-size: 1.3rem;
      line-height: 1;
    }
  `}
`;
export const AmountContainer = styled.h3`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
  `}
`;
