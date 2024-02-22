import moment from "moment";
export const getDate = (date: string) => {
  const [month, day] = date.split("-");
  const year = moment().year();
  const dateFormated = new Date(`${year}-${month}-${day}`);
  const today = new Date();
  return dateFormated < today
    ? `${year}-${month}-${day}`
    : `${year - 1}-${month}-${day}`;
};
