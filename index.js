import calculateDaysUntilDate from "./calculateDaysUntilDate.js";

function calculateDatesAndDisplay() {
  const currentDate = new Date();
  const christmasDate = new Date("2025-12-25");
  const newYearsDate = new Date("2026-01-01");

  const daysUntilChristmas = calculateDaysUntilDate(currentDate, christmasDate);
  const christmasDaysElement = document.getElementById("days-until-christmas");
  christmasDaysElement.innerText = daysUntilChristmas;

  const daysUntilNewYear = calculateDaysUntilDate(currentDate, newYearsDate);
  const newYearsDaysElement = document.getElementById("days-until-new-year");
  newYearsDaysElement.innerText = daysUntilNewYear;
}

calculateDatesAndDisplay();
