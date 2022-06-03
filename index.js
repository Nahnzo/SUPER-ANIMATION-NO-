const button = document.querySelector(".btn");
const box = document.querySelector(".box1");
const refresh = document
  .querySelector(".refresh")
  .addEventListener("click", () => {
    location.reload();
  });
button.addEventListener("click", () => {
  box.classList.add("box2");
});
