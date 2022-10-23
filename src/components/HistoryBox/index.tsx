import React from "react";
import formatCurrency from "@/utils/formatCurrency";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Container, Header, Legend, LegendContainer } from "./styles";
export interface IHistoryBoxData {
  month: string;
  amountEntry: number;
  amountOutput: number;
}
interface IHistoryBoxProps {
  data: IHistoryBoxData[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
  year: string | number;
  strokeColor: string;
}
const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
  strokeColor,
  year,
}) => (
  <Container className="card history__card">
    <Header>
      <h2>Histórico de Saldo</h2>
      <LegendContainer>
        <Legend color={lineColorAmountEntry}>
          <div />
          Entradas
        </Legend>
        <Legend color={lineColorAmountOutput}>
          <div />
          Saídas
        </Legend>
      </LegendContainer>
    </Header>
    <ResponsiveContainer minHeight={150}>
      <LineChart
        data={data}
        margin={{ bottom: 5, right: 20, left: 20, top: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={strokeColor} />
        <XAxis dataKey="month" stroke={strokeColor} />
        <Tooltip
          formatter={(value) => formatCurrency(Number(value))}
          contentStyle={{
            borderRadius: "2rem",
            padding: "1rem",
            paddingBottom: "2rem",
          }}
        />
        <Line
          type="monotone"
          dataKey={"amountEntry"}
          name="Entradas"
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey={"amountOutput"}
          name="Saídas"
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

export default HistoryBox;
