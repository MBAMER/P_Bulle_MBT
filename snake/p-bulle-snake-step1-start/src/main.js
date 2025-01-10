import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let Timer = 0;
let timerInterval;
window.food = generateFood(box, canvas);
let direction = "RIGHT";
window.score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  snake = initSnake();
  direction = "RIGHT";
  Timer = 0;
  score = 0;
  replaybutton.style.display = "none";
  gameInterval = setInterval(() => {
    update();
    draw();
  }, gameSpeed); // Stockage de l'identifiant de l'intervalle
  timerInterval = setInterval(updateTimer, 1000); // Démarre le timer
}

function updateTimer() {
  Timer++;
}

function update() {
  let head = snake[0];
  moveSnake(snake, direction, box, canvas);
  if (checkWallCollision(snake.at(0), canvas, box)) {
    clearInterval(gameInterval);
    clearInterval(timerInterval); // Arrête le timer
    replaybutton.style.display = "block";
  }

  if (checkCollision(snake)) {
    clearInterval(gameInterval);
    clearInterval(timerInterval); // Arrête le timer
  }
}
function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  drawFood(ctx, food, box);
  drawSnake(ctx, snake, box);
  drawScore(ctx, score);

  // Affiche le timer
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Time: " + Timer + "s", canvas.clientWidth - 100, 20);
}
replaybutton.addEventListener("click", () => {
  startGame();
});

startGame();
