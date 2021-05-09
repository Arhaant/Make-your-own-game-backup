  class Marcus {
    constructor() {
      this.marcusSprite = createSprite(50, displayHeight - 250, 50, 50)
      this.marcusSprite.visible = false
      this.animationCity = loadAnimation("Images/trex1.png", "Images/trex3.png", "Images/trex4.png")
      this.animationFreezeCity = loadAnimation("Images/trex1.png")
      this.animationDownCity = loadAnimation("Images/alien2.png")
      this.animationJumpCity = loadAnimation("Images/alien2.png")

      this.animationForest = loadAnimation(/*"Images/Forest/ForestMarcusWalking01.png"*/ "Images/Forest/ForestMarcusWalking02.png" /*"Images/Forest/ForestMarcusWalking03.png"*/)
      this.animationFreezeForest = loadAnimation("Images/Forest/ForestMarcusWalking01.png")
      this.animationDownForest = loadAnimation("Images/Forest/ForestMarcusDuck01.png")
      this.animationJumpForest = loadAnimation("Images/Forest/ForestMarcusJump01.png", "Images/Forest/ForestMarcusJump02.png", "Images/Forest/ForestMarcusJump03.png", "Images/Forest/ForestMarcusJump04.png", "Images/Forest/ForestMarcusJump05.png")

      this.animationDesert = loadAnimation("Images/Desert/DesertMarcusWalking01.png", "Images/Desert/DesertMarcusWalking02.png", "Images/Desert/DesertMarcusWalking03.png")
      this.animationFreezeDesert = loadAnimation("Images/Desert/DesertMarcusWalking01.png")
      this.animationDownDesert = loadAnimation("Images/Desert/DesertMarcusDuck03.png")
      this.animationJumpDesert = loadAnimation("Images/Desert/DesertMarcusJump01.png", "Images/Desert/DesertMarcusJump02.png", "Images/Desert/DesertMarcusJump03.png", "Images/Desert/DesertMarcusJump04.png", "Images/Desert/DesertMarcusJump05.png")
    }

    jump() {
      this.marcusSprite.velocityY = -10
      if (gameState === "Started for path 1" ) {
        this.marcusSprite.changeAnimation("yeet",this.animationJumpForest)
      }

      if (gameState === "Started for path 2") {
        this.marcusSprite.changeAnimation("yeet",this.animationJumpDesert)
      }

      if (gameState === "Started for path 3") {
        this.marcusSprite.changeAnimation("yeet",this.animationJumpForest)
      }
    }

    collide() {
      this.marcusSprite.collide(ground.groundSprite)
    }

    duck() {
      if (gameState === "Started for path 1"){
        //console.log("within keyWentDown")
        this.marcusSprite.changeAnimation("quack",this.animationDownForest)
      }

      if (gameState === "Started for path 2"){
        //console.log("within keyWentDown")
        this.marcusSprite.changeAnimation("quack",this.animationDownDesert)
      }

      if (gameState === "Started for path 1"){
        //console.log("within keyWentDown")
        this.marcusSprite.changeAnimation("quack",this.animationDownForest)
      }
      }

    display() {

    }
  }