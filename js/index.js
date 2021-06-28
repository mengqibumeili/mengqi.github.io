// 轮播图事件
let focus = document.getElementById("focus");
let next = document.querySelector(".arrow_right");
let prev = document.querySelector(".arrow_left");
let select = document.querySelector(".select");

// 单击箭头轮播
prev.onclick = function(){
    Moveleft();
}
next.onclick = function(){
    MoveRight();
}

function Moveleft(){
    let fos = focus.offsetLeft;
    if(fos>=0){    
       focus.style.left = "-5052px";
    }else {     
       focus.style.left= fos + 1263 + "px";
    } 
}

function MoveRight(){  
    let fos = focus.offsetLeft;
    if(fos<=-5052){
        focus.style.left = "0px";
    }else {
        focus.style.left = fos -1263 + "px";
    }  
}
//-----------------------------------------------------------------------------------------------------------------
// 自动轮播
window.onload = function(){
   let timer = setInterval(function(){
    Moveleft();
   },2000)
   
}
// ----------------------------------------------------------------------------------------------------------------





