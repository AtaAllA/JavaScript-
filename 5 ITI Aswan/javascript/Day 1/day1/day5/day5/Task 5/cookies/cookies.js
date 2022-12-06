function createCookie(name,pwds){
    let username = document.getElementById("user");
    let pwd = document.getElementById("pd");
  
  
    today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000*24*15);
   
  
    document.cookie = "name="+username.value+";path=/" + ";expires="+expire.toUTCString();
    document.cookie = "password="+encodeURI(pwd.value)+";path=/" + ";expires="+expire.toUTCString();
  }  
  

  window.onload = function(){
  
    var uname = username.value;
    var pass = pwd.value;
  
    document.getElementById('user').value = uname;
    document.getElementById('pd').value = pass;
  
  }