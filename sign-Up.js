let inp1=document.querySelector("#nm");
let inp2=document.querySelector("#ph");
let inp3=document.querySelector("#ps");
let arr=[inp1,inp2,inp3];
let msg=document.querySelector(".condition");
let submit=document.querySelector("#submit");
let span1=document.querySelector("#nmspn");
let span2=document.querySelector("#emspn");
let sbtn=document.querySelector(".show");


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
inp3.classList.add("default");
//check number in passward
var num=/[0-9]/g;
var sym= /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

if(Upass.length<8){
    msg.innerHTML="Too small passward";
    msg.style.color="red";
}
else if(!Upass.match(sym)){
    msg.innerText="symbol not found";
    msg.style.color="red";
}
else if(!Upass.match(num)){
    msg.innerText="number is not present";
    msg.style.color="red";
}
else{
    msg.innerHTML=" &#xf058; strong passward";
    msg.style.color="green";
    msg.classList.add("condition2");
}

}); 

submit.addEventListener("click",sts);

function sts(){
    let flag1=0;
    let flag2=0;
    if(inp1.value.length<1 ){
        span1.innerHTML="name is empty";
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
sbtn.addEventListener("click",()=>{
    if(inp3.type == "password"){
        inp3.type = "text";
    }
    else{
        inp3.type = "password";
    }
})