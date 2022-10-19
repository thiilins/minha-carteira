import HistoryFinanceCard from "@/components/HistoryFinanceCard";
import { IVariantColor } from "@/types/colors";
import ContentHeader from "@components/ContentHeader";
import SelectInput from "@components/SelectInput";
import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import formatDate from "@utils/formatDate";
import formatCurrency from "@utils/formatCurrency";
import { PageContainer } from "../styles";
import { Content, Filters, FilterBtn } from "./styles";
import { inputData, outputData } from "@/data";
interface IListData {
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
}
interface IConfigResponse {
  title: string;
  color: IVariantColor;
  values: IListData[];
}
interface IDataState {
  description: string;
  amountFormatted: string;
  dataFormatted: string;
  tagColor: IVariantColor;
}
const List: React.FC = () => {
  const { action } = useParams();
  const months = [
    {
      value: 1,
      label: "Janeiro",
    },
    {
      value: 2,
      label: "Fevereiro",
    },
    {
      value: 3,
      label: "Março",
    },
    {
      value: 4,
      label: "Abril",
    },
    {
      value: 5,
      label: "Maio",
    },
    {
      value: 7,
      label: "Junho",
    },
    {
      value: 7,
      label: "Julho",
    },

    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
    {
      value: 10,
      label: "Outubro",
    },
    {
      value: 11,
      label: "Novembro",
    },
    {
      value: 12,
      label: "Dezembro",
    },
  ];
  const years = [
    { value: 2018, label: "2018" },
    { value: 2019, label: "2019" },
    { value: 2020, label: "2020" },
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
  ].reverse();

  const [data, setData] = useState<IDataState[]>([]);
  const config = useMemo((): IConfigResponse => {
    return action === "output"
      ? { title: "Saídas", color: "success", values: outputData }
      : { title: "Entradas", color: "warning", values: inputData };
  }, [action]);
  useEffect(() => {
    const loadData = () => {
      const response: IDataState[] = config.values.map((item) => {
        return {
          description: item.description,
          amountFormatted: formatCurrency(+item.amount),
          dataFormatted: formatDate(item.date),
          tagColor: item.frequency === "eventual" ? "success" : "warning",
        };
      });
      return setData(response);
    };
    loadData();
  }, [config.values]);
  return (
    <PageContainer>
      <ContentHeader title={config.title} lineColor={config.color}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Content>
        <Filters>
          <FilterBtn type="button" tagColor="warning">
            Recorrentes
          </FilterBtn>
          <FilterBtn type="button" tagColor="success">
            Eventuais
          </FilterBtn>
        </Filters>
        {data.map((item, index) => (
          <HistoryFinanceCard
            key={index}
            amount={item.amountFormatted}
            title={item.description}
            subtitle={item.dataFormatted}
            tagColor={item.tagColor}
          />
        ))}
      </Content>
    </PageContainer>
  );
};

export default List;
