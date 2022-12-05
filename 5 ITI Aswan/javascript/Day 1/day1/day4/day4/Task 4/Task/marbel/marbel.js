var imges=["imgs/marble2.jpg","imgs/marble3.jpg"]
var imgs=document.getElementsByTagName("img");
var i=0;

var y=0;
function replace(){
   
    i++;
        imgs[y].src=imges[i];
        if(i>1)
        {
            i=0
        }
        y++
    
    
    }


setInterval(replace,1000)





