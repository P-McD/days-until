const { calculateDaysUntilDate } = require("../calculateDaysUntilDate");

describe("calculateDaysUntilDate", () => {
  test("function returns 0 if passed a target date value equal to the current date", () => {
    const testCurrentDate = new Date("2025-04-08");
    const testTargetDate = new Date("2025-08-04");
    const calculatedDays = calculateDaysUntilDate(
      testCurrentDate,
      testTargetDate
    );
    expect(calculatedDays).toBe(0);
  });
});
