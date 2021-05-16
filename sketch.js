var database, canvas;
var gameState = 0;
var form,player,game;
var playerCount;
var allPlayers;

function setup(){
  canvas = createCanvas(500,500);
  database = firebase.database();
 
  
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
  
}

