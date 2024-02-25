let inp1=document.querySelector("#nm");
let inp2=document.querySelector("#ph");
let inp3=document.querySelector("#ps");
let arr=[inp1,inp2,inp3];
let msg=document.querySelector(".condition");
let submit=document.querySelector("#submit");
let span1=document.querySelector("#nmspn");
let span2=document.querySelector("#emspn");

inp1.addEventListener("keydown",()=>{
    inp1.classList.add("default");
    // console.log("xxx");
    });
inp2.addEventListener("keydown",()=>{
    inp2.classList.add("default");
     //console.log("yyy");
     });
inp3.addEventListener("keyup",()=>{   
let Upass=inp3.value;
//check number in passward
var num=/[0-9]/g;
var sym= /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//var s=/[a-z]/g;
if(Upass.length<8){
    msg.innerText="sort passward";
}
else if(!Upass.match(sym)){
    msg.innerText="symbol not found";
}
else if(!Upass.match(num)){
    msg.innerText="number is not present";
}
else{
    msg.innerText="strong passward";
}

}); 
// msg.innerText="use 8 more char with mix letter, numbers and symbol"
if(inp2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/));{

}
submit.addEventListener("click",sts);

function sts(){
    let flag1=0;
    let flag2=0;
    if(inp1.value.length<1 ){
        span1.innerText="name is empty";
        flag1=1;
    }
    if(inp2.value.length<1){
        span2.innerText="email is empty";
        flag2=1
    }
    if(flag1==1 || flag2==1){
        return false;
    }
    else{
        return true;
    }
}