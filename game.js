class Game {
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
      }

    man1 = createSprite(10,300);
    man1.addImage("man1",man1_img);
    man1.setCollider("rectangle",0,0);
    man1.debug = true;
    man1.scale = 0.30;

    man2 = createSprite(10,500);
    man2.addImage("man2",man2_img);
    man2.setCollider("rectangle",0,0);
    man2.debug = true;
    man2.scale = 0.30;

    man3 = createSprite(10,700);
    man3.addImage("man3",man3_img);
    man3.setCollider("rectangle",0,0);
    man3.debug = true;
    man3.scale = 0.30;

    man4 = createSprite(10,900);
    man4.addImage("man4",man4_img);
    man4.setCollider("rectangle",0,0);
    man4.debug = true;
    man4.scale = 0.30;

    people = [man1, man2, man3, man4];

    ground1 = createSprite(310,700,displayWidth*5,20);
    ground1.setCollider("rectangle", 0, 0);

    ground2 = createSprite(110,900,displayWidth*5,20);
    ground2.setCollider("rectangle", 0, 0);

    ground3 = createSprite(310,1100,displayWidth*5,20);
    ground3.setCollider("rectangle", 0, 0);

    ground4 = createSprite(110,1300,displayWidth*5,20);
    ground4.setCollider("rectangle",0, 0);

    ground1.debug = true;
    ground2.debug = true;
    ground3.debug = true;
    ground4.debug = true;

    play(){
        form.hide();
    
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        
        if(allPlayers !== undefined){
          background(rgb(198,135,106));
          image(track,300,displayWidth*4,displayHeight+60);
      
          var index = 0;
    
          var x = 0;
          var y = 430;
    
          for(var plr in allPlayers){
            index = index + 1 ;
            x = x + 200;
            y = displayHeight - allPlayers[plr].distance;
            people[index-1].x = x;
            people[index-1].y = y;
    
            if (index === player.index){
              stroke(10);
            fill("red");
            ellipse(x,y,60,60);
              people[index - 1].shapeColor = "balck";
              camera.position.x = displayWidth/2;
              camera.position.y = people[index-1].y
            }
          }
    
        }

        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
          player.distance -=10;
          player.update();
        }
        if(keyIsDown(LEFT_ARROW) && player.index !== null){
          player.distance +=10
          player.update();
        }
        if(player.distance <= -6300){
          gameState = 2;
         
          player.rank += 1;
          Player.updateCarsAtEnd(player.rank);
       
        drawSprites();
      }
    
      end(){
        console.log("Game Ended");
        console.log(player.rank);
      }
    }
  }