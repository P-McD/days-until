import React from "react";
import CountdownCard from "./CountdownCard";
function CountdownList(events) {
  return (
    <div>
      <h2>Popular Countdowns</h2>
      {events.forEach((event) => {<CountdownCard event={event}/>})}
    </div>
  );
}

export default CountdownList;
