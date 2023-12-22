import { format, isValid } from "date-fns";

export const formatDate = (date: Date | string): string => {
  const isValidDate = isValid(new Date(date));
  if (!isValidDate) return "invalidDate";

  return format(new Date(date), "dd.MM.yyy");
};
