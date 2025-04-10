import "./App.css";
import CountdownList from "./components/CountdownList";
import calculateDaysUntilDate from "./utils/calculateDaysUntilDate";
import collateEventDetails from "./utils/collateEventDetails";
import findDateInMilliseconds from "./utils/findDateInMilliseconds";

function prepareEventsData(rawEventsData) {
  const currentDate = new Date();

  for (const event of rawEventsData) {
    const targetDate = findDateInMilliseconds(event.monthAndDay, currentDate);
    const daysRemaining = calculateDaysUntilDate(currentDate, targetDate);
    const preparedData = collateEventDetails(daysRemaining, event);

    return preparedData;
  }
}
function App() {
  return (
    <>
      <CountdownList></CountdownList>
    </>
  );
}

export default App;
