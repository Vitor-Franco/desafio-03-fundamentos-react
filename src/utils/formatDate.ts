const formatDate = (date: Date): string => {
  const dateExpression = new Date(date);

  return dateExpression.toLocaleDateString('pt-BR');
};
export default formatDate;
