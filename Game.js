class Game{
    constructor(){

    }

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value", function(data){
            gameState = data.val();
        })
        
    }

   async start(){
       if(gameState === 0){
           player = new Player();
           var playerCountref = await database.ref('playerCount').once("value");
           if(playerCountref.exists()){
            playerCount = playerCountref.val();
            player.getCount();
           }
         
           form = new Form();
           form.display();
       }
    }

    update(state){
       database.ref('/').update({
           gameState : state
       })
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 200,100);

        player.getPlayerInfo();

        if(allPlayers !== undefined){
            var displayPosition = 150;
            for(var plr in allPlayers){
            displayPosition += 20;
            text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 180, displayPosition);
            }
                    
            
        }

        if(keyisDown === UP_ARROW){
            player.distance += 50;
            player.update();
            }
    }
}