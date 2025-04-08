import calculateDaysUntilDate from "./calculateDaysUntilDate.js";

function calculateDatesAndDisplay() {
  const currentDate = new Date();
  const christmasDate = new Date("2025-12-25");
  const newYearsDate = new Date("2026-01-01");

  const daysUntilChristmas = calculateDaysUntilDate(currentDate, christmasDate);
  const christmasElement = document.getElementById("my-element");
  christmasElement.innerText = daysUntilChristmas;

  const daysUntilNewYear = calculateDaysUntilDate(currentDate, newYearsDate);
  const newYearsElement = document.getElementById("my-element");
  newYearsElement.innerText = daysUntilNewYear;
}

calculateDatesAndDisplay();
