var imges=["imgs/marble2.jpg","imgs/marble3.jpg"]
var imgs=document.getElementsByTagName("img");

var y=0;


setInterval(function replace(){
   
    for(i = 0 ; i<imges.length ; i++){

        imgs[y].src=imges[i];
        
        if(i>1)
        {
            i=0
        }
        y++

    }
        
    
    
    }
,1000)





////////////////////////////////  حل اخر/////////////////////////////// 
// var imges=["imgs/marble2.jpg","imgs/marble3.jpg"]
// var imgs=document.getElementsByTagName("img");
// var i=0;

// var y=0;

// setInterval(function replace(){
   
    
// i++
//         imgs[y].src=imges[i];
//         if(i>1)
//         {
//             i=0
//         }
//         y++

    
        
    
    
//     }
// ,1000)





