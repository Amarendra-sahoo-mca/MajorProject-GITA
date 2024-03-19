let sbtn=document.querySelector("#searchbtn");
let sdiv=document.querySelector(".search");
let flag=0;
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
sbtn.addEventListener("click",()=>{
    if(flag==1){
        console.log("btn click");
    }
    
});