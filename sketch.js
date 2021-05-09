var path1, path2, path3, path4
var form
var selector
var flag = "up"
var gameState = 0
var desert
var VCAPLD = "no"
var ground
var marcus


function preload(){
  
}

function setup(){
    createCanvas(displayWidth, displayHeight)

    form = new Form()
    form.display()
    marcus = new Marcus()

    //marcus = createSprite(20, displayHeight - 250, 50,50)
    //marcus.visible = false

}

function draw(){
    background("White")

    text(mouseX + "," + mouseY, mouseX, mouseY)

    if(gameState === "path1"){
        //background(145,236,141)
        ground = new Ground()
        ground.display()
        forest = new Forest()
        forest.display()
        marcus.marcusSprite.addAnimation("running",marcus.animationForest);
        marcus.marcusSprite.addAnimation("frozen",marcus.animationFreezeForest);
        marcus.marcusSprite.addAnimation("quack",marcus.animationDownForest);
        marcus.marcusSprite.addAnimation("yeet",marcus.animationJumpForest);
        marcus.marcusSprite.scale = 0.3
        marcus.marcusSprite.visible = true
        marcus.display()
        
        gameState = "Started for path 1"
    }

    if(gameState === "path2"){
        //background(rgb(207,178,130))
        ground = new Ground()
        ground.display()
        marcus.marcusSprite.addAnimation("running",marcus.animationDesert);
        marcus.marcusSprite.addAnimation("frozen",marcus.animationFreezeDesert);
        marcus.marcusSprite.addAnimation("quack",marcus.animationDownDesert);
        marcus.marcusSprite.addAnimation("yeet",marcus.animationJumpDesert);
        marcus.marcusSprite.visible = true
        marcus.display()
        
        //applyVeloctyX()
        gameState = "Started for path 2"
    }

    if(gameState === "path3"){
        //background("grey")
        ground = new Ground()
        ground.display()
        marcus.marcusSprite.addAnimation("running",marcus.animationForest);
        marcus.marcusSprite.addAnimation("frozen",marcus.animationFreezeForest);
        marcus.marcusSprite.addAnimation("quack",marcus.animationDownForest);
        marcus.marcusSprite.addAnimation("yeet",marcus.animationJumpForest);
        city = new City()
        city.display()
        marcus.marcusSprite.visible = true
        marcus.display()
        
        gameState = "Started for path 3"
    }






    
    if(gameState === "Started for path 1"){
        background(rgb(145,236,141))
        ground.scrolling()
        marcus.collide()
       
        //marcusSprite.addAnimation("frozen" ,this.animationFreeze)
        if(keyDown("space")&& marcus.marcusSprite.y >= displayHeight / 2 + 100){
        marcus.jump()
      }
      marcus.marcusSprite.velocityY += 0.5
      //console.log(marcus.marcusSprite.y); - 590
      //console.log(displayHeight-275); - 589
      if(marcus.marcusSprite.y > displayHeight-300){
        marcus.marcusSprite.changeAnimation("running",marcus.animationForest);
    }
    if(keyDown("down")){
        marcus.duck()
      }
    }
    
    if(gameState === "Started for path 2"){
        background(rgb(207,178,130))
        ground.scrolling()
        marcus.collide()
        if(keyDown("space")){
        marcus.jump()
      }
      marcus.marcusSprite.velocityY += 0.5
    }

    if(gameState === "Started for path 3"){
        background(rgb("grey"))
        ground.scrolling()
        marcus.collide()
        if(keyDown("space")){
        marcus.jump()
      }
      marcus.marcusSprite.velocityY += 0.5
    }
  

 
    //marcus.marcusSprite.collide(ground.groundSprite)
    drawSprites();
}

function keyPressed(){

    if(keyCode === 37 && gameState === "Started for path 1"|| gameState === "Started for path 2"|| gameState === "Started for path 3"){
        ground.groundSprite.velocityX = 0
        marcus.marcusSprite.changeAnimation("frozen",marcus.animationFreeze)
    }

    if(keyCode === 39 && gameState === "Started for path 1"|| gameState === "Started for path 2"|| gameState === "Started for path 3"){
        ground.groundSprite.velocityX = -3
        marcus.marcusSprite.changeAnimation("running",marcus.animation)
    }

    /*if(keyIsDown(40) && gameState === "Started for path 1"|| gameState === "Started for path 2"|| gameState === "Started for path 3"){
        console.log("within keyWentDown")
        marcus.marcusSprite.changeAnimation("quack",marcus.animationDown)
    }*/
   
    
  /*
    if(keyCode === 40 && flag === false && form.selector.y === form.path1.y + 75){
        console.log("Key Pressed");
        form.selector.y = form.path2.y + 75 ;
        flag = true
    }

    if(keyCode === 40 && flag === false && form.selector.y === form.path2.y + 75){
        console.log("Key Pressed");
        form.selector.y = form.path3.y + 75 ;
        flag = true
    }
*/


    if(keyCode === 40 && flag != "bottom"){
       // console.log("Key Pressed");
        form.selector.y =  form.selector.y + 150;
        if(form.selector.y >= form.path4.y - 100){
            flag = "bottom";
        }
    }
    
    if(keyCode === 38 && flag != "up"){
      //  console.log("Key Pressed");
        form.selector.y =  form.selector.y - 150;
        if(form.selector.y <= form.path1.y + 100){
            flag = "up";
        }
    }

    if(keyCode === 13 && gameState !== "Started for path 2")  
    {
        if(form.selector.y === form.path1.y + 75){

        //    console.log("Selector: ", form.selector.y);
        //   console.log("Path1: ", form.path1.y + 75);
            //background("Lime")
            gameState = "path1"
            form.hide()
        
        }



        if(form.selector.y === form.path2.y + 75){

            //    console.log("Selector: ", form.selector.y);
            //   console.log("Path1: ", form.path1.y + 75);
             //   background("brown")
                gameState = "path2"
                form.hide()
            
            }


            if(form.selector.y === form.path3.y + 75){

                //    console.log("Selector: ", form.selector.y);
                //   console.log("Path1: ", form.path1.y + 75);
                    //background("Lime")
                    gameState = "path3"
                    form.hide()
                
                }

   
    }

    
}



//function applyVeloctyX(){
    //desert.ground.addImage(desert.image)
    //desert.ground.velocityX = -3
//}









