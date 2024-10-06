document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); // Toggles the menu links
    hamButton.classList.toggle("open"); // Toggles the hamburger icon
  });
});
