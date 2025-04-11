import React from "react";
import CountdownCard from "../molecules/CountdownCard";
import { Box, Grid } from "@mui/material";
function CountdownList({ eventsData }) {
  return (
    <div>
      <h2>Popular Countdowns</h2>
      <div className="countdown-card-list">
      <Box display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
      gap={2} >
        {eventsData.map((event) => {
          return (
            <div key={event.eventName} className="grow-element">
              <CountdownCard event={event} />
            </div>
          );
        })}
      </Box>
      </div>
    </div>
  );
}

export default CountdownList;
