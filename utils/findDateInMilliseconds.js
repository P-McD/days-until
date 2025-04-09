function findDateInMilliseconds(monthDayString, currentDate) {
  const currentYear = currentDate.getFullYear();
  const targetDateString = `${currentYear}-${monthDayString}`;
  return new Date(targetDateString);
}
export default findDateInMilliseconds;
