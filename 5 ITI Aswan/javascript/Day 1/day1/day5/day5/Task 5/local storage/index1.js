var userInfo = []
user_Name = document.getElementById("userName")
password = document.getElementById("pass")
var btn= document.getElementById("login")
var x=JSON.stringify(userInfo);

btn.addEventListener("click" , addToLocalStorage )

function addToLocalStorage(){
    userInfo.push({
        name:userName.value , 
        password:pass.value
    
    })

    localStorage.setItem("Data" ,JSON.stringify (userInfo))
    //  userInfo= localStorage.setItem("User Name" ,user_Name )
    //  userInfo = localStorage.setItem("Password" ,pass )




}

localStorage.removeItem("Data")

