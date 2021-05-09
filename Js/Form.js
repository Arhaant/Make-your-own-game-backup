class Form{
    constructor(){
      this.title = createElement("h1")
      this.play = createButton("Start")
      this.story = createElement("p")
      this.path1 = createSprite(displayWidth/2 + 400, displayHeight/2 - 75, 20000, 10)
      this.path2 = createSprite(displayWidth/2 + 400, displayHeight/2 + 75, 20000, 10)
      this.path3 = createSprite(displayWidth/2 + 400, displayHeight/2 + 225, 20000, 10)
      this.path4 = createSprite(displayWidth/2 + 400, displayHeight/2 + 375, 20000, 10)
      this.selector = createSprite(this.path1.x - 400,this.path1.y + 75, displayWidth, 100)
      this.path1.visible = false;
      this.path2.visible = false;
      this.path3.visible = false;
      this.path4.visible = false;
      this.selector.visible = false;
    }
    display(){
        this.title.html("Something")

       this.title.position(displayWidth/2 + 150, 50)
       this.play.position(displayWidth/2, displayHeight/2)
       this.play.mousePressed(()=>{
          this.play.hide()
         // this.story.html("Some text")
         // this.story.position(displayWidth/2 - 100, 150)
        //  console.log(displayHeight, displayWidth)
          this.path1.visible = true;
          this.path2.visible = true;
          this.path3.visible = true;
          this.path4.visible = true;
          this.selector.visible = true;
        })
    }

    hide(){
      this.title.visible = false;
      this.path1.visible = false;
      this.path2.visible = false;
      this.path3.visible = false;
      this.path4.visible = false;
      this.selector.visible = false;
    }
}     