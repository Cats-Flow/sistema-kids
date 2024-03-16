import React from 'react';

interface Props {
  date: Date;
}

const formatWeekday = (date: Date): string => {
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return weekdays[date.getDay()];
};

const formatDate = (date: Date): string => {
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString('pt-BR', { month: 'long' });
  const year = date.getFullYear();
  return `${formatWeekday(date)}, ${dayOfMonth} de ${month} de ${year}`;
};

const Data: React.FC<Props> = ({ date }) => {
  return <h2>{formatDate(date)}</h2>;
};

export default Data;
