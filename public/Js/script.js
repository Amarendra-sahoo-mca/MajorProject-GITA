let menu=document.querySelector(".xx");
let options=document.querySelectorAll(".option");
let prices=document.querySelectorAll(".amount");
let qtys=document.querySelectorAll(".Qty");
let sets=document.querySelectorAll(".set");
let cartprice=0;
let camount=0;
Number(camount);
for(let i=0;i<prices.length;i++){
   let price=prices[i];
   let qty=qtys[i];
   camount+=Number((price.value)*Number(qty.value));
}
 console.log("total amount is:"+camount);

for(set of sets){
    set.addEventListener("click",()=>{
        for(let i=0;i<prices.length;i++){
            let price=prices[i];
            let qty=qtys[i];
            camount+=Number((price.value)*Number(qty.value));
         }
         console.log("total amount is:"+camount); 
    })
}





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