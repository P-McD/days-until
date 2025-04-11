import { CardContent, Typography } from '@mui/material'
import React from 'react'

function CountdownCardContent({daysRemaining, eventName}) {
  return (
    <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {daysRemaining}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Days until {eventName}
        </Typography>
      </CardContent>
  )
}

export default CountdownCardContent