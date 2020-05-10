class Form {

    constructor() {
        this.input = createInput("Username");
        this.start = createButton('Start');
        this.title = createElement('h1');
    }

    hide(){
        this.input.hide();
        this.start.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Hurdles Game");
        this.title.position(displayWidth/2 - 50, 0);
        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
        this.start.position(displayWidth/2 + 30, displayHeight/2);

        this.start.mousePresssed(()=>{
            this.input.hide();
            this.start.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
    }
}