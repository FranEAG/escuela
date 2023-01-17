"use strict"

const tutorial = document.querySelector(".tutorial");
const body = document;
const main = document.querySelector("main");


setInterval(()=>{
    tutorial.classList.add("hide");
    let time = setTimeout(()=>{
        
        console.log("hide");
    },500);
    let time2 = setTimeout(()=>{
        tutorial.classList.remove("hide");
        console.log("show");
    },100);

    console.log("e");
},2000);


body.addEventListener("click",()=>
{
    console.log("works");
    setInterval(()=>{
            let top = Math.floor(Math.random()*95+1);
            let left = Math.floor(Math.random()*95+1);
            let content = Math.floor(Math.random()*1000);
            let nuevo = `<span style="top:${top}%;left:${left}%;" class="st">${content}</span>`;
            main.innerHTML += nuevo;     
    },2);
});

