import CountdownList from "../components/organisms/CountdownList";
import React from "react";
import prepareEventsData from "../utils/prepareEventsData";
import eventList from "../data/events";

function Home() {
  const currentDate = new Date();
  const eventsData = prepareEventsData(eventList, currentDate);
  return (
    <>
      <CountdownList eventsData={eventsData}></CountdownList>
    </>
  );
}

export default Home;
