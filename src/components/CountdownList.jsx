import React from "react";
import CountdownCard from "./CountdownCard";
function CountdownList({ eventsData }) {
  console.log(eventsData, "hola");
  return (
    <div>
      <h2>Popular Countdowns</h2>
      <div className="countdown-list-items">
        {eventsData.map((event) => {
          return <CountdownCard event={event} />;
        })}
      </div>
    </div>
  );
}

export default CountdownList;
