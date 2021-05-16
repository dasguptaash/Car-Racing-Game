class Form{
    constructor(){
          this.input = createInput("Name");
          this.button = createButton("Play");
          this.greetings = createElement('h3');
    }

    hide(){
        this.greetings.hide();
        this.input.hide();
        this.distance.hide();
    }
    
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(170,0);
        
        this.input.position(170,200);

        
        this.button.position(300,270);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greetings.html("Hello" + player.name + "!");
            this.greetings.position(170,200);

        /*var jointTime = createElement('h4');
        jointTime.html("Time: " + hour() + ":"+ minute());
        jointTime.position(450,20);*/
        })
        
             
    }

    
}

    
