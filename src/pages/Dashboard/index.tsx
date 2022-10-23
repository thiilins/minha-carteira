import React, { useMemo, useState, useEffect, useCallback } from "react";

import { PageContainer } from "../styles";
import { Content } from "./styles";
import ContentHeader from "@components/ContentHeader";
import SelectInput from "@components/SelectInput";
import PieChartComponent, { IPieChartsData } from "@components/PieChart";
import HistoryBox from "@components/HistoryBox";
import { inputData, outputData } from "@/data";
import WalletBox from "../../components/WalletBox/index";
import WalletStatus from "@components/WalletStatus";
import listOfMonths from "@utils/months";
import BarChartBox, { IBarChartData } from "@/components/BarChartBox";
import { useTheme } from "@/contexts/ThemeContext";
interface ISelectList {
  value: number;
  label: string;
}
const Dashboard: React.FC = () => {
  const [months, setMonths] = useState<ISelectList[]>([]);
  const [years, setYears] = useState<ISelectList[]>([]);
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const { theme } = useTheme();
  useEffect(() => {
    const uniqueYears: number[] = [];
    [...inputData, ...outputData].forEach((item) => {
      const year = new Date(item.date).getFullYear();
      const actualYear = new Date().getFullYear();
      if (!uniqueYears.includes(year)) uniqueYears.push(year);
      if (!uniqueYears.includes(actualYear)) uniqueYears.push(actualYear);
    });
    const months = listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
    const years = uniqueYears
      .map((item) => ({
        value: item,
        label: String(item),
      }))
      .reverse();
    setMonths(months);
    setYears(years);
  }, []);

  const data = useMemo(() => {
    const currentExpenses = outputData
      .filter((item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === monthSelected && year === yearSelected;
      })
      .map((item) => {
        return { amount: +item.amount, frequency: item.frequency };
      });
    const currentGains = inputData
      .filter((item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === monthSelected && year === yearSelected;
      })
      .map((item) => {
        return { amount: +item.amount, frequency: item.frequency };
      });

    const gains = currentGains.length
      ? currentGains
          .map((item) => item.amount)
          .reduce((acc, item) => acc + item)
      : 0;
    const expenses = currentExpenses.length
      ? currentExpenses
          .map((item) => item.amount)
          .reduce((acc, item) => acc + item)
      : 0;
    return {
      gains,
      expenses,
      currentExpenses,
      currentGains,
      total: gains - expenses,
      entries: currentGains.length + currentExpenses.length,
    };
  }, [monthSelected, yearSelected]);

  const relationsExpensesVersusGains = useMemo(() => {
    const total = data.gains + data.expenses;
    const gainsPercent = Number(((data.gains / total) * 100).toFixed(1));
    const expensesPercents = Number(((data.expenses / total) * 100).toFixed(1));
    const value: IPieChartsData[] = [
      {
        name: "Entradas",
        value: data.gains,
        percent: gainsPercent ? gainsPercent : 0,
        color: "success",
        graphColor: theme.colors.success,
      },
      {
        name: "Saídas",
        value: data.expenses,
        percent: expensesPercents ? expensesPercents : 0,
        color: "error",
        graphColor: theme.colors.error,
      },
    ];
    return value;
  }, [data, theme.colors]);
  const historyData = useMemo(() => {
    return listOfMonths
      .map((month, index) => {
        let amountEntry = 0;
        let amountOutput = 0;
        inputData.forEach((item) => {
          const date = new Date(item.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();
          if (gainMonth === index && gainYear === yearSelected) {
            amountEntry += Number(item.amount);
          }
        });
        outputData.forEach((item) => {
          const date = new Date(item.date);
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();
          if (expenseMonth === index && expenseYear === yearSelected) {
            amountOutput += Number(item.amount);
          }
        });
        return {
          monthNumber: index,

          month: month.slice(0, 3),
          amountEntry: amountEntry ? Number(amountEntry.toFixed(1)) : 0,
          amountOutput: amountOutput ? Number(amountOutput.toFixed(1)) : 0,
        };
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear
        );
      });
  }, [yearSelected]);
  const relationExpensivesRecurrentVersusEventual: IBarChartData[] =
    useMemo(() => {
      let amountEventual = 0;
      let amountRecurrent = 0;
      data.currentExpenses.forEach((item) => {
        return item.frequency === "recorrente"
          ? (amountRecurrent += item.amount)
          : (amountEventual += item.amount);
      });
      const total = amountRecurrent + amountEventual;

      return [
        {
          name: "Recorrentes",
          amount: amountRecurrent ? amountRecurrent : 0,
          percent: amountRecurrent
            ? Number(((amountRecurrent / total) * 100).toFixed(1))
            : 0,
          color: "error",
          graphColor: theme.colors.error,
        },
        {
          name: "Eventuais",
          amount: amountEventual ? amountEventual : 0,
          percent: amountEventual
            ? Number(((amountEventual / total) * 100).toFixed(1))
            : 0,
          color: "success",
          graphColor: theme.colors.success,
        },
      ];
    }, [data.currentExpenses, theme.colors]);
  const relationGainsRecurrentVersusEventual: IBarChartData[] = useMemo(() => {
    let amountEventual = 0;
    let amountRecurrent = 0;
    data.currentGains.forEach((item) => {
      return item.frequency === "recorrente"
        ? (amountRecurrent += item.amount)
        : (amountEventual += item.amount);
    });
    const total = amountRecurrent + amountEventual;

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent ? amountRecurrent : 0,
        percent: amountRecurrent
          ? Number(((amountRecurrent / total) * 100).toFixed(1))
          : 0,
        color: "error",
        graphColor: theme.colors.error,
      },
      {
        name: "Eventuais",
        amount: amountEventual ? amountEventual : 0,
        percent: amountEventual
          ? Number(((amountEventual / total) * 100).toFixed(1))
          : 0,
        color: "success",
        graphColor: theme.colors.success,
      },
    ];
  }, [data.currentGains, theme.colors]);
  return (
    <PageContainer>
      <ContentHeader title="Dashboard" lineColor="red">
        <SelectInput
          options={months}
          onChange={({ currentTarget }) =>
            setMonthSelected(+currentTarget.value)
          }
          value={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={({ currentTarget }) =>
            setYearSelected(+currentTarget.value)
          }
          value={yearSelected}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title="Saldo"
          color="info"
          amount={data.total}
          icon="dollar"
          footerLabel="atualizado com base nas entradas e saídas"
        />
        <WalletBox
          title="Entradas"
          color="success"
          amount={data.gains}
          icon="arrowUp"
          footerLabel="atualizado com base nas entradas e saídas"
        />
        <WalletBox
          title="Saídas"
          color="error"
          amount={data.expenses}
          icon="arrowDown"
          footerLabel="atualizado com base nas entradas e saídas"
        />
        <WalletStatus balance={data.total} entries={data.entries} />
        <PieChartComponent data={relationsExpensesVersusGains} />
        <HistoryBox
          data={historyData}
          year={yearSelected}
          lineColorAmountEntry={theme.colors.success}
          lineColorAmountOutput={theme.colors.error}
          strokeColor={theme.colors.primaryText}
        />
        <BarChartBox
          title="Entradas"
          data={relationGainsRecurrentVersusEventual}
        />
        <BarChartBox
          title="Saídas"
          data={relationExpensivesRecurrentVersusEventual}
        />
      </Content>
    </PageContainer>
  );
};

export default Dashboard;
