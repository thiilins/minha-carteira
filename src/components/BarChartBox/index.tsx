import React from "react";
import { IVariantColor } from "../../@types/colors";
import {
  Container,
  Legend,
  LegendContainer,
  SideLeft,
  SideRight,
} from "./styles";
// import formatCurrency from "@/utils/formatCurrency";
import { ResponsiveContainer, Bar, BarChart, Cell, Tooltip } from "recharts";
import formatCurrency from "@/utils/formatCurrency";
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
            <Legend color={item.color} className="tag" key={index}>
              <div className="tag">{item.percent}%</div>
              <span className="label">{item.name}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey={"amount"} name="valor">
              {data.map((item, index) => (
                <Cell key={`barCell-${index}`} fill={item.graphColor} />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value) => formatCurrency(+value)}
              labelStyle={{ color: "transparent" }}
              itemStyle={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "1rem",
              }}
              contentStyle={{
                backgroundColor: "transparent",
                border: 0,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
