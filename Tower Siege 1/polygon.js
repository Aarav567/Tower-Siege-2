class Polygon{
    constructor(x, y, w, h) {
        var options = {
            restitution:0.5,
            density:0.3,
            friction:0.1
        }
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        this.image = loadImage("polygon.png")
        this.body=Bodies.rectangle(x,y,w,h, options)
        World.add(world,this.body)


      }
      display(){
        var polygonpos = this.body.position
        imageMode(CENTER)
        image(this.image,polygonpos.x,polygonpos.y,this.width,this.height)
      }
}