import React from "react";

import { Container, Controls, TitleContainer } from "./styles";
interface IContentHeader {
  title?: string;
}
const ContentHeader: React.FC<IContentHeader> = ({ title = "Meu Titulo" }) => {
  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
      <Controls>
        <span>Controles</span> <span>Controles</span>
      </Controls>
    </Container>
  );
};

export default ContentHeader;
