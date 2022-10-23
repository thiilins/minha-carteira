import { IVariantColor } from "@/types/colors";
import styled, { css } from "styled-components";
interface ILegendProps {
  color: IVariantColor;
}
export const Container = styled.div`
  ${({ theme }) => css`
    width: 49%;
    height: 250px;
    position: relative;
    padding: 2rem !important;
    border-radius: 1rem;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 40% 60%;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `}
`;

export const SideLeft = styled.aside`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    > h2 {
      font-size: 2.5rem;
    }
  `}
`;
export const SideRight = styled.main`
  ${({ theme }) => css`
    height: 100%;
    max-height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const LegendContainer = styled.ul`
  ${({ theme }) => css`
    padding-top: 2.8rem;

    display: flex;
    max-height: 180px;
    padding-left: 0.5rem;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 1.5rem;
    }
    &::-webkit-scrollbar-corner {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primary}90;
      border-radius: 1rem;
      border-left: 0.5rem solid ${theme.colors.secondary};
      border-right: 0.5rem solid ${theme.colors.secondary};
    }
    &::-webkit-scrollbar-track {
      background-color: ${theme.colors.secondary};
    }
  `}
`;
export const Legend = styled.li<ILegendProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors[color]};
      height: 3rem;
      font-size: 1.4rem;
      font-weight: ${theme.fonts.weight.semiBold};
      width: 5rem;
      border-radius: 0.5rem;
    }
  `}
`;
