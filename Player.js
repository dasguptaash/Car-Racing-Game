class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    update(){
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
            
        })
    }
    
    updateCount(count){
           database.ref('/').update({
               playerCount : count
           })
    }

    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",function(data){
            playerCount = data.val();
        })
    }

    static getPlayerInfo(){
        var playerInforef = database.ref('players');
        playerInforef.on("value",function(data){
            allPlayers = data.val();
        })
    }
}

    
