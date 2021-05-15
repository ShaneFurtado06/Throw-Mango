class Stone{
    constructor(x,y){
        var options={
            'restitution':0,
            'friction':1,
            'density':1.2
        }

        this.body=Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        var angle=this.body.angle;

        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image (this.image,0,0,40,40);
        pop ();
    }
}