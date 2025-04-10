function displayDaysRemaining(elementId, daysRemaining) {
  const daysElement = document.getElementById(elementId);
  daysElement.innerText = daysRemaining;
}

export default displayDaysRemaining;
