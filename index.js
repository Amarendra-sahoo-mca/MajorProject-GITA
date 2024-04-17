const express=require("express");
const app=express();
const port=8080;
const mongose=require("mongoose");
const path = require("path");
const methodoverride=require("method-override");
const ejsMate=require("ejs-mate");

//models Home
const fridge =require("./models/homeAp/fridgemdl.js");
const Ac=require("./models/homeAp/Acmodel.js");
const Tv=require("./models/homeAp/Tvmodel.js");
const Arp=require("./models/homeAp/AirPmdl.js");
const Washingm=require("./models/homeAp/washingmdl.js");
const Waterpurifier=require("./models/homeAp/Waterpmdl.js");

 //models Kitchen
 const Afrier =require("./models/kitchenAp/airFrierMdl.js");
 const Chimney=require("./models/kitchenAp/chimneyMdl.js");
 const CoffeeMkr=require("./models/kitchenAp/cmMdl.js");
 const DishWasher=require("./models/kitchenAp/dishwMdl.js");
 const Ecockr=require("./models/kitchenAp/eCockrMdl.js");
 const Grinder=require("./models/kitchenAp/grinderMdl.js");
 const Induction=require("./models/kitchenAp/inductionMdl.js");
 const Toster=require("./models/kitchenAp/tosterMdl.js");
 const Sandwich=require("./models/kitchenAp/sandwichMdl.js");
 const Oven=require("./models/kitchenAp/ovenMdl.js");

//models Winter
const Ktl=require("./models/winterAp/ktlMdl.js");
const RoomH=require("./models/winterAp/roomHMdl.js");
const WaterG=require("./models/winterAp/waterGMdl.js");

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
//home Appliances
//fridge data RouTE
app.get("/esport/home/fridge",async(req,res)=>{
    let datas= await fridge.find();
    res.render("products/lists.ejs",{datas});
})
//AC data RouTE
app.get("/esport/home/ac",async(req,res)=>{
    let datas= await Ac.find();
    res.render("products/lists.ejs",{datas});
})
//TV data RouTE
app.get("/esport/home/tv",async(req,res)=>{
    let datas= await Tv.find();
    res.render("products/lists.ejs",{datas});
});
//air purifier data RouTE
app.get("/esport/home/air_purifier",async(req,res)=>{
    let datas= await Arp.find();
    res.render("products/lists.ejs",{datas});
});
//washing machine  data RouTE
app.get("/esport/home/washing_machine",async(req,res)=>{
    let datas= await Washingm.find();
    res.render("products/lists.ejs",{datas});
});
//water purifier data RouTE
app.get("/esport/home/water_purifier",async(req,res)=>{
    let datas= await Waterpurifier.find();
    res.render("products/lists.ejs",{datas});
});

//kitchen Appliances
//airfrier data RouTE
app.get("/esport/kitchen/airfryer",async(req,res)=>{
    let datas= await Afrier.find();
    res.render("products/lists.ejs",{datas});
});
//chimney data RouTE
app.get("/esport/kitchen/Chimney",async(req,res)=>{
    let datas= await Chimney.find();
    res.render("products/lists.ejs",{datas});
});
//coffee maker data RouTE
app.get("/esport/kitchen/coffeemaker",async(req,res)=>{
    let datas= await CoffeeMkr.find();
    res.render("products/lists.ejs",{datas});
});
//dish washer data RouTE
app.get("/esport/kitchen/DishWasher",async(req,res)=>{
    let datas= await DishWasher.find();
    res.render("products/lists.ejs",{datas});
});
//electric coocker data RouTE
app.get("/esport/kitchen/electric_coocker",async(req,res)=>{
    let datas= await Ecockr.find();
    res.render("products/lists.ejs",{datas});
});
//grinder data RouTE
app.get("/esport/kitchen/grinder",async(req,res)=>{
    let datas= await Grinder.find();
    res.render("products/lists.ejs",{datas});
});
//induction data RouTE
app.get("/esport/kitchen/induction",async(req,res)=>{
    let datas= await Induction.find();
    res.render("products/lists.ejs",{datas});
});
//oven data RouTE
app.get("/esport/kitchen/oven",async(req,res)=>{
    let datas= await Oven.find();
    res.render("products/lists.ejs",{datas});
});
//sandwich data RouTE
app.get("/esport/kitchen/sandwich",async(req,res)=>{
    let datas= await Sandwich.find();
    res.render("products/lists.ejs",{datas});
});
//toster data RouTE
app.get("/esport/kitchen/toster",async(req,res)=>{
    let datas= await Toster.find();
    res.render("products/lists.ejs",{datas});
});
//Winter Appliances
//KTL data RouTE
app.get("/esport/winter/kettle",async(req,res)=>{
    let datas= await Ktl.find();
    res.render("products/lists.ejs",{datas});
  });
  //room heater data RouTE
  app.get("/esport/winter/room_heater",async(req,res)=>{
    let datas= await RoomH.find();
    res.render("products/lists.ejs",{datas});
  });
  //water Gryser data RouTE
  app.get("/esport/winter/water_geyser",async(req,res)=>{
    let datas= await WaterG.find();
    res.render("products/lists.ejs",{datas});
  });

app.listen(port,()=>{
    console.log(`listeninh at port :${port}`);
})
