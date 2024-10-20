document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector("#hamburgerMenu");
  const navigation = document.querySelector(".navigation");

  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
  });
});
