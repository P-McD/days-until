import calculateDaysUntilDate from "../utils/calculateDaysUntilDate";

describe("calculateDaysUntilDate", () => {
  test("function returns 0 if passed a target date value equal to the current date", () => {
    const testCurrentDate = new Date("2025-04-08");
    const testTargetDate = new Date("2025-04-08");
    const calculatedDays = calculateDaysUntilDate(
      testCurrentDate,
      testTargetDate
    );
    expect(calculatedDays).toBe(0);
  });
  test("function returns correct positive integer if passed a target date value a day later than the current date", () => {
    const testCurrentDate = new Date("2025-04-08");
    const testTargetDate = new Date("2025-04-09");
    const calculatedDays = calculateDaysUntilDate(
      testCurrentDate,
      testTargetDate
    );
    expect(calculatedDays).toBe(1);
  });
  test("function returns correct positive integer if passed a target date value >1 day later than the current date", () => {
    const testCurrentDate = new Date("2025-04-08");
    const testTargetDateChristmas = new Date("2025-12-25");
    const testTargetDateNewYear = new Date("2026-01-01");

    const calculatedDaysUntilChristmas = calculateDaysUntilDate(
      testCurrentDate,
      testTargetDateChristmas
    );
    const calculatedDaysUntilNewYear = calculateDaysUntilDate(
      testCurrentDate,
      testTargetDateNewYear
    );

    expect(calculatedDaysUntilChristmas).toBe(261);
    expect(calculatedDaysUntilNewYear).toBe(268);
  });
});
