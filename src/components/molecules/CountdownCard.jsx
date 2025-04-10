import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CountdownCardContent from "../atoms/CountdownCardContent";
import { Link } from "react-router-dom";

function CountdownCard({ event: { eventName, daysRemaining, imageUrl } }) {
  return (
    <Link to={`/countdown/${eventName}`}>
    <Card key={eventName} sx={{ cursor: "pointer" }}>
      <CardMedia
        sx={{ minHeight: "30vh", minWidth: "30vw" }}
        image={imageUrl}
        title={eventName}
      />
      <CountdownCardContent
        eventName={eventName}
        daysRemaining={daysRemaining}
      />
    </Card>
    </Link>
  );
}

export default CountdownCard;
