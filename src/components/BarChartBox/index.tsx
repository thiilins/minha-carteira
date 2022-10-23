import React from "react";
import { IVariantColor } from "../../types/colors";
import {
  Container,
  Legend,
  LegendContainer,
  SideLeft,
  SideRight,
} from "./styles";
// import formatCurrency from "@/utils/formatCurrency";
import { ResponsiveContainer, Bar, BarChart, Cell } from "recharts";
export interface IBarChartData {
  name: string;
  amount: number;
  percent: number;
  color: IVariantColor;
  graphColor: string;
}
interface IBarChartBox {
  data: IBarChartData[];
  title: string;
}

const BarChartBox: React.FC<IBarChartBox> = ({ data, title }) => {
  return (
    <Container className="card">
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
          {data.map((item, index) => (
            <Legend color={item.color} key={index}>
              <div>{item.percent}%</div>
              <span className="label">{item.name}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey={"amount"}>
              {data.map((item, index) => (
                <Cell key={`barCell-${index}`} fill={item.graphColor} />
              ))}
            </Bar>
            {/* <Tooltip
              formatter={(value) => formatCurrency(+value)}
              labelStyle={{ color: "transparent" }}
              // contentStyle={{
              //   borderRadius: "2rem",
              //   padding: "1rem",
              //   paddingBottom: "2rem",
              //   backgroundColor: "transparent",
              //   border: 0,
              // }}
            /> */}
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
