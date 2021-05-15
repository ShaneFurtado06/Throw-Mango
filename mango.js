class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0.1,
			density:0.1,
            friction :1,
			}
		this.r=r
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(x, y,this.r,options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;
		
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0,0,this.r,this.r)
		pop()
 }
}