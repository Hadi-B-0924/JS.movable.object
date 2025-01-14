const moveMe = document.getElementById("moveMe");

const moveSteps = 15;
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
    moveSteps.style.top = `${y}px`;
    moveSteps.style.left = `${x}px`;
  }
});
