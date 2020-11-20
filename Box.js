class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else{
        World.remove(world, this.body);
      
        
        push();
        this.Visiblity = this.Visiblity - 4
        tint(255,this.Visiblity)
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
      }
      score (){
        if(this.Visiblity<0&&this.Visiblity>-1005){
          score = score+1
          
        }
     
      }
}