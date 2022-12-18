import React from "react";
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { IVariantColor } from "@/types/colors";

import {
  Container,
  Legend,
  SideLeft,
  SideRight,
  LegendContainer,
} from "./styles";
export interface IPieChartsData {
  name: string;
  value: number;
  percent: number;
  color: IVariantColor;
  graphColor: string;
}
interface IPieChartsComponentProps {
  data: IPieChartsData[];
}
const PieChartBox: React.FC<IPieChartsComponentProps> = ({ data }) => (
  <Container className="card">
    <SideLeft>
      <h2> Relação </h2>
      <LegendContainer>
        {data.map((item, index) => (
          <Legend color={item.color} key={index}>
            <div className="tag">{item.percent}%</div>
            <span className="label">{item.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer minHeight={180} minWidth={180} maxHeight={450}>
        <PieChart>
          <Tooltip
            formatter={(value) => `${String(value)}%`}
            contentStyle={{ borderRadius: "2rem" }}
          />
          <Pie data={data} labelLine={false} dataKey="percent">
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.graphColor} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;
