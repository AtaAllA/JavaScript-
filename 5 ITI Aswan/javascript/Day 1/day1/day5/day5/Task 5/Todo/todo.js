function retriveData()
{
    if(todo.readyState==4&&todo.status==200)
    {
      var storeTodos=JSON.parse(todo.responseText).todos

     localStorage.setItem("Data",JSON.stringify(storeTodos))

     for(var i=0; i<storeTodos.length; i++)
     {
        if(storeTodos[i].completed==true) {
            var div=document.createElement("div");
     
            div.innerHTML =  `<span>${storeTodos[i].id}</span>
     
            <span >${storeTodos[i].todo}</span>
     
            <span>${storeTodos[i].completed}</span>
            
            <span>${storeTodos[i].userId}</span>
            `
            document.body.appendChild(div)
          }
     }
    
    }
}

var todo=new XMLHttpRequest();

todo.open("GET","https://dummyjson.com/todos");

todo.send();

todo.onreadystatechange=retriveData

