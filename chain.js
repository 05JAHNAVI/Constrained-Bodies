class Chain
{
    constructor(bodyA,bodyB)
    {
   var options = {
       bodyA : bodyA,
       bodyB : bodyB,
       stiffness : 0.04,
       length : 10   
   } 
this.Chain = Constraint.create(options);
World.add(world,Chains);

    }
    display()
    {
    var pointA = this.chain.bodyA.postion;
var pointB = this.chain.bodyB.postion;
line(pointA.x,pointA.y,pointB.x,pointB,y);
 
    }


}


