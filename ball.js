
class Ball {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':1.0,
          'friction':0.0,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = r;
      
      
      World.add(world, this.body);
    }
    display(){
      
       ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

      
    }
  };
  