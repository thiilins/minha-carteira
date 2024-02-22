import { IVariantColor } from "@/@types/colors";
import styled, { css } from "styled-components";
interface ILegendProps {
  color: string;
}
export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 250px;
    position: relative;
    padding: 2rem !important;
    border-radius: 1rem;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 2rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primaryText};
 
  `}
`;

export const Header = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 1.5rem;
    > h2 {
      font-size: 2.5rem;
      text-align: center;
    }
  `}
`;
export const LegendContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    max-height: 180px;
    justify-content: center;
    gap: 2rem;
  `}
`;
export const Legend = styled.li<ILegendProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${color};
      height: 3rem;
      font-size: 1.4rem;
      font-weight: ${theme.fonts.weight.semiBold};
      width: 3rem;
      border-radius: 100%;
    }
  `}
`;
