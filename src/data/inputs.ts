/* eslint-disable import/no-anonymous-default-export */
import { getDate } from "@/utils/getDate";
export default [
  {
    description: "Salário",
    amount: "1300.52",
    type: "entrada",
    frequency: "recorrente",
    date: getDate(`01-10`),
  },
  {
    description: "Freela",
    amount: "150.13",
    type: "entrada",
    frequency: "eventual",
    date: getDate(`01-17`),
  },
  {
    description: "Salário",
    amount: "2500.23",
    type: "entrada",
    frequency: "recorrente",
    date: getDate(`02-10`),
  },
  {
    description: "Freela site",
    amount: "900.23",
    type: "entrada",
    frequency: "eventual",
    date: getDate(`02-21`),
  },
  {
    description: "Freela app",
    amount: "950.92",
    type: "entrada",
    frequency: "eventual",
    date: getDate(`02-23`),
  },
  {
    description: "Salário",
    amount: "2500.25",
    type: "entrada",
    frequency: "recorrente",
    date: getDate(`03-10`),
  },
  {
    description: "Salário",
    amount: "2500.18",
    type: "entrada",
    frequency: "recorrente",
    date: getDate(`04-10`),
  },
  {
    description: "Salário",
    amount: "2500.15",
    type: "entrada",
    frequency: "recorrente",
    date: getDate(`05-10`),
  },
  {
    description: "Salário",
    amount: "2500.12",
    type: "entrada",
    frequency: "recorrente",
    date: getDate(`06-10`),
  },
  {
    description: "Salário",
    amount: "2500.00",
    type: "entrada",
    frequency: "recorrente",
    date: getDate(`07-10`),
  },
];
