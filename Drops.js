class Drops {
    constructor(x,y){
        var options = {
            friction: 0.1,
            restitution:0.1           
        }
        this.r = 8;
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}