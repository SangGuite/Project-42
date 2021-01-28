class Umbrella {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.r=90;
        this.image=loadImage("walking_1.png");
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,250,250);
        pop();
    }
}