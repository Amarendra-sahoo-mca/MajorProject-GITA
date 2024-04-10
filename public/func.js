let menu=document.querySelector(".xx");
let options=document.querySelectorAll(".option");
menu.addEventListener("click",()=>{
    console.log("clicked");
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