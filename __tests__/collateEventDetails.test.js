import collateEventDetails from "../src/utils/collateEventDetails";

describe("collateEventDetails", () => {
  test("collates event details to create an object with the correct daysRemaining, imageUrl, and eventName properties", () => {
    const testEventData = {
      monthAndDay: "02-14",
      eventName: "Test Day",
      imageUrl:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/12/92946.jpg",
    };
    const testDaysRemaining = 12;
    const createdEventObject = collateEventDetails(
      testDaysRemaining,
      testEventData
    );

    expect(createdEventObject).toHaveProperty("eventName", "Test Day");
    expect(createdEventObject).toHaveProperty("daysRemaining", 12);
    expect(createdEventObject).toHaveProperty(
      "imageUrl",
      testEventData.imageUrl
    );
  });
});
