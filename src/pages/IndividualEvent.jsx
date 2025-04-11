import React from "react";
import { useParams } from "react-router-dom";
import eventList from "../data/events";
import prepareEventsData from "../utils/prepareEventsData";
import { Card } from "@mui/material";
import CopyLinkButton from "../components/atoms/CopyLinkButton";

function IndividualEvent() {
  const currentDate = new Date();
  const eventName = useParams().event_name;
  const eventsData = prepareEventsData(eventList, currentDate);

  const relevantEventData = eventsData.filter(
    (eventItem) => eventItem.eventName === eventName
  )[0];
  console.log(relevantEventData);

  return (
    <>
      <img
        src={relevantEventData.imageUrl}
        className="individual-event-img"
      ></img>
      <Card sx={{ padding: 10 }}>
        <h1 className="individual-event">{eventName}</h1>
        <p>is only</p>
        <h1>{relevantEventData.daysRemaining}</h1>
        <p>days away!</p>
        <br></br>
        <p>Share the news:</p>
        <CopyLinkButton
          url={`daysuntilwebsite.com/countdown/${eventName}`}
        ></CopyLinkButton>
      </Card>
    </>
  );
}

export default IndividualEvent;
