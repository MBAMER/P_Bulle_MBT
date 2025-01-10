import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas"); // Récupère l'élément canvas
const ctx = canvas.getContext("2d"); // Récupère le contexte 2D pour dessiner sur le canvas

const box = 20; // Taille d'une case de la grille
const gameSpeed = 200; // Vitesse du jeu (en ms)
let snake;
let Timer = 0;
let timerInterval;
let direction = "RIGHT";
let gameInterval;

window.score = 0; // Initialise le score
window.food = null; // Initialise la nourriture

// Gère les événements de changement de direction
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  snake = initSnake(); // Initialise le serpent
  direction = "RIGHT";
  Timer = 0;
  score = 0;
  window.food = generateFood(box, canvas, snake); // Génère la première nourriture

  replaybutton.style.display = "none"; // Cache le bouton de redémarrage
  gameInterval = setInterval(() => {
    update(); // Met à jour le jeu
    draw(); // Dessine le jeu
  }, gameSpeed);
  timerInterval = setInterval(updateTimer, 1000); // Démarre le chronomètre
}

function updateTimer() {
  Timer++; // Incrémente le chronomètre
}

function update() {
  moveSnake(snake, direction, box, canvas); // Déplace le serpent

  // Vérifie les collisions avec les murs ou le corps
  if (checkWallCollision(snake[0], canvas, box) || checkCollision(snake)) {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    alert("Gameover");
    replaybutton.style.display = "block"; // Affiche le bouton de redémarrage
  }

  // Vérifie si la nourriture a été mangée
  if (snake[0].x === food.x && snake[0].y === food.y) {
    score++;
    food = generateFood(box, canvas, snake); // Génère une nouvelle nourriture
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas
  drawFood(ctx, food, box); // Dessine la nourriture
  drawSnake(ctx, snake, box); // Dessine le serpent
  drawScore(ctx, score); // Affiche le score

  // Affiche le chronomètre
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Time: " + Timer + "s", canvas.width - 100, 20);
}

// Redémarre le jeu lorsqu'on clique sur le bouton de redémarrage
replaybutton.addEventListener("click", () => {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  startGame();
});

startGame(); // Démarre le jeu immédiatement
