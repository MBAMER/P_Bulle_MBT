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
window.food = generateFood(box, canvas);
let direction = "DOWN";
window.score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  gameInterval = setInterval(() => {
    update();
    draw();
  }, gameSpeed); // Stockage de l'identifiant de l'intervalle
  snake = initSnake();
}

function update() {
  let head = snake[0];
  moveSnake(snake, direction, box, canvas);
  if (checkWallCollision(snake.at(0), canvas, box)) alert("gameover");
  if (checkCollision(snake)) alert("gameover");
}

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  drawFood(ctx, food, box);
  drawSnake(ctx, snake, box);
  drawScore(ctx, score);

  // A compléter
}

startGame();
