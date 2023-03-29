export const formatToSec = (date: Date) => {
  return Math.floor(+new Date(date) / 1000);
};
