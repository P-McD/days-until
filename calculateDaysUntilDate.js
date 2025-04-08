function calculateDaysUntilDate (currentDate, targetDate) {
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const millisecondsBetweenDates = targetDate - currentDate;
    const daysUntilTargetDate = Math.round(millisecondsBetweenDates / millisecondsInADay);
    return daysUntilTargetDate;

}

export default calculateDaysUntilDate;