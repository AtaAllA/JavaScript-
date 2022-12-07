var x = 0 , y = 0 , z = 0

function point(_x, _y , _z)
{
  
    this.x=_x;
   this.y=_y;
   this.z = _z

}

var defaul = new point( x , y , z)
var p1 = new point( 5 , 6 , 7)
var p2 = new point(63 , 69 , 5)
var res = new point()



console.log(defaul.x , defaul.y , defaul.z)
console.log(p1.x , p1.y , p1.z)
console.log(p2.x , p2.y , p2.z)

point.prototype.calcDistance=function(){

    calcDistance= Math.sqrt((p2.x - p1.x)^2 + (p2.y - p1.y)^2 +(p2.z - p1.z)^2)
    console.log(calcDistance)
        

}
res.calcDistance()







