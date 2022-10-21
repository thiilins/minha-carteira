import HistoryFinanceCard from "@/components/HistoryFinanceCard";
import { IVariantColor } from "@/types/colors";
import { RiErrorWarningFill } from "react-icons/ri";
import ContentHeader from "@components/ContentHeader";
import SelectInput from "@components/SelectInput";
import listOfMonths from "@utils/months";
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import formatDate from "@utils/formatDate";
import formatCurrency from "@utils/formatCurrency";
import { PageContainer } from "../styles";
import { Content, Filters, FilterBtn, NoContent } from "./styles";
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
  dateFormatted: string;
  tagColor: IVariantColor;
}
const List: React.FC = () => {
  const { action } = useParams();

  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    "recorrente",
    "eventual",
  ]);
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const [data, setData] = useState<IDataState[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );

  const config = useMemo((): IConfigResponse => {
    return action === "output"
      ? { title: "Saídas", color: "warning", values: outputData }
      : { title: "Entradas", color: "success", values: inputData };
  }, [action]);
  useEffect(() => {
    setMonthSelected(new Date().getMonth() + 1);
    setYearSelected(new Date().getFullYear());
    setFrequencyFilterSelected(["recorrente", "eventual"]);
  }, [action]);
  const dropdownData = useMemo(() => {
    const uniqueYears: number[] = [];
    config.values.forEach((item) => {
      const year = new Date(item.date).getFullYear();
      const actualYear = new Date().getFullYear();
      if (!uniqueYears.includes(year)) uniqueYears.push(year);
      if (!uniqueYears.includes(actualYear)) uniqueYears.push(actualYear);
    });

    return {
      years: uniqueYears
        .map((item) => ({
          value: item,
          label: String(item),
        }))
        .reverse(),
      months: listOfMonths.map((month, index) => {
        return {
          value: index + 1,
          label: month,
        };
      }),
    };
  }, [config.values]);
  useEffect(() => {
    const response: IDataState[] = config.values
      .filter((item) => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return (
          month === monthSelected &&
          year === yearSelected &&
          frequencyFilterSelected.includes(item.frequency)
        );
      })
      .map((item) => {
        return {
          description: item.description,
          amountFormatted: formatCurrency(+item.amount),
          dateFormatted: formatDate(item.date),
          tagColor: item.frequency !== "eventual" ? "success" : "warning",
        };
      });
    return setData(response);
  }, [config.values, monthSelected, frequencyFilterSelected, yearSelected]);
  const handleFrequencyClick = useCallback(
    (frequency: string) => {
      const alreadySelected = frequencyFilterSelected.findIndex(
        (item) => item === frequency
      );
      if (alreadySelected >= 0) {
        const filtered = frequencyFilterSelected.filter(
          (item) => item !== frequency
        );
        setFrequencyFilterSelected(filtered);
      } else {
        setFrequencyFilterSelected([...frequencyFilterSelected, frequency]);
      }
    },
    [frequencyFilterSelected]
  );
  return (
    <PageContainer>
      <ContentHeader title={config.title} lineColor={config.color}>
        <SelectInput
          options={dropdownData.months}
          onChange={({ currentTarget }) =>
            setMonthSelected(+currentTarget.value)
          }
          value={monthSelected}
        />
        <SelectInput
          options={dropdownData.years}
          onChange={({ currentTarget }) =>
            setYearSelected(+currentTarget.value)
          }
          value={yearSelected}
        />
      </ContentHeader>
      <Content>
        <Filters>
          <FilterBtn
            type="button"
            tagColor="success"
            isActive={frequencyFilterSelected.includes("recorrente")}
            onClick={() => handleFrequencyClick("recorrente")}
          >
            Recorrentes
          </FilterBtn>
          <FilterBtn
            type="button"
            tagColor="warning"
            isActive={frequencyFilterSelected.includes("eventual")}
            onClick={() => handleFrequencyClick("eventual")}
          >
            Eventuais
          </FilterBtn>
        </Filters>
        {data.length ? (
          data.map((item, index) => (
            <HistoryFinanceCard
              key={index}
              amount={item.amountFormatted}
              title={item.description}
              subtitle={item.dateFormatted}
              tagColor={item.tagColor}
            />
          ))
        ) : (
          <NoContent>
            <RiErrorWarningFill />
            Nenhuma {action === "output" ? "saída" : "entrada"} encontrada para
            o mês selecionado
            {frequencyFilterSelected.length < 2
              ? " com os filtros aplicados!"
              : "!"}
          </NoContent>
        )}
      </Content>
    </PageContainer>
  );
};

export default List;
