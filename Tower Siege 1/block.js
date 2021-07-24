class Block{
    constructor(x, y, w, h) {
        var options = {
          restitution:0.1,
          density:0.25
        }
        this.x=x
        this.y=y
        this.width = w
        this.height = h
        this.visiblity = 225;
        this.body=Bodies.rectangle( x, y, w, h , options)
        this.image = loadImage("block.png")
        World.add(world, this.body);
      }
      display(){
        var blockpos = this.body.position
        imageMode(CENTER)

        if(this.body.speed < 3){
          image(this.image,blockpos.x,blockpos.y,this.width,this.height)

        } else{
          World.remove(world , this.body)
          push();
          this.visibility = this.visibility - 100
          tint(255,this.visibility)
          image(this.image,blockpos.x,blockpos.y,this.width,this.height)
          pop();
        }
      }
}
