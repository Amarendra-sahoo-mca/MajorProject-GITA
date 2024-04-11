const mongose=require("mongoose");
const fridgeData=require("./fridgeData.js");
const acData=require("./acData.js");
const Fridge=require("../models/fridgemdl.js");
const Ac=require("../models/Acmodel.js");

main().then(()=>{
    console.log("connection establish");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongose.connect('mongodb://127.0.0.1:27017/esport');
}

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
  AcInitDB();