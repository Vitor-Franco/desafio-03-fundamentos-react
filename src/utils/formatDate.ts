const formatDate = (date: Date): string => {
  const dateExpression = new Date(date);
  const handleDateMonth = dateExpression.getMonth() + 1;
  const handleDateDay = dateExpression.getDate();
  const handleDateYear = dateExpression.getFullYear();

  return `${handleDateDay}/${handleDateMonth}/${handleDateYear}`;
};
export default formatDate;
