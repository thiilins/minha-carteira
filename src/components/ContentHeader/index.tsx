import React from "react";
import SelectInput from "../SelectInput";

import { Container, Controls, TitleContainer } from "./styles";
import { IVariantColor } from "../../@types/colors";
interface IContentHeader {
  title?: string;
  children: React.ReactNode;
  lineColor?: IVariantColor;
}
const ContentHeader: React.FC<IContentHeader> = ({
  title = "Meu Titulo",
  children,
  lineColor = "warning",
}) => {
  return (
    <Container className="page__header">
      <TitleContainer tagColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controls>{children}</Controls>
    </Container>
  );
};

export default ContentHeader;
