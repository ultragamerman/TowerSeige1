class rock {
  constructor(x,y,radius) {
    var options = {
        restitution:0.8,
        density:12,
        friction:1
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.image = loadImage("hex.jpeg");
    World.add(world,this.body);
    this.image.scale = 0.1
  }
  display(){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
  }
};