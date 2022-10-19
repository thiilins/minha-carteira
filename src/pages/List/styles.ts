import styled, { css } from "styled-components";
import { IVariantColor } from "@/types/colors";
interface IFilterBtnProps {
  tagColor: IVariantColor;
}
export const Content = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;
export const Filters = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
  `}
`;
export const FilterBtn = styled.button<IFilterBtnProps>`
  ${({ theme, tagColor }) => css`
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
      &::after {
        border-bottom: 10px solid ${theme.colors[tagColor]}90;
      }
    }
    &::after {
      content: "";
      display: block;
      width: 5.5rem;
      margin: 0.5rem auto;
      border-bottom: 10px solid ${theme.colors[tagColor]};
    }
  `}
`;
