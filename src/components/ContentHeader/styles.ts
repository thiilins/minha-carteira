import styled, { css } from "styled-components";
import { IVariantColor } from "@/@types/colors";
interface ITitleContainerProps {
  tagColor: IVariantColor;
}
export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `}
`;
export const Controls = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `}
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  ${({ theme, tagColor }) => css`
    > h1 {
      position: relative;
      color:${theme.colors.primaryText};
      &::after {
        content: " ";
        display: block;
        background-color: ${theme.colors[tagColor]};
        width: 7rem;
        position: absolute;
        bottom: -1rem;
        border-radius: 1rem;
        height: 0.5rem;
      }
    }
  `}
`;
