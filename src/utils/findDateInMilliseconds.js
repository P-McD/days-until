function findDateInMilliseconds(monthDayString, currentDate) {
  const currentYear = currentDate.getFullYear();
  let targetDateString = `${currentYear}-${monthDayString}`;
  let targetDateInMilliseconds = new Date(targetDateString);

  if (targetDateInMilliseconds < currentDate) {
    targetDateString = `${currentYear + 1}-${monthDayString}`;
    targetDateInMilliseconds = new Date(targetDateString);
  }

  return targetDateInMilliseconds;
}
export default findDateInMilliseconds;
