class box extends baseclass {
    constructor(x, y,width,height){
      super(x,y,width,height);
      this.Visiblity = 255;
      this.image = loadImage("rect.png");
    }
  
   display(){
     if(this.body.speed < 3){
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 2;
       tint(255,this.Visiblity);
       pop();
     }
    }
 };