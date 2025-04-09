import calculateDaysUntilDate from "./utils/calculateDaysUntilDate.js";
import displayDaysRemaining from "./utils/displayDaysRemaining.js";
import eventList from "./data/events.js";
import findDateInMilliseconds from "./utils/findDateInMilliseconds.js";

function calculateDatesAndDisplay(eventDatesWithIds) {
  const currentDate = new Date();

  for (const { monthAndDay, elementId } of eventDatesWithIds) {
    const targetDate = findDateInMilliseconds(monthAndDay, currentDate);
    const daysUntilTarget = calculateDaysUntilDate(currentDate, targetDate);
    displayDaysRemaining(elementId, daysUntilTarget);
  }
}

calculateDatesAndDisplay(eventList);
