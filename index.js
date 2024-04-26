const express=require("express");
const app=express();
const port=8080;
const mongose=require("mongoose");
const path = require("path");
const methodoverride=require("method-override");
const ejsMate=require("ejs-mate");

//cart model
const Cart=require("./models/cartMdl.js");
//address model
const Address=require("./models/addressMdl.js");

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

//model Smart Gadget
const Laptop= require("./models/smartGadget/laptopMdl.js");
const WCharger= require("./models/smartGadget/wChargerMdl.js");
const Printer= require("./models/smartGadget/printerMdl.js");
const PowerBank= require("./models/smartGadget/powerbankMdl.js");
const Camera= require("./models/smartGadget/cameraMdl.js");
const Computer= require("./models/smartGadget/computerMdl.js");
const Earbod= require("./models/smartGadget/earbodMdl.js");
const Mobile= require("./models/smartGadget/mobileMdl.js");
const NeckBand= require("./models/smartGadget/neckbandMdl.js");
const SmartW= require("./models/smartGadget/smartWMdl.js");

//model summer
const AirCooler= require("./models/summersp/airCoolerMdl.js");
const TableFan= require("./models/summersp/tblfan.js");
const CillFan= require("./models/summersp/cillfan.js");

//model decorative
const FloreLamp= require("./models/decorative/florlampMdl.js");
const Jhumar= require("./models/decorative/jhumarMdl.js");
const Walllamp= require("./models/decorative/wallampMdl.js");

//model arr
let models=[Cart,fridge,Ac,Tv,Arp,Washingm,Waterpurifier,Afrier,Chimney,CoffeeMkr,DishWasher,Ecockr,Grinder,Induction,Toster,Sandwich,Oven,Ktl,RoomH,WaterG,Laptop,WCharger,Printer,PowerBank,Camera,Computer,Earbod,Mobile,NeckBand,SmartW,AirCooler,TableFan,CillFan,FloreLamp,Jhumar,Walllamp];

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
var selected_address=null;
//add new address
app.post("/esport/addnewaddress/:id", async(req,res)=>{
    let {id}=req.params;
    let {name,phone,pin,state,city,house,landmark} =req.body;
    let newAddress= new Address({
        name: name,
        phone: phone,
        pincode: pin,
        state: state,
        city:city,
        house:house,
        area: landmark
    });
    await newAddress.save();
    console.log("address saved sucessfully");
    let redir="/esport/"+id+"/buyNow";
   res.redirect(redir);
})
//address chosen route
app.post("/chosen/address", async (req,res)=>{
    let {addres1}=req.body;
    let id=addres1;
    let data= await Address.findOne({_id:id});
    selected_address=data;
    
})
//add to cart route
app.get("/esport/:id/cart", async (req,res)=>{
    let {id}=req.params;
    for(model of models){
        var data=await model.findById(id); 
        if(data!=null){
            break;
        }  
    }
    let cart1=new Cart({
        name:data.name,
        info:data.info,
        image1:data.image1,
        price:data.price,
    });
    let result=await cart1.save();
    console.log("added to cart sucessfully");
});
app.get("/esport/cart",async(req,res)=>{
    let datas=await Cart.find();
    res.render("products/cart.ejs",{datas});
})
//romove from cart route
app.delete("/esport/:id", async(req,res)=>{
    let {id}=req.params;
    await Cart.deleteOne({_id:id});
    console.log("deleted from cart sucessfully");
    res.redirect("/esport/cart");
});
//product profile Route
app.get("/esport/profile/:id",async (req,res)=>{
    let {id}=req.params;
    for(model of models){
        
        var data=await model.findById(id); 
        if(data!=null){
            break;
        }  
    }
    res.render("products/profile.ejs", {data});
});
//Home page route
app.get("/esport/home",(erq,res)=>{
    res.render("products/home.ejs");
})
//BUY NOW ROUTE 
app.get("/esport/:id/buyNow", async (req,res)=>{
    let {id}=req.params;
    for(model of models){
        var data=await model.findById(id); 
        if(data!=null){
            break;
        }  
    }
    let address= await Address.find();
    res.render("products/buynow.ejs",{data,address});
});
//after err buy now route
app.get("/esport/:id/err/buyNow",  (req,res)=>{
    let {id}=req.params;
    let pat="/esport/"+id+"/buyNow";
    res.redirect(pat);
})
//payment route
app.post("/orders/payments", async(req,res)=>{
    let {quantity,pid}=req.body;
    for(model of models){
        var data=await model.findById(pid); 
        if(data!=null){
            break;
        }  
    }
    if(selected_address==null){
        res.render("products/err.ejs",{pid});
    }
    else{
        let address=selected_address;
        selected_address=null;
        res.render("products/payments.ejs",{data,quantity,address});
    }
   
})

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

//SMART gadget
//Laptop data RouTE
app.get("/esport/smartg/laptop",async(req,res)=>{
    let datas= await Laptop.find();
    res.render("products/lists.ejs",{datas});
  });
  //Wairless data RouTE
  app.get("/esport/smartg/wireless_charger",async(req,res)=>{
    let datas= await WCharger.find();
    res.render("products/lists.ejs",{datas});
  });
  //printer data RouTE
  app.get("/esport/smartg/printer",async(req,res)=>{
    let datas= await Printer.find();
    res.render("products/lists.ejs",{datas});
  });
  //power bank data RouTE
  app.get("/esport/smartg/powerbank",async(req,res)=>{
    let datas= await PowerBank.find();
    res.render("products/lists.ejs",{datas});
  });
 //camera data RouTE
 app.get("/esport/smartg/camera",async(req,res)=>{
    let datas= await Camera.find();
    res.render("products/lists.ejs",{datas});
  });
//computer data RouTE
app.get("/esport/smartg/computer",async(req,res)=>{
    let datas= await Computer.find();
    res.render("products/lists.ejs",{datas});
  });
//earbud data RouTE
app.get("/esport/smartg/earbud",async(req,res)=>{
    let datas= await Earbod.find();
    res.render("products/lists.ejs",{datas});
  });
//mobile data RouTE
app.get("/esport/smartg/mobile",async(req,res)=>{
    let datas= await Mobile.find();
    res.render("products/lists.ejs",{datas});
  });
//neckband data RouTE
app.get("/esport/smartg/neckband",async(req,res)=>{
    let datas= await NeckBand.find();
    res.render("products/lists.ejs",{datas});
  });
//smart_watch data RouTE
app.get("/esport/smartg/smart_watch",async(req,res)=>{
    let datas= await SmartW.find();
    res.render("products/lists.ejs",{datas});
  });

//summer special
//tablefan data RouTE
app.get("/esport/summer/tablefan",async(req,res)=>{
    let datas= await TableFan.find();
    res.render("products/lists.ejs",{datas});
  });
  //cillingfan data RouTE
  app.get("/esport/summer/cillingfan",async(req,res)=>{
    let datas= await CillFan.find();
    res.render("products/lists.ejs",{datas});
  });
  //aircooler data RouTE
  app.get("/esport/summer/aircooler",async(req,res)=>{
    let datas= await AirCooler.find();
    res.render("products/lists.ejs",{datas});
  });

app.listen(port,()=>{
    console.log(`listeninh at port :${port}`);
})
//decorative
//florelamp data RouTE
app.get("/esport/decorative/florelamp",async(req,res)=>{
    let datas= await FloreLamp.find();
    res.render("products/lists.ejs",{datas});
  });
  //walllamp data RouTE
  app.get("/esport/decorative/walllamp",async(req,res)=>{
    let datas= await Walllamp.find();
    res.render("products/lists.ejs",{datas});
  });
  //jhumar data RouTE
  app.get("/esport/decorative/jhumar",async(req,res)=>{
    let datas= await Jhumar.find();
    res.render("products/lists.ejs",{datas});
  });