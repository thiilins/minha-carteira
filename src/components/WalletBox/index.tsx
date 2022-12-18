import { IVariantColor } from "@/types/colors";
import React, { useCallback } from "react";
// import dollarIcon from "@assets/dollar.svg";
// import arrowUpIcon from "@assets/arrow-up.svg";
// import arrowDownIcon from "@assets/arrow-down.svg";
import { Container, Footer, Header } from "./styles";
import expensesImg from "@assets/expense.svg";
import balance from "@assets/balance.svg";
import incomesImg from "@assets/income.svg";
import CountUp from "react-countup";
interface IWalletBoxProps {
  color: IVariantColor;
  title: string;
  amount: number;
  footerLabel: String;
  icon: "dollar" | "arrowUp" | "arrowDown";
  secondIcon?: string;
}
const WalletBox: React.FC<IWalletBoxProps> = ({
  amount,
  color,
  footerLabel,
  icon,
  title,
}) => {
  const iconSelected = useCallback(() => {
    const iconOptions = {
      dollar: balance,
      arrowUp: incomesImg,
      arrowDown: expensesImg,
    };
    return iconOptions[icon];
  }, [icon]);
  return (
    <Container bgColor={color} className="card walletBox">
      <Header>
        <span>{title}</span>
        <h2>
          <CountUp
            end={amount}
            prefix={"R$ "}
            separator="."
            decimal=","
            decimals={2}
          />
        </h2>
      </Header>

      <Footer>{footerLabel}</Footer>
      <img
        className={`icon ${icon === "dollar" && "big_icon"}`}
        src={iconSelected()}
        alt={title}
      />
    </Container>
  );
};

export default WalletBox;
