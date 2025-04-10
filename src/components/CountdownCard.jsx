import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CountdownCard({event : {eventName, daysRemaining, imageUrl}}) {

  return (
    <Card sx={{ width: "30vw" }}>
      <CardMedia
        sx={{ height: "30vh" }}
        image={imageUrl}
        title={eventName}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {daysRemaining}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Days until {eventName}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default CountdownCard