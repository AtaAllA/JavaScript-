
var img = document.createElement('img');
     img.setAttribute('src' , 'pic7.jpg');
     img.setAttribute('height', '300px');
    img.setAttribute('width', '300px');
     document.body.appendChild(img)

     var add = document.getElementById("add").addEventListener("click" ,add)
     var i = 0;
     function add(){

        var img = document.createElement('img');

        img.setAttribute('src' , 'pic7.jpg');
     img.setAttribute('height', '300px');
    img.setAttribute('width', '300px');
     document.body.appendChild(img)
     i+=1
     alert("you have " +i)

     return i;
     
     }


     
     var add = document.getElementById("remove").addEventListener("click" ,remov)
     var i = 0;
     function remov(){
        var img = document.createElement('img');

        // img.setAttribute('src' , 'pic7.jpg');
    //  img.setAttribute('height', '300px');
    // img.setAttribute('width', '300px');

     document.body.createElement(img)
     i-=1
     return i;
     }





     
