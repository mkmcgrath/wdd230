document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector(".switch input");
  const body = document.body;

  darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode", darkModeToggle.checked);
  });
});
