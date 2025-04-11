import prepareEventsData from "../src/utils/prepareEventsData";

describe("prepareEventsData", () => {
  test("formats the raw event data correctly when given an array containing a single event object", () => {
    const testCurrentDate = new Date("2025-04-11");
    const testEventData = [
      {
        monthAndDay: "02-14",
        eventName: "Test Day",
        imageUrl:
          "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/12/92946.jpg",
      },
    ];
    const preparedData = prepareEventsData(testEventData, testCurrentDate);
    expect(preparedData).toHaveLength(1);
    expect(preparedData[0]).toHaveProperty("eventName", "Test Day");
    expect(preparedData[0]).toHaveProperty("daysRemaining", 309);
    expect(preparedData[0]).toHaveProperty(
      "imageUrl",
      testEventData[0].imageUrl
    );
  });
  test("formats the raw event data correctly when given an array containing multiple event objects", () => {
    const testCurrentDate = new Date("2025-04-11");
    const testEventData = [
      {
        monthAndDay: "02-14",
        eventName: "Test Day",
        imageUrl:
          "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/12/92946.jpg",
      },
      {
        monthAndDay: "02-15",
        eventName: "Test Day 2",
        imageUrl:
          "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/12/92946.jpg",
      },
    ];
    const preparedData = prepareEventsData(testEventData, testCurrentDate);
    expect(preparedData).toHaveLength(2);
    console.log(preparedData)
    preparedData.forEach((eventObject) => {
      expect(eventObject).toHaveProperty("eventName"),
        expect(eventObject).toHaveProperty("daysRemaining"),
        expect(eventObject).toHaveProperty("imageUrl");
    });
  });
});
