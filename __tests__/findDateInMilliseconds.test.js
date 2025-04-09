import findDateInMilliseconds from "../utils/findDateInMilliseconds";

describe("findDateInMilliseconds", () => {
  test("function returns the date in milliseconds for the current year when passed a day and month which is later in the year than the current date", () => {
    const testCurrentDate = new Date("2025-03-30");
    const futureMonthAndDay = "03-31";

    const futureMillisecondsExpected = new Date("2025-03-31");
    const futureMillisecondsActual = findDateInMilliseconds(futureMonthAndDay, testCurrentDate);
    expect(futureMillisecondsActual).toEqual(futureMillisecondsExpected);
  });
  test("function returns the date in milliseconds for the current year when passed a day and month which is earlier in the year than the current date", () => {
    const testCurrentDate = new Date("2025-03-30");
    const futureMonthAndDay = "03-29";

    const futureMillisecondsExpected = new Date("2026-03-29");
    const futureMillisecondsActual = findDateInMilliseconds(futureMonthAndDay, testCurrentDate);
    expect(futureMillisecondsActual).toEqual(futureMillisecondsExpected);
  });
});
