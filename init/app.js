const mongose=require("mongoose");
//data object array home
const fridgeData=require("./homeApD/fridgeData.js");
const acData=require("./homeApD/acData.js");
const tvData=require("./homeApD/tvData.js");

//data object array Kitchen


//models Home
const Fridge=require("../models/homeAp/fridgemdl.js");
const Ac=require("../models/homeAp/Acmodel.js");
const Tv=require("../models/homeAp/Tvmodel.js");

 //models Kitchen
 const Afrier =require("./models/kitchenAp/airFrierMdl.js");

main().then(()=>{
    console.log("connection establish");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongose.connect('mongodb://127.0.0.1:27017/esport');
}


//HOME APPLIANCES
const initDB= async ()=>{
    await  Fridge.deleteMany({});
    await Fridge.insertMany(fridgeData.data);
    console.log("data was innitialize");
  }

//initDB();
const AcInitDB= async ()=>{
    await  Ac.deleteMany({});
    await Ac.insertMany(acData.data);
    console.log("Ac data was innitialize");
  }
 // AcInitDB();
 const TvInitDB= async ()=>{
    await  Tv.deleteMany({});
    await  Tv.insertMany(tvData.data);
    console.log("Tv data was innitialize");
  }
 // TvInitDB();