import { format, parseISO, differenceInYears } from "date-fns";

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "d MMMM");
  const age = differenceInYears(new Date(), date);
  return { formattedDate, age };
};
