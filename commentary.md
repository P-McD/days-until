# Extra thoughts

Below is an approach I considered for Task 1 which is more reusable and would be easier to extend if other dates were going to be added. However, in the end I decided that it was less readable at a glance and that the trade off wasn't worth it when dealing with only 2 sections for the task brief.

```js
// Simple array to store the data, easier to extend in the future
const dateList = [
  { dateString: "2025-12-25", elementId: "days-until-christmas" },
  { dateString: "2026-01-01", elementId: "days-until-new-year" },
];

function calculateDatesAndDisplay(datesToCalculateWithIds) {
  const currentDate = new Date();

  for (const { dateString, elementId } of datesToCalculateWithIds) {
    const targetDate = new Date(dateString);
    const daysUntilTarget = calculateDaysUntilDate(currentDate, targetDate);
    displayDaysRemaining(elementId, daysUntilTarget);
  }
}

calculateDatesAndDisplay(dateList);
```