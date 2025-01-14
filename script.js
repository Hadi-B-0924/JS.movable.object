const moveMe = document.getElementById("moveMe");

const moveAmount = 15;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;

      case "ArrowDown":
        y += moveAmount;
        break;

      case "ArrowLeft":
        x -= moveAmount;
        break;

      case "ArrowRight":
        x += moveAmount;
        break;
    }
    moveMe.style.top = `${y}px`;
    moveMe.style.left = `${x}px`;
  }
});
