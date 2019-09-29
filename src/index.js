const width = 320;
const height = 240;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let size = { width: 50, height: 50 };
let position = { x: 0, y: 0 };
let velocity = { x: 1, y: 1 };

canvas.width = width;
canvas.height = height;

function draw() {
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0, width, height);

  position.x += velocity.x;
  position.y += velocity.y;

  if (position.x + size.width > width || position.x < 0) {
    velocity.x = -velocity.x;
  }

  if (position.y + size.height > height || position.y < 0) {
    velocity.y = -velocity.y;
  }

  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(position.x, position.y, size.width, size.height);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 50, 50);
}

draw();