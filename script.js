function updateClock() {
    const clockElement = document.getElementById("digital-clock");
    const currentTime = new Date();
    clockElement.textContent = currentTime.toLocaleTimeString();
  }
  
  // Initial call to display the time right away
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  