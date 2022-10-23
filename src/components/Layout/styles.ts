import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    "AS MH"
    "AS CT";
  height: 100vh;
  min-width: 315px;
  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
    grid-template-areas:
      "MH"
      "CT";
  }
  @media (min-width: 601px) and (max-width: 791px) {
    grid-template-columns: 200px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
      "AS MH"
      "AS CT";
  }
  @media (min-width: 791px) and (max-width: 1024px) {
    grid-template-columns: 220px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
      "AS MH"
      "AS CT";
  }
`;
