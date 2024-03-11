let inp2=document.querySelector("#ph");
let inp3=document.querySelector("#ps");

let submit=document.querySelector("#submit");
let span1=document.querySelector("#nmspn");
let span2=document.querySelector("#emspn");
let sbtn=document.querySelector(".show");

inp2.addEventListener("keydown",()=>{
    inp2.classList.add("default");
    });
submit.addEventListener("click",sts);
function sts(){
    let flag1=0;
    let flag2=0;
    
    if(inp2.value.length<1){
        span2.innerText="email is empty";
        flag2=1
    }
    if(inp3.value.length<1){
        span1.innerText="password is empty";
        flag2=1
    }
    if(flag1==1 || flag2==1){
        return false;
    }
    else{
        return true;
    }
}
sbtn.addEventListener("click",()=>{
    // const inp3=document.querySelector(".ps");
    inp3.classList.add("default");
    if(inp3.type == "password"){
        inp3.type = "text";
    }
    else{
        inp3.type = "password";
    }
})