const moveMe = document.getElementById("move-me");

const moveSteps = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveSteps;
        break;

      case "ArrowDown":
        y += moveSteps;
        break;

      case "ArrowLeft":
        x -= moveSteps;
        break;

      case "ArrowRight":
        x += moveSteps;
        break;
    }
    moveMe.style.top = `${y}px`;
    moveMe.style.left = `${x}px`;
  }
});

const movable = document.getElementById("move-me");

document.addEventListener("click", (event) => {
  const x = event.clientX - movable.offsetWidth / 2;
  const y = event.clientY - movable.offsetHeight / 2;
  movable.style.left = `${x}px`;
  movable.style.top = `${y}px`;
});
