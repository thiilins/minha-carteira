import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: MH;
    background-color: ${theme.colors.headerBackground};
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.primaryText};
    border-bottom: 1px solid ${theme.colors.secondaryText}30;
  `}
`;
export const Profile = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
  `}
`;
export const Welcome = styled.h3`
  ${({ theme }) => css``}
`;
export const Username = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.medium};
  `}
`;
