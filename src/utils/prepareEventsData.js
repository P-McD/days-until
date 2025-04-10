import calculateDaysUntilDate from "./calculateDaysUntilDate";
import collateEventDetails from "./collateEventDetails";
import findDateInMilliseconds from "./findDateInMilliseconds";

function prepareEventsData(rawEventsData, currentDate) {
  const preparedData = rawEventsData.map((rawEvent) => {
    const targetDate = findDateInMilliseconds(
      rawEvent.monthAndDay,
      currentDate
    );
    const daysRemaining = calculateDaysUntilDate(currentDate, targetDate);
    return collateEventDetails(daysRemaining, rawEvent);
  });
  return preparedData;
}

export default prepareEventsData;
