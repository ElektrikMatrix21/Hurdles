var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var people, man1, man2, man3, man4;

var ground, track, man1_img, man2_img, man3_img, man4_img, back_img;

function preload(){
  track = loadImage("images/track.jpg");
  man1_img = loadImage("images/player1.png");
  man2_img = loadImage("images/player2.png");
  man3_img = loadImage("images/player3.png");
  man4_img = loadImage("images/player4.png");
  back_img - loadImage("images/background2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(back_img);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
