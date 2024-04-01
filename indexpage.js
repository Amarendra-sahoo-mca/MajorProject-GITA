let sbtn=document.querySelector("#searchbtn");
let sdiv=document.querySelector(".search");
let sinp=document.querySelector(".input");
let menu=document.querySelector(".xx");
let options=document.querySelectorAll(".option");
let img=document.querySelector(".image");
let text=document.querySelector(".text");

let n=0;
let f=1;
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
     else if(flag==0){
        console.log("innitial search button click");
        sbtn.disabled=true;
     }
     
});
sinp.addEventListener("click",(e)=>{
    e.stopPropagation();
});
sinp.addEventListener("keyup",(e)=>{
let str=e.currentTarget.value;
if(str != ""){
    sbtn.disabled=false;
}
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
setInterval(()=>{

    text.style.transform = `translateX(-${n*25}%)`;
    img.style.transform = `translateX(-${n*25}%)`;
    if(n==3){
        f=0;
    }
    else if(n==0){
        f=1;
    }
    if(f==1){
        n++;
    }
    else{
        n--;
    }
   
}, 4000);