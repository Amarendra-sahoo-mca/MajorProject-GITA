let menu=document.querySelector(".xx");
let options=document.querySelectorAll(".option");
let clicked=0;
menu.addEventListener("click",()=>{
    if(clicked==0){
        console.log(options);
        for(option of options){
         
            option.classList.remove("hide");
        }
            clicked=1;
            console.log("menu clicked");
    }
    else{
        for(option of options){
            console.log(option);
            option.classList.add("hide");}
            clicked=0;
            console.log("menu un_clicked");
    }
  
});