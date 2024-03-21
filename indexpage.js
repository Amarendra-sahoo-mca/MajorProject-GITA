let sbtn=document.querySelector("#searchbtn");
let sdiv=document.querySelector(".search");
let sinp=document.querySelector(".input");
let menu=document.querySelector(".xx");
let options=document.querySelectorAll(".option");
let flag=0;
let clicked=0;
sdiv.addEventListener("click",()=>{
    if(flag==0){
        sdiv.classList.remove("innitial");
        flag=1;
    }
    else{
        sdiv.classList.add("innitial");
        flag=0;
    }
console.log("div click");
});

sbtn.addEventListener("click",(e)=>{
     if(flag==1){
        console.log("btn click");
        e.stopPropagation();
     }
});
sinp.addEventListener("click",(e)=>{
    e.stopPropagation();
});
menu.addEventListener("click",()=>{
    if(clicked==0){
        for(option of options){
            option.classList.remove("hide");}
            clicked=1;
            console.log("menu clicked");
    }
    else{
        for(option of options){
            option.classList.add("hide");}
            clicked=0;
            console.log("menu un_clicked");
    }
  
});
