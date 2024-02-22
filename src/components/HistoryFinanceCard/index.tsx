import { IVariantColor } from "@/@types/colors";
import React from "react";

import { Container, Tag, AmountContainer, TitleContainer } from "./styles";
interface IHistoryFinanceCardProps {
  tagColor: IVariantColor;
  title: string;
  subtitle: string;
  amount: string;
}
const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  amount,
  subtitle,
  tagColor,
  title,
}) => {
  return (
    <Container>
      <Tag color={tagColor} />
      <TitleContainer>
        <span>{title}</span>
        <small>{subtitle}</small>
      </TitleContainer>
      <AmountContainer>{amount}</AmountContainer>
    </Container>
  );
};

export default HistoryFinanceCard;
