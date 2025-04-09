# Extra thoughts

## Section 1 

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

This became the following in the final version for Task 1:

```js
  const currentDate = new Date();
  const christmasDate = new Date("2025-12-25");
  const newYearsDate = new Date("2026-01-01");

  const daysUntilChristmas = calculateDaysUntilDate(currentDate, christmasDate);
  displayDaysRemaining("days-until-christmas", daysUntilChristmas);

  const daysUntilNewYear = calculateDaysUntilDate(currentDate, newYearsDate);
  displayDaysRemaining("days-until-new-year", daysUntilNewYear);
```

## Section 2

In Section 2, I refactored my code to use the more dynamic approach I had initially used in Section 1 as it was more appropriate given a growing number of dates to display.

In the `findDateInMilliseconds` function, I debated as to whether or not the `targetDateString` variable was overly redundant. 

In this case, the following code

```js
let targetDateString = `${currentYear}-${monthDayString}`;
let targetDateInMilliseconds = new Date(targetDateString);
```
would have otherwise become the more compact:

```js
let targetDateInMilliseconds = new Date(`${currentYear}-${monthDayString}`);

```
However, I thought that putting together the date string might otherwise look a bit confusing at first glance, so I opted to do so. 

I also avoided using a ternary and instead used an `if` statement for clarity.
