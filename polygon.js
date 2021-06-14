//polygonholderwith sling//
polygon=Bodies.circle(50,200,20)
World.add(world,polygon)

slingShot=new slingShot(this.polygon,{x:100,y:200})

this.image = loadImage("polygon.png");
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

display(){
    
    super.display();
  }
