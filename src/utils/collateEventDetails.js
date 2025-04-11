function collateEventDetails(daysRemaining, eventData) {
  const collatedDetails = {
    eventName: eventData.eventName,
    daysRemaining: daysRemaining,
    imageUrl: eventData.imageUrl,
  };
  return collatedDetails;
}

export default collateEventDetails;
