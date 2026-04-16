// Get the element for displaying time
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Function to update time in milliseconds
function updateTime() {
  const now = Date.now();
  timeElement.textContent = `${now} ms`;
}

// Update immediately
updateTime();

// Update every second (1000 ms) as per requirement (refresh every 500-1000ms is allowed)
setInterval(updateTime, 1000);