class Ground{
    constructor(){
      this.groundSprite = createSprite(displayWidth - 300, displayHeight - 200, displayWidth*2, 10)
      this.image = loadImage("ground2.png")
    }

    display(){
      this.groundSprite.addImage(this.image)
      this.groundSprite.velocityX = -3
    }

    scrolling(){
        if(this.groundSprite.x < 350){
            this.groundSprite.x = displayWidth/2
        }
    }
}