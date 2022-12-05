var images=["imgs/SlideShow/1.jpg","imgs/SlideShow/2.jpg","imgs/SlideShow/3.jpg","imgs/SlideShow/4.jpg","imgs/SlideShow/5.jpg"];
var i=0;
var img=document.getElementById("img");
var pic=0;



function Next(){

    i++;
var pic=setInterval(function(){

    img.src= images[i];
 
},1000);


if(i=images.length-1)
{
   clearInterval(pic) ;
}


  

}

function previous(){
    i--;

    var pic=setInterval(function(){
        img.src= images[i];
     
    },1000);
    
    if(i[0])
    {
       clearInterval(pic) ;
    }

}

function play(){
    if(i=images.length-1)
    {i=0;

        var pic=setInterval(function(){
            i++;
            img.src= images[i];
         
        },1000);
        
        if(i[0])
        {
           clearInterval(pic) ;
        }
    
    }

}

function stop(){
    clearInterval(pic) ;
}
