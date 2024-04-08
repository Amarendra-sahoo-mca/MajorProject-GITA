const express=require("express");
const app=express();
const port=8080;
const mongose=require("mongoose");
const path = require("path");
const fridge =require("./models/fridge.js");
const methodoverride=require("method-override");
const ejsMate=require("ejs-mate");
 

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsMate);

main().then(()=>{
    console.log("connection establish");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongose.connect('mongodb://127.0.0.1:27017/esport');
}

app.get("/esport/fridge",async(req,res)=>{
    let datas= await fridge.find();
    res.render("products/fridges.ejs",{datas});
})

app.listen(port,()=>{
    console.log(`listeninh at port :${port}`);
})