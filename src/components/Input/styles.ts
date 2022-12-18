import styled, { css } from "styled-components";

export const Container = styled.input`
  ${({ theme }) => css`
    width: 100%;
    margin: 7px 0;
    padding: 10px;
    border: 0;
    border-radius: 5px;
  `}
`;
