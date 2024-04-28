let menu=document.querySelector(".xx");
let options=document.querySelectorAll(".option");
let prices=document.querySelectorAll(".amount");
let qtys=document.querySelectorAll(".Qty");
let sets=document.querySelectorAll(".set");
let amounts=document.querySelectorAll(".inp");
let popup=document.querySelector(".xxx");
let close=document.querySelector("#close");
let adtocart=document.querySelector("#adtocart");
let img=document.querySelector(".imag");
let text=document.querySelector(".tex");
let addnew=document.querySelector(".addnew");
let form=document.querySelector(".form");


let n=0;
let f=1;
let cartprice=0;
let camount=0;
Number(camount);
//popup msg functionality 

adtocart.addEventListener("click", ()=>{
    console.log("xxxxx");
    setTimeout(()=>{
        popup.classList.add("popup");
        popup.classList.remove("pophide");
    },1000)
});
addnew.addEventListener("click",()=>{
        form.classList.remove("pophide");
    })
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
for(let i=0;i<prices.length;i++){
   let price=prices[i];
   let qty=qtys[i];
   camount+=Number((price.value)*Number(qty.value));
}
for(amount of amounts){
    amount.value=camount;
}
for(set of sets){
    set.addEventListener("click",()=>{
        camount=0;
        for(let i=0;i<prices.length;i++){
            let price=prices[i];
            let qty=qtys[i];
            camount+=Number((price.value)*Number(qty.value));
         }
         for(amount of amounts){
            amount.value=camount;
        }
 
    })
}


close.addEventListener("click",()=>{
    popup.classList.remove("popup");
    popup.classList.add("pophide");
})




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
