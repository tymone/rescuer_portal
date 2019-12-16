const date = date => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const currentWeekDate = `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }`;

  return currentWeekDate;
};

export default date;
