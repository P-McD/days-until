function calculateDaysUntilDate (currentDate, targetDate) {
    const daysUntilTargetDate = Math.round((targetDate - currentDate) / (1000 * 60 * 60 * 24));
    return daysUntilTargetDate;

}

export default calculateDaysUntilDate;