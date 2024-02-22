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
import { actualMonth, actualYear } from "@/utils/getActualDate";

interface ISelectList {
  value: number;
  label: string;
}

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  const [yearSelected, setYearSelected] = useState<number>(actualYear);
  const [monthSelected, setMonthSelected] = useState<number>(actualMonth);
  const listMonths = useMemo(() => {
    return listOfMonths.map(
      (month, index) => ({
        value: index + 1,
        label: month,
      }),
      []
    );
  }, [yearSelected, actualYear, actualMonth]);

  const [months, setMonths] = useState<ISelectList[]>(
    listMonths.slice(0, actualMonth)
  );
  const [years, setYears] = useState<ISelectList[]>([]);
  useEffect(() => {
    const uniqueYears = new Set(
      [
        ...inputData,
        ...outputData,
        { date: new Date().toISOString() }, // Inclui o ano atual garantindo que ele esteja na lista
      ].map((item) => new Date(item.date).getFullYear())
    );

    const years = Array.from(uniqueYears)
      .sort((a, b) => b - a)
      .map((year) => ({
        value: year,
        label: String(year),
      }));

    setYears(years);
  }, []);

  const changeYearSelected = useCallback(
    (year: number) => {
      let newMonths = listMonths.slice(0, actualMonth);

      setMonths((prev) =>
        prev.length === newMonths.length ? prev : newMonths
      );
      setYearSelected(year);
    },
    [listMonths, actualYear, actualMonth]
  );

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
        color: "warning",
        graphColor: theme.colors.warning,
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
          color: "warning",
          graphColor: theme.colors.warning,
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
        color: "warning",
        graphColor: theme.colors.warning,
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
            changeYearSelected(+currentTarget.value)
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
          color="warning"
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
          lineColorAmountEntry={theme.colors.warning}
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
