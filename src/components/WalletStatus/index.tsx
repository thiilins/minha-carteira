import React, { useMemo } from "react";
import happyImg from "@assets/happy.svg";
import sadImg from "@assets/sad.svg";
import snoozeImg from "@assets/snooze.svg";
import { Container, Content } from "./styles";
import grinningImg from "@assets/grinning.svg";
interface IWalletStatusProps {
  balance: number;
  entries: number;
}
const WalletStatus: React.FC<IWalletStatusProps> = ({ balance, entries }) => {
  const data = useMemo(() => {
    if (entries > 0) {
      if (balance === 0) {
        return {
          img: grinningImg,
          title: "Ufaa!",
          description: "Neste mês, você gastou exatamente o que ganhou.",
          footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
        };
      }
      return balance > 0
        ? {
            img: happyImg,
            title: "Muito bem!",
            description: "Sua carteira está positiva!",
            footerText: "Continue assim. Considere investir o seu saldo.",
          }
        : {
            img: sadImg,
            title: "Poxa!",
            description: "Neste mês, você gastou mais do que deveria.",
            footerText:
              "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
          };
    } else {
      return {
        img: snoozeImg,
        title: "Op's!",
        description: "Neste mês, não há registros de entradas ou saídas.",
        footerText:
          "Parece que você não fez nenhum registro no mês e ano selecionado.",
      };
    }
  }, [balance, entries]);
  return (
    <Container className="card status__box">
      <img src={data.img} alt="status" />
      <Content>
        <div className="header">
          <h1>{data.title}</h1> <span>{data.description}</span>
        </div>
        <small>{data.footerText}</small>
      </Content>
    </Container>
  );
};

export default WalletStatus;
