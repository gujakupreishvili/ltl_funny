const b = document.querySelector(".no");
const yes = document.querySelector(".yes");
const finish = document.querySelector(".finish");

function moveHover() {
  const i = Math.floor(Math.random() * 500) + 1;
  const j = Math.floor(Math.random() * 500) + 1;

  b.style.left = i + "px";
  b.style.top = j + "px";
}
b.addEventListener("mouseover", moveHover);

// function changeBackground() {
//   document.body.style.backgroundColor = 'green'; // Change background color to green
//   finish.display.block
// }

b.addEventListener("mouseover", moveHover);
const container = document.querySelector(".container");
const hover_container = document.querySelector(".hover_diuv");
yes.addEventListener("click", () => {
  container.style.display = "none";
  hover_container.style.display = "block";
});
