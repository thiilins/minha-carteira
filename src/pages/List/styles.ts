import styled, { css } from "styled-components";
import { IVariantColor } from "@/types/colors";
interface IFilterBtnProps {
  tagColor: IVariantColor;
  isActive?: boolean;
}
export const Content = styled.main`
  ${() => css`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;
export const Filters = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
  `}
`;
export const NoContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    color: ${theme.colors.warning};
    font-size: 1.8rem;
    border: 2px solid ${theme.colors.warning};
    border-radius: 1rem;
    background-color: ${theme.colors.warning}10;
    svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
export const FilterBtn = styled.button<IFilterBtnProps>`
  ${({ theme, tagColor, isActive }) => css`
    font-size: 1.8rem;
    font-weight: 500;
    background: none;
    border: 0;
    color: ${theme.colors.secondaryText};
    transition: opacity 0.3s;
    width: 10rem;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transform: scale(1.1);
    }
    &::after {
      content: "";
      display: block;
      width: 5.5rem;
      margin: 0.5rem auto;
      border-bottom: 10px solid
        ${isActive ? theme.colors[tagColor] : `${theme.colors[tagColor]}50`};
    }
  `}
`;
