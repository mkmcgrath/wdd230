document.addEventListener("DOMContentLoaded", function () {
  const sidebarMessage = document.getElementById("visitMessage");

  const lastVisit = localStorage.getItem("lastVisit");
  const currentTime = Date.now();

  if (lastVisit) {
    const daysSinceLastVisit = Math.floor(
      (currentTime - lastVisit) / (1000 * 60 * 60 * 24),
    );

    if (daysSinceLastVisit < 1) {
      sidebarMessage.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
      sidebarMessage.textContent = "You last visited 1 day ago.";
    } else {
      sidebarMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
  } else {
    sidebarMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  }

  localStorage.setItem("lastVisit", currentTime);
});
