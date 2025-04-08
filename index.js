import calculateDaysUntilDate from "./utils/calculateDaysUntilDate.js";
import displayDaysRemaining from "./utils/displayDaysRemaining.js";

function calculateDatesAndDisplay() {
  const currentDate = new Date();
  const christmasDate = new Date("2025-12-25");
  const newYearsDate = new Date("2026-01-01");

  const daysUntilChristmas = calculateDaysUntilDate(currentDate, christmasDate);
  displayDaysRemaining("days-until-christmas", daysUntilChristmas);

  const daysUntilNewYear = calculateDaysUntilDate(currentDate, newYearsDate);
  displayDaysRemaining("days-until-new-year", daysUntilNewYear);
}

calculateDatesAndDisplay();
